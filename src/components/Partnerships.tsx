import { motion } from 'framer-motion';

const organizations = [
    "Consumer brands & D2C companies",
    "FMCG & youth-first brands",
    "Fintech & consumer internet platforms",
    "Community-first businesses",
    "Agencies (creative, media, performance)",
    "Expansion-focused enterprises"
];

const partnershipModels = [
    { title: "Access to Distribution", desc: "Pan-India and regional community-driven channels" },
    { title: "Go-To-Market (GTM) Execution", desc: "Market entry, testing, and scaling" },
    { title: "Affiliate Stack Creation", desc: "Performance-linked distribution ecosystems" },
    { title: "AI Marketing Infrastructure Setup", desc: "AI SEO, ORM, attribution, and optimization layers" },
    { title: "Online Reputation Management (ORM)", desc: "" },
    { title: "Capability & Resource Sharing", desc: "" },
    { title: "Consulting & Expansion-Led Projects", desc: "" }
];

const offers = [
    "Proprietary distribution channels",
    "Sales-linked activations and events access",
    "Co-IP and co-brand solution creation",
    "Demand generation and access to clientele",
    "Franchise-led expansion models",
    "Strategic investment and growth options"
];

const Partnerships = () => {
    return (
        <section id="partnerships" className="py-24 px-6 md:px-12 w-full flex justify-center">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Who We Partner With</h2>
                            <p className="text-lg text-slate-400 font-light mb-4">
                                We collaborate with forward-looking organizations across:
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {organizations.map((org, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm">
                                        {org}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-colors shrink-0">
                            Contact Us Today
                        </button>
                    </div>
                </motion.div>

                <h3 className="text-3xl font-medium text-white mb-8 mt-16">Our Partnership Models</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partnershipModels.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-8 rounded-[24px] glass border border-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white mb-2">{model.title}</h4>
                            {model.desc && <p className="text-slate-400 font-light text-sm">{model.desc}</p>}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-10 rounded-[32px] glass relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <h3 className="text-3xl font-medium text-white">What Parivestra Offers</h3>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {offers.map((offer, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                    <span className="text-slate-300 font-light">{offer}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Partnerships;
