import { motion } from 'framer-motion';

const BentoGrid = () => {
    return (
        <section id="thesis" className="py-24 px-6 md:px-12 w-full flex justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="max-w-3xl mx-auto text-center mb-24">
                        <div className="inline-block px-4 py-1 rounded-full border border-[#FF4500]/30 bg-[#FF4500]/10 backdrop-blur-md mb-6">
                            <span className="text-sm font-medium text-[#FF9070]">Our Core Thesis</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-relaxed">
                            We believe distribution should be <span className="font-semibold">community-first</span>, <span className="font-semibold">data-led</span>, and <span className="font-semibold">outcome-driven</span>.
                        </h2>
                        <p className="text-lg text-slate-400 font-light">
                            Every channel we activate is designed to move brands closer to real business metrics — sales, adoption, retention, and long-term market presence.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end mt-12 mb-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">What Makes Parivestra Different</h2>
                            <p className="text-lg text-slate-400 font-light">Convergence of AI optimization, influencer marketing, affiliate systems, and offline activations.</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 rounded-[32px] glass p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent group-hover:from-white/[0.05] transition-colors duration-500" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2">Outcome-first models</h3>
                            <p className="text-slate-400 font-light max-w-sm">Tied directly to sales and revenue.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] glass p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5c-2.2 0-4 1.8-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2">Community-first</h3>
                            <p className="text-slate-400 font-light">Execution across high-intent environments.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] glass p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2">Proprietary access</h3>
                            <p className="text-slate-400 font-light">To non-biddable, high-trust distribution inventories.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 rounded-[32px] glass p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-white/[0.02] to-transparent group-hover:from-white/[0.05] transition-colors duration-500" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-2">True ATL + BTL correlation</h3>
                            <p className="text-slate-400 font-light max-w-sm">Mapped to performance.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Markets & Coverage + Key Strengths */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-8">Markets & Coverage</h3>
                        <div className="flex flex-col gap-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="text-xl font-medium text-white mb-2">India: Pan-India, offline-first distribution</h4>
                                <p className="text-slate-400 font-light text-sm">(Colleges, RWAs, turfs, communities, on-ground networks, events)</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="text-xl font-medium text-white mb-2">Global Digital Reach:</h4>
                                <p className="text-slate-400 font-light text-sm">US, UAE, ASEAN, and Australia across performance, affiliate, influencer, and AI-led marketing stacks</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-medium text-white mb-8">Key Strengths</h3>
                        <ul className="flex flex-col gap-4 text-slate-300 font-light">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FF4500] mt-2 shrink-0" />
                                <span>Correlation of brand visibility with actual sales outcomes</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FF4500] mt-2 shrink-0" />
                                <span>Data capture across offline and online consumer journeys</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FF4500] mt-2 shrink-0" />
                                <span>Access to proprietary communities and distribution channels</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FF4500] mt-2 shrink-0" />
                                <span>Strong omnichannel and hybrid execution capabilities</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#FF4500] mt-2 shrink-0" />
                                <span>Speed, scalability, and measurable accountability</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BentoGrid;
