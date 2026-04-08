import { motion } from 'framer-motion';
import ParivestraLogo from './ParivestraLogo';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-50 py-4 px-8 flex justify-between items-center bg-[#0D1B2A]/80 backdrop-blur-xl border-b border-white/5"
        >
            <ParivestraLogo height={44} />

            <div className="hidden lg:flex items-center gap-10">
                <a href="#thesis" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Thesis</a>
                <a href="#scale" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Scale</a>
                <a href="#clientele" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Clientele</a>
                <a href="#partnerships" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">Partners</a>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4500] text-white font-medium hover:bg-[#FF6020] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.3)]"
            >
                Partner with Us
            </motion.button>
        </motion.nav>
    );
};

export default Navbar;
