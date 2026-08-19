'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlus, 
    faEdit, 
    faTrash, 
    faUpload, 
    faSearch, 
    faChevronLeft, 
    faChevronRight, 
    faArrowLeft, 
    faBriefcase, 
    faImages, 
    faGlobe, 
    faExternalLinkAlt,
    faCheck,
    faTimes,
    faCloudUploadAlt,
    faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query,
    orderBy 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { Project, ProjectCategory, projects as initialStaticProjects } from '@/data/projects';
import Link from 'next/link';

const AVAILABLE_CATEGORIES: ProjectCategory[] = [
    "Web Design",
    "Meta Ads",
    "Lead Generation",
    "SEO",
    "Branding",
    "Social Media",
    "Photography"
];

const SUGGESTED_TAGS: string[] = [
    "WEB DESIGN",
    "SHOPIFY / E-COMMERCE",
    "META ADS",
    "LEAD GENERATION",
    "SEO STRATEGY",
    "BRANDING",
    "SOCIAL MEDIA",
    "PHOTOGRAPHY",
    "PHOTOSHOOT"
];

export default function AuthorityProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Filter and Pagination state
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Form state
    const [newProject, setNewProject] = useState<Project>({
        slug: '',
        title: '',
        category: 'Web Design',
        tag: 'WEB DESIGN',
        categories: ['Web Design'],
        description: '',
        client: '',
        duration: '',
        services: '',
        websiteUrl: '',
        image: '',
        heroImage: '',
        gallery: [],
        created: Date.now()
    });

    // Image Upload states
    const [uploadingMain, setUploadingMain] = useState(false);
    const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
    const [uploadingGallery, setUploadingGallery] = useState(false);
    const [galleryUploadProgress, setGalleryUploadProgress] = useState<string>('');
    const [sameAsMainHero, setSameAsMainHero] = useState(true);

    const mainFileInputRef = useRef<HTMLInputElement>(null);
    const galleryFileInputRef = useRef<HTMLInputElement>(null);

    // Fetch projects from Firestore, fallback to static projects so dashboard is never empty
    const fetchProjects = async () => {
        try {
            setLoading(true);
            const projectsQuery = query(collection(db, 'projects'), orderBy('created', 'desc'));
            const querySnapshot = await getDocs(projectsQuery);
            
            const firestoreProjects: Project[] = querySnapshot.docs.map(doc => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    slug: docData.slug || '',
                    title: docData.title || '',
                    category: (docData.category as ProjectCategory) || 'Web Design',
                    tag: docData.tag || '',
                    categories: (docData.categories as ProjectCategory[]) || [docData.category || 'Web Design'],
                    description: docData.description || '',
                    client: docData.client || '',
                    duration: docData.duration || '',
                    services: docData.services || '',
                    websiteUrl: docData.websiteUrl || '',
                    image: docData.image || '',
                    heroImage: docData.heroImage || docData.image || '',
                    gallery: Array.isArray(docData.gallery) ? docData.gallery : [],
                    created: docData.created || Date.now()
                };
            });

            if (firestoreProjects.length > 0) {
                // Merge firestore projects with any static projects that haven't been customized
                const firestoreSlugs = new Set(firestoreProjects.map(p => p.slug));
                const remainingStatic = initialStaticProjects.filter(p => !firestoreSlugs.has(p.slug));
                setProjects([...firestoreProjects, ...remainingStatic]);
            } else {
                // Auto-populate with initial projects so the table and stats are immediately active
                setProjects(initialStaticProjects);
            }
        } catch (error) {
            console.error("Error fetching projects from Firestore:", error);
            setProjects(initialStaticProjects);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Autosave functionality for draft recovery
    useEffect(() => {
        if (showProjectForm && newProject) {
            if (!newProject.title && !newProject.description) return;

            const timer = setTimeout(() => {
                const key = formMode === 'edit' && newProject.id 
                    ? `autosave_project_${newProject.id}` 
                    : 'autosave_project_new';
                localStorage.setItem(key, JSON.stringify(newProject));
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [newProject, showProjectForm, formMode]);

    // Helper to generate slug from title
    const generateSlug = (title: string) => {
        return title.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    };

    // Handle standard inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewProject(prev => {
            if (name === 'title' && (!prev.slug || prev.slug === generateSlug(prev.title))) {
                return {
                    ...prev,
                    [name]: value,
                    slug: generateSlug(value)
                };
            }
            if (name === 'category') {
                const cat = value as ProjectCategory;
                const updatedCats = prev.categories.includes(cat) ? prev.categories : [...prev.categories, cat];
                return {
                    ...prev,
                    category: cat,
                    categories: updatedCats,
                    tag: prev.tag || cat.toUpperCase()
                };
            }
            return {
                ...prev,
                [name]: value
            };
        });
    };

    // Toggle multi-categories
    const toggleCategory = (cat: ProjectCategory) => {
        setNewProject(prev => {
            const exists = prev.categories.includes(cat);
            let updated: ProjectCategory[];
            if (exists) {
                updated = prev.categories.filter(c => c !== cat);
                if (updated.length === 0) updated = [cat]; // Keep at least one
            } else {
                updated = [...prev.categories, cat];
            }
            return {
                ...prev,
                categories: updated,
                category: updated[0] // sync primary category
            };
        });
    };

    // Helper: compress image file client-side before upload
    const compressImage = (file: File): Promise<File> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    const MAX_DIM = 1800;

                    if (width > height) {
                        if (width > MAX_DIM) {
                            height = Math.round(height * (MAX_DIM / width));
                            width = MAX_DIM;
                        }
                    } else {
                        if (height > MAX_DIM) {
                            width = Math.round(width * (MAX_DIM / height));
                            height = MAX_DIM;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        if (!blob) {
                            reject(new Error('Canvas to Blob conversion failed'));
                            return;
                        }
                        const compressedFile = new File([blob], file.name, {
                            type: 'image/jpeg',
                            lastModified: Date.now()
                        });
                        resolve(compressedFile);
                    }, 'image/jpeg', 0.85);
                };
                img.onerror = () => reject(new Error('Error loading image for compression'));
            };
            reader.onerror = () => reject(new Error('Error reading file'));
        });
    };

    // Upload Main Thumbnail Image
    const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 15 * 1024 * 1024) {
            alert('Image is too large. Maximum size is 15MB.');
            return;
        }

        try {
            setUploadingMain(true);
            const previewUrl = URL.createObjectURL(file);
            setMainImagePreview(previewUrl);

            let fileToUpload = file;
            if (file.type.startsWith('image/')) {
                fileToUpload = await compressImage(file);
            }

            if (!storage) throw new Error('Firebase Storage is not initialized');
            const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const storageRef = ref(storage, `project-images/${Date.now()}_${cleanName}`);
            const snapshot = await uploadBytes(storageRef, fileToUpload);
            const downloadUrl = await getDownloadURL(snapshot.ref);

            setNewProject(prev => ({
                ...prev,
                image: downloadUrl,
                heroImage: sameAsMainHero || !prev.heroImage ? downloadUrl : prev.heroImage
            }));
            setMainImagePreview(downloadUrl);
        } catch (error) {
            console.error('Error uploading main image:', error);
            alert(`Failed to upload image: ${error instanceof Error ? error.message : 'Please check connection.'}`);
        } finally {
            setUploadingMain(false);
        }
    };

    // Upload Multiple Gallery Images (for the 3-4+ bento gallery)
    const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        try {
            setUploadingGallery(true);
            if (!storage) throw new Error('Firebase Storage is not initialized');

            const uploadedUrls: string[] = [];
            const total = files.length;

            for (let i = 0; i < total; i++) {
                const file = files[i];
                setGalleryUploadProgress(`Uploading ${i + 1} of ${total}...`);

                let fileToUpload = file;
                if (file.type.startsWith('image/')) {
                    fileToUpload = await compressImage(file);
                }

                const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
                const storageRef = ref(storage, `project-gallery/${Date.now()}_${i}_${cleanName}`);
                const snapshot = await uploadBytes(storageRef, fileToUpload);
                const url = await getDownloadURL(snapshot.ref);
                uploadedUrls.push(url);
            }

            setNewProject(prev => ({
                ...prev,
                gallery: [...prev.gallery, ...uploadedUrls]
            }));
            alert(`Successfully added ${uploadedUrls.length} gallery image(s)!`);
        } catch (error) {
            console.error('Error uploading gallery images:', error);
            alert(`Gallery upload failed: ${error instanceof Error ? error.message : 'Please try again.'}`);
        } finally {
            setUploadingGallery(false);
            setGalleryUploadProgress('');
            if (galleryFileInputRef.current) galleryFileInputRef.current.value = '';
        }
    };

    // Remove specific gallery image
    const removeGalleryImage = (indexToRemove: number) => {
        setNewProject(prev => ({
            ...prev,
            gallery: prev.gallery.filter((_, idx) => idx !== indexToRemove)
        }));
    };

    // Add manual gallery image URL
    const addGalleryImageUrlPrompt = () => {
        const url = window.prompt("Enter image URL:");
        if (url && url.trim()) {
            setNewProject(prev => ({
                ...prev,
                gallery: [...prev.gallery, url.trim()]
            }));
        }
    };

    // Form submission
    const handleSubmitProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        if (!newProject.title.trim()) {
            alert("Project Title is required.");
            return;
        }

        if (!newProject.slug.trim()) {
            alert("Project Slug is required.");
            return;
        }

        if (!newProject.image.trim()) {
            alert("Please upload or provide a Main Thumbnail Image.");
            return;
        }

        setIsSubmitting(true);
        try {
            const projectData = {
                slug: newProject.slug.trim().toLowerCase(),
                title: newProject.title.trim(),
                category: newProject.category,
                tag: newProject.tag?.trim() || newProject.category.toUpperCase(),
                categories: newProject.categories.length > 0 ? newProject.categories : [newProject.category],
                description: newProject.description.trim(),
                client: newProject.client.trim(),
                duration: newProject.duration.trim(),
                services: newProject.services.trim(),
                websiteUrl: newProject.websiteUrl?.trim() || '',
                image: newProject.image.trim(),
                heroImage: newProject.heroImage?.trim() || newProject.image.trim(),
                gallery: newProject.gallery || [],
                created: formMode === 'add' ? Date.now() : (newProject.created || Date.now())
            };

            if (formMode === 'add') {
                const docRef = await addDoc(collection(db, 'projects'), projectData);
                const addedProject: Project = { id: docRef.id, ...projectData };
                setProjects(prev => [addedProject, ...prev.filter(p => p.slug !== addedProject.slug)]);
                alert("Project added successfully!");
            } else {
                const isFirestoreDoc = newProject.id && typeof newProject.id === 'string' && !String(newProject.id).match(/^\d+$/);
                if (isFirestoreDoc) {
                    const docRef = doc(db, 'projects', String(newProject.id));
                    await updateDoc(docRef, projectData);
                    setProjects(prev => prev.map(p => p.id === newProject.id ? { ...p, ...projectData } : p));
                } else {
                    const docRef = await addDoc(collection(db, 'projects'), projectData);
                    setProjects(prev => prev.map(p => p.slug === newProject.slug ? { id: docRef.id, ...projectData } : p));
                }
                alert("Project updated successfully!");
            }

            resetForm();
        } catch (error) {
            console.error("Error saving project:", error);
            alert(`Error saving project: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle Edit
    const handleEdit = (project: Project) => {
        setNewProject({
            ...project,
            categories: project.categories || [project.category],
            heroImage: project.heroImage || project.image,
            gallery: project.gallery || []
        });
        setMainImagePreview(project.image || null);
        setFormMode('edit');
        setSameAsMainHero(project.heroImage === project.image);

        const savedDraft = localStorage.getItem(`autosave_project_${project.id}`);
        if (savedDraft) {
            if (window.confirm('Found an unsaved draft for this project. Do you want to restore your edits?')) {
                setNewProject(JSON.parse(savedDraft));
            } else {
                localStorage.removeItem(`autosave_project_${project.id}`);
            }
        }

        setShowProjectForm(true);
    };

    // Handle Delete
    const handleDelete = async (project: Project) => {
        if (window.confirm(`Are you sure you want to permanently delete "${project.title}"?`)) {
            try {
                const isFirestoreDoc = project.id && typeof project.id === 'string' && !String(project.id).match(/^\d+$/);
                if (isFirestoreDoc) {
                    await deleteDoc(doc(db, 'projects', String(project.id)));
                }
                setProjects(prev => prev.filter(p => (project.id ? p.id !== project.id : true) && p.slug !== project.slug));
                alert("Project deleted successfully.");
            } catch (error) {
                console.error("Error deleting project:", error);
                alert(`Failed to delete project: ${error instanceof Error ? error.message : String(error)}`);
            }
        }
    };

    // Reset Form
    const resetForm = () => {
        if (formMode === 'edit' && newProject.id) {
            localStorage.removeItem(`autosave_project_${newProject.id}`);
        } else {
            localStorage.removeItem('autosave_project_new');
        }

        setNewProject({
            slug: '',
            title: '',
            category: 'Web Design',
            tag: 'WEB DESIGN',
            categories: ['Web Design'],
            description: '',
            client: '',
            duration: '',
            services: '',
            websiteUrl: '',
            image: '',
            heroImage: '',
            gallery: [],
            created: Date.now()
        });
        setMainImagePreview(null);
        setFormMode('add');
        setShowProjectForm(false);
    };

    // Optional 1-Click Seed Initial Projects into Firestore
    const handleSeedInitialProjects = async () => {
        if (!window.confirm("This will import the 10 static initial projects into Firestore so you can manage them in this panel. Proceed?")) return;
        try {
            setLoading(true);
            let count = 0;
            for (const p of initialStaticProjects) {
                const { id, ...dataWithoutId } = p;
                await addDoc(collection(db, 'projects'), {
                    ...dataWithoutId,
                    created: Date.now() - (count * 60000)
                });
                count++;
            }
            alert(`Successfully imported ${count} projects into Firestore!`);
            fetchProjects();
        } catch (error) {
            console.error("Error seeding projects:", error);
            alert("Failed to seed projects: " + (error instanceof Error ? error.message : String(error)));
        } finally {
            setLoading(false);
        }
    };

    const normalizeCat = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const matchesCategoryFilter = (p: Project, targetCat: string): boolean => {
        if (targetCat === 'All') return true;
        const targetNorm = normalizeCat(targetCat);

        if (p.category && normalizeCat(p.category) === targetNorm) return true;
        if (p.categories && Array.isArray(p.categories)) {
            if (p.categories.some(c => typeof c === 'string' && normalizeCat(c) === targetNorm)) return true;
        }

        if (p.tag && normalizeCat(p.tag) === targetNorm) {
            return true;
        }

        return false;
    };

    // Filtered and Paginated list
    const filteredProjects = projects
        .filter(p => {
            const matchesCat = matchesCategoryFilter(p, selectedCategoryFilter);
            
            const q = searchTerm.toLowerCase().trim();
            const matchesSearch = !q || 
                p.title.toLowerCase().includes(q) ||
                p.client.toLowerCase().includes(q) ||
                p.slug.toLowerCase().includes(q) ||
                p.services.toLowerCase().includes(q) ||
                p.tag.toLowerCase().includes(q);

            return matchesCat && matchesSearch;
        })
        .sort((a, b) => {
            const hasLiveA = a.websiteUrl && a.websiteUrl !== '#' && a.websiteUrl.trim() !== '' ? 1 : 0;
            const hasLiveB = b.websiteUrl && b.websiteUrl !== '#' && b.websiteUrl.trim() !== '' ? 1 : 0;
            if (hasLiveA !== hasLiveB) {
                return hasLiveB - hasLiveA;
            }
            return (b.created || 0) - (a.created || 0);
        });

    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
    const currentProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategoryFilter]);

    return (
        <div className="p-6 md:p-10 w-full max-w-[1600px] mx-auto">
            <div className="w-full min-h-full bg-[#f2decc] text-black font-sans rounded-3xl p-6 md:p-8">
                <AnimatePresence mode="wait">
                    {!showProjectForm ? (
                        <motion.div
                            key="project-list"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="space-y-6"
                        >
                            {/* Header Area */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-black/20 pb-5 bg-white p-6 rounded-2xl shadow-none">
                                <div>
                                    <h1 className="text-2xl font-black text-black tracking-tight flex items-center gap-2">
                                        <span className="text-[#de5e18]"><FontAwesomeIcon icon={faBriefcase} /></span>
                                        <span>Projects Portfolio Dashboard</span>
                                    </h1>
                                    <p className="text-black/50 text-xs mt-1 font-semibold">
                                        Add showcase case studies, client metadata, multi-image bento galleries (3-4+ images), and live website links.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    {projects.length === 0 && !loading && (
                                        <button
                                            onClick={handleSeedInitialProjects}
                                            className="bg-black/5 hover:bg-black/10 border border-black/20 text-black px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                                            title="Import built-in projects to Firestore"
                                        >
                                            <FontAwesomeIcon icon={faDatabase} />
                                            <span>Seed Initial Projects</span>
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            setFormMode('add');
                                            const savedDraft = localStorage.getItem('autosave_project_new');
                                            if (savedDraft) {
                                                if (window.confirm('Found an unsaved draft. Do you want to restore it?')) {
                                                    setNewProject(JSON.parse(savedDraft));
                                                } else {
                                                    localStorage.removeItem('autosave_project_new');
                                                    resetForm();
                                                }
                                            } else {
                                                resetForm();
                                            }
                                            setShowProjectForm(true);
                                        }}
                                        className="bg-[#de5e18] hover:bg-[#d94400] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>Add New Project</span>
                                    </button>
                                </div>
                            </div>

                            {/* Metrics Overview */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-black/10">
                                    <span className="text-black/40 text-[10px] font-bold uppercase tracking-wider">Total Active Projects</span>
                                    <p className="text-3xl font-black text-[#de5e18] mt-1">{projects.length}</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-black/10">
                                    <span className="text-black/40 text-[10px] font-bold uppercase tracking-wider">With Bento Galleries</span>
                                    <p className="text-3xl font-black text-green-700 mt-1">
                                        {projects.filter(p => p.gallery && p.gallery.length > 0).length}
                                    </p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-black/10">
                                    <span className="text-black/40 text-[10px] font-bold uppercase tracking-wider">External Client Links</span>
                                    <p className="text-3xl font-black text-blue-700 mt-1">
                                        {projects.filter(p => !!p.websiteUrl).length}
                                    </p>
                                </div>
                            </div>

                            {/* Search and Category Filter Bar */}
                            <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-2xl border border-black/10">
                                <div className="flex flex-1 items-center gap-3">
                                    <FontAwesomeIcon icon={faSearch} className="text-black/40 text-sm ml-2" />
                                    <input
                                        type="text"
                                        placeholder="Search projects by title, client, slug, or service..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-black/40 text-black/80"
                                    />
                                    {searchTerm && (
                                        <button 
                                            onClick={() => setSearchTerm('')}
                                            className="text-black/40 hover:text-black text-xs px-2 font-bold"
                                        >
                                            Clear
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-black/10 pt-2 sm:pt-0 sm:pl-4">
                                    <span className="text-xs font-bold text-black/40 uppercase whitespace-nowrap">Category:</span>
                                    <select
                                        value={selectedCategoryFilter}
                                        onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                                        className="bg-[#FAF7F2] border border-black/10 rounded-lg px-3 py-1.5 text-xs font-semibold text-black focus:outline-none"
                                    >
                                        <option value="All">All Categories</option>
                                        {AVAILABLE_CATEGORIES.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Projects Table */}
                            {loading ? (
                                <div className="text-center py-20 bg-white rounded-2xl border border-black/10 animate-pulse text-black/40 font-medium text-sm">
                                    Loading projects database...
                                </div>
                            ) : currentProjects.length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-2xl border border-black/10 border-dashed">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-black/20 text-4xl mb-3" />
                                    <p className="text-black/60 text-sm font-semibold">No projects found.</p>
                                    <p className="text-black/40 text-xs mt-1">
                                        {projects.length === 0 
                                            ? 'Click "Add New Project" or "Seed Initial Projects" to populate your portfolio.' 
                                            : 'No projects match your current search or category filter.'}
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-[#f2decc] border-b border-black/10">
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase">Preview</th>
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase">Title & Client</th>
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase">Category / Tag</th>
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase">Duration & Services</th>
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase">Gallery Bento</th>
                                                    <th className="p-4 text-xs font-bold text-black/50 uppercase text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-black/10 text-sm">
                                                {currentProjects.map((project) => (
                                                    <tr key={project.id || project.slug} className="hover:bg-[#f2decc]/40 transition-colors">
                                                        <td className="p-4">
                                                            <div className="w-16 h-12 rounded-xl bg-black/5 border border-black/10 overflow-hidden relative">
                                                                <img
                                                                    src={project.image || "/photoshoot.jpg"}
                                                                    alt={project.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className="p-4 max-w-xs">
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="font-extrabold text-black text-sm hover:text-[#de5e18] transition-colors">
                                                                    {project.title}
                                                                </span>
                                                                {project.websiteUrl && (
                                                                    <a 
                                                                        href={project.websiteUrl} 
                                                                        target="_blank" 
                                                                        rel="noreferrer" 
                                                                        className="text-black/30 hover:text-[#de5e18] text-xs"
                                                                        title="Visit client website"
                                                                    >
                                                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                                    </a>
                                                                )}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-[11px] text-black/50 mt-0.5">
                                                                <span>Client: <strong className="text-black/70">{project.client || 'N/A'}</strong></span>
                                                                <span>•</span>
                                                                <span className="font-mono text-black/40">/{project.slug}</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-4">
                                                            <div className="flex flex-col gap-1 items-start">
                                                                <span className="px-2.5 py-0.5 bg-[#de5e18]/10 text-[#de5e18] border border-[#de5e18]/20 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                                                    {project.tag || project.category}
                                                                </span>
                                                                <span className="text-[11px] text-black/50 font-medium">
                                                                    {project.category}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 max-w-[220px]">
                                                            <div className="text-xs font-semibold text-black/80 truncate">
                                                                {project.services || '—'}
                                                            </div>
                                                            <div className="text-[11px] text-black/40 mt-0.5">
                                                                Duration: {project.duration || 'Flexible'}
                                                            </div>
                                                        </td>
                                                        <td className="p-4">
                                                            <div className="flex items-center gap-1.5">
                                                                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border ${
                                                                    project.gallery && project.gallery.length >= 3 
                                                                        ? 'bg-green-50 text-green-700 border-green-200' 
                                                                        : 'bg-amber-50 text-amber-700 border-amber-200'
                                                                }`}>
                                                                    <FontAwesomeIcon icon={faImages} className="text-[10px]" />
                                                                    <span>{project.gallery?.length || 0} Images</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td className="p-4 text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                <Link
                                                                    href={`/projects/${project.slug}`}
                                                                    target="_blank"
                                                                    className="w-8 h-8 rounded-lg hover:bg-black/5 border border-black/15 flex items-center justify-center text-black/60 hover:text-[#de5e18] transition-colors"
                                                                    title="View Public Page"
                                                                >
                                                                    <FontAwesomeIcon icon={faGlobe} className="text-xs" />
                                                                </Link>
                                                                <button
                                                                    onClick={() => handleEdit(project)}
                                                                    className="w-8 h-8 rounded-lg hover:bg-black/5 border border-black/15 flex items-center justify-center text-black/60 hover:text-[#de5e18] transition-colors cursor-pointer"
                                                                    title="Edit project"
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit} className="text-xs" />
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDelete(project)}
                                                                    className="w-8 h-8 rounded-lg hover:bg-red-50 border border-black/15 flex items-center justify-center text-black/60 hover:text-red-600 transition-colors cursor-pointer"
                                                                    title="Delete project"
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} className="text-xs" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className="flex items-center justify-between p-4 border-t border-black/10 bg-[#f2decc]/50">
                                            <span className="text-xs text-black/50 font-semibold">
                                                Page {currentPage} of {totalPages} ({filteredProjects.length} total)
                                            </span>
                                            <div className="flex items-center gap-1.5">
                                                <button
                                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                                    disabled={currentPage === 1}
                                                    className="p-2 border border-black/20 rounded-lg hover:bg-white text-black/60 disabled:opacity-30 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                                                </button>
                                                <button
                                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                                    disabled={currentPage === totalPages}
                                                    className="p-2 border border-black/20 rounded-lg hover:bg-white text-black/60 disabled:opacity-30 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.form
                            key="project-form"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            onSubmit={handleSubmitProject}
                            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-black/10"
                        >
                            {/* Form Top Navigation Bar */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-black/10 pb-6 gap-4">
                                <div className="flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#f2decc] text-black/50 hover:text-black transition-colors cursor-pointer"
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                                    </button>
                                    <div>
                                        <h2 className="text-xl font-black text-black tracking-tight">
                                            {formMode === 'add' ? 'Create New Project Showcase' : `Editing Project: ${newProject.title}`}
                                        </h2>
                                        <p className="text-black/50 text-xs mt-0.5 font-semibold">
                                            Provide client details, services, main thumbnail, and 3-4+ gallery images for the Bento grid.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-4 py-2.5 rounded-xl border border-black/20 text-xs font-bold text-black/70 hover:bg-black/5 transition-colors cursor-pointer"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || uploadingMain || uploadingGallery}
                                        className="bg-[#de5e18] hover:bg-[#c44f12] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm disabled:opacity-50"
                                    >
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span>{isSubmitting ? 'Saving to Database...' : formMode === 'add' ? 'Publish Project' : 'Save Changes'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Section 1: Core Project Details */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black text-black uppercase tracking-wider border-b border-black/10 pb-2">
                                    1. Basic Project Identity
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Project Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={newProject.title}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Health Labs, Chavelle, LOTD"
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            URL Slug <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center bg-[#FAF7F2] border border-black/20 rounded-xl overflow-hidden px-4 py-3">
                                            <span className="text-black/40 text-xs font-mono select-none">/projects/</span>
                                            <input
                                                type="text"
                                                name="slug"
                                                required
                                                value={newProject.slug}
                                                onChange={handleInputChange}
                                                placeholder="health-labs"
                                                className="w-full bg-transparent border-none text-sm font-mono text-black focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Primary Category
                                        </label>
                                        <select
                                            name="category"
                                            value={newProject.category}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        >
                                            {AVAILABLE_CATEGORIES.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Badge Tag
                                        </label>
                                        <input
                                            type="text"
                                            name="tag"
                                            value={newProject.tag}
                                            onChange={handleInputChange}
                                            placeholder="e.g. WEB DESIGN, SHOPIFY / E-COMMERCE, META ADS"
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        />
                                        {/* Suggested Tag Quick Pills */}
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {SUGGESTED_TAGS.map(st => (
                                                <button
                                                    type="button"
                                                    key={st}
                                                    onClick={() => setNewProject(p => ({ ...p, tag: st }))}
                                                    className={`text-[10px] font-bold px-2 py-0.5 rounded transition-all cursor-pointer ${
                                                        newProject.tag === st 
                                                            ? 'bg-[#de5e18] text-white' 
                                                            : 'bg-black/5 hover:bg-black/10 text-black/60'
                                                    }`}
                                                >
                                                    {st}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Multi-Categories Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                        Applicable Categories (Multi-select)
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {AVAILABLE_CATEGORIES.map(cat => {
                                            const isSelected = newProject.categories.includes(cat);
                                            return (
                                                <button
                                                    type="button"
                                                    key={cat}
                                                    onClick={() => toggleCategory(cat)}
                                                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                                                        isSelected
                                                            ? 'bg-[#de5e18] text-white border-[#de5e18]'
                                                            : 'bg-[#FAF7F2] text-black/70 border-black/20 hover:border-black/40'
                                                    }`}
                                                >
                                                    <span>{cat}</span>
                                                    {isSelected && <FontAwesomeIcon icon={faCheck} className="text-[10px]" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Case Study & Client Details */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black text-black uppercase tracking-wider border-b border-black/10 pb-2">
                                    2. Client & Deliverable Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Client / Brand Name
                                        </label>
                                        <input
                                            type="text"
                                            name="client"
                                            value={newProject.client}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Health Labs, Rise Inc."
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Project Duration / Timeline
                                        </label>
                                        <input
                                            type="text"
                                            name="duration"
                                            value={newProject.duration}
                                            onChange={handleInputChange}
                                            placeholder="e.g. 8 Weeks, 12 Weeks"
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                            Live Website URL (Optional)
                                        </label>
                                        <input
                                            type="url"
                                            name="websiteUrl"
                                            value={newProject.websiteUrl}
                                            onChange={handleInputChange}
                                            placeholder="https://example.com"
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                        Services Delivered
                                    </label>
                                    <input
                                        type="text"
                                        name="services"
                                        value={newProject.services}
                                        onChange={handleInputChange}
                                        placeholder="e.g. UI/UX Design, Front-End Development, SEO Strategy, Lead Generation Architecture"
                                        className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-3 text-sm font-semibold text-black focus:outline-none focus:border-[#de5e18]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-black/70 uppercase tracking-wider mb-2">
                                        Project Overview / Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows={4}
                                        value={newProject.description}
                                        onChange={handleInputChange}
                                        placeholder="Describe the client's challenge, creative solution, and key impact generated..."
                                        className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl p-4 text-sm font-medium text-black focus:outline-none focus:border-[#de5e18]"
                                    />
                                </div>
                            </div>

                            {/* Section 3: Main Thumbnail & Hero Banner */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-black text-black uppercase tracking-wider border-b border-black/10 pb-2 flex items-center justify-between">
                                    <span>3. Main Thumbnail (Grid Showcase Image)</span>
                                    <span className="text-xs font-normal text-black/40">Used on /projects grid</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                                    <div className="md:col-span-1">
                                        <div className="w-full aspect-[4/3] rounded-2xl bg-[#FAF7F2] border border-black/20 overflow-hidden relative flex items-center justify-center">
                                            {mainImagePreview || newProject.image ? (
                                                <img
                                                    src={mainImagePreview || newProject.image}
                                                    alt="Thumbnail Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="text-center p-4 text-black/40">
                                                    <FontAwesomeIcon icon={faUpload} className="text-3xl mb-2" />
                                                    <p className="text-xs font-bold">No Thumbnail Selected</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 space-y-4">
                                        <input
                                            type="file"
                                            ref={mainFileInputRef}
                                            accept="image/*"
                                            onChange={handleMainImageUpload}
                                            className="hidden"
                                        />

                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                disabled={uploadingMain}
                                                onClick={() => mainFileInputRef.current?.click()}
                                                className="bg-[#de5e18] hover:bg-[#c44f12] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                                            >
                                                <FontAwesomeIcon icon={faUpload} />
                                                <span>{uploadingMain ? 'Uploading & Compressing...' : 'Upload Thumbnail Image'}</span>
                                            </button>
                                        </div>

                                        <p className="text-xs text-black/50">
                                            Or enter a direct URL / local image path:
                                        </p>
                                        <input
                                            type="text"
                                            name="image"
                                            value={newProject.image}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                setMainImagePreview(e.target.value);
                                            }}
                                            placeholder="/Health/GRID 13/p17_01.png or https://..."
                                            className="w-full bg-[#FAF7F2] border border-black/20 rounded-xl px-4 py-2.5 text-xs font-mono text-black focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Bento Grid Image Gallery (3-4+ Images) */}
                            <div className="space-y-6">
                                <div className="border-b border-black/10 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-sm font-black text-black uppercase tracking-wider flex items-center gap-2">
                                            <span className="text-[#de5e18]"><FontAwesomeIcon icon={faImages} /></span>
                                            <span>4. Project Bento Gallery (3-4+ Images)</span>
                                        </h3>
                                        <p className="text-xs text-black/50 mt-0.5">
                                            Add multiple high-resolution gallery images. On the public project page, these automatically arrange into the multi-slot Bento Grid.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="file"
                                            ref={galleryFileInputRef}
                                            accept="image/*"
                                            multiple
                                            onChange={handleGalleryUpload}
                                            className="hidden"
                                        />
                                        <button
                                            type="button"
                                            disabled={uploadingGallery}
                                            onClick={() => galleryFileInputRef.current?.click()}
                                            className="bg-[#de5e18] hover:bg-[#c44f12] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50 shadow-sm"
                                        >
                                            <FontAwesomeIcon icon={faCloudUploadAlt} />
                                            <span>{uploadingGallery ? (galleryUploadProgress || 'Uploading...') : 'Upload Multiple Images'}</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={addGalleryImageUrlPrompt}
                                            className="bg-black/5 hover:bg-black/10 border border-black/20 text-black px-3 py-2 rounded-xl text-xs font-bold cursor-pointer"
                                        >
                                            + Add URL
                                        </button>
                                    </div>
                                </div>

                                {/* Gallery Grid Preview */}
                                {newProject.gallery.length === 0 ? (
                                    <div className="text-center py-12 bg-[#FAF7F2] rounded-2xl border-2 border-dashed border-black/15 p-6 flex flex-col items-center justify-center">
                                        <FontAwesomeIcon icon={faImages} className="text-black/30 text-3xl mb-2" />
                                        <p className="text-sm font-bold text-black/70">No Gallery Images Uploaded Yet</p>
                                        <p className="text-xs text-black/40 mt-1 max-w-sm">
                                            Upload 3 to 4 (or more) images to populate the full Bento Grid on the individual case study page.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {newProject.gallery.map((imgUrl, idx) => (
                                                <div 
                                                    key={`${imgUrl}-${idx}`} 
                                                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 border border-black/10 shadow-sm"
                                                >
                                                    <img 
                                                        src={imgUrl} 
                                                        alt={`Gallery slot ${idx + 1}`} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    {/* Slot Index Badge */}
                                                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                                        Slot #{idx + 1}
                                                    </div>
                                                    {/* Remove Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeGalleryImage(idx)}
                                                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-600/90 hover:bg-red-700 text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer shadow"
                                                        title="Remove Image"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} className="text-xs" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[11px] text-black/40 font-semibold text-right">
                                            Total: {newProject.gallery.length} gallery image(s) uploaded.
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Form Submit Footer */}
                            <div className="flex items-center justify-end gap-3 pt-6 border-t border-black/10">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-6 py-3 rounded-xl border border-black/20 text-xs font-bold text-black/70 hover:bg-black/5 transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting || uploadingMain || uploadingGallery}
                                    className="bg-[#de5e18] hover:bg-[#c44f12] text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50"
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>{isSubmitting ? 'Saving to Database...' : formMode === 'add' ? 'Publish Project' : 'Save Changes'}</span>
                                </button>
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
