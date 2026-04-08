import { motion } from 'framer-motion';

const clients = [
    "Swiggy", "Uber", "FlixBus", "Nestlé", "JioStar",
    "Apollo", "Meesho", "Myntra", "Tata Group"
];

const partners = [
    { type: "Consumer Brands", desc: "Scale faster with outcome-mapped sales." },
    { type: "FMCG", desc: "Granular offline distribution at scale." },
    { type: "Fintech", desc: "Community-driven acquisition infrastructure." },
    { type: "Agencies", desc: "Value-add distribution for your clients." }
];

const Partners = () => {
    return (
        <section id="clientele" className="py-24 px-6 md:px-12 bg-background-dark/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-8"
                        >
                            Strategic Partners
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {partners.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
                                >
                                    <h4 className="font-bold text-primary mb-2">{partner.type}</h4>
                                    <p className="text-sm text-slate-400">{partner.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <h3 className="text-lg font-semibold text-slate-500 mb-8 uppercase tracking-widest">Trusted by leading brands</h3>
                        <div className="flex flex-wrap gap-4">
                            {clients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-6 py-4 rounded-xl glass border border-white/5 flex items-center justify-center min-w-[140px] hover:bg-white/10 transition-colors"
                                >
                                    <span className="font-bold text-white opacity-70">{client}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
