import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        privacy: './privacy.html',
        terms: './terms.html',
        cookiePolicy: './cookie-policy.html',
        dataPolicy: './data-policy.html',
        suggestions: './suggestions.html',
        pricing: './pricing.html',
        faq: './faq.html',
        blog: './blog.html',
        blogReleasingSoon: './blog-releasing-soon.html',
      },
    },
  },
});
