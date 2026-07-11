'use client';

import { useEffect, useState } from 'react';
import { authFetch } from '@/lib/authFetch';

interface Lead {
    id: string;
    name?: string;
    email?: string;
    code?: string;
    phone?: string;
    service?: string;
    projectDetails?: string;
    createdAt?: string;
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await authFetch('/api/leads');
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch leads');
                }

                const data = await response.json();
                setLeads(data.leads || []);
            } catch (err: any) {
                console.error(err);
                setError(err.message || 'An error occurred while fetching leads.');
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                <div>
                    <h2 className="text-3xl font-light tracking-tight">Leads Database</h2>
                    <p className="text-zinc-400 mt-2">View and manage contact submissions.</p>
                </div>
                <div className="text-sm text-zinc-500">
                    Total Leads: {leads.length}
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20 text-zinc-500 animate-pulse">
                    Retrieving securely...
                </div>
            ) : error ? (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-6 rounded-xl">
                    <h3 className="font-semibold mb-2">Error Fetching Leads</h3>
                    <p>{error}</p>
                    {error.includes('Firebase Admin') && (
                        <p className="mt-4 text-sm opacity-80">
                            You may need to provide a valid Firebase Service Account JSON via environment variables.
                        </p>
                    )}
                </div>
            ) : leads.length === 0 ? (
                <div className="text-center py-20 border border-white/5 bg-white/5 rounded-xl text-zinc-400">
                    No leads found.
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-white/10 bg-black">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-white/5 text-zinc-300">
                            <tr>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Email</th>
                                <th className="px-6 py-4 font-medium">Phone</th>
                                <th className="px-6 py-4 font-medium">Service</th>
                                <th className="px-6 py-4 font-medium w-full">Project Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {leads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 font-medium">{lead.name || 'N/A'}</td>
                                    <td className="px-6 py-4 text-zinc-400">{lead.email || 'N/A'}</td>
                                    <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                                        {lead.code ? `${lead.code} ` : ''}{lead.phone || 'N/A'}
                                    </td>
                                    <td className="px-6 py-4 text-zinc-400 capitalize">{lead.service || 'N/A'}</td>
                                    <td className="px-6 py-4 text-zinc-400 max-w-md truncate" title={lead.projectDetails}>
                                        {lead.projectDetails || 'N/A'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
