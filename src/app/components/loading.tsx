import { motion } from "framer-motion";

const PageLoader = () => (
    <motion.div
        key="loader"
        className="fixed inset-0 bg-yellow-300 z-[100] flex items-center justify-center"
        initial={{ scaleY: 0, originY: "top" }}
        animate={{ scaleY: 1, originY: "top" }}
        exit={{ scaleY: 0, originY: "bottom" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center gap-4"
        >
            <span className="text-yellow-800 w-16 h-16 animate-pulse text-6xl" >✨</span>
            <p className="font-quicksand font-bold text-2xl text-yellow-900" > Hopeeybeads </p>
        </motion.div>
    </motion.div>
);

export default PageLoader;
