// src/libs/data.ts

import { Product } from '@/app/types/product';

export const products: Product[] = [
    // STRAP
    {
        id: 1,
        slug: 'phone-strap',
        name: 'Phone Strap',
        category: 'Phone Strap',
        price: 5000,
        rating: 5,
        image: '/strap/strap.png',
        images: [
            '/strap/strap.png',
            '/strap/20240918_150854.jpg',
            '/strap/20240918_150950.jpg',
            '/strap/20240918_151037.jpg',
        ],
        description: 'Strap handphone dengan kombinasi beads unik dan motif modern.\nMemberikan perlindungan ekstra sekaligus mempercantik ponsel Anda.\nPilihan tepat untuk gaya aktif dan ekspresif.'
    },
    // GELANG
    {
        id: 3,
        slug: 'kerang',
        name: 'Gelang Kerang',
        category: 'Gelang',
        price: 5000,
        rating: 5,
        image: '/gelang/kerang/20241014_151148.jpg',
        images: [
            '/gelang/kerang/20241014_151148.jpg',
            '/gelang/kerang/20241014_151151.jpg',
            '/gelang/kerang/20241014_151335.jpg',
            '/gelang/kerang/20241014_151500.jpg'
        ],
        description: 'Gelang handmade dengan hiasan kerang laut asli, nuansa tropis yang eksotis.\nCocok untuk gaya pantai, liburan, atau aktivitas kasual sehari-hari.\nMaterial berkualitas, nyaman dipakai dan tahan lama.'
    },
    {
        id: 4,
        slug: 'kupu',
        name: 'Gelang Kupu',
        category: 'Gelang',
        price: 5000,
        rating: 5,
        image: '/gelang/kupu/20250524_154406.jpg',
        images: [
            '/gelang/kupu/20250524_154406.jpg',
            '/gelang/kupu/20250524_154437.jpg',
            '/gelang/kupu/20250524_154544.jpg',
            '/gelang/kupu/20250524_154738.jpg'
        ],
        description: 'Gelang beads dengan motif kupu-kupu yang lucu dan penuh warna.\nPilihan sempurna untuk anak-anak dan remaja yang suka tampil ceria.\nDesain playful, ringan, dan mudah dipadukan dengan outfit apapun.'
    },
    {
        id: 5,
        slug: 'mutiara',
        name: 'Gelang Mutiara',
        category: 'Gelang',
        price: 5000,
        rating: 5,
        image: '/gelang/mutiara/20250524_154946.jpg',
        images: [
            '/gelang/mutiara/20250524_154946.jpg',
            '/gelang/mutiara/20250524_155001.jpg',
            '/gelang/mutiara/20250524_155023.jpg'
        ],
        description: 'Gelang elegan dengan beads mutiara sintetis, tampilan mewah dan anggun.\nCocok untuk acara formal, pesta, maupun santai bersama teman.\nSentuhan klasik yang membuat penampilan semakin berkelas.'
    },
    {
        id: 6,
        slug: 'pita',
        name: 'Gelang Pita',
        category: 'Gelang',
        price: 5000,
        rating: 5,
        image: '/gelang/pita/20241014_150653.jpg',
        images: [
            '/gelang/pita/20241014_150653.jpg',
            '/gelang/pita/20241014_150846.jpg',
            '/gelang/pita/20241014_150847.jpg'
        ],
        description: 'Gelang beads dengan aksen pita lucu, desain feminin dan playful.\nPilihan hadiah spesial untuk sahabat atau keluarga tercinta.\nRingan, nyaman dipakai, dan cocok untuk segala suasana.'
    },
    // JEPIT (all variants)
    {
        id: 7,
        slug: 'bunga-kamboja-clear-4cm',
        name: 'Jepit Bunga Kamboja clear 4cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-1/20250821_093338.jpg',
        images: [
            '/jepit/bunga-1/20250821_093338.jpg',
            '/jepit/bunga-1/20250821_093309.jpg',
            '/jepit/bunga-1/20250821_093324.jpg',
            '/jepit/bunga-1/20250821_093249.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 8,
        slug: 'bunga-kamboja-4cm',
        name: 'Jepit Bunga Kamboja 4cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-2/20250821_092910.jpg',
        images: [
            '/jepit/bunga-2/20250821_092910.jpg',
            '/jepit/bunga-2/20250821_093217.jpg',
            '/jepit/bunga-2/20250821_093221.jpg'
        ],
        description: 'Jepit rambut handmade dengan motif bunga yang cantik dan segar.\nMudah digunakan untuk memperindah berbagai gaya rambut.\nPilihan favorit anak-anak dan remaja yang suka tampil stylish.'
    },
    {
        id: 9,
        slug: 'bunga-goldline-6cm',
        name: 'Jepit Bunga Goldline 6cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-3/20250821_092737.jpg',
        images: [
            '/jepit/bunga-3/20250821_092737.jpg',
            '/jepit/bunga-3/20250821_092617.jpg',
            '/jepit/bunga-3/20250821_092748.jpg',
            '/jepit/bunga-3/20250821_092712.jpg',
            '/jepit/bunga-3/20250821_092740.jpg',
            '/jepit/bunga-3/20250821_092744.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 10,
        slug: 'bunga-3-kamboja-8cm',
        name: 'Jepit Bunga 3 Kamboja 8cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-4/20250821_092429.jpg',
        images: [
            '/jepit/bunga-4/20250821_092429.jpg',
            '/jepit/bunga-4/20250821_092307.jpg',
            '/jepit/bunga-4/20250821_092315.jpg',
            '/jepit/bunga-4/20250821_092258.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 11,
        slug: 'bunga-kamboja-pastel-8cm',
        name: 'Jepit Bunga Kamboja pastel edition 8cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-5/20250821_092204.jpg',
        images: [
            '/jepit/bunga-5/20250821_092204.jpg',
            '/jepit/bunga-5/20250821_091929.jpg',
            '/jepit/bunga-5/20250821_091943.jpg',
            '/jepit/bunga-5/20250821_092120.jpg',
            '/jepit/bunga-5/20250821_092145.jpg',
            '/jepit/bunga-5/20250821_091915.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 12,
        slug: 'jepit-kupu-kupu-8cm',
        name: 'Jepit Kupu-Kupu 8cm',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/hijau-kupu/20250821_093430.jpg',
        images: [
            // Hijau
            '/jepit/hijau-kupu/20250821_093430.jpg',
            '/jepit/hijau-kupu/20250821_093436.jpg',
            '/jepit/hijau-kupu/20250821_093437.jpg',
            // Orange
            '/jepit/orange-kupu/20250821_093528.jpg',
            '/jepit/orange-kupu/20250821_093533.jpg',
            // Pink
            '/jepit/pink-kupu/20250821_093452.jpg',
            '/jepit/pink-kupu/20250821_093513.jpg',
            // Putih
            '/jepit/putih-kupu/20250821_093602.jpg',
            '/jepit/putih-kupu/20250821_093611.jpg'
        ],
        description: 'Jepit rambut kupu-kupu 8cm hadir dalam berbagai warna: hijau, orange, pink, dan putih. Desain kupu-kupu yang lucu dan warna-warni bikin penampilan makin fresh dan playful. Cocok untuk anak-anak, remaja, maupun dewasa yang suka tampil beda. Material ringan, nyaman dipakai, dan mudah dipadukan dengan berbagai gaya rambut. Pilihan tepat untuk hangout, sekolah, acara santai, atau sekadar menambah warna di hari-harimu.'
    },
];

// Fungsi untuk mendapatkan semua produk
export const getProducts = (): Product[] => {
    return products;
};

// Fungsi untuk mendapatkan produk berdasarkan slug
export const getProductBySlug = (slug: string): Product | undefined => {
    const cleanSlug = slug.trim().toLowerCase();
    return products.find(p => p.slug.trim().toLowerCase() === cleanSlug);
};
