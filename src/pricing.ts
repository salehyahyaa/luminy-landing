import './styles/main.css';
import { PricingPageApp } from './app/PricingPageApp';
import { siteConfig } from './config/site.config';
import { startMarketingChrome } from './ui/startMarketingChrome';

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new PricingPageApp(siteConfig);
app.mount(mountPoint);

startMarketingChrome();
