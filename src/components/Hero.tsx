import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl w-full flex flex-col items-center gap-6 mt-2"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="px-5 py-2 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 backdrop-blur-md flex items-center gap-2 mb-4"
                >
                    <div className="w-2 h-2 rounded-full bg-[#FF4500]" />
                    <span className="text-sm font-medium tracking-wide text-[#FF9070]">What We Do</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] leading-[1.05] text-white">
                    Distribution, <br />
                    engineered for <br />
                    <span className="italic font-light text-[#FF4500]">outcomes.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mt-6 font-light leading-relaxed">
                    Parivestra is a modern distribution and growth infrastructure company built for brands that want outcomes, not impressions. We sit at the intersection of AI-optimized marketing, influencer ecosystems, affiliate commerce, and offline distribution, enabling measurable scale across digital and physical channels.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,69,0,0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-xl bg-[#FF4500] text-white font-semibold hover:bg-[#FF6020] transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.25)]"
                    >
                        Partner with Parivestra
                    </motion.button>
                    <motion.a
                        href="#thesis"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-xl glass text-white font-medium hover:bg-white/5 transition-all duration-300 border border-white/10"
                    >
                        Explore Core Thesis
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
