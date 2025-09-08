'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, MessageCircle, MapPin, ArrowRight, Sun, Star, Sparkles, Ruler, Truck, Instagram, ChevronDown, HelpCircle } from 'lucide-react';
import { Info } from 'lucide-react';
import Image from 'next/image';

// Asumsi impor dari file lokal Anda
import ProductGallery from './components/product-gallery';
import { getProducts } from './libs/data';

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
export default function HomePage() {
  const { isMobile } = useDeviceDetection();
  return (
    <div className="bg-white font-inter text-gray-800 overflow-x-hidden">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection isMobile={isMobile} />
        <AboutSection />
        <FeaturedProductsSection />
        <InfoSection />
        <FAQSection />
        <ContactSection />
      </motion.main>
    </div>
  );
}

// --- 1. Bagian Hero ---
const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={heroRef} className="relative h-screen min-h-[700px] bg-yellow-50 overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1599835182936-6582572a9a4e?q=80&w=2070&auto=format&fit=crop')",
          y: yBg,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

      <motion.div style={{ opacity: opacityText }} className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-quicksand font-bold text-5xl md:text-7xl text-yellow-900 drop-shadow-lg"
        >
          Hope, Worn Beautifully
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          Every bead is a little wish you can wear. Discover handmade accessories that bring hope and beauty to your everyday life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <a href="#products">
            <motion.button
              className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgb(234 179 8 / 0.5), 0 10px 10px -5px rgb(234 179 8 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Creations <ArrowRight size={20} />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- 2. Bagian Tentang Kami ---
const AboutSection = () => {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "25%"]);

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <motion.div style={{ y: yImage }} className="absolute inset-0 z-10">
              <Image
                src="/photo-collage.png"
                alt="Proses pembuatan manik-manik Hopeeybeads"
                layout="fill"
                objectFit="cover"
                className="brightness-90"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-yellow-500" />
              <h3 className="font-poppins font-semibold text-yellow-600">Cerita Kami</h3>
            </div>
            <h2 className="font-quicksand text-4xl font-bold text-yellow-900 mb-6">
              A String of Hope in Every Bead
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Hopeeybeads.id is born from the words <b>Hope</b> and <b>Beads</b>. We believe that every bead we use has a happy story to tell and can be a powerful symbol of hope for its wearer.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Explore our selection of beads and supplies to create your own accessories—from bracelets and phone straps to rings and more. Each piece is meant to be a daily companion and a small, beautiful reminder that hope is always present.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our products are designed for everyday life—they're perfect for school, work, or adding a personal touch to any event. They also make thoughtful gifts that anyone would love to receive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 3. Bagian Produk Unggulan ---
const FeaturedProductsSection = () => {
  const featuredRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: featuredRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const featured = getProducts().slice(0, 4);

  return (
    <section id="products" ref={featuredRef} className="py-24 bg-yellow-50/50 relative z-10 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl -translate-x-1/2"
        style={{ y: yBg }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl translate-x-1/2"
        style={{ y: yBg }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <ShoppingBag className="text-yellow-500" />
          <span className="font-poppins font-semibold text-yellow-600">Produk Unggulan</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}
          className="font-poppins text-4xl font-bold text-center text-yellow-900 mb-4"
        >
          Dream Chaser Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true, amount: 0.5 }}
          className="text-center text-gray-600 max-w-xl mx-auto mb-12"
        >
          Setiap kreasi adalah harapan yang hidup. Find the one that speaks to you!
        </motion.p>
        <ProductGallery products={featured} />
      </div>
    </section>
  );
};

// --- Data FAQ ---
const faqs = [
  {
    q: "Bagaimana cara memesan produk di Hopeeybeads?",
    a: "Kamu bisa langsung chat WhatsApp kami, pilih produk yang diinginkan, dan diskusikan detailnya. Kami akan pandu prosesnya sampai selesai!"
  },
  {
    q: "Apakah bisa custom ukuran atau desain?",
    a: "Saat ini semua produk ready stock dan belum menerima custom ukuran atau desain, tapi siapa tahu ke depannya bisa! Pantau terus update dari kami, ya."
  },
  {
    q: "Pengiriman ke luar Bali bisa?",
    a: "Bisa banget! Kami kirim ke seluruh Indonesia. Untuk area Bali bisa COD, luar Bali pakai jasa pengiriman."
  },
  {
    q: "Berapa lama proses pembuatan dan pengiriman?",
    a: "Proses pembuatan biasanya 1-3 hari, pengiriman tergantung lokasi. Kami akan update progress pesananmu secara berkala."
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Pembayaran bisa via transfer bank, e-wallet, atau COD untuk area Tabanan Bali. Detail akan kami infokan saat order."
  }
];

