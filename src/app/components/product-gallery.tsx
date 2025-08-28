// src/app/components/product-gallery.tsx

'use client';

import { Product } from '../types/product'; // Pastikan path ini benar
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Gunakan Next/Image untuk optimasi

// --- Komponen Bintang untuk Rating ---
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.37 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.37-2.446a1 1 0 00-1.176 0l-3.37 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.054 9.387c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.286-3.96z" />
                </svg>
            ))}
            <span className="text-xs text-gray-500 ml-2">{rating.toFixed(1)}</span>
        </div>
    );
};

// --- Kartu Produk dengan Desain Baru ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    if (!product || !product.slug) return null;

    const categoryColors = {
        'Phone Strap': 'bg-pink-100 text-pink-800',
        Jepit: 'bg-blue-100 text-blue-800',
        Gelang: 'bg-green-100 text-green-800',
    };

    return (
        <Link href={`/products/${product.slug}`} className="block">
            <motion.div
                className="group cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400} // Tambahkan width dan height
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-400 ease-in-out"
                    />
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full self-start ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'
                            }`}
                    >
                        {product.category}
                    </span>
                    <h3 className="font-bold font-quicksand text-lg text-gray-800 truncate">
                        {product.name}
                    </h3>
                    <StarRating rating={product.rating} />
                    <p className="font-extrabold text-gray-900 text-lg mt-1">
                        Rp {product.price.toLocaleString('id-ID')}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

// --- Galeri Produk dengan Animasi ---
export default function ProductGallery({ products }: { products: Product[] }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                </motion.div>
            ))}
        </motion.div>
    );
}