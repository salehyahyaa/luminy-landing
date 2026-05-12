import './styles/main.css';
import { LegalPageApp } from './app/LegalPageApp';
import { siteConfig } from './config/site.config';
import { startMarketingChrome } from './ui/startMarketingChrome';

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new LegalPageApp(siteConfig, 'cookie');
app.mount(mountPoint);

startMarketingChrome();
