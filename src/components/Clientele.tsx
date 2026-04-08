import { motion } from 'framer-motion';

const clients = [
    "Swiggy", "Uber", "FlixBus", "Nestlé", "JioStar",
    "Apollo", "Meesho", "Myntra", "Tata Group"
];

const Clientele = () => {
    return (
        <section id="clientele" className="py-24 px-6 md:px-12 w-full flex justify-center border-t border-white/5">
            <div className="max-w-6xl w-full">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white"
                        >
                            Brands We’ve Worked With
                        </motion.h2>
                        <p className="text-lg text-slate-400 mb-8 font-light max-w-sm">
                            Each engagement executed pan-India, with market-specific strategies and distribution layers.
                        </p>
                        <motion.a
                            href="https://www.canva.com/design/DAGnCSjB6Gg/phbckJVpepIfHc_prCwpxg/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                        >
                            📄 Case Study Document
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </motion.a>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-8 rounded-[20px] glass flex items-center justify-center text-center hover:bg-white/5 transition-all duration-300"
                            >
                                <span className="font-medium text-slate-300">
                                    {client}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clientele;
