'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Phone, MessageCircle, MapPin, ArrowRight, Sun, Star, Sparkles } from 'lucide-react';
import ProductGallery from './components/product-gallery';
import { getProducts } from './libs/data';
import { Product } from '@/app/types/product';

// --- Hook untuk Deteksi Perangkat ---
const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setIsMobile(mobile);
  }, []);

  return { isMobile };
};


// --- Komponen Utama Aplikasi ---
export default function App() {
  const { isMobile } = useDeviceDetection();

  return (
    <div className="bg-white font-inter text-gray-800">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection isMobile={isMobile} />
        <FeaturedProductsSection isMobile={isMobile} />
        <HowToOrderSection />
        {/* Komponen Sticker Dekoratif */}
        <DecorativeStickers isMobile={isMobile} />
      </motion.main>
    </div>
  );
}

// --- Komponen Loader Transisi Halaman (Inovasi Utama 2) ---
const PageLoader = () => (
  <motion.div
    key="loader"
    className="fixed inset-0 bg-yellow-300 z-[100] flex items-center justify-center"
    initial={{ scaleY: 0, originY: 'top' }}
    animate={{ scaleY: 1, originY: 'top' }}
    exit={{ scaleY: 0, originY: 'bottom' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <Sparkles className="text-yellow-800 w-16 h-16 animate-pulse" />
      <p className="font-quicksand font-bold text-2xl text-yellow-900">Hopeeybeads</p>
    </motion.div>
  </motion.div>
);

// --- Bagian Hero (Halaman 1.1) ---
const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Efek Parallax yang berbeda untuk Desktop dan Mobile
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[600px] bg-yellow-50 overflow-hidden flex items-center justify-center">
      {/* Background Image dengan Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/fef3c7/fef3c7?text=.')", // Placeholder background
          y: yBg,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>

      {/* Konten Teks */}
      <motion.div
        style={{ opacity: opacityText }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-poppins font-extrabold text-5xl md:text-7xl text-yellow-900 drop-shadow-lg"
        >
          Your Daily Dose of <span className="text-yellow-600">Sparkle</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-xl mx-auto text-lg text-gray-700"
        >
          Temukan manik-manik buatan tangan yang menceritakan gayamu. Unik, penuh warna, dan dibuat khusus untukmu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <a href="#products">
            <motion.button
              className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgb(234 179 8 / 0.5), 0 10px 10px -5px rgb(234 179 8 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Koleksi <ArrowRight size={20} />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};


// --- Bagian Produk Unggulan (Halaman 1.2) ---
const FeaturedProductsSection = ({ isMobile }: { isMobile: boolean }) => {
  const allProducts = getProducts();
  // Ambil 8 produk acak dari semua kategori
  const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
  const featured = shuffled.slice(0, 6);
  return (
    <section id="products" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-poppins text-4xl font-bold text-center text-yellow-900 mb-12"
        >
          Produk Unggulan Kami
        </motion.h2>
        <ProductGallery products={featured} />
      </div>
    </section>
  );
};

// --- Komponen Kartu Produk dengan Interaksi Spesifik Perangkat ---
const ProductCard = ({ product, isMobile }: { product: Product; isMobile: boolean }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { stiffness: 100 } },
  };

  const tapEffect = isMobile ? { scale: 0.95, transition: { stiffness: 400, damping: 17 } } : {};
  const hoverEffect = !isMobile ? { y: -10, scale: 1.05, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.15)" } : {};

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-yellow-50 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300"
      whileHover={hoverEffect}
      whileTap={tapEffect}
    >
      <div className="aspect-square overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-quicksand font-bold text-lg text-yellow-900 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="font-poppins font-semibold text-yellow-700">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-bold py-2 px-4 border-2 border-white rounded-full">Lihat Detail</span>
      </div>
    </motion.div>
  );
};

// --- Bagian Cara Pemesanan & Kontak (Halaman 1.3) ---
const HowToOrderSection = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <section id="order" className="py-24 bg-yellow-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-poppins text-4xl font-bold text-yellow-900 mb-4">
          Punya Pertanyaan?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Kami siap membantu! Hubungi kami melalui salah satu cara di bawah ini untuk pemesanan, custom order, atau sekadar menyapa.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="bg-white rounded-full p-5 shadow-lg group-hover:bg-yellow-400 transition-colors duration-300">
              <MessageCircle size={32} className="text-yellow-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-semibold text-yellow-800">WhatsApp</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="bg-white rounded-full p-5 shadow-lg group-hover:bg-yellow-400 transition-colors duration-300">
              <ShoppingBag size={32} className="text-yellow-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-semibold text-yellow-800">Shopee</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="bg-white rounded-full p-5 shadow-lg group-hover:bg-yellow-400 transition-colors duration-300">
              <MapPin size={32} className="text-yellow-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="font-semibold text-yellow-800">Lokasi</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Komponen Sticker Dekoratif (Inovasi Utama 1) ---
const DecorativeStickers = ({ isMobile }: { isMobile: boolean }) => {
  const stickerContainerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deviceOrientation, setDeviceOrientation] = useState({ gamma: 0, beta: 0 });

  // Efek Kursor untuk Desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2, // Normalisasi -1 to 1
        y: (clientY / innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Efek Gyroscope untuk Mobile
  useEffect(() => {
    if (!isMobile || !window.DeviceOrientationEvent) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event; // beta: -180 to 180, gamma: -90 to 90
      if (beta !== null && gamma !== null) {
        setDeviceOrientation({ beta, gamma });
      }
    };

    // Meminta izin untuk iOS 13+
    const requestPermission = () => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((permissionState: string) => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation);
            }
          })
          .catch(console.error);
      } else {
        // Handle non-iOS 13+ devices
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    // Tambahkan event listener dengan tombol untuk meminta izin jika diperlukan
    // Untuk demo ini, kita asumsikan izin sudah diberikan atau tidak diperlukan
    window.addEventListener('deviceorientation', handleOrientation);

    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [isMobile]);

  const sticker1Transform = isMobile
    ? `translate(${deviceOrientation.gamma / 4}px, ${deviceOrientation.beta / 4}px)`
    : `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`;

  const sticker2Transform = isMobile
    ? `translate(${deviceOrientation.gamma / -6}px, ${deviceOrientation.beta / -6}px)`
    : `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`;

  return (
    <div ref={stickerContainerRef} className="fixed inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute top-[15%] left-[10%]"
        animate={{ transform: sticker1Transform }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <Sun className="w-16 h-16 text-yellow-300 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[12%]"
        animate={{ transform: sticker2Transform }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <Star className="w-12 h-12 text-yellow-300 opacity-50 fill-current" />
      </motion.div>
    </div>
  );
};

