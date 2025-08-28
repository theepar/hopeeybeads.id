// src/app/components/navbar.tsx

'use client';

import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- Komponen Header (Navbar Baru) ---
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/#about' },
];


const headerVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <header>
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="font-quicksand text-2xl font-bold text-yellow-800 flex items-center">
                        <img src="/logo-nbg.png" alt="Hopeeybeads Logo" className="h-10 w-10 object-contain rounded-full" />
                        Hopeeybeads
                    </div>
                    <nav className="hidden md:flex items-center gap-8 font-poppins font-semibold text-gray-600">
                        <Link href="/#home" className="hover:text-yellow-600 transition-colors">Home</Link>
                        <Link href="/products" className="hover:text-yellow-600 transition-colors">Produk</Link>
                        <Link href="/#order" className="hover:text-yellow-600 transition-colors">Cara Pesan</Link>
                    </nav>
                    <Link href="/products">
                        <motion.button
                            className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ShoppingBag size={18} />
                            <span className="hidden sm:inline">Shop Now</span>
                        </motion.button>
                    </Link>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="p-2 -mr-2">
                            <Menu className="w-7 h-7 text-gray-800" />
                        </button>
                    </div>
                </div>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 bg-white z-[100] md:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                <a href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 font-bold text-xl text-yellow-900">
                                    <img src="/logo-nbg.png" alt="Hopeeybeads Logo" className="h-8 w-8 rounded-full" />
                                    <span>Hopeeybeads</span>
                                </a>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                                    <X className="w-8 h-8 text-gray-800" />
                                </button>
                            </div>
                            <motion.nav
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex-grow p-8"
                            >
                                {navLinks.map((link) => (
                                    <motion.div key={link.name} variants={menuItemVariants}>
                                        <Link
                                            href={link.href.startsWith('#') ? '/' + link.href : link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block py-4 text-2xl font-semibold text-gray-800 border-b border-gray-100 hover:text-yellow-700 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                            <motion.div
                                className="p-8 border-t border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                            >
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex justify-center items-center gap-3 bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-lg hover:bg-green-600 transition-colors"
                                >
                                    <MessageCircle /> Hubungi Kami di WhatsApp
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
}

export default Header;