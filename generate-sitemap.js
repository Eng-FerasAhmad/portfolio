import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'node:fs';

// Create a write stream for the sitemap.xml file
const writeStream = createWriteStream('./public/sitemap.xml');

// Initialize the SitemapStream with your hostname
const sitemap = new SitemapStream({ hostname: 'https://feras-ahmad.de' });

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Write URLs to the sitemap
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });

// End the stream to generate the sitemap
sitemap.end();

writeStream.on('finish', () => {
    console.log('Sitemap created successfully.');
});
