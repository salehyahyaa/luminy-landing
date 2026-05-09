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

export interface SiteFooterColumn {
  readonly heading: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
}

export interface SiteConfig {
  readonly brandName: string;
  readonly logoSrc: string;
  readonly logoAlt: string;
  readonly navItems: readonly SiteNavItem[];
  readonly navAuth: SiteNavAuth;
  readonly footerColumns: readonly SiteFooterColumn[];
  readonly copyright: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Luminy',
  logoSrc: logoUrl,
  logoAlt: 'Luminy logo',
  navItems: [
    { id: 'home', label: 'Home', href: '#top' },
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'use-cases', label: 'Use Cases', href: '#use-cases' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'support', label: 'Support', href: '#footer' },
  ],
  navAuth: {
    login: { id: 'login', label: 'Login', href: '#' },
    signup: { id: 'signup', label: 'Sign up', href: '#' },
  },
  footerColumns: [
    {
      heading: 'Product',
      links: [
        { label: 'Pricing', href: '#pricing' },
        { label: 'Features', href: '#features' },
        { label: 'Demo', href: '#' },
        { label: 'Download for iOS', href: '#' },
        { label: 'Download for Mac', href: '#' },
      ],
    },
    {
      heading: 'About',
      links: [
        { label: 'About us', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Suggestions', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of use', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Data policy', href: '#' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Contact us', href: '#' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Luminy. All rights reserved.`,
};
