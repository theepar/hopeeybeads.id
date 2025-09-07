'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Komponen Ikon SVG Pengganti ---
const FaInstagram = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FaWhatsapp = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const FaShoppingBag = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);

// --- Komponen Footer ---
const footerVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Footer() {
    return (
        <footer className="bg-stone-100 text-gray-700 relative z-20">
            <div className="container mx-auto px-4 pt-16 pb-8">
                {/* Bagian utama footer dengan kolom-kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Kolom 1: Brand & Deskripsi */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <a href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo-nbg.png" alt="Logo Hopeeybeads" className="h-10 w-10 object-contain rounded-full" />
                            <span className="font-extrabold text-2xl text-yellow-900 tracking-tighter">Hopeeybeads</span>
                        </a>
                        <p className="text-gray-600 max-w-xs">
                            Manik-manik handmade dari Bali, dibuat dengan cinta untuk menonjolkan gaya unikmu. Buatan lokal, vibes mendunia!
                        </p>
                    </motion.div>
                    {/* Kolom 2: Jelajahi */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Jelajahi</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-yellow-600 transition-colors">Beranda</a></li>
                            <li><a href="/products" className="hover:text-yellow-600 transition-colors">Semua Produk</a></li>
                            <li><a href="/#about" className="hover:text-yellow-600 transition-colors">Tentang Kami</a></li>
                            <li><a href="/#contact" className="hover:text-yellow-600 transition-colors">Kontak</a></li>
                        </ul>
                    </motion.div>
                    {/* Kolom 3: Bantuan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Bantuan</h3>
                        <ul className="space-y-3">
                            <li><a href="/#contact" className="hover:text-yellow-600 transition-colors">Cara Pesan</a></li>
                            <li><a href="/#info" className="hover:text-yellow-600 transition-colors">Pengiriman & Retur</a></li>
                            <li><a href="/#faq" className="hover:text-yellow-600 transition-colors">FAQ</a></li>
                        </ul>
                    </motion.div>
                    {/* Kolom 4: Temukan Kami */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Temukan Kami</h3>
                        <p className="mb-4 text-gray-600">Terhubung dengan kami di media sosial. Yuk, vibes bareng!</p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/hopeeybeads.id" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-pink-600 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://shopee.co.id/hopeeybeads.id" target="_blank" rel="noopener noreferrer" aria-label="Shopee" className="text-gray-500 hover:text-yellow-400 transition-colors">
                                <FaShoppingBag size={24} />
                            </a>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 hover:text-green-600 transition-colors">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
                {/* Bagian bawah footer untuk hak cipta */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-stone-200 flex justify-center items-center"
                >
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Hopeeybeads. Semua Hak Cipta Dilindungi.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
