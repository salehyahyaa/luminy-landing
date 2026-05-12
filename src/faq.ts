import './styles/main.css';
import { FaqPageApp } from './app/FaqPageApp';
import { siteConfig } from './config/site.config';
import { startMarketingChrome } from './ui/startMarketingChrome';

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new FaqPageApp(siteConfig);
app.mount(mountPoint);

startMarketingChrome();
