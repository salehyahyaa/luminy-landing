import './styles/main.css';
import { SuggestionsApp } from './app/SuggestionsApp';
import { siteConfig } from './config/site.config';
import { startMarketingChrome } from './ui/startMarketingChrome';

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new SuggestionsApp(siteConfig);
app.mount(mountPoint);

startMarketingChrome();
