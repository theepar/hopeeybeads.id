// src/app/product/[slug]/page.tsx

'use client';

import { getProductBySlug } from '@/app/libs/data';
import { Product } from '@/app/types/product';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Star, ShoppingBag } from 'lucide-react';

// Komponen ini perlu state, jadi harus 'use client'
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImage, setActiveImage] = useState<string>('');

    useEffect(() => {
        // Pastikan slug rapi: trim dan lowercase
        const cleanSlug = params.slug.trim().toLowerCase();
        const fetchedProduct = getProductBySlug(cleanSlug);
        if (fetchedProduct) {
            setProduct(fetchedProduct);
            setActiveImage(fetchedProduct.image); // Set gambar utama sebagai gambar aktif awal
        } else {
            // Jika produk tidak ditemukan, arahkan ke halaman 404
            notFound();
        }
    }, [params.slug]);

    if (!product) {
        // Tampilkan loading atau null selagi data diambil
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Galeri Gambar */}
                <div>
                    <div className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200">
                        <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-2 mt-4">
                        {/* Tambahkan gambar utama ke awal array thumbnail */}
                        {[product.image, ...product.images].map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(img)}
                                className={`w-20 h-20 rounded-md overflow-hidden border-2 transition ${activeImage === img ? 'border-black' : 'border-transparent'}`}
                            >
                                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Produk */}
                <div>
                    <p className="text-sm font-medium text-gray-500">{product.category}</p>
                    <h1 className="text-4xl font-bold tracking-tighter mt-1">{product.name}</h1>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex text-yellow-400">
                            {[...Array(product.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                            {[...Array(5 - product.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-gray-300" />)}
                        </div>
                    </div>
                    <p className="text-3xl font-bold mt-6">Rp {product.price.toLocaleString('id-ID')}</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
                    <div className="mt-8">
                        <button className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                            <ShoppingBag className="w-5 h-5" />
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
