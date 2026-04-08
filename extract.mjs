import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('portfolite.html', 'utf-8');
const $ = cheerio.load(html);

const texts = [];
// Find all leaf elements with text
$('body *').each((i, el) => {
    if ($(el).children().length === 0) {
        const text = $(el).text().trim();
        if (text && text.length > 2) {
            texts.push(text);
        }
    }
});

const uniqueTexts = [...new Set(texts)];
fs.writeFileSync('texts.txt', uniqueTexts.join('\n'));
console.log('Saved texts mapping to texts.txt');
