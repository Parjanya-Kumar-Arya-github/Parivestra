import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('portfolite.html', 'utf-8');
const $ = cheerio.load(html);

// Extract CSS
const styles = $('style').map((i, el) => $(el).html()).get().join('\n');
fs.writeFileSync('portfolite-styles.css', styles);
console.log('CSS saved to portfolite-styles.css');

// Find major sections or text to see how to replace
const body = $('body');
console.log('Body classes:', body.attr('class'));

// Find text nodes that look like headings to understand structure
$('h1, h2, h3, h4, h5, h6, p').each((i, el) => {
    const text = $(el).text().trim().replace(/\n/g, ' ');
    if (text && i < 20) {
        console.log($(el).prop('tagName'), text.substring(0, 50));
    }
});

// Save a prettified version of the body for inspection (excluding SVG paths which take up huge space)
$('svg path').remove();
fs.writeFileSync('portfolite-body.html', body.html() || '');
console.log('Body HTML saved to portfolite-body.html');
