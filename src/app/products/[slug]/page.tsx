// src/app/product/[slug]/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getProducts, getProductBySlug } from '@/app/libs/data';
import { Product } from '@/app/types/product';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// --- Komponen Kartu Produk (untuk Produk Terkait) ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <Link href={`/products/${product.slug}`} className="block group">
        <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="overflow-hidden aspect-square">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold font-quicksand text-md text-gray-800 truncate">{product.name}</h3>
                <p className="font-semibold text-gray-900 text-sm mt-1">
                    Mulai dari Rp {product.price.toLocaleString('id-ID')}
                </p>
            </div>
        </motion.div>
    </Link>
);

// --- Komponen Bintang untuk Rating ---
const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-2">
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <Star key={index} className={`w-5 h-5 ${index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
            ))}
        </div>
        <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)} dari 5</span>
    </div>
);


// --- Komponen Utama Halaman Detail Produk ---
export default function ProductDetailPage() {
    // State untuk menyimpan data produk dan produk terkait
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Mengambil slug dari URL menggunakan hook useParams
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : '';

    // useEffect untuk mengambil data saat komponen dimuat di browser
    useEffect(() => {
        if (slug) {
            const fetchedProduct = getProductBySlug(slug);
            if (!fetchedProduct) {
                notFound(); // Panggil notFound jika produk tidak ada
            } else {
                setProduct(fetchedProduct);

                // Ambil produk terkait
                const allProducts = getProducts();
                const related = allProducts
                    .filter(p => p.category === fetchedProduct.category && p.id !== fetchedProduct.id)
                    .slice(0, 4);
                setRelatedProducts(related);
            }
        }
    }, [slug]); // Jalankan effect ini setiap kali slug berubah

    // Tampilkan loading state jika data produk belum ada
    if (!product) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>; // Atau komponen skeleton yang lebih bagus
    }

    // Setelah produk ada, siapkan data gambar
    const allImages = [product.image, ...product.images.filter(img => img !== product.image)];
    const activeImage = allImages[activeIndex];

    const categoryColors: { [key: string]: string } = {
        'Phone Strap': 'bg-pink-100 text-pink-800',
        'Jepit': 'bg-blue-100 text-blue-800',
        'Gelang': 'bg-green-100 text-green-800',
    };

    const handleImageChange = (newIndex: number) => {
        setActiveIndex(newIndex);
    };

    return (
        <>
            <div className="bg-white pt-16 md:pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <motion.div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        {/* === Galeri Gambar === */}
                        <div className="flex flex-col gap-4 top-24">
                            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
                                {allImages.length > 1 && (
                                    <>
                                        <button onClick={() => handleImageChange((activeIndex - 1 + allImages.length) % allImages.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition backdrop-blur-sm" aria-label="Previous image"><ChevronLeft className="w-6 h-6 text-yellow-800" /></button>
                                        <button onClick={() => handleImageChange((activeIndex + 1) % allImages.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow-md transition backdrop-blur-sm" aria-label="Next image"><ChevronRight className="w-6 h-6 text-yellow-800" /></button>
                                    </>
                                )}
                                <AnimatePresence mode="wait">
                                    <motion.div key={activeIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                                        <Image src={activeImage} alt={product.name} fill className="object-cover w-full h-full" priority />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                {allImages.map((img, index) => (
                                    <button key={index} onClick={() => handleImageChange(index)} className={`aspect-square rounded-xl overflow-hidden ring-2 ring-offset-2 transition-all duration-200 ${activeIndex === index ? 'ring-yellow-400 opacity-100' : 'ring-transparent opacity-60 hover:opacity-100'}`}>
                                        <Image src={img} alt={`Thumbnail ${index + 1}`} width={150} height={150} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* === Info Produk === */}
                        <div className="flex flex-col gap-5">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full self-start ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'}`}>{product.category}</span>
                            <h1 className="text-4xl lg:text-5xl font-bold font-quicksand text-gray-900 leading-tight">{product.name}</h1>
                            <StarRating rating={product.rating} />
                            <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">{product.description}</p>
                            <div className="mt-4 p-6 bg-yellow-50 rounded-2xl border-2 border-dashed border-yellow-200">
                                <p className="text-sm font-semibold text-yellow-800">Estimasi Harga</p>
                                <p className="text-4xl font-extrabold text-yellow-900 my-1">Rp 5k - 12k</p>
                                <p className="text-sm text-gray-700">Ukuran bisa custom, lho! Harga akhir akan disesuaikan setelah diskusi dengan kami.</p>
                                <a href={`https://wa.me/6285974465527?text=Hai!%20Aku%20tertarik%20dengan%20produk%20'${encodeURIComponent(product.name)}'.%20Bisa%20info%20lebih%20lanjut%20untuk%20Harganya?`} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                                    <motion.button className="w-full bg-green-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105" whileTap={{ scale: 0.98 }}>
                                        <MessageCircle className="w-6 h-6" /> Diskusi & Pesan via WhatsApp
                                    </motion.button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Menampilkan Produk Terkait */}
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 bg-yellow-50/50">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center gap-3 mb-8 justify-center">
                            <Sparkles className="text-yellow-500" />
                            <h2 className="font-quicksand text-3xl font-bold text-center text-yellow-900">Kamu Mungkin Suka Juga</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}