import logoUrl from '../../images/luminy.png';

export interface SiteNavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface SiteNavAuth {
  readonly login: SiteNavItem;
  readonly signup: SiteNavItem;
}

export interface SiteFooterLink {
  readonly label: string;
  readonly href: string;
  /** Copies support email + shows toast instead of navigating. */
  readonly copySupportEmail?: boolean;
}

export interface SiteFooterColumn {
  readonly heading: string;
  readonly links: readonly SiteFooterLink[];
}

export interface SiteConfig {
  readonly brandName: string;
  readonly logoSrc: string;
  readonly logoAlt: string;
  /** Top of landing — use `index.html#top` so nav/footer work from multi-page routes like `privacy.html`. */
  readonly homeHref: string;
  readonly navItems: readonly SiteNavItem[];
  readonly navAuth: SiteNavAuth;
  readonly footerColumns: readonly SiteFooterColumn[];
  readonly copyright: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Luminy',
  logoSrc: logoUrl,
  logoAlt: 'Luminy logo',
  homeHref: 'index.html#top',
  navItems: [
    { id: 'home', label: 'Home', href: 'index.html#top' },
    { id: 'features', label: 'Features', href: 'index.html#features' },
    { id: 'use-cases', label: 'Use Cases', href: 'index.html#why-choose-luminy' },
    { id: 'pricing', label: 'Pricing', href: 'pricing.html' },
    { id: 'support', label: 'Support', href: 'index.html#footer' },
  ],
  navAuth: {
    login: { id: 'login', label: 'Login', href: '#' },
    signup: { id: 'signup', label: 'Sign up', href: '#' },
  },
  footerColumns: [
    {
      heading: 'Product',
      links: [
        { label: 'Pricing', href: 'pricing.html' },
        { label: 'Features', href: 'index.html#features' },
        { label: 'Demo', href: '#' },
        { label: 'Download for iOS', href: '#' },
        { label: 'Download for Mac', href: '#' },
      ],
    },
    {
      heading: 'About',
      links: [
        { label: 'About us', href: '#' },
        { label: 'Blog', href: 'blog.html' },
        { label: 'Suggestions', href: '#', copySupportEmail: true },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: 'privacy.html' },
        { label: 'Terms of use', href: 'terms.html' },
        { label: 'Cookie Policy', href: 'cookie-policy.html' },
        { label: 'Data policy', href: 'data-policy.html' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'FAQ', href: 'faq.html' },
        { label: 'Contact us', href: '#', copySupportEmail: true },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Luminy. All rights reserved.`,
};
