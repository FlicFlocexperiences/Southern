'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, doc, updateDoc, deleteDoc, arrayUnion } from 'firebase/firestore';

interface Lead {
    id: string;
    name?: string;
    email?: string;
    code?: string;
    phone?: string;
    service?: string;
    projectDetails?: string;
    createdAt?: string;
    status?: string; 
    captchaScore?: number | null;
    captchaStatus?: string;
    history?: Array<{
        id: string;
        type: 'Follow-up';
        text: string;
        createdAt: string;
    }>;
}

export default function LeadsPage() {
    const { user, loading: authLoading } = useAuth();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState('');
    const [copiedId, setCopiedId] = useState<string | null>(null);
    
    // Floating Portal Popups
    const [statusMenu, setStatusMenu] = useState<{
        leadId: string;
        currentStatus: string;
        top: number;
        left: number;
        align?: 'left' | 'right';
    } | null>(null);

    const [actionMenu, setActionMenu] = useState<{
        lead: Lead;
        top: number;
        left: number;
    } | null>(null);

    const [viewLead, setViewLead] = useState<Lead | null>(null);
    
    // Modal State
    const [noteModalOpen, setNoteModalOpen] = useState(false);
    const [noteTarget, setNoteTarget] = useState<{ id: string, name?: string, type: 'Follow-up' } | null>(null);
    const [noteText, setNoteText] = useState('');
    const [isSavingNote, setIsSavingNote] = useState(false);

    // Filtering & Sorting State
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterService, setFilterService] = useState<string>('All');
    const [filterDate, setFilterDate] = useState<string>('All');
    const [sortDirection, setSortDirection] = useState<'desc' | 'asc'>('desc');
    
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Close floating dropdowns on scroll or resize
    useEffect(() => {
        const handleClose = () => {
            if (statusMenu) setStatusMenu(null);
            if (actionMenu) setActionMenu(null);
        };

        if (statusMenu || actionMenu) {
            window.addEventListener('scroll', handleClose, true);
            window.addEventListener('resize', handleClose);
            return () => {
                window.removeEventListener('scroll', handleClose, true);
                window.removeEventListener('resize', handleClose);
            };
        }
    }, [statusMenu, actionMenu]);

    // Fetch leads function
    const fetchLeads = useCallback(async (isManualRefresh = false) => {
        if (isManualRefresh) setRefreshing(true);
        else setLoading(true);
        setError('');

        try {
            const contactsRef = collection(db, 'contacts');
            const q = query(contactsRef, orderBy('createdAt', sortDirection));
            const snapshot = await getDocs(q);

            const loadedLeads = snapshot.docs.map((docSnap) => {
                const data = docSnap.data();
                return {
                    id: docSnap.id,
                    ...data,
                    createdAt: data.createdAt?.toDate 
                        ? data.createdAt.toDate().toISOString() 
                        : (typeof data.createdAt === 'string' ? data.createdAt : new Date().toISOString())
                } as Lead;
            });

            setLeads(loadedLeads);
        } catch (err: any) {
            console.error('[LeadsPage] Error fetching leads from Firestore:', err);
            setError(err.message || 'An error occurred while fetching leads.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, [sortDirection]);

    // Fetch on mount or when auth is resolved
    useEffect(() => {
        if (authLoading) return;
        fetchLeads();
    }, [authLoading, user, fetchLeads]);

    const openStatusMenu = (e: React.MouseEvent<HTMLButtonElement>, lead: Lead, align: 'left' | 'right' = 'left') => {
        e.stopPropagation();
        if (statusMenu?.leadId === lead.id) {
            setStatusMenu(null);
        } else {
            const rect = e.currentTarget.getBoundingClientRect();
            setStatusMenu({
                leadId: lead.id,
                currentStatus: lead.status || 'New',
                top: rect.bottom + 6,
                left: align === 'right' ? rect.right : rect.left,
                align
            });
            setActionMenu(null);
        }
    };

    const openActionMenu = (e: React.MouseEvent<HTMLButtonElement>, lead: Lead) => {
        e.stopPropagation();
        if (actionMenu?.lead.id === lead.id) {
            setActionMenu(null);
        } else {
            const rect = e.currentTarget.getBoundingClientRect();
            setActionMenu({
                lead,
                top: rect.bottom + 6,
                left: rect.right,
            });
            setStatusMenu(null);
        }
    };

    const updateLeadStatus = async (id: string, newStatus: string) => {
        const previousLeads = [...leads];
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));

        if (viewLead?.id === id) {
            setViewLead({ ...viewLead, status: newStatus });
        }
        setStatusMenu(null);

        try {
            const leadRef = doc(db, 'contacts', id);
            await updateDoc(leadRef, { status: newStatus });
        } catch (err: any) {
            console.error('Status update failed:', err);
            alert(err.message || 'Failed to update status in database');
            setLeads(previousLeads);
        }
    };

    const handleDeleteLead = async (id: string) => {
        if (!confirm('Are you sure you want to delete this lead? This action cannot be undone.')) return;
        
        const previousLeads = [...leads];
        setLeads(leads.filter(l => l.id !== id));

        if (actionMenu?.lead.id === id) setActionMenu(null);
        if (statusMenu?.leadId === id) setStatusMenu(null);
        if (viewLead?.id === id) setViewLead(null);

        try {
            const leadRef = doc(db, 'contacts', id);
            await deleteDoc(leadRef);
        } catch (err: any) {
            console.error('Delete failed:', err);
            alert(err.message || 'Failed to delete lead from database');
            setLeads(previousLeads);
        }
    };

    const handleSaveNote = async () => {
        if (!noteTarget || !noteText.trim()) return;
        setIsSavingNote(true);
        try {
            const payload = {
                id: crypto.randomUUID(),
                type: noteTarget.type,
                text: noteText.trim()
            };
            
            const newHistoryItem = { ...payload, createdAt: new Date().toISOString() };
            const leadRef = doc(db, 'contacts', noteTarget.id);
            await updateDoc(leadRef, {
                history: arrayUnion(newHistoryItem)
            });
            
            setLeads(leads.map(lead => {
                if (lead.id === noteTarget.id) {
                    return { ...lead, history: [...(lead.history || []), newHistoryItem] };
                }
                return lead;
            }));
            
            if (viewLead?.id === noteTarget.id) {
                setViewLead({
                    ...viewLead,
                    history: [...(viewLead.history || []), newHistoryItem]
                });
            }
            
            setNoteModalOpen(false);
            setNoteText('');
        } catch (err: any) {
            console.error('Failed to save note:', err);
            alert('Failed to save note: ' + (err.message || 'Unknown error'));
        } finally {
            setIsSavingNote(false);
        }
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const getStatusColor = (status: string) => {
        switch(status?.toLowerCase()) {
            case 'contacted': return 'bg-[#EBF5EE] text-[#4A7C59] border-[#CDE1D4]';
            case 'follow-up': return 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]';
            case 'converted': return 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]';
            case 'not interested': return 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]';
            default: return 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]';
        }
    };

    // --- Derived Data for Filtering ---
    const filteredLeads = useMemo(() => {
        return leads.filter(lead => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = searchTerm === '' || 
                lead.name?.toLowerCase().includes(searchLower) ||
                lead.email?.toLowerCase().includes(searchLower) ||
                lead.phone?.toLowerCase().includes(searchLower) ||
                lead.service?.toLowerCase().includes(searchLower) ||
                lead.projectDetails?.toLowerCase().includes(searchLower);
                
            const actualStatus = lead.status || 'New';
            const matchesStatus = filterStatus === 'All' || actualStatus.toLowerCase() === filterStatus.toLowerCase();
            
            const actualService = lead.service || '';
            const matchesService = filterService === 'All' || 
                actualService.toLowerCase().replace('-', ' ') === filterService.toLowerCase().replace('-', ' ');
            
            let matchesDate = true;
            if (filterDate !== 'All' && lead.createdAt) {
                const leadDate = new Date(lead.createdAt);
                const now = new Date();
                leadDate.setHours(0,0,0,0);
                now.setHours(0,0,0,0);
                
                const diffTime = now.getTime() - leadDate.getTime();
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (filterDate === 'Today') matchesDate = diffDays === 0;
                else if (filterDate === 'Last 7 Days') matchesDate = diffDays <= 7;
                else if (filterDate === 'Last 30 Days') matchesDate = diffDays <= 30;
            }
            
            return matchesSearch && matchesStatus && matchesService && matchesDate;
        });
    }, [leads, searchTerm, filterStatus, filterService, filterDate]);

    // Summary counts
    const newLeadsCount = useMemo(() => leads.filter(l => (l.status || 'New') === 'New').length, [leads]);
    const convertedCount = useMemo(() => leads.filter(l => l.status === 'Converted').length, [leads]);

    // --- Pagination ---
    const totalPages = Math.max(1, Math.ceil(filteredLeads.length / itemsPerPage));
    const currentLeads = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredLeads.slice(start, start + itemsPerPage);
    }, [filteredLeads, currentPage]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    const activeFilterCount = (filterStatus !== 'All' ? 1 : 0) + (filterService !== 'All' ? 1 : 0) + (filterDate !== 'All' ? 1 : 0) + (searchTerm ? 1 : 0);

    const clearAllFilters = () => {
        setFilterStatus('All');
        setFilterService('All');
        setFilterDate('All');
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <div className="w-full pb-20 min-h-screen bg-[#FAF7F2]">
            {/* Header Area */}
            <div className="px-4 sm:px-6 md:px-10 pt-5 sm:pt-8 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#4A332A]">Leads Database</h2>
                            <button 
                                onClick={() => fetchLeads(true)} 
                                disabled={refreshing || loading}
                                title="Refresh leads"
                                className="p-1.5 rounded-lg border border-[#E8D8C8] bg-white text-[#4A332A]/70 hover:text-[#4A332A] hover:bg-[#F6E9DE]/60 transition-colors disabled:opacity-50 cursor-pointer shadow-2xs"
                            >
                                <svg className={`w-4 h-4 ${refreshing ? 'animate-spin text-[#4A332A]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs sm:text-sm text-[#4A332A]/70 mt-1">View, track, and manage all contact form submissions.</p>
                    </div>
                    
                    {/* Stats Metric Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-2 sm:gap-3 bg-white border border-[#E8D8C8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs">
                            <div className="bg-[#F6E9DE] p-2 rounded-lg text-[#4A332A] hidden sm:block">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-[#4A332A]/60 font-medium">Total Leads</div>
                                <div className="text-lg sm:text-xl font-extrabold text-[#4A332A] leading-tight">
                                    {loading ? "—" : leads.length}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 bg-white border border-[#E8D8C8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs">
                            <div className="bg-amber-50 p-2 rounded-lg text-amber-600 hidden sm:block">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-[#4A332A]/60 font-medium">New</div>
                                <div className="text-lg sm:text-xl font-extrabold text-amber-600 leading-tight">
                                    {loading ? "—" : newLeadsCount}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 bg-white border border-[#E8D8C8] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs">
                            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600 hidden sm:block">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-[#4A332A]/60 font-medium">Converted</div>
                                <div className="text-lg sm:text-xl font-extrabold text-emerald-600 leading-tight">
                                    {loading ? "—" : convertedCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="px-4 sm:px-6 md:px-10 mb-4 relative z-30">
                <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3">
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-full lg:max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4A332A]/50">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="block w-full pl-9 pr-8 py-2 border border-[#E8D8C8] rounded-xl bg-white text-xs sm:text-sm placeholder-[#4A332A]/50 focus:outline-none focus:ring-2 focus:ring-[#4A332A]/20 focus:border-[#4A332A] text-[#4A332A] shadow-xs" 
                            placeholder="Search by name, email, phone, service or details..."
                        />
                        {searchTerm && (
                            <button 
                                onClick={() => setSearchTerm('')}
                                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#4A332A]/40 hover:text-[#4A332A]"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        )}
                    </div>
                    
                    {/* Action Controls */}
                    <div className="flex flex-wrap items-center gap-2 relative">
                        {/* Date Filter Dropdown */}
                        <div className="relative flex-1 sm:flex-none">
                            <button 
                                onClick={() => { setIsDateOpen(!isDateOpen); setIsFilterOpen(false); }}
                                className={`w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-white border ${isDateOpen || filterDate !== 'All' ? 'border-[#4A332A] ring-1 ring-[#4A332A]' : 'border-[#E8D8C8]'} rounded-xl text-xs sm:text-sm font-semibold text-[#4A332A] hover:bg-[#F6E9DE]/40 transition-colors shadow-xs cursor-pointer`}
                            >
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span>{filterDate === 'All' ? 'All Dates' : filterDate}</span>
                                </div>
                                <svg className="w-3.5 h-3.5 text-[#4A332A]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            {isDateOpen && (
                                <>
                                    <div className="fixed inset-0 z-30" onClick={() => setIsDateOpen(false)}></div>
                                    <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-1.5 w-44 bg-white border border-[#E8D8C8] rounded-xl shadow-xl z-40 py-1.5 flex flex-col animate-in fade-in zoom-in-95 duration-100">
                                        {['All', 'Today', 'Last 7 Days', 'Last 30 Days'].map(dateOption => (
                                            <button 
                                                key={dateOption}
                                                onClick={() => { setFilterDate(dateOption); setIsDateOpen(false); setCurrentPage(1); }}
                                                className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm text-[#4A332A] hover:bg-[#FAF7F2] ${filterDate === dateOption ? 'font-bold bg-[#FAF7F2] text-[#4A332A]' : ''}`}
                                            >
                                                {dateOption === 'All' ? 'All Dates' : dateOption}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                        
                        {/* More Filters Button */}
                        <div className="relative flex-1 sm:flex-none">
                            <button 
                                onClick={() => { setIsFilterOpen(!isFilterOpen); setIsDateOpen(false); }}
                                className={`w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-white border ${isFilterOpen || filterStatus !== 'All' || filterService !== 'All' ? 'border-[#4A332A] ring-1 ring-[#4A332A]' : 'border-[#E8D8C8]'} rounded-xl text-xs sm:text-sm font-semibold text-[#4A332A] hover:bg-[#F6E9DE]/40 transition-colors shadow-xs cursor-pointer`}
                            >
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                                    <span>Filters</span>
                                    {(filterStatus !== 'All' || filterService !== 'All') && (
                                        <span className="w-2 h-2 rounded-full bg-[#4A332A]" />
                                    )}
                                </div>
                                <svg className="w-3.5 h-3.5 text-[#4A332A]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            {/* Filters Popover */}
                            {isFilterOpen && (
                                <>
                                    <div className="fixed inset-0 z-30" onClick={() => setIsFilterOpen(false)}></div>
                                    <div className="absolute right-0 top-full mt-1.5 w-72 max-w-[90vw] bg-white border border-[#E8D8C8] rounded-2xl shadow-2xl z-40 p-4 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-100">
                                        <div>
                                            <h4 className="text-xs font-bold text-[#4A332A]/70 uppercase tracking-wider mb-1.5">Status</h4>
                                            <select 
                                                value={filterStatus}
                                                onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}
                                                className="w-full px-3 py-2 border border-[#E8D8C8] rounded-xl text-xs sm:text-sm text-[#4A332A] bg-white focus:outline-none focus:ring-1 focus:ring-[#4A332A]"
                                            >
                                                <option value="All">All Statuses</option>
                                                <option value="New">New</option>
                                                <option value="Contacted">Contacted</option>
                                                <option value="Follow-up">Follow-up</option>
                                                <option value="Converted">Converted</option>
                                                <option value="Not Interested">Not Interested</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-xs font-bold text-[#4A332A]/70 uppercase tracking-wider mb-1.5">Service</h4>
                                            <select 
                                                value={filterService}
                                                onChange={(e) => { setFilterService(e.target.value); setCurrentPage(1); }}
                                                className="w-full px-3 py-2 border border-[#E8D8C8] rounded-xl text-xs sm:text-sm text-[#4A332A] bg-white focus:outline-none focus:ring-1 focus:ring-[#4A332A]"
                                            >
                                                <option value="All">All Services</option>
                                                <option value="SEO">SEO</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="App Development">App Development</option>
                                                <option value="Web Development">Web Development</option>
                                            </select>
                                        </div>

                                        <button 
                                            onClick={() => { setFilterStatus('All'); setFilterService('All'); setIsFilterOpen(false); }}
                                            className="w-full mt-1 py-2 bg-[#F6E9DE] text-[#4A332A] font-bold text-xs sm:text-sm rounded-xl hover:bg-[#EBD8C3] transition-colors cursor-pointer"
                                        >
                                            Reset Filter Options
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Sort Order Toggle */}
                        <button
                            onClick={() => setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
                            title={`Sort: ${sortDirection === 'desc' ? 'Newest First' : 'Oldest First'}`}
                            className="p-2 bg-white border border-[#E8D8C8] rounded-xl text-xs sm:text-sm font-semibold text-[#4A332A] hover:bg-[#F6E9DE]/40 transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {sortDirection === 'desc' ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                                )}
                            </svg>
                            <span className="hidden sm:inline">{sortDirection === 'desc' ? 'Newest' : 'Oldest'}</span>
                        </button>
                    </div>
                </div>

                {/* Active Filter Chips */}
                {activeFilterCount > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-[#E8D8C8]/60">
                        <span className="text-xs font-semibold text-[#4A332A]/60">Active Filters:</span>
                        {searchTerm && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E8D8C8] text-xs font-medium text-[#4A332A]">
                                Search: "{searchTerm}"
                                <button onClick={() => setSearchTerm('')} className="hover:text-red-600">×</button>
                            </span>
                        )}
                        {filterDate !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E8D8C8] text-xs font-medium text-[#4A332A]">
                                Date: {filterDate}
                                <button onClick={() => setFilterDate('All')} className="hover:text-red-600">×</button>
                            </span>
                        )}
                        {filterStatus !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E8D8C8] text-xs font-medium text-[#4A332A]">
                                Status: {filterStatus}
                                <button onClick={() => setFilterStatus('All')} className="hover:text-red-600">×</button>
                            </span>
                        )}
                        {filterService !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E8D8C8] text-xs font-medium text-[#4A332A]">
                                Service: {filterService}
                                <button onClick={() => setFilterService('All')} className="hover:text-red-600">×</button>
                            </span>
                        )}
                        <button 
                            onClick={clearAllFilters}
                            className="text-xs font-bold text-red-600 hover:text-red-700 underline ml-1 cursor-pointer"
                        >
                            Clear all
                        </button>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mx-4 sm:mx-6 md:mx-10 bg-red-50 border border-red-200 text-red-700 p-4 sm:p-5 rounded-2xl mb-6 shadow-xs">
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div className="flex-1">
                            <h3 className="font-bold text-sm">Failed to load leads</h3>
                            <p className="text-xs sm:text-sm mt-1">{error}</p>
                            <button 
                                onClick={() => fetchLeads(true)}
                                className="mt-3 px-3.5 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition-colors cursor-pointer"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================================= */}
            {/* 1. DESKTOP & LAPTOP VIEW: High Density Responsive Table (visible on md+) */}
            {/* ========================================================================= */}
            <div className="hidden md:block w-full">
                <div className="w-full border-y border-[#E8D8C8] bg-white overflow-x-auto shadow-xs">
                    <table className="w-full text-left text-sm table-auto min-w-[1000px]">
                        <thead className="bg-[#4a332a] text-[#FAF7F2]">
                            <tr>
                                <th className="w-[10%] pl-6 pr-2 py-3.5 font-bold text-xs uppercase tracking-wider">
                                    <div 
                                        onClick={() => setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc')}
                                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                                    >
                                        Date
                                        <svg className="w-3 h-3 text-[#FAF7F2]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                                    </div>
                                </th>
                                <th className="w-[15%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Lead</th>
                                <th className="w-[17%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Email</th>
                                <th className="w-[13%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Phone</th>
                                <th className="w-[12%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Service</th>
                                <th className="w-[16%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Project Details</th>
                                <th className="w-[9%] px-3 py-3.5 font-bold text-xs uppercase tracking-wider">Status</th>
                                <th className="w-[8%] pl-2 pr-6 py-3.5 font-bold text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        {loading ? (
                            <tbody className="divide-y divide-[#E8D8C8]/40 bg-white">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={`skeleton-${i}`} className="animate-pulse">
                                        <td className="pl-6 pr-2 py-4">
                                             <div className="h-4 w-16 bg-[#F6E9DE]/70 rounded" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-[#F6E9DE] shrink-0" />
                                                <div className="h-4 w-24 bg-[#F6E9DE]/70 rounded" />
                                            </div>
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="h-4 w-28 bg-[#F6E9DE]/70 rounded" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="h-4 w-24 bg-[#F6E9DE]/70 rounded" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="h-5 w-20 bg-[#F6E9DE]/90 rounded-md" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="h-4 w-24 bg-[#F6E9DE]/70 rounded" />
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className="h-5 w-16 bg-[#F6E9DE]/90 rounded-md" />
                                        </td>
                                        <td className="pl-2 pr-6 py-4">
                                            <div className="flex items-center justify-end gap-1.5">
                                                <div className="w-7 h-7 bg-[#F6E9DE]/70 rounded-md" />
                                                <div className="w-7 h-7 bg-[#F6E9DE]/70 rounded-md" />
                                                <div className="w-7 h-7 bg-[#F6E9DE]/70 rounded-md" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : currentLeads.length === 0 ? (
                            <tbody>
                                <tr>
                                    <td colSpan={8} className="py-20 text-center bg-white text-[#4A332A]/70">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8D8C8] flex items-center justify-center text-[#4A332A]/40 mb-3">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                                </svg>
                                            </div>
                                            <p className="font-bold text-base text-[#4A332A]">No leads found</p>
                                            <p className="text-xs text-[#4A332A]/60 mt-1">Try adjusting your search terms or filter settings.</p>
                                            {activeFilterCount > 0 && (
                                                <button 
                                                    onClick={clearAllFilters}
                                                    className="mt-3 px-4 py-1.5 bg-[#4A332A] text-white rounded-lg text-xs font-bold hover:bg-[#3A2821] transition-colors cursor-pointer"
                                                >
                                                    Clear Filters
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody className="divide-y divide-[#E8D8C8]/60 bg-white">
                                {currentLeads.map((lead, index) => {
                                    const leadStatus = lead.status || 'New';
                                    const initial = lead.name ? lead.name.charAt(0).toUpperCase() : 'U';
                                    const phoneNo = lead.phone ? `${lead.code ? lead.code + ' ' : ''}${lead.phone}` : 'N/A';
                                    const cleanPhone = (lead.code || '') + (lead.phone || '');
                                    const whatsappNumber = cleanPhone.replace(/[^0-9]/g, '');
                                    
                                    return (
                                        <tr 
                                            key={lead.id || index} 
                                            className="hover:bg-[#FAF7F2]/80 transition-colors"
                                        >
                                            <td className="pl-6 pr-2 py-4 text-[#4A332A]/80 whitespace-nowrap text-xs font-medium">
                                                {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-GB') : 'N/A'}
                                            </td>
                                            <td className="px-3 py-4">
                                                <div className="flex items-center gap-2.5 min-w-0">
                                                    <div className="w-7 h-7 rounded-full bg-[#F6E9DE] text-[#4A332A] font-extrabold text-xs flex items-center justify-center shrink-0 border border-[#E8D8C8]">
                                                        {initial}
                                                    </div>
                                                    <span className="font-bold text-xs text-[#4A332A] truncate" title={lead.name || 'Unknown'}>
                                                        {lead.name || 'Unknown'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 text-[#4A332A]/80 text-xs">
                                                {lead.email ? (
                                                    <a 
                                                        href={`mailto:${lead.email}`}
                                                        className="hover:text-[#4A332A] hover:underline truncate block max-w-[160px]" 
                                                        title={lead.email}
                                                    >
                                                        {lead.email}
                                                    </a>
                                                ) : (
                                                    <span className="text-[#4A332A]/40">N/A</span>
                                                )}
                                            </td>
                                            <td className="px-3 py-4 text-[#4A332A]/80 whitespace-nowrap text-xs">
                                                {lead.phone ? (
                                                    <div className="flex items-center gap-1.5">
                                                        <a href={`tel:${lead.phone}`} className="hover:underline hover:text-[#4A332A]">
                                                            {phoneNo}
                                                        </a>
                                                        <button 
                                                            onClick={() => copyToClipboard(phoneNo, `phone-${lead.id}`)}
                                                            className="text-[#4A332A]/40 hover:text-[#4A332A] transition-colors cursor-pointer"
                                                            title="Copy phone"
                                                        >
                                                            {copiedId === `phone-${lead.id}` ? (
                                                                <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                            ) : (
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                                            )}
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <span className="text-[#4A332A]/40">N/A</span>
                                                )}
                                            </td>
                                            <td className="px-3 py-4">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#F6E9DE] text-[#4A332A] text-[11px] font-bold capitalize truncate max-w-full border border-[#E8D8C8]/60">
                                                    {lead.service ? lead.service.replace('-', ' ') : 'General'}
                                                </span>
                                            </td>
                                            <td className="px-3 py-4 text-[#4A332A]/70 text-xs">
                                                <p className="truncate max-w-[180px]" title={lead.projectDetails || 'No details provided'}>
                                                    {lead.projectDetails || 'No details'}
                                                </p>
                                            </td>
                                            <td className="px-3 py-4">
                                                <div className="flex flex-col gap-1 items-start">
                                                    <button 
                                                        onClick={(e) => openStatusMenu(e, lead, 'left')}
                                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap border shadow-xs cursor-pointer hover:opacity-90 active:scale-95 transition-all ${getStatusColor(leadStatus)}`}
                                                    >
                                                        {leadStatus}
                                                        <svg className="w-2.5 h-2.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                    </button>

                                                    {typeof lead.captchaScore === 'number' && (
                                                        <span 
                                                            title={`reCAPTCHA v3 Score: ${lead.captchaScore.toFixed(2)}`}
                                                            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                                                                lead.captchaScore >= 0.8 
                                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                                                    : lead.captchaScore >= 0.5 
                                                                    ? 'bg-amber-50 text-amber-700 border-amber-200' 
                                                                    : 'bg-red-50 text-red-700 border-red-200'
                                                            }`}
                                                        >
                                                            <span className={`w-1.5 h-1.5 rounded-full ${lead.captchaScore >= 0.8 ? 'bg-emerald-500' : lead.captchaScore >= 0.5 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                                            {lead.captchaScore.toFixed(1)}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="pl-2 pr-6 py-4">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    {/* WhatsApp Reply */}
                                                    {whatsappNumber ? (
                                                        <a 
                                                            href={`https://wa.me/${whatsappNumber}`}
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            title="Reply on WhatsApp"
                                                            className="w-7 h-7 flex items-center justify-center border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors shrink-0 shadow-2xs cursor-pointer"
                                                        >
                                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                            </svg>
                                                        </a>
                                                    ) : null}
                                                    
                                                    {/* View Details */}
                                                    <button 
                                                        title="View Details" 
                                                        onClick={() => setViewLead(lead)}
                                                        className="w-7 h-7 flex items-center justify-center border border-[#E8D8C8] bg-white hover:bg-[#F6E9DE]/60 rounded-lg text-[#4A332A]/80 hover:text-[#4A332A] transition-colors cursor-pointer shrink-0 shadow-2xs"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                    </button>
                                                    
                                                    {/* More Actions Dropdown */}
                                                    <button 
                                                        title="More Actions"
                                                        onClick={(e) => openActionMenu(e, lead)}
                                                        className="w-7 h-7 flex items-center justify-center border border-[#E8D8C8] bg-white hover:bg-[#F6E9DE]/60 rounded-lg text-[#4A332A]/80 hover:text-[#4A332A] transition-colors cursor-pointer shrink-0 shadow-2xs"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>

            {/* ========================================================================= */}
            {/* 2. MOBILE & TABLET VIEW: Touch-Optimized Cards (visible on < md) */}
            {/* ========================================================================= */}
            <div className="block md:hidden px-4 sm:px-6 space-y-3.5">
                {loading ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <div key={`m-skeleton-${i}`} className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs animate-pulse space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-full bg-[#F6E9DE]" />
                                    <div className="space-y-1">
                                        <div className="h-4 w-28 bg-[#F6E9DE] rounded" />
                                        <div className="h-3 w-16 bg-[#F6E9DE]/60 rounded" />
                                    </div>
                                </div>
                                <div className="h-6 w-16 bg-[#F6E9DE] rounded-lg" />
                            </div>
                            <div className="h-3 w-40 bg-[#F6E9DE]/60 rounded" />
                            <div className="h-12 bg-[#F6E9DE]/40 rounded-xl" />
                        </div>
                    ))
                ) : currentLeads.length === 0 ? (
                    <div className="bg-white border border-[#E8D8C8] rounded-2xl p-8 text-center text-[#4A332A]/70 shadow-xs">
                        <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#E8D8C8] flex items-center justify-center text-[#4A332A]/40 mx-auto mb-3">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <p className="font-bold text-sm text-[#4A332A]">No leads match your filter</p>
                        <p className="text-xs text-[#4A332A]/60 mt-1">Try resetting filters to view all leads.</p>
                        {activeFilterCount > 0 && (
                            <button 
                                onClick={clearAllFilters}
                                className="mt-3 px-4 py-2 bg-[#4A332A] text-white rounded-xl text-xs font-bold cursor-pointer"
                            >
                                Reset All Filters
                            </button>
                        )}
                    </div>
                ) : (
                    currentLeads.map((lead, index) => {
                        const leadStatus = lead.status || 'New';
                        const initial = lead.name ? lead.name.charAt(0).toUpperCase() : 'U';
                        const phoneNo = lead.phone ? `${lead.code ? lead.code + ' ' : ''}${lead.phone}` : '';
                        const cleanPhone = (lead.code || '') + (lead.phone || '');
                        const whatsappNumber = cleanPhone.replace(/[^0-9]/g, '');

                        return (
                            <div key={lead.id || index} className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs space-y-3.5 transition-all">
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div className="w-10 h-10 rounded-full bg-[#F6E9DE] text-[#4A332A] font-extrabold text-sm flex items-center justify-center shrink-0 border border-[#E8D8C8]">
                                            {initial}
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-sm text-[#4A332A] truncate">
                                                {lead.name || 'Unknown Lead'}
                                            </h3>
                                            <span className="text-[11px] text-[#4A332A]/60 block font-medium">
                                                {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Status Badge + Status Change */}
                                    <div>
                                        <button 
                                            onClick={(e) => openStatusMenu(e, lead, 'right')}
                                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border shadow-xs cursor-pointer hover:opacity-90 active:scale-95 transition-all ${getStatusColor(leadStatus)}`}
                                        >
                                            {leadStatus}
                                            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Contact Details Chips */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                                    {lead.email && (
                                        <div className="flex items-center gap-2 bg-[#FAF7F2] px-3 py-2 rounded-xl border border-[#E8D8C8]/60 truncate">
                                            <svg className="w-3.5 h-3.5 text-[#4A332A]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            <a href={`mailto:${lead.email}`} className="truncate font-medium text-[#4A332A] hover:underline">
                                                {lead.email}
                                            </a>
                                        </div>
                                    )}
                                    {lead.phone && (
                                        <div className="flex items-center justify-between bg-[#FAF7F2] px-3 py-2 rounded-xl border border-[#E8D8C8]/60">
                                            <div className="flex items-center gap-2 truncate">
                                                <svg className="w-3.5 h-3.5 text-[#4A332A]/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                                <a href={`tel:${lead.phone}`} className="font-medium text-[#4A332A] hover:underline truncate">
                                                    {phoneNo}
                                                </a>
                                            </div>
                                            <button 
                                                onClick={() => copyToClipboard(phoneNo, `m-phone-${lead.id}`)}
                                                className="text-[#4A332A]/50 hover:text-[#4A332A] p-0.5 cursor-pointer"
                                            >
                                                {copiedId === `m-phone-${lead.id}` ? (
                                                    <span className="text-[10px] text-emerald-600 font-bold">Copied</span>
                                                ) : (
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Service & Project Requirements */}
                                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D8C8]/60 space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider">Requested Service</span>
                                        <span className="px-2 py-0.5 rounded-md bg-[#F6E9DE] text-[#4A332A] text-[11px] font-bold capitalize border border-[#E8D8C8]/60">
                                            {lead.service ? lead.service.replace('-', ' ') : 'General Inquiry'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#4A332A]/80 line-clamp-2 leading-relaxed">
                                        {lead.projectDetails || 'No project description provided.'}
                                    </p>
                                </div>

                                {/* Security Score & History Indicators */}
                                <div className="flex items-center justify-between text-[11px] text-[#4A332A]/60 pt-0.5">
                                    {typeof lead.captchaScore === 'number' ? (
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                                            lead.captchaScore >= 0.8 
                                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                                : lead.captchaScore >= 0.5 
                                                ? 'bg-amber-50 text-amber-700 border-amber-200' 
                                                : 'bg-red-50 text-red-700 border-red-200'
                                        }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${lead.captchaScore >= 0.8 ? 'bg-emerald-500' : lead.captchaScore >= 0.5 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                            reCAPTCHA: {lead.captchaScore.toFixed(1)}
                                        </span>
                                    ) : <span />}

                                    {lead.history && lead.history.length > 0 && (
                                        <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                                            {lead.history.length} follow-up{lead.history.length > 1 ? 's' : ''}
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons Grid */}
                                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#E8D8C8]/60">
                                    {whatsappNumber ? (
                                        <a 
                                            href={`https://wa.me/${whatsappNumber}`}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-1.5 py-2 bg-emerald-50 border border-emerald-300 text-emerald-700 rounded-xl text-xs font-bold hover:bg-emerald-100 transition-colors shadow-2xs"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            <span>WhatsApp</span>
                                        </a>
                                    ) : (
                                        <button 
                                            onClick={() => { setNoteTarget({ id: lead.id, name: lead.name, type: 'Follow-up' }); setNoteModalOpen(true); }}
                                            className="flex items-center justify-center gap-1.5 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl text-xs font-bold hover:bg-blue-100 transition-colors shadow-2xs cursor-pointer"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>Follow-up</span>
                                        </button>
                                    )}

                                    <button 
                                        onClick={() => setViewLead(lead)}
                                        className="flex items-center justify-center gap-1.5 py-2 bg-[#FAF7F2] border border-[#E8D8C8] text-[#4A332A] rounded-xl text-xs font-bold hover:bg-[#F6E9DE]/60 transition-colors shadow-2xs cursor-pointer"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                        <span>Details</span>
                                    </button>

                                    <button 
                                        onClick={() => handleDeleteLead(lead.id)}
                                        className="flex items-center justify-center gap-1.5 py-2 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors shadow-2xs cursor-pointer"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Pagination Controls */}
            {!loading && totalPages > 0 && filteredLeads.length > 0 && (
                <div className="px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center mt-6 gap-3 text-xs sm:text-sm text-[#4A332A]/70 font-medium">
                    <div className="text-center sm:text-left">
                        Showing <span className="font-bold text-[#4A332A]">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-bold text-[#4A332A]">{Math.min(currentPage * itemsPerPage, filteredLeads.length)}</span> of <span className="font-bold text-[#4A332A]">{filteredLeads.length}</span> leads
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-2.5 py-1.5 rounded-lg border border-[#E8D8C8] bg-white text-[#4A332A] hover:bg-[#F6E9DE]/50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
                        >
                            Prev
                        </button>
                        
                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                                <button 
                                    key={num}
                                    onClick={() => setCurrentPage(num)}
                                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                                        currentPage === num 
                                            ? 'bg-[#4A332A] text-white shadow-xs' 
                                            : 'border border-[#E8D8C8] bg-white text-[#4A332A] hover:bg-[#F6E9DE]/50'
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="px-2.5 py-1.5 rounded-lg border border-[#E8D8C8] bg-white text-[#4A332A] hover:bg-[#F6E9DE]/50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* ========================================================================= */}
            {/* Centered Lead Details Modal (Fully Responsive) */}
            {/* ========================================================================= */}
            {viewLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-[#4A332A]/50 backdrop-blur-xs transition-opacity"
                        onClick={() => setViewLead(null)}
                    ></div>
                    
                    {/* Modal Card */}
                    <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl flex flex-col border border-[#E8D8C8] max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#E8D8C8] bg-white">
                            <div>
                                <h3 className="text-base sm:text-lg font-extrabold text-[#4A332A]">Lead Details</h3>
                                <p className="text-[11px] text-[#4A332A]/60">ID: {viewLead.id}</p>
                            </div>
                            <button 
                                onClick={() => setViewLead(null)}
                                className="p-1.5 text-[#4A332A]/50 hover:text-[#4A332A] hover:bg-[#F6E9DE] rounded-full transition-colors cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        
                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                            {/* Profile Bar */}
                            <div className="flex items-center gap-3.5 bg-white border border-[#E8D8C8] p-4 rounded-2xl shadow-xs">
                                <div className="w-12 h-12 rounded-full bg-[#EBD8C3] text-[#4A332A] font-extrabold text-xl flex items-center justify-center shrink-0 border border-white shadow-xs">
                                    {viewLead.name ? viewLead.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h2 className="text-lg font-extrabold text-[#4A332A] truncate">{viewLead.name || 'Unknown'}</h2>
                                    <div className="flex flex-wrap items-center gap-2 mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold border ${getStatusColor(viewLead.status || 'New')}`}>
                                            {viewLead.status || 'New'}
                                        </span>
                                        <span className="text-xs text-[#4A332A]/60 font-medium">
                                            {viewLead.createdAt ? new Date(viewLead.createdAt).toLocaleString('en-GB') : 'N/A'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Quick Action Contact Row */}
                            <div className="grid grid-cols-2 gap-2.5">
                                {viewLead.phone && (
                                    <a 
                                        href={`tel:${viewLead.phone}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-white border border-[#E8D8C8] rounded-2xl text-xs font-bold text-[#4A332A] hover:bg-[#F6E9DE]/60 transition-colors shadow-2xs"
                                    >
                                        <svg className="w-4 h-4 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <span>Call Client</span>
                                    </a>
                                )}
                                {viewLead.email && (
                                    <a 
                                        href={`mailto:${viewLead.email}`}
                                        className="flex items-center justify-center gap-2 p-3 bg-white border border-[#E8D8C8] rounded-2xl text-xs font-bold text-[#4A332A] hover:bg-[#F6E9DE]/60 transition-colors shadow-2xs"
                                    >
                                        <svg className="w-4 h-4 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <span>Send Email</span>
                                    </a>
                                )}
                            </div>

                            {/* Contact Details Card */}
                            <div className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs space-y-2.5 text-xs">
                                <h4 className="text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider">Contact Info</h4>
                                <div className="flex items-center justify-between border-b border-[#E8D8C8]/40 pb-2">
                                    <span className="text-[#4A332A]/60 font-medium">Email:</span>
                                    <span className="font-bold text-[#4A332A]">{viewLead.email || 'N/A'}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#4A332A]/60 font-medium">Phone Number:</span>
                                    <span className="font-bold text-[#4A332A]">
                                        {viewLead.phone ? `${viewLead.code ? viewLead.code + ' ' : ''}${viewLead.phone}` : 'N/A'}
                                    </span>
                                </div>
                            </div>

                            {/* Project Requirements */}
                            <div className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider">Project Requirements</h4>
                                    <span className="bg-[#F6E9DE] text-[#4A332A] px-2.5 py-0.5 rounded-lg text-xs font-bold capitalize border border-[#E8D8C8]/60">
                                        {viewLead.service ? viewLead.service.replace('-', ' ') : 'General Inquiry'}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-[#4A332A] leading-relaxed whitespace-pre-wrap bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D8C8]/60">
                                    {viewLead.projectDetails || 'No project description submitted.'}
                                </p>
                            </div>

                            {/* reCAPTCHA & Security Info */}
                            <div className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs space-y-2 text-xs">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider">Anti-Spam Verification</h4>
                                    {typeof viewLead.captchaScore === 'number' ? (
                                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-bold border ${
                                            viewLead.captchaScore >= 0.8 
                                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                                : viewLead.captchaScore >= 0.5 
                                                ? 'bg-amber-50 text-amber-700 border-amber-200' 
                                                : 'bg-red-50 text-red-700 border-red-200'
                                        }`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${viewLead.captchaScore >= 0.8 ? 'bg-emerald-500' : viewLead.captchaScore >= 0.5 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                            {viewLead.captchaScore >= 0.8 ? 'High Confidence' : viewLead.captchaScore >= 0.5 ? 'Moderate Confidence' : 'Low Confidence'}
                                        </span>
                                    ) : (
                                        <span className="text-xs text-[#4A332A]/50">Unverified / Legacy</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-between text-[#4A332A]/70">
                                    <span>Google reCAPTCHA Score:</span>
                                    <span className="font-bold text-[#4A332A]">
                                        {typeof viewLead.captchaScore === 'number' ? `${viewLead.captchaScore.toFixed(2)} / 1.0` : 'N/A'}
                                    </span>
                                </div>
                            </div>

                            {/* Follow-up Timeline */}
                            {viewLead.history && viewLead.history.length > 0 && (
                                <div className="bg-white border border-[#E8D8C8] rounded-2xl p-4 shadow-xs space-y-2.5">
                                    <h4 className="text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider">Follow-up Notes</h4>
                                    <div className="space-y-2">
                                        {viewLead.history.map((item, idx) => (
                                            <div key={item.id || idx} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8D8C8]/60 text-xs space-y-1">
                                                <div className="flex items-center justify-between text-[#4A332A]/60 text-[10px]">
                                                    <span className="font-bold text-blue-600 uppercase">{item.type}</span>
                                                    <span>{new Date(item.createdAt).toLocaleString('en-GB')}</span>
                                                </div>
                                                <p className="text-[#4A332A]">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Footer */}
                        <div className="p-4 border-t border-[#E8D8C8] bg-white flex gap-2.5">
                            <button 
                                onClick={() => {
                                    setNoteTarget({ id: viewLead.id, name: viewLead.name, type: 'Follow-up' });
                                    setNoteModalOpen(true);
                                }}
                                className="flex-1 py-2.5 bg-[#FAF7F2] border border-[#E8D8C8] text-[#4A332A] rounded-xl text-xs font-bold hover:bg-[#F6E9DE]/60 transition-colors shadow-2xs cursor-pointer"
                            >
                                Add Note
                            </button>
                            <button 
                                onClick={() => setViewLead(null)}
                                className="flex-1 py-2.5 bg-[#4A332A] text-white rounded-xl text-xs font-bold hover:bg-[#3A2821] transition-colors shadow-xs cursor-pointer"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================================= */}
            {/* Add Follow-Up Note Modal */}
            {/* ========================================================================= */}
            {noteModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
                    <div 
                        className="absolute inset-0 bg-[#4A332A]/50 backdrop-blur-xs transition-opacity"
                        onClick={() => !isSavingNote && setNoteModalOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-[#E8D8C8]">
                        <div className="px-5 sm:px-6 py-4 border-b border-[#E8D8C8] flex items-center justify-between">
                            <div>
                                <h3 className="text-base font-extrabold text-[#4A332A]">Add {noteTarget?.type} Note</h3>
                                {noteTarget?.name && (
                                    <p className="text-xs text-[#4A332A]/60">Lead: {noteTarget.name}</p>
                                )}
                            </div>
                            <button 
                                onClick={() => !isSavingNote && setNoteModalOpen(false)}
                                className="p-1 text-[#4A332A]/40 hover:text-[#4A332A] cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="p-5">
                            <textarea
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                                placeholder="Enter follow-up details, client response, meeting summary..."
                                className="w-full h-32 p-3 border border-[#E8D8C8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4A332A]/20 focus:border-[#4A332A] resize-none text-[#4A332A] text-xs sm:text-sm bg-[#FAF7F2]"
                                disabled={isSavingNote}
                                autoFocus
                            />
                        </div>
                        <div className="px-5 py-3.5 bg-[#FAF7F2] border-t border-[#E8D8C8] flex justify-end gap-2.5">
                            <button 
                                onClick={() => setNoteModalOpen(false)}
                                disabled={isSavingNote}
                                className="px-4 py-2 border border-[#E8D8C8] bg-white rounded-xl text-xs font-bold text-[#4A332A] hover:bg-[#FAF7F2] transition-colors disabled:opacity-50 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSaveNote}
                                disabled={!noteText.trim() || isSavingNote}
                                className="px-4 py-2 bg-[#4A332A] text-white rounded-xl text-xs font-bold hover:bg-[#3A2821] shadow-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                            >
                                {isSavingNote ? (
                                    <>
                                        <svg className="animate-spin h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Saving...
                                    </>
                                ) : 'Save Note'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* ========================================================================= */}
            {/* Floating Status Dropdown Portal (Opens downward, fully visible over all elements) */}
            {/* ========================================================================= */}
            {statusMenu && typeof document !== 'undefined' && createPortal(
                <>
                    <div 
                        className="fixed inset-0 z-[9998] bg-transparent" 
                        onClick={() => setStatusMenu(null)} 
                    />
                    <div 
                        style={{
                            position: 'fixed',
                            top: `${statusMenu.top}px`,
                            ...(statusMenu.align === 'right' 
                                ? { right: `${Math.max(12, window.innerWidth - statusMenu.left)}px` } 
                                : { left: `${Math.max(12, statusMenu.left)}px` }),
                            zIndex: 9999
                        }}
                        className="w-44 bg-white border border-[#E8D8C8] rounded-2xl shadow-2xl py-1.5 flex flex-col animate-in fade-in zoom-in-95 duration-100 ring-1 ring-black/5"
                    >
                        <div className="px-3.5 py-1.5 text-[10px] font-bold text-[#4A332A]/50 uppercase tracking-wider border-b border-[#E8D8C8]/50 mb-0.5">
                            Change Status
                        </div>
                        {['New', 'Contacted', 'Follow-up', 'Converted', 'Not Interested'].map(status => (
                            <button 
                                key={status}
                                onClick={() => updateLeadStatus(statusMenu.leadId, status)}
                                className={`w-full text-left px-3.5 py-2 text-xs text-[#4A332A] hover:bg-[#FAF7F2] transition-colors cursor-pointer flex items-center justify-between ${statusMenu.currentStatus === status ? 'font-bold bg-[#FAF7F2]' : ''}`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${
                                        status === 'New' ? 'bg-amber-500' :
                                        status === 'Contacted' ? 'bg-emerald-500' :
                                        status === 'Follow-up' ? 'bg-blue-500' :
                                        status === 'Converted' ? 'bg-purple-500' : 'bg-red-500'
                                    }`} />
                                    <span>{status}</span>
                                </span>
                                {statusMenu.currentStatus === status && (
                                    <svg className="w-3.5 h-3.5 text-[#4A332A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </>,
                document.body
            )}

            {/* ========================================================================= */}
            {/* Floating Actions Dropdown Portal */}
            {/* ========================================================================= */}
            {actionMenu && typeof document !== 'undefined' && createPortal(
                <>
                    <div 
                        className="fixed inset-0 z-[9998] bg-transparent" 
                        onClick={() => setActionMenu(null)} 
                    />
                    <div 
                        style={{
                            position: 'fixed',
                            top: `${actionMenu.top}px`,
                            right: `${Math.max(12, window.innerWidth - actionMenu.left)}px`,
                            zIndex: 9999
                        }}
                        className="w-48 bg-white border border-[#E8D8C8] rounded-2xl shadow-2xl py-1.5 flex flex-col animate-in fade-in zoom-in-95 duration-100 ring-1 ring-black/5"
                    >
                        <button 
                            onClick={() => { setViewLead(actionMenu.lead); setActionMenu(null); }}
                            className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2 cursor-pointer transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            View Details
                        </button>
                        <button 
                            onClick={() => { setNoteTarget({ id: actionMenu.lead.id, name: actionMenu.lead.name, type: 'Follow-up' }); setNoteModalOpen(true); setActionMenu(null); }}
                            className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2 cursor-pointer transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Add Follow-up
                        </button>
                        <button 
                            onClick={() => { updateLeadStatus(actionMenu.lead.id, 'Contacted'); setActionMenu(null); }}
                            className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2 cursor-pointer transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Mark as Contacted
                        </button>
                        <div className="border-t border-[#E8D8C8] my-1"></div>
                        <button 
                            onClick={() => { handleDeleteLead(actionMenu.lead.id); setActionMenu(null); }}
                            className="w-full text-left px-3.5 py-2 text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            Delete Lead
                        </button>
                    </div>
                </>,
                document.body
            )}
        </div>
    );
}
