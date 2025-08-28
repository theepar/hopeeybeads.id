// src/app/components/navbar.tsx

'use client';

import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook untuk mendeteksi halaman aktif
import Image from 'next/image'; // Gunakan Next/Image untuk optimasi logo

// --- Data Link Navigasi ---
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Produk', href: '/products' },
    { name: 'Tentang Kami', href: '/#about' }, // Tambahkan link ke seksi lain jika perlu
    { name: 'Kontak', href: '/#contact' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const pathname = usePathname(); // Mendapatkan path URL saat ini

    // --- Efek untuk mendeteksi scroll ---
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        // Membersihkan event listener saat komponen di-unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Varian Animasi untuk Framer Motion ---
    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    // Fungsi untuk menutup menu, berguna di banyak tempat
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            {/* Navbar Utama */}
            <motion.div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                    {/* Logo dan Nama Brand */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="flex items-center gap-2 group">
                            <Image src="/logo-nbg.png" alt="Hopeeybeads Logo" width={40} height={40} className="rounded-full object-contain transition-transform duration-300 group-hover:rotate-12" />
                            <span className="font-quicksand text-2xl font-bold text-yellow-900 block group-hover:text-yellow-600 transition-colors">
                                Hopeeybeads
                            </span>
                        </div>
                    </Link>

                    {/* Navigasi Desktop */}
                    <nav className="hidden md:flex items-center gap-6 font-poppins font-semibold text-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative transition-colors hover:text-yellow-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Tombol Aksi & Menu Mobile */}
                    <div className="flex items-center gap-2">
                        {/* Tombol Shop Now hanya tampil di desktop */}
                        <Link href="/products" className="hidden md:block">
                            <motion.button
                                className="bg-yellow-400 text-yellow-900 font-bold py-2 px-5 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 shadow-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ShoppingBag size={18} />
                                Shop Now
                            </motion.button>
                        </Link>

                        {/* Tombol Menu hanya tampil di mobile */}
                        <div className="flex items-center md:hidden">
                            <button onClick={() => setIsMenuOpen(true)} className="p-2 -mr-2">
                                <Menu className="w-7 h-7 text-gray-800" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Overlay Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col"
                    >
                        {/* Header Menu Mobile */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 font-bold text-xl text-yellow-900">
                                <Image src="/logo-nbg.png" alt="Hopeeybeads Logo" width={32} height={32} className="rounded-full" />
                                <span className="font-quicksand text-2xl font-bold text-yellow-900 block group-hover:text-yellow-600 transition-colors">Hopeeybeads</span>
                            </Link>
                            <button onClick={closeMenu} className="p-2">
                                <X className="w-8 h-8 text-gray-800" />
                            </button>
                        </div>

                        {/* Navigasi Menu Mobile */}
                        <motion.nav variants={menuVariants} initial="hidden" animate="visible" className="flex-grow p-6">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={menuItemVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block py-4 text-2xl font-semibold border-b border-gray-100 transition-colors text-gray-800 hover:text-yellow-700"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* Tombol Aksi di Footer Menu Mobile */}
                        <motion.div
                            className="p-6 border-t border-gray-100 flex flex-col gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                        >
                            <Link href="/products" onClick={closeMenu}>
                                <div className="w-full flex justify-center items-center gap-3 bg-yellow-400 text-yellow-900 font-bold py-4 px-6 rounded-xl text-lg hover:bg-yellow-500 transition-colors">
                                    <ShoppingBag /> Belanja Sekarang
                                </div>
                            </Link>
                            <a
                                href="https://wa.me/6285974465527" // Ganti dengan nomor WhatsApp Anda
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex justify-center items-center gap-3 bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-green-600 transition-colors"
                            >
                                <MessageCircle /> Hubungi via WhatsApp
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
