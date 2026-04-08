import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-24 px-6 md:px-12 w-full flex justify-center border-t border-white/5 relative overflow-hidden bg-[#0A0A0B]">

            <div className="max-w-6xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 inline-block">
                        <span className="text-sm font-medium tracking-wide text-slate-300">Call to Action</span>
                    </div>

                    <h2 className="text-4xl md:text-7xl font-normal tracking-[-0.03em] leading-tight text-white mb-6">
                        Partner with Parivestra
                    </h2>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mb-10">
                        We actively collaborate with brands, agencies, and platforms on strategic synergies, co-creation, and long-term growth partnerships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <button className="px-10 py-5 rounded-2xl bg-[#FF4500] text-white font-semibold text-lg hover:bg-[#FF6020] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.35)] flex flex-col items-center gap-1">
                            <span>Get in Touch</span>
                            <span className="text-xs font-normal opacity-70">For onboarding & partnerships</span>
                        </button>
                    </div>
                </motion.div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-xl font-medium tracking-tight text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        Parivestra
                    </div>
                    <p className="text-slate-500 font-light text-sm">
                        All rights reserved, © 2026 Parivestra Growth Infrastructure Pvt Ltd.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-400 font-light">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
