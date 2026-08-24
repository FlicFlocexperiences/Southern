'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { authFetch } from '@/lib/authFetch';
import { useAuth } from '@/components/AuthProvider';

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
    const [error, setError] = useState('');
    const isFetchingRef = useRef(false);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const [openStatusDropdownId, setOpenStatusDropdownId] = useState<string | null>(null);
    const [viewLead, setViewLead] = useState<Lead | null>(null);
    
    // Modal State
    const [noteModalOpen, setNoteModalOpen] = useState(false);
    const [noteTarget, setNoteTarget] = useState<{ id: string, type: 'Follow-up' } | null>(null);
    const [noteText, setNoteText] = useState('');
    const [isSavingNote, setIsSavingNote] = useState(false);

    // Filtering & Pagination State
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState<string>('All');
    const [filterService, setFilterService] = useState<string>('All');
    const [filterDate, setFilterDate] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch leads - only once when auth is resolved
    useEffect(() => {
        if (authLoading) return;
        if (!user) return;
        if (isFetchingRef.current) return;

        isFetchingRef.current = true;
        let isMounted = true;

        const fetchLeads = async () => {
            const pageStart = performance.now();
            console.log('[LeadsPage] 🏁 Initiating fetchLeads with authenticated user...');
            try {
                const fetchStart = performance.now();
                const response = await authFetch('/api/leads', undefined, user);
                const fetchDuration = performance.now() - fetchStart;
                console.log(`[LeadsPage] 📥 authFetch returned in ${fetchDuration.toFixed(1)}ms (Status: ${response.status})`);
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch leads');
                }

                const jsonStart = performance.now();
                const data = await response.json();
                const jsonDuration = performance.now() - jsonStart;
                console.log(`[LeadsPage] 📦 JSON parsed in ${jsonDuration.toFixed(1)}ms. Leads received: ${data.leads?.length || 0}`);

                if (isMounted) {
                    setLeads(data.leads || []);
                    const totalPageDuration = performance.now() - pageStart;
                    console.log(`[LeadsPage] ✅ Leads loaded into state in ${totalPageDuration.toFixed(1)}ms total.`);
                }
            } catch (err: any) {
                const errorDuration = performance.now() - pageStart;
                console.error(`[LeadsPage] 💥 Error fetching leads after ${errorDuration.toFixed(1)}ms:`, err);
                if (isMounted) {
                    setError(err.message || 'An error occurred while fetching leads.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchLeads();
        return () => { isMounted = false; };
    }, [user, authLoading]);

    const toggleDropdown = (id: string) => {
        if (openDropdownId === id) setOpenDropdownId(null);
        else {
            setOpenDropdownId(id);
            setOpenStatusDropdownId(null);
        }
    };

    const toggleStatusDropdown = (id: string) => {
        if (openStatusDropdownId === id) setOpenStatusDropdownId(null);
        else {
            setOpenStatusDropdownId(id);
            setOpenDropdownId(null);
        }
    };

    const updateLeadStatus = async (id: string, newStatus: string) => {
        const previousLeads = [...leads];
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));

        if (viewLead?.id === id) {
            setViewLead({ ...viewLead, status: newStatus });
        }
        setOpenStatusDropdownId(null);

        try {
            const response = await authFetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'UPDATE_STATUS', payload: { status: newStatus } })
            }, user);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to update status');
            }
        } catch (err: any) {
            console.error('Status update failed:', err);
            alert(err.message || 'Failed to update status in database');
            setLeads(previousLeads);
        }
    };

    const handleDeleteLead = async (id: string) => {
        if (!confirm('Are you sure you want to delete this lead?')) return;
        
        const previousLeads = [...leads];
        setLeads(leads.filter(l => l.id !== id));

        if (openDropdownId === id) setOpenDropdownId(null);
        if (viewLead?.id === id) setViewLead(null);

        try {
            const response = await authFetch(`/api/leads/${id}`, {
                method: 'DELETE'
            }, user);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to delete lead');
            }
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
            
            // If it's a real lead from DB, save it there
            if (!noteTarget.id.startsWith('dummy-')) {
                const res = await authFetch(`/api/leads/${noteTarget.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'ADD_HISTORY', payload })
                }, user);
                
                if (!res.ok) throw new Error('Failed to save note to database');
            }
            
            const newHistoryItem = { ...payload, createdAt: new Date().toISOString() };
            
            // Update local leads list
            setLeads(leads.map(lead => {
                if (lead.id === noteTarget.id) {
                    return { ...lead, history: [...(lead.history || []), newHistoryItem] };
                }
                return lead;
            }));
            
            // If currently viewing this lead, update the details view too
            if (viewLead?.id === noteTarget.id) {
                setViewLead({
                    ...viewLead,
                    history: [...(viewLead.history || []), newHistoryItem]
                });
            }
            
            setNoteModalOpen(false);
            setNoteText('');
        } catch (err) {
            console.error(err);
            alert('Failed to save note');
        } finally {
            setIsSavingNote(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch(status?.toLowerCase()) {
            case 'contacted': return 'bg-[#EBF5EE] text-[#4A7C59] border-[#CDE1D4]';
            case 'follow-up': return 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]';
            case 'converted': return 'bg-[#EBF5EE] text-[#4A7C59] border-[#CDE1D4]';
            case 'not interested': return 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]';
            default: return 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]';
        }
    };

    // --- Derived Data for Filtering ---
    const filteredLeads = useMemo(() => {
        return leads.filter(lead => {
            const matchesSearch = searchTerm === '' || 
                lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.projectDetails?.toLowerCase().includes(searchTerm.toLowerCase());
                
            const actualStatus = lead.status || 'New';
            const matchesStatus = filterStatus === 'All' || actualStatus === filterStatus;
            
            const actualService = lead.service || '';
            const matchesService = filterService === 'All' || actualService.toLowerCase() === filterService.toLowerCase();
            
            let matchesDate = true;
            if (filterDate !== 'All' && lead.createdAt) {
                const leadDate = new Date(lead.createdAt);
                const now = new Date();
                // Reset hours to start of day for fairer comparison
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

    // --- Pagination ---
    const totalPages = Math.max(1, Math.ceil(filteredLeads.length / itemsPerPage));
    const currentLeads = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredLeads.slice(start, start + itemsPerPage);
    }, [filteredLeads, currentPage]);

    // Reset page if filtered results are fewer than current page allows
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="w-full pb-20">
            {/* Header Area */}
            <div className="px-6 md:px-10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#4A332A]">Leads Database</h2>
                    <p className="text-[#4A332A]/70 mt-1">View and manage contact submissions.</p>
                </div>
                
                {/* Total Leads Card */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 bg-white border border-[#E8D8C8] px-5 py-3 rounded-xl shadow-sm">
                        <div className="bg-[#F6E9DE] p-2.5 rounded-full text-[#4A332A]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-sm text-[#4A332A]/70 font-medium">Total Leads</div>
                            <div className="text-2xl font-bold text-[#4A332A]">{loading ? "—" : filteredLeads.length}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="px-6 md:px-10 flex flex-col lg:flex-row justify-between items-center gap-4 mb-6 relative z-30">
                <div className="relative w-full lg:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4A332A]/50">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 border border-[#E8D8C8] rounded-lg bg-white text-sm placeholder-[#4A332A]/50 focus:outline-none focus:ring-1 focus:ring-[#EBD8C3] focus:border-[#EBD8C3] text-[#4A332A]" 
                        placeholder="Search by name, email, service or project..."
                    />
                </div>
                
                <div className="flex items-center gap-3 w-full lg:w-auto relative">
                    {/* Date Dropdown */}
                    <div className="relative flex-1 lg:flex-none">
                        <button 
                            onClick={() => setIsDateOpen(!isDateOpen)}
                            className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border ${isDateOpen ? 'border-[#4A332A] ring-1 ring-[#4A332A]' : 'border-[#E8D8C8]'} rounded-lg text-sm font-medium text-[#4A332A] hover:bg-[#F6E9DE]/30 transition-colors`}
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {filterDate === 'All' ? 'All Dates' : filterDate}
                            </div>
                            <svg className="w-4 h-4 text-[#4A332A]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {isDateOpen && (
                            <>
                                <div className="fixed inset-0 z-30" onClick={() => setIsDateOpen(false)}></div>
                                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-[#E8D8C8] rounded-xl shadow-xl z-40 py-2 flex flex-col">
                                    {['All', 'Today', 'Last 7 Days', 'Last 30 Days'].map(dateOption => (
                                        <button 
                                            key={dateOption}
                                            onClick={() => { setFilterDate(dateOption); setIsDateOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] ${filterDate === dateOption ? 'font-bold bg-[#FAF7F2]' : ''}`}
                                        >
                                            {dateOption === 'All' ? 'All Dates' : dateOption}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    
                    <button 
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border ${isFilterOpen ? 'border-[#4A332A] ring-1 ring-[#4A332A]' : 'border-[#E8D8C8]'} rounded-lg text-sm font-medium text-[#4A332A] hover:bg-[#F6E9DE]/30 transition-colors`}
                    >
                        <svg className="w-4 h-4 text-[#4A332A]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                        Filters
                    </button>

                    {/* Filters Popover */}
                    {isFilterOpen && (
                        <>
                            <div className="fixed inset-0 z-30" onClick={() => setIsFilterOpen(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#E8D8C8] rounded-xl shadow-xl z-40 p-4 flex flex-col gap-4">
                                <div>
                                    <h4 className="text-xs font-bold text-[#4A332A]/60 uppercase tracking-wider mb-2">Status</h4>
                                    <select 
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#E8D8C8] rounded-lg text-sm text-[#4A332A] focus:outline-none focus:ring-1 focus:ring-[#EBD8C3]"
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
                                    <h4 className="text-xs font-bold text-[#4A332A]/60 uppercase tracking-wider mb-2">Service</h4>
                                    <select 
                                        value={filterService}
                                        onChange={(e) => setFilterService(e.target.value)}
                                        className="w-full px-3 py-2 border border-[#E8D8C8] rounded-lg text-sm text-[#4A332A] focus:outline-none focus:ring-1 focus:ring-[#EBD8C3]"
                                    >
                                        <option value="All">All Services</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Web Development">Web Development</option>
                                    </select>
                                </div>

                                <button 
                                    onClick={() => { setFilterStatus('All'); setFilterService('All'); setSearchTerm(''); }}
                                    className="w-full mt-2 py-2 bg-[#F6E9DE] text-[#4A332A] font-medium text-sm rounded-lg hover:bg-[#EBD8C3] transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Table Area */}
            {error ? (
                <div className="mx-6 md:mx-10 bg-red-50 border border-red-200 text-red-600 p-6 rounded-xl mb-6">
                    <h3 className="font-semibold mb-2">Error Fetching Leads</h3>
                    <p>{error}</p>
                    {error.includes('Firebase Admin') && (
                        <p className="mt-4 text-sm opacity-80">
                            You may need to provide a valid Firebase Service Account JSON via environment variables.
                        </p>
                    )}
                </div>
            ) : null}

            <div className={`w-full border-y border-[#E8D8C8] bg-white ${openDropdownId ? 'pb-[280px]' : ''}`}>
                <table className="w-full text-left text-sm table-auto lg:table-fixed">
                    <thead className="bg-[#4a332a] text-[#FAF7F2]">
                        <tr>
                            <th className="w-[11%] lg:w-[10%] pl-4 md:pl-8 pr-2 py-3.5 font-medium text-xs">
                                <div className="flex items-center gap-1 cursor-pointer">
                                    Date
                                    <svg className="w-3 h-3 text-[#FAF7F2]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                                </div>
                            </th>
                            <th className="w-[15%] px-2 py-3.5 font-medium text-xs">
                                <div className="flex items-center gap-1 cursor-pointer">
                                    Lead
                                    <svg className="w-3 h-3 text-[#FAF7F2]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                                </div>
                            </th>
                            <th className="w-[16%] px-2 py-3.5 font-medium text-xs">Email</th>
                            <th className="w-[13%] px-2 py-3.5 font-medium text-xs">Phone</th>
                            <th className="w-[11%] px-2 py-3.5 font-medium text-xs">Service</th>
                            <th className="w-[16%] px-2 py-3.5 font-medium text-xs">Project Details</th>
                            <th className="w-[8%] px-2 py-3.5 font-medium text-xs">Status</th>
                            <th className="w-[11%] pl-2 pr-4 md:pr-6 py-3.5 font-medium text-xs text-right">Actions</th>
                        </tr>
                    </thead>
                    {loading ? (
                        <tbody className="divide-y divide-[#E8D8C8]/40 bg-white">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <tr key={`skeleton-${i}`} className="animate-pulse">
                                    <td className="pl-4 md:pl-8 pr-2 py-4">
                                        <div className="h-4 w-16 bg-[#F6E9DE]/60 rounded" />
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-[#F6E9DE] shrink-0" />
                                            <div className="h-4 w-24 bg-[#F6E9DE]/60 rounded" />
                                        </div>
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="h-4 w-28 bg-[#F6E9DE]/60 rounded" />
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="h-4 w-24 bg-[#F6E9DE]/60 rounded" />
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="h-5 w-20 bg-[#F6E9DE]/80 rounded-md" />
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="h-4 w-20 bg-[#F6E9DE]/60 rounded" />
                                    </td>
                                    <td className="px-2 py-4">
                                        <div className="h-5 w-16 bg-[#F6E9DE]/80 rounded-md" />
                                    </td>
                                    <td className="pl-2 pr-4 md:pr-6 py-4">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <div className="w-7 h-7 bg-[#F6E9DE]/60 rounded-md" />
                                            <div className="w-7 h-7 bg-[#F6E9DE]/60 rounded-md" />
                                            <div className="w-7 h-7 bg-[#F6E9DE]/60 rounded-md" />
                                            <div className="w-7 h-7 bg-[#F6E9DE]/60 rounded-md" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : currentLeads.length === 0 ? (
                        <tbody>
                            <tr>
                                <td colSpan={8} className="py-20 text-center bg-white text-[#4A332A]/60">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-12 h-12 text-[#4A332A]/20 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <p>No leads found matching your criteria.</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody className="divide-y divide-[#E8D8C8]/50 bg-white">
                                {currentLeads.map((lead, index) => {
                                    const leadStatus = lead.status || 'New';
                                    const initial = lead.name ? lead.name.charAt(0).toUpperCase() : 'U';
                                    const phoneNo = lead.phone ? `${lead.code ? lead.code + ' ' : ''}${lead.phone}` : 'N/A';
                                    
                                    const cleanPhone = (lead.code || '') + (lead.phone || '');
                                    const whatsappNumber = cleanPhone.replace(/[^0-9]/g, '');
                                    
                                    return (
                                    <tr key={lead.id || index} className="hover:bg-[#FAF7F2]/60 transition-colors">
                                        <td className="pl-4 md:pl-8 pr-2 py-4 text-[#4A332A]/80 whitespace-nowrap text-xs font-medium">
                                            {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString('en-GB') : 'N/A'}
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="flex items-center gap-2 min-w-0">
                                                <div className="w-7 h-7 rounded-full bg-[#F6E9DE] text-[#4A332A] font-bold text-xs flex items-center justify-center shrink-0">
                                                    {initial}
                                                </div>
                                                <span className="font-semibold text-xs md:text-sm text-[#4A332A] truncate" title={lead.name || 'Unknown'}>
                                                    {lead.name || 'Unknown'}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-[#4A332A]/70 text-xs truncate" title={lead.email || 'N/A'}>
                                            {lead.email || 'N/A'}
                                        </td>
                                        <td className="px-2 py-4 text-[#4A332A]/70 whitespace-nowrap text-xs">
                                            {phoneNo}
                                        </td>
                                        <td className="px-2 py-4">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#F6E9DE] text-[#4A332A] text-[11px] font-semibold capitalize truncate max-w-full">
                                                {lead.service ? lead.service.replace('-', ' ') : 'N/A'}
                                            </span>
                                        </td>
                                        <td className="px-2 py-4 text-[#4A332A]/70 text-xs truncate" title={lead.projectDetails || 'N/A'}>
                                            {lead.projectDetails || 'N/A'}
                                        </td>
                                        <td className="px-2 py-4">
                                            <div className="relative inline-block">
                                                <button 
                                                    onClick={() => toggleStatusDropdown(lead.id)}
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap border ${getStatusColor(leadStatus)}`}
                                                >
                                                    {leadStatus}
                                                    <svg className="w-2.5 h-2.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>

                                                {/* Status Dropdown Menu */}
                                                {openStatusDropdownId === lead.id && (
                                                    <>
                                                        <div className="fixed inset-0 z-40" onClick={() => setOpenStatusDropdownId(null)}></div>
                                                        <div className="absolute left-0 top-full mt-1 w-40 bg-white border border-[#E8D8C8] rounded-xl shadow-lg z-50 py-2 flex flex-col">
                                                            {['New', 'Contacted', 'Follow-up', 'Converted', 'Not Interested'].map(status => (
                                                                <button 
                                                                    key={status}
                                                                    onClick={() => updateLeadStatus(lead.id, status)}
                                                                    className={`w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] ${leadStatus === status ? 'font-bold bg-[#FAF7F2]' : ''}`}
                                                                >
                                                                    {status}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        <td className="pl-2 pr-4 md:pr-6 py-4">
                                            <div className="flex items-center justify-end gap-1.5 relative">
                                                <button 
                                                    title="Delete Lead"
                                                    onClick={() => handleDeleteLead(lead.id)}
                                                    className="w-7 h-7 flex items-center justify-center border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 rounded-md transition-colors cursor-pointer shrink-0"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                                <a 
                                                    href={`https://wa.me/${whatsappNumber}`}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    title="Reply on WhatsApp"
                                                    className="w-7 h-7 flex items-center justify-center border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 rounded-md transition-colors shrink-0"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                    </svg>
                                                </a>
                                                
                                                <button 
                                                    title="View Details" 
                                                    onClick={() => setViewLead(lead)}
                                                    className="w-7 h-7 flex items-center justify-center border border-[#E8D8C8] hover:bg-[#F6E9DE]/50 rounded-md text-[#4A332A]/70 hover:text-[#4A332A] transition-colors cursor-pointer shrink-0"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                </button>
                                                
                                                <button 
                                                    title="More Actions"
                                                    onClick={() => toggleDropdown(lead.id)}
                                                    className="w-7 h-7 flex items-center justify-center border border-[#E8D8C8] hover:bg-[#F6E9DE]/50 rounded-md text-[#4A332A]/70 hover:text-[#4A332A] transition-colors cursor-pointer shrink-0"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                </button>

                                                {/* Dropdown Menu */}
                                                {openDropdownId === lead.id && (
                                                    <>
                                                        <div className="fixed inset-0 z-40" onClick={() => setOpenDropdownId(null)}></div>
                                                        <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-[#E8D8C8] rounded-xl shadow-lg z-50 py-2 flex flex-col">
                                                            <button 
                                                                onClick={() => { setViewLead(lead); setOpenDropdownId(null); }}
                                                                className="w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                                                View Details
                                                            </button>
                                                            <a 
                                                                href={`https://wa.me/${whatsappNumber}`}
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                                                Reply on WhatsApp
                                                            </a>
                                                            <button 
                                                                onClick={() => { updateLeadStatus(lead.id, 'Contacted'); setOpenDropdownId(null); }}
                                                                className="w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                                Mark as Contacted
                                                            </button>
                                                            <button 
                                                                onClick={() => { setNoteTarget({ id: lead.id, type: 'Follow-up' }); setNoteModalOpen(true); setOpenDropdownId(null); }}
                                                                className="w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                                Add Follow-up
                                                            </button>
                                                            <button 
                                                                onClick={() => toggleStatusDropdown(lead.id)}
                                                                className="w-full text-left px-4 py-2 text-sm text-[#4A332A] hover:bg-[#FAF7F2] flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                                                Change Status
                                                            </button>
                                                            <div className="border-t border-[#E8D8C8] my-1"></div>
                                                            <button 
                                                                onClick={() => handleDeleteLead(lead.id)}
                                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                                Delete Lead
                                                            </button>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        )}
                        </table>
                    </div>

                    {/* Pagination */}
                    {!loading && totalPages > 0 && filteredLeads.length > 0 && (
                        <div className="px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 text-sm text-[#4A332A]/70 font-medium">
                            <div>
                                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredLeads.length)} of {filteredLeads.length} leads
                            </div>
                            <div className="flex items-center gap-1">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                    disabled={currentPage === 1}
                                    className="w-8 h-8 flex items-center justify-center rounded border border-[#E8D8C8] bg-white hover:bg-[#F6E9DE]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                
                                {pageNumbers.map(num => (
                                    <button 
                                        key={num}
                                        onClick={() => setCurrentPage(num)}
                                        className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                                            currentPage === num 
                                                ? 'bg-[#4a332a] text-white font-semibold shadow-sm' 
                                                : 'border border-[#E8D8C8] bg-white hover:bg-[#F6E9DE]/50'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                                
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                    disabled={currentPage === totalPages}
                                    className="w-8 h-8 flex items-center justify-center rounded border border-[#E8D8C8] bg-white hover:bg-[#F6E9DE]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    )}

            {/* Centered Lead Details Modal */}
            {viewLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-[#4A332A]/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setViewLead(null)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-2xl flex flex-col border border-[#E8D8C8] max-h-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8D8C8] bg-white">
                            <h3 className="text-lg font-bold text-[#4A332A]">Lead Details</h3>
                            <button 
                                onClick={() => setViewLead(null)}
                                className="p-2 text-[#4A332A]/50 hover:text-[#4A332A] hover:bg-[#F6E9DE] rounded-full transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        
                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Top Profile Section */}
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-[#EBD8C3] text-[#4A332A] font-extrabold text-2xl flex items-center justify-center shrink-0 shadow-sm border-2 border-white">
                                    {viewLead.name ? viewLead.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#4A332A]">{viewLead.name || 'Unknown'}</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold border ${getStatusColor(viewLead.status || 'New')}`}>
                                            {viewLead.status || 'New'}
                                        </span>
                                        <span className="text-sm text-[#4A332A]/50 font-medium">
                                            Added {viewLead.createdAt ? new Date(viewLead.createdAt).toLocaleDateString('en-GB') : 'N/A'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Project Requirements */}
                            <div className="bg-white border border-[#E8D8C8] rounded-xl p-5 shadow-sm space-y-3">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-xs font-bold text-[#4A332A]/50 uppercase tracking-wider">Project Requirements</h4>
                                    <span className="bg-[#F6E9DE] text-[#4A332A] px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                                        {viewLead.service ? viewLead.service.replace('-', ' ') : 'General'}
                                    </span>
                                </div>
                                <p className="text-sm text-[#4A332A] leading-relaxed whitespace-pre-wrap">
                                    {viewLead.projectDetails || 'No project details provided.'}
                                </p>
                            </div>
                        </div>
                        
                        {/* Footer Actions */}
                        <div className="p-4 border-t border-[#E8D8C8] bg-white flex gap-3 mt-auto">
                            <button 
                                onClick={() => setViewLead(null)}
                                className="flex-1 px-4 py-2.5 border border-[#E8D8C8] rounded-lg text-sm font-bold text-[#4A332A] hover:bg-[#FAF7F2] transition-colors"
                            >
                                Close
                            </button>
                            <button className="flex-1 px-4 py-2.5 bg-[#4A332A] text-white rounded-lg text-sm font-bold hover:bg-[#3A2821] shadow-sm transition-colors">
                                Edit Lead
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Add Note Modal */}
            {noteModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
                    <div 
                        className="absolute inset-0 bg-[#4A332A]/40 backdrop-blur-sm transition-opacity"
                        onClick={() => !isSavingNote && setNoteModalOpen(false)}
                    ></div>
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                        <div className="px-6 py-4 border-b border-[#E8D8C8]">
                            <h3 className="text-lg font-bold text-[#4A332A]">Add {noteTarget?.type}</h3>
                        </div>
                        <div className="p-6">
                            <textarea
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                                placeholder={`Type your ${noteTarget?.type?.toLowerCase()} here...`}
                                className="w-full h-32 p-3 border border-[#E8D8C8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4A332A]/20 focus:border-[#4A332A] resize-none text-[#4A332A] text-sm bg-white"
                                disabled={isSavingNote}
                                autoFocus
                            />
                        </div>
                        <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#E8D8C8] flex justify-end gap-3">
                            <button 
                                onClick={() => setNoteModalOpen(false)}
                                disabled={isSavingNote}
                                className="px-4 py-2 border border-[#E8D8C8] rounded-lg text-sm font-bold text-[#4A332A] hover:bg-white transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSaveNote}
                                disabled={!noteText.trim() || isSavingNote}
                                className="px-4 py-2 bg-[#4A332A] text-white rounded-lg text-sm font-bold hover:bg-[#3A2821] shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isSavingNote ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Saving...
                                    </>
                                ) : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
