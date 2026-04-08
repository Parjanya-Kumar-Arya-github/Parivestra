import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 w-full flex justify-center border-t border-white/5 bg-white/[0.01]">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                            <span className="text-sm font-medium text-slate-300">About Us</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                            What is Parivestra?
                        </h2>
                        <p className="text-lg text-slate-400 font-light mb-8 max-w-lg">
                            Parivestra is a modern distribution and growth infrastructure company built for brands that want outcomes, not impressions.
                        </p>

                        <motion.a
                            href="https://docs.google.com/presentation/d/1XngK1zEXeT7Jz-gH8tC0h0H1XJzj92i8mYI2rS-n0YI/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                        >
                            📄 About Parivestra – Detailed Company Document
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </motion.a>
                    </motion.div>
                </div>

                <div className="flex-1 w-full flex justify-center">
                    <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-[#5E94C5]/20 to-transparent blur-3xl mix-blend-screen animate-pulse-slow" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
