import fs from 'fs';

let html = fs.readFileSync('portfolite.html', 'utf-8');

const replacements = {
    // Navbar
    "Portfolite": "Parivestra",
    "Services": "Thesis",
    "Projects": "Scale",
    "Testimonials": "Clientele",
    "Contact": "Partners",
    "Get Template": "Partner with Us",

    // Hero
    "Crafting Unique Brand Identities": "What We Do",
    "Branding that you need Indeed": "Distribution, engineered for outcomes.",
    "Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.": "Parivestra is a modern distribution and growth infrastructure company. We sit at the intersection of AI-optimized marketing, influencer ecosystems, and offline distribution.",
    "Get Started Now": "Partner with Parivestra",
    "See Projects": "Explore Distribution",
    "Scroll down": "Scroll down",
    "to see projects": "to see our impact",

    // About/Intro
    "Meet Meily": "Our Core Thesis",
    "I'm Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.": "We believe distribution should be community-first, data-led, and outcome-driven. Every channel we activate is designed to move brands closer to real business metrics \u2014 sales, adoption, retention, and long-term market presence.",
    "Product Design": "Consumer Brands",
    "Brand Identity Design": "FMCG Sector",
    "UX Design": "Fintech Space",
    "Packaging Design": "Community-first businesses",

    // Work Experience / Timeline -> Markets & Coverage maybe?
    "Freelance": "Coverage",
    "GreenLeaf Co": "India Pan",
    "Currently": "Active",
    "Brand Designer": "Regional Channels",
    "UrbanFit Studio": "ASEAN",
    "2023-24": "Expanding",
    "Package Designer": "Global Reach",
    "GreenK Studio": "US & UAE",
    "2020-22": "Active",

    // Process
    "Design process": "Differentiation",
    "Process": "Why Us",
    "crafting bold visuals that inspire and elevate brands with thought process.": "Convergence of AI optimization, influencer marketing, affiliate systems, and offline activations.",
    "Define Your Vision": "Community-first execution",
    "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.": "Execution across high-intent environments driving adoption and retention.",
    "Submit Your Request": "Outcome-first models",
    "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.": "Models tied directly to sales, revenue, and long-term market presence.",
    "Project Delivered": "True ATL + BTL correlation",
    "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life\u2014on time and beyond expectations.": "Proprietary access to non-biddable, high-trust distribution inventories, mapped to performance.",

    // Services
    "Design services": "Key Strengths",
    "Helping businesses standout with brand identity packaging that captivates and converts effectively.": "We operate across multiple proprietary and partner-led distribution segments.",
    "Mochup Design": "Performance",
    "Brand Identity": "AI Infrastructure",
    "Crafting unique, memorable brand identities that resonate with your audience \u2014 from logos to visual systems \u2014 ensuring every touchpoint reflects your brand's essence.": "Correlation of brand visibility with actual sales outcomes and data capture across offline and online consumer journeys.",
    "Package Design": "Affiliate Stack",
    "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.": "Performance-linked distribution ecosystems scaling brands rapidly.",
    "Brand Design": "Global Digital",
    "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers \u2014 turning first impressions into lasting brand loyalty.": "US, UAE, ASEAN, and Australia across performance, influencer, and AI-led stacks.",
    "Tailored design mockups that align perfectly with your brand's aesthetic \u2014 because every detail matters when showcasing your product's true potential.": "Market entry, testing, and scaling for new and established brands.",

    // Testimonials
    "Client Reviews": "Our Scale",
    "Reviews": "Scale",
    "Real feedback from clients who trusted my design expertise to elevate their brands successfully.": "Scaling brands through multi-channel orchestration and performance linking.",
    "See Services": "View Case Studies",
    "Creative Director & Lead Designer": "Brands Enabled",
    "\"Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!\"": "\"Partnering with Parivestra fundamentally transformed our market penetration strategy, increasing outcomes significantly.\"",
    "CEO of GreenRoots": "Device Touchpoints",
    "\"Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.\"": "\"Their community-first execution ensured our brand reached high-intent environments with remarkable efficiency.\"",
    "Founder of EcoLux": "Sales Driven",
    "\"Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.\"": "\"Parivestra's AI optimization and affiliate systems scaled our revenue exponentially within months.\"",
    "Founder at GreenK Studios": "Market Presence",
    "\"Meily's designs speak for themselves \u2014 bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.\"": "\"A true growth infrastructure partner that correlates brand visibility directly with actual sales outcomes.\"",

    // Stats
    "180+": "100+",
    "design projects completed.": "brands enabled across the globe.",
    "96%": "300M+",
    "Client satisfaction rate.": "device & community touchpoints.",
    "15+": "120+ Cr",
    "Years of experience": "in aggregated sales driven.",

    // FAQ
    "FAQ'S": "Partnerships",
    "Answers": "Models",
    "Find answers to common questions about my design process, services etc\u2026": "We dynamically address various business goals with our tailored partnership models.",
    "What services do you provide?": "Access to Distribution",
    "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.": "Pan-India and regional community-driven channels across multiple platforms.",
    "How do I start working with you?": "GTM Execution",
    "What design tools do you use?": "Affiliate Stack Creation",
    "How long does a project take?": "AI Marketing Infrastructure",
    "Do you provide revisions?": "Online Reputation Management",
    "What industries do you work with?": "Consulting & Expansion",
    "Do you offer development services?": "Proprietary Distribution",
    "What is your pricing structure?": "Sales-linked Activations",
    "Can you redesign my existing website?": "Franchise-led Expansion",

    // Footer
    "Available For Work": "Call to Action",
    "Curious about what we can create together? Let\u2019s bring something extraordinary to life!": "We actively collaborate with brands, agencies, and platforms on strategic synergies, co-creation, and long-term growth partnerships.",
    "Book a Free Call": "Contact Us Today",
    "hello@framebase.design": "hello@parivestra.com",
    "Framer": "Parivestra",
    "All rights reserved, \u00a92025": "All rights reserved, \u00a9 2026 Parivestra Growth Infrastructure Pvt Ltd.",
    "Recent Works": "Brands We’ve Worked With"
};

for (let [k, v] of Object.entries(replacements)) {
    html = html.split(k).join(v);
}

// Strip out external hydration scripts but KEEP inline animator scripts
// We remove any <script type="module" data-framer... or src="https://framerusercontent...
html = html.replace(/<script[^>]*src="https:\/\/framerusercontent[^>]*>\s*<\/script>/g, '');
html = html.replace(/<script[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g, '');

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
    let body = bodyMatch[1];
    fs.writeFileSync('src/portfolite-body.html', body);
} else {
    fs.writeFileSync('src/portfolite-body.html', html);
}

console.log('Update: Stripped external modules to stop React hydration.');
