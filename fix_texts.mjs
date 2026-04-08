import fs from 'fs';
import * as cheerio from 'cheerio';

let html = fs.readFileSync('src/portfolite-body.html', 'utf-8');
const $ = cheerio.load(html, { decodeEntities: false });

// Helper to replace text on leaf nodes
function replaceLeafText(targetText, newText) {
    let done = false;
    $('body *').contents().each(function () {
        if (!done && this.nodeType === 3) {
            if ($(this).text().trim() === targetText) {
                $(this).replaceWith(newText);
                done = true;
            }
        }
    });
}

// 1. Fix "Branding that you need Indeed"
replaceLeafText('Branding', 'Distribution, engineered for outcomes.');
// Zero out the rest
['that', 'you', 'need', 'Indeed'].forEach(word => {
    $('body *').contents().each(function () {
        if (this.nodeType === 3 && $(this).text().trim() === word) {
            $(this).replaceWith(' ');
        }
    });
});

// 2. Fix the description below it
const descWords = [
    "Elevate", "your", "brand", "with", "custom", "identity", "and", "package", "design.",
    "Showcase", "story", "through", "bold", "visuals", "strategic", "design", "solutions."
];
replaceLeafText('Elevate', 'Parivestra is a modern distribution and growth infrastructure company. We sit at the intersection of AI-optimized marketing, influencer ecosystems, and offline distribution.');
descWords.slice(1).forEach(word => {
    let replaced = false;
    $('body *').contents().each(function () {
        if (!replaced && this.nodeType === 3 && $(this).text().trim() === word) {
            $(this).replaceWith(' ');
            replaced = true;
        }
    });
});

// 3. Meet Meily
const meilyBio = [
    "I'm", "Meily,", "a", "passionate", "Brand", "Identity", "&", "Package", "Designer", "based", "in", "tokyo.",
    "I", "specialize", "in", "crafting", "bold", "visual", "identities", "and", "packaging", "that", "captivate",
    "and", "inspire,", "blending", "creativity", "with", "strategy", "to", "elevate", "brands."
];
replaceLeafText("I'm", "We believe distribution should be community-first, data-led, and outcome-driven. Every channel we activate is designed to move brands closer to real business metrics \u2014 sales, adoption, retention, and long-term market presence.");
meilyBio.slice(1).forEach(word => {
    let replaced = false;
    $('body *').contents().each(function () {
        if (!replaced && this.nodeType === 3 && $(this).text().trim() === word) {
            $(this).replaceWith(' ');
            replaced = true;
        }
    });
});

// Replace "design projects completed." etc.
replaceLeafText("design", "brands");
replaceLeafText("projects", "enabled");
replaceLeafText("completed.", "across the globe.");
replaceLeafText("Client", "");
replaceLeafText("satisfaction", "device & community");
replaceLeafText("rate.", "touchpoints.");
replaceLeafText("Years", "120+ Cr in");
replaceLeafText("of", "aggregated");
replaceLeafText("experience", "sales driven.");

// Write back
fs.writeFileSync('src/portfolite-body.html', $.html());
console.log('Fixed fragmented texts using DOM traversal!');