// --- Komponen untuk satu item FAQ (Accordion) ---
const FAQItem = ({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-yellow-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 cursor-pointer hover:bg-yellow-50/50 transition-colors duration-300"
      >
        <h3 className="font-semibold text-lg text-yellow-800">{faq.q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-700 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Komponen Utama Seksi FAQ ---
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* [PERUBAHAN] Menggunakan grid untuk layout desktop/tablet */}
        <div className="grid lg:grid-cols-3 lg:gap-12 items-start">

          {/* Kolom Kiri: Daftar FAQ */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg shadow-yellow-100 overflow-hidden border border-yellow-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                isOpen={openIndex === idx}
                onClick={() => handleToggle(idx)}
              />
            ))}
          </motion.div>

          {/* Kolom Kanan: Judul */}
          <motion.div
            className="lg:col-span-1 text-center lg:text-left mt-10 lg:mt-0 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <HelpCircle className="text-yellow-500" />
              <span className="font-poppins font-semibold text-yellow-600">BANTUAN</span>
            </div>
            <h2 className="font-quicksand text-4xl font-bold text-yellow-900 mt-4">
              Ada yang Bisa Kami Bantu?
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Tidak menemukan jawabanmu? Jangan ragu untuk menghubungi kami langsung di WhatsApp!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Bagian Informasi ---
const InfoSection = () => {
  const infoCard = (icon: React.ReactNode, title: string, description: string, delay: number) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      className="bg-yellow-50 rounded-2xl p-8 text-center flex flex-col items-center shadow-sm"
    >
      <div className="bg-white rounded-full p-4 mb-5 shadow-md">
        {icon}
      </div>
      <h3 className="font-poppins font-bold text-xl text-yellow-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );

  return (
    <section id="info" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Info className="text-yellow-500" />
          <span className="font-poppins font-semibold text-yellow-600">Informasi</span>
        </div>
        <h2 className="font-quicksand text-4xl md:text-5xl font-bold text-yellow-900 text-center">Info For You</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Kami selalu ingin prosesnya simple dan nyaman. Here’s how we roll:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {infoCard(
            <Sparkles size={32} className="text-yellow-600" />,
            "Quality Materials",
            "Semua produk dibuat dari bahan berkualitas dan aman dipakai sehari-hari.",
            0.1
          )}
          {infoCard(<MessageCircle size={32} className="text-yellow-600" />, "Easy Payment", "Langsung via WhatsApp, super simple. We guide you every step.", 0.2)}
          {infoCard(<Truck size={32} className="text-yellow-600" />, "Flexible Shipping", "COD Tabanan Bali, luar Bali? We ship with care. Chat for details!", 0.3)}
        </div>
      </div>
    </section>
  );
};

// --- 5. Bagian Kontak ---
const ContactSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yBg1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-yellow-50 overflow-hidden relative">
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full opacity-40 blur-3xl -translate-x-1/2" style={{ y: yBg1 }} />
      <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-3xl translate-x-1/2" style={{ y: yBg2 }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-yellow-500" />
              <span className="font-poppins font-semibold text-yellow-600">Kontak</span>
            </div>
            <h2 className="font-quicksand text-5xl font-bold text-yellow-900 mb-4">Let's Get in Touch!</h2>
            <p className="max-w-md text-gray-600 mb-8 leading-relaxed">
              Punya ide custom, pertanyaan, atau mau langsung pesan? Kami senang sekali bisa membantumu. Pilih cara ternyamanmu di bawah ini!
            </p>
            <motion.div className="flex flex-col gap-4" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.a
                href="https://wa.me/6285974465527"
                target="_blank"
                rel="noopener noreferrer"
                variants={listItemVariants}
                className="group flex items-center gap-4 w-full p-4 rounded-2xl shadow-sm bg-white transition-all duration-300 hover:bg-green-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-full bg-white/50 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                  <MessageCircle size={24} className="text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-gray-800 group-hover:text-white transition-transform duration-300 transform group-hover:translate-x-1">
                  Chat di WhatsApp
                </span>
              </motion.a>
              <motion.a
                href="http://shopee.co.id/hopeeybeads.id"
                target="_blank"
                rel="noopener noreferrer"
                variants={listItemVariants}
                className="group flex items-center gap-4 w-full p-4 rounded-2xl shadow-sm bg-white transition-all duration-300 hover:bg-orange-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-full bg-white/50 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                  <ShoppingBag size={24} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-gray-800 group-hover:text-white transition-transform duration-300 transform group-hover:translate-x-1">
                  Belanja di Shopee
                </span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/hopeeybeads.id"
                target="_blank"
                rel="noopener noreferrer"
                variants={listItemVariants}
                className="group flex items-center gap-4 w-full p-4 rounded-2xl shadow-sm bg-white transition-all duration-300 hover:bg-pink-500"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-full bg-white/50 group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110">
                  <Instagram size={24} className="text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-gray-800 group-hover:text-white transition-transform duration-300 transform group-hover:translate-x-1">
                  Follow di Instagram
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-3xl shadow-lg backdrop-blur-sm" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-inner">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.296938637404!2d115.124185!3d-8.5474812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23a4486bdf6d5%3A0x9cb212de9748c7e4!2sPenjahit%20Rahayu!5e0!3m2!1sid!2sid!4v1756354944318!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <a href="https://maps.app.goo.gl/138Yp25s28p49Kcb7" target="_blank" rel="noopener noreferrer">
              <motion.button className="mt-6 bg-yellow-400 text-yellow-900 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MapPin size={20} /> Buka di Google Maps
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};