export interface Product {
    id: number;
    slug: string; // Slug untuk URL yang lebih ramah SEO
    name: string;
    category: 'Phone Strap' | 'Jepit' | 'Gelang';
    price: number;
    rating: number;
    image: string; // Gambar utama untuk kartu produk
    images: string[]; // Galeri gambar untuk halaman detail
    description: string;
}
