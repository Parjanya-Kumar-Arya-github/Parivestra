import fs from 'fs';
import * as cheerio from 'cheerio';

const htmlStr = fs.readFileSync('portfolite.html', 'utf-8');
const $ = cheerio.load(htmlStr);

// 1. Extract CSS and save to src/index.css
const styles = [];
$('style').each((i, el) => {
    styles.push($(el).html());
    $(el).remove();
});
// Add tailwind imports
const tailwindBase = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;
fs.writeFileSync('src/index.css', tailwindBase + styles.join('\n'));
console.log('CSS saved');

// 2. Map replacements
// We'll mutate the DOM directly finding the best matching text.
const textMappings = {
    "Creative Designer": "Distribution, engineered for outcomes.",
    "Brand Identity": "Distribution",
    "Package Design": "Infrastructure",
    "Crafting Unique Brand Identities": "What We Do",
    "Elevate your brand with custom identity and package design. Showcase story through bold visuals strategic design solutions.": "Parivestra is a modern distribution and growth infrastructure company built for brands that want outcomes, not impressions. We sit at the intersection of AI-optimized marketing, influencer ecosystems, affiliate commerce, and offline distribution.",
    "Get Started Now": "Partner with Parivestra",
    "See Projects": "Explore Distribution",
    "Design process": "Our Core Thesis",
    "Process": "Thesis",
    "crafting bold visuals that inspire and elevate brands with thought process.": "We believe distribution should be community-first, data-led, and outcome-driven.",
    "Define Your Vision": "Community-first execution",
    "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.": "Every channel we activate is designed to move brands closer to real business metrics.",
    "Submit Your Request": "Outcome-first models",
    "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.": "Convergence of AI optimization, influencer marketing, affiliate systems, and offline activations.",
    "Project Delivered": "True ATL + BTL correlation",
    "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.": "Proprietary access to non-biddable, high-trust distribution inventories, mapped to performance.",
    "Design services": "What Makes Parivestra Different",
    "Helping businesses standout with brand identity packaging that captivates and converts effectively.": "We operate across multiple proprietary and partner-led distribution segments.",
    "Mochup Design": "AI Optimization",
    "Brand Identity": "Performance",
    "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.": "Correlation of brand visibility with actual sales outcomes and data capture across offline and online consumer journeys.",
    "Package Design": "Global Digital Reach",
    "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.": "US, UAE, ASEAN, and Australia across performance, affiliate, influencer, and AI-led marketing stacks.",
    "Brand Design": "Pan-India Coverage",
    "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.": "Offline-first distribution (Colleges, RWAs, turfs, communities, on-ground networks, events).",
    "Client Reviews": "Our Scale",
    "Reviews": "Scale",
    "Real feedback from clients who trusted my design expertise to elevate their brands successfully.": "Scaling brands through multi-channel orchestration.",
    "180+": "100+",
    "design projects completed.": "brands enabled",
    "96%": "300M+",
    "Client satisfaction rate.": "device & community touchpoints",
    "15+": "₹120+ Cr",
    "Years of experience": "in aggregated sales driven",
    "Available For Work": "Call to Action",
    "Curious about what we can create together? Let’s bring something extraordinary to life!": "We actively collaborate with brands, agencies, and platforms on strategic synergies, co-creation, and long-term growth partnerships.",
    "Book a Free Call": "Partner with Parivestra",
    "hello@framebase.design": "hello@parivestra.com",
    "Meet Meily": "Our Partnership Models",
    "I'm Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.": "Access to Distribution, GTM Execution, Affiliate Stack Creation, AI Marketing Infrastructure, ORM, and Consulting.",
    "Recent Works": "Brands We’ve Worked With",
    "All Projects": "View Clientele",
    "FAQ'S": "What Parivestra Offers",
    "Answers": "Offerings",
    "Find answers to common questions about my design process, services etc…": "Proprietary distribution channels, sales-linked activations, co-IP solutions, and franchise-led expansion models.",
    "What services do you provide?": "Consumer brands & D2C companies",
    "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.": "FMCG, Fintech, Community-first businesses, and Agencies.",
};

const textsToReplace = Object.keys(textMappings);

// Replace function
// Iterate all text nodes to keep tags intact
$('body *').contents().each(function () {
    if (this.nodeType === 3) { // Text node
        let text = $(this).text();
        let trimmed = text.trim();
        if (textMappings[trimmed]) {
            $(this).replaceWith(text.replace(trimmed, textMappings[trimmed]));
        } else {
            // Partial replacements for large headings
            for (let [key, val] of Object.entries(textMappings)) {
                if (trimmed.includes(key)) {
                    text = text.replace(key, val);
                    $(this).replaceWith(text);
                }
            }
        }
    }
});

// Update the navigation text
$('a').each((i, el) => {
    let text = $(el).text().trim();
    if (text === 'Services') $(el).text('Thesis');
    if (text === 'Projects') $(el).text('Scale');
    if (text === 'Testimonials') $(el).text('Clientele');
    if (text === 'Contact') $(el).text('Partners');
    if (text === 'Get Template') $(el).text('Partner with Us');
});

// 3. Extract the framer scripts (important for animations)
const scripts = [];
$('script').each((i, el) => {
    scripts.push($.html(el));
});
fs.writeFileSync('src/portfolite-scripts.js', `export const getScripts = () => \`${scripts.join('\\n')}\`;`);

// 4. Save the DOM wrapper inside a giant string
const bodyHtml = $('div#main').parent().html();
fs.writeFileSync('src/portfolite-body.html', bodyHtml);

console.log('HTML and JS saved');
