import './styles/main.css';
import { LuminyApp } from './app/LuminyApp';
import { siteConfig } from './config/site.config';
import { ScrollAmbientController } from './ui/ScrollAmbientController';
import { NavbarScrollAppearanceController } from './ui/NavbarScrollAppearanceController';

const mountPoint = document.querySelector<HTMLDivElement>('#app');

if (!mountPoint) {
  throw new Error('Missing #app mount point');
}

const app = new LuminyApp(siteConfig);
app.mount(mountPoint);

new ScrollAmbientController().start();
new NavbarScrollAppearanceController().start();
