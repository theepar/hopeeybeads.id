'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { getProducts } from "../libs/data";
import ProductGallery from "@/app/components/product-gallery";

export default function ProductsPage() {
    const allProducts = getProducts();
    const categories = [
        ...Array.from(new Set(allProducts.map(p => p.category)))
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [search, setSearch] = useState('');

    const filteredProducts = allProducts.filter(p => {
        const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="container mx-auto px-4 py-20 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Dream Chaser Collection</h1>
                <p className="mt-2 text-gray-600">
                    Browse our curated collection and find the perfect piece to brighten your day.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div className="flex gap-2 flex-wrap">
                    <motion.button
                        whileTap={{ scale: 0.92, boxShadow: "0 0 0 4px #fde68a" }}
                        whileHover={{ scale: 1.06, boxShadow: selectedCategory === 'All' ? "0 8px 24px -8px #fde68a" : "0 2px 8px -2px #e5e7eb" }}
                        animate={selectedCategory === 'All' ? { scale: 1.08 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                        className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 ${selectedCategory === 'All' ? 'bg-yellow-400 text-yellow-900 border-yellow-400 shadow-lg' : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-100'}`}
                        onClick={() => setSelectedCategory('All')}
                    >
                        Semua
                    </motion.button>
                    {categories.map(cat => (
                        <motion.button
                            key={cat}
                            whileTap={{ scale: 0.92, boxShadow: "0 0 0 4px #fde68a" }}
                            whileHover={{ scale: 1.06, boxShadow: selectedCategory === cat ? "0 8px 24px -8px #fde68a" : "0 2px 8px -2px #e5e7eb" }}
                            animate={selectedCategory === cat ? { scale: 1.08 } : { scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 22 }}
                            className={`px-4 py-2 rounded-full font-semibold border transition-colors duration-200 ${selectedCategory === cat ? 'bg-yellow-400 text-yellow-900 border-yellow-400 shadow-lg' : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-100'}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-64"
                />
            </div>
            <ProductGallery products={filteredProducts} />
        </div>
    );
}
