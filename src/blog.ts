import './styles/main.css';
import { BlogPageApp } from './app/BlogPageApp';
import { siteConfig } from './config/site.config';
import { startMarketingChrome } from './ui/startMarketingChrome';

document.body.classList.add('blog-chrome');

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new BlogPageApp(siteConfig);
app.mount(mountPoint);

startMarketingChrome();
