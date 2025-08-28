// src/libs/data.ts

import { Product } from '@/app/types/product';

export const products: Product[] = [
    // STRAP
    {
        id: 1,
        slug: 'strap1',
        name: 'Strap 1',
        category: 'Phone Strap',
        price: 5000,
        rating: 5,
        image: '/strap/strap1.png',
        images: ['/strap/strap1.png'],
        description: 'Tali handphone handmade dengan beads warna-warni yang ceria dan unik.\nCocok untuk semua tipe ponsel, memberikan sentuhan personal dan aman.\nDesain stylish, kuat, dan nyaman dipakai setiap hari.'
    },
    {
        id: 2,
        slug: 'strap2',
        name: 'Strap 2',
        category: 'Phone Strap',
        price: 5000,
        rating: 5,
        image: '/strap/strap2.png',
        images: ['/strap/strap2.png'],
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
        image: '/gelang/mutiara/20240918_150854.jpg',
        images: [
            '/gelang/mutiara/20240918_150854.jpg',
            '/gelang/mutiara/20240918_150950.jpg',
            '/gelang/mutiara/20240918_151037.jpg',
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
        slug: 'bunga-1',
        name: 'Jepit Bunga 1',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-1/20250821_093249.jpg',
        images: [
            '/jepit/bunga-1/20250821_093249.jpg',
            '/jepit/bunga-1/20250821_093309.jpg',
            '/jepit/bunga-1/20250821_093324.jpg',
            '/jepit/bunga-1/20250821_093338.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 8,
        slug: 'bunga-2',
        name: 'Jepit Bunga 2',
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
        slug: 'bunga-3',
        name: 'Jepit Bunga 3',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-3/20250821_092617.jpg',
        images: [
            '/jepit/bunga-3/20250821_092617.jpg',
            '/jepit/bunga-3/20250821_092712.jpg',
            '/jepit/bunga-3/20250821_092737.jpg',
            '/jepit/bunga-3/20250821_092740.jpg',
            '/jepit/bunga-3/20250821_092744.jpg',
            '/jepit/bunga-3/20250821_092748.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 10,
        slug: 'bunga-4',
        name: 'Jepit Bunga 4',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-4/20250821_092258.jpg',
        images: [
            '/jepit/bunga-4/20250821_092258.jpg',
            '/jepit/bunga-4/20250821_092307.jpg',
            '/jepit/bunga-4/20250821_092315.jpg',
            '/jepit/bunga-4/20250821_092429.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 11,
        slug: 'bunga-5',
        name: 'Jepit Bunga 5',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/bunga-5/20250821_091915.jpg',
        images: [
            '/jepit/bunga-5/20250821_091915.jpg',
            '/jepit/bunga-5/20250821_091929.jpg',
            '/jepit/bunga-5/20250821_091943(0).jpg',
            '/jepit/bunga-5/20250821_092120.jpg',
            '/jepit/bunga-5/20250821_092145.jpg',
            '/jepit/bunga-5/20250821_092204.jpg'
        ],
        description: 'Jepit rambut dengan motif bunga handmade, cocok untuk mempercantik gaya rambut anak dan remaja.'
    },
    {
        id: 12,
        slug: 'hijau-kupu',
        name: 'Jepit Hijau Kupu',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/hijau-kupu/20250821_093430.jpg',
        images: [
            '/jepit/hijau-kupu/20250821_093430.jpg',
            '/jepit/hijau-kupu/20250821_093436.jpg',
            '/jepit/hijau-kupu/20250821_093437.jpg'
        ],
        description: 'Jepit rambut kupu-kupu hijau, tampilan segar dan natural untuk rambut Anda.\nCocok dipakai saat hangout, sekolah, atau acara santai.\nDesain unik, mudah dipadukan dengan berbagai gaya rambut.'
    },
    {
        id: 13,
        slug: 'orange-kupu',
        name: 'Jepit Orange Kupu',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/orange-kupu/20250821_093528.jpg',
        images: [
            '/jepit/orange-kupu/20250821_093528.jpg',
            '/jepit/orange-kupu/20250821_093533.jpg'
        ],
        description: 'Jepit rambut kupu-kupu orange, warna ceria dan energik untuk penampilan Anda.\nMudah digunakan, cocok untuk anak-anak dan remaja aktif.\nMaterial berkualitas, tahan lama dan nyaman dipakai.'
    },
    {
        id: 14,
        slug: 'pink-kupu',
        name: 'Jepit Pink Kupu',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/pink-kupu/20250821_093452.jpg',
        images: [
            '/jepit/pink-kupu/20250821_093452.jpg',
            '/jepit/pink-kupu/20250821_093513.jpg'
        ],
        description: 'Jepit rambut kupu-kupu pink, desain feminin dan manis untuk gaya rambut Anda.\nPilihan tepat untuk acara spesial atau sehari-hari.\nRingan, mudah dipakai, dan cocok untuk segala usia.'
    },
    {
        id: 15,
        slug: 'putih-kupu',
        name: 'Jepit Putih Kupu',
        category: 'Jepit',
        price: 5000,
        rating: 4,
        image: '/jepit/putih-kupu/20250821_093602.jpg',
        images: [
            '/jepit/putih-kupu/20250821_093602.jpg',
            '/jepit/putih-kupu/20250821_093611.jpg'
        ],
        description: 'Jepit rambut kupu-kupu putih, tampilan elegan dan netral untuk segala outfit.\nCocok untuk acara formal maupun santai bersama teman.\nDesain simpel, mudah dipadukan dan nyaman digunakan.'
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
