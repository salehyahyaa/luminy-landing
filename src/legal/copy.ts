/** Static legal copy — review with counsel before launch. */

export const LEGAL_SUPPORT_EMAIL = 'support@luminyy.com' as const;

export type LegalPageId = 'privacy' | 'terms' | 'cookie' | 'data';

export const PRIVACY_HTML = `
<h1 class="legal-prose__h1" id="legal-privacy-title">Privacy Policy</h1>
<p>Luminy (“we,” “our,” or “us”) explains how we collect, use, and share information when you use our website, mobile applications, and related services (collectively, the “Services”). By using the Services, you agree to this Privacy Policy. If you do not agree, please do not use the Services.</p>
<p class="legal-prose__related">See also our <a href="terms.html">Terms of Use</a>, <a href="cookie-policy.html">Cookie Policy</a>, and <a href="data-policy.html">Data Policy</a>.</p>

<h2 class="legal-prose__h2">1. Information we collect</h2>
<p>Depending on how you use the Services, we may collect:</p>
<ul class="legal-prose__list">
  <li><strong>Account information</strong> — such as name, email address, and credentials you provide when you register.</li>
  <li><strong>Financial connection data</strong> — information you choose to connect through third-party financial data partners (e.g. account types, balances, transaction details), subject to your consent and applicable agreements.</li>
  <li><strong>Usage and device data</strong> — such as app version, device type, operating system, log data, and how you interact with features.</li>
  <li><strong>Support communications</strong> — messages you send when you contact us.</li>
</ul>

<h2 class="legal-prose__h2">2. How we use information</h2>
<p>We use information to provide and improve the Services, personalize insights, keep your account secure, comply with law, communicate with you about updates or support, and understand aggregate usage trends.</p>

<h2 class="legal-prose__h2">3. How we share information</h2>
<p>We may share information with:</p>
<ul class="legal-prose__list">
  <li><strong>Service providers</strong> who assist us with hosting, analytics, customer support, security, and similar functions, bound by confidentiality and processing terms.</li>
  <li><strong>Financial data partners</strong> you authorize to link your accounts, as described in their terms and your in-app consent flows.</li>
  <li><strong>Legal and safety</strong> when required by law, regulation, legal process, or to protect rights, safety, and security.</li>
  <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets, with notice where required.</li>
</ul>
<p>We do not sell your personal information for monetary consideration.</p>

<h2 class="legal-prose__h2">4. Retention</h2>
<p>We retain information only as long as needed for the purposes above, unless a longer period is required by law. You may request deletion of your account subject to legal exceptions.</p>

<h2 class="legal-prose__h2">5. Security</h2>
<p>We implement administrative, technical, and organizational measures designed to protect your information. No method of transmission or storage is completely secure.</p>

<h2 class="legal-prose__h2">6. Your choices and rights</h2>
<p>Depending on your location, you may have rights to access, correct, delete, or export your personal information, and to object to or restrict certain processing. Contact us at <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a> to exercise these rights. You may opt out of promotional emails via the unsubscribe link in those messages.</p>

<h2 class="legal-prose__h2">7. Children</h2>
<p>The Services are not directed to children under 4, except where applicable law requires a higher minimum age in your jurisdiction. We do not knowingly collect personal information from children below that age.</p>

<h2 class="legal-prose__h2">8. International users</h2>
<p>We may process information in countries where we operate. Where required, we use appropriate safeguards for cross-border transfers.</p>

<h2 class="legal-prose__h2">9. Changes to this policy</h2>
<p>We may update this Privacy Policy from time to time. We will post the revised version on this page. Continued use after changes constitutes acceptance where permitted by law.</p>

<h2 class="legal-prose__h2">10. Contact</h2>
<p>For privacy questions or requests, email us at <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a></p>
`.trim();

export const TERMS_HTML = `
<h1 class="legal-prose__h1" id="legal-terms-title">Terms of Use</h1>
<p>These Terms of Use (“Terms”) govern your access to and use of Luminy’s website, mobile applications, and related services (the “Services”). By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.</p>
<p class="legal-prose__related">See also our <a href="privacy.html">Privacy Policy</a>, <a href="cookie-policy.html">Cookie Policy</a>, and <a href="data-policy.html">Data Policy</a>.</p>

<h2 class="legal-prose__h2">1. Eligibility and accounts</h2>
<p>You must be able to form a binding contract in your jurisdiction to use the Services. You are responsible for maintaining the confidentiality of your credentials and for activity under your account. Notify us promptly of unauthorized use.</p>

<h2 class="legal-prose__h2">2. The Services</h2>
<p>Luminy provides tools to help you view financial information, insights, and related features. The Services are for informational purposes and general money management support unless we state otherwise. We are not a bank, broker, investment adviser, or tax advisor. Nothing in the Services is financial, legal, or tax advice.</p>

<h2 class="legal-prose__h2">3. Third-party data and links</h2>
<p>Some features rely on third-party data providers or links to third-party sites. Your use of those services is subject to their terms and policies. We are not responsible for third-party content or availability.</p>

<h2 class="legal-prose__h2">4. Acceptable use</h2>
<p>You agree not to misuse the Services, including by attempting to gain unauthorized access, interfere with operation, scrape the Services in violation of these Terms, use the Services for unlawful purposes, or reverse engineer except as allowed by law.</p>

<h2 class="legal-prose__h2">5. Intellectual property</h2>
<p>The Services, including software, branding, and content we provide, are owned by Luminy or our licensors and are protected by intellectual property laws. Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable license to use the Services.</p>

<h2 class="legal-prose__h2">6. Disclaimers</h2>
<p>THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

<h2 class="legal-prose__h2">7. Limitation of liability</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMINY AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL. OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THE SERVICES WILL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID US FOR THE SERVICES IN THE TWELVE (12) MONTHS BEFORE THE CLAIM OR ONE HUNDRED U.S. DOLLARS (US$100), EXCEPT WHERE PROHIBITED BY LAW.</p>

<h2 class="legal-prose__h2">8. Indemnity</h2>
<p>You will defend and indemnify Luminy and its affiliates from claims, damages, and expenses arising from your misuse of the Services or violation of these Terms, to the extent permitted by law.</p>

<h2 class="legal-prose__h2">9. Suspension and termination</h2>
<p>We may suspend or terminate access to the Services if you violate these Terms or if we need to do so for legal, security, or operational reasons. Provisions that by their nature should survive will survive termination.</p>

<h2 class="legal-prose__h2">10. Governing law</h2>
<p>These Terms are governed by the laws of the jurisdiction Luminy designates for your region, without regard to conflict-of-law principles, except where mandatory consumer protections apply in your country of residence.</p>

<h2 class="legal-prose__h2">11. Changes</h2>
<p>We may modify these Terms from time to time. We will post the updated Terms on this page. Your continued use after the effective date of changes constitutes acceptance where permitted by law.</p>

<h2 class="legal-prose__h2">12. Contact</h2>
<p>For questions about these Terms, email us at <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a></p>
`.trim();

export const COOKIE_HTML = `
<h1 class="legal-prose__h1" id="legal-cookie-title">Cookie Policy</h1>
<p>This Cookie Policy explains how Luminy (“we,” “our,” or “us”) uses cookies and similar technologies on our website, web app, and related online Services. It should be read together with our <a href="privacy.html">Privacy Policy</a>.</p>
<p class="legal-prose__related">See also our <a href="data-policy.html">Data Policy</a> and <a href="terms.html">Terms of Use</a>.</p>

<h2 class="legal-prose__h2">1. What are cookies?</h2>
<p>Cookies are small text files stored on your device when you visit a site. Similar technologies include pixels, local storage, and device identifiers used in comparable ways. They help the Services remember preferences, keep you signed in where applicable, understand how the Services are used, and improve performance and security.</p>

<h2 class="legal-prose__h2">2. How we use cookies</h2>
<p>Depending on your choices and region, we may use:</p>
<ul class="legal-prose__list">
  <li><strong>Strictly necessary</strong> — required for core functionality (e.g. security, load balancing, remembering cookie preferences). These may be set without consent where allowed by law.</li>
  <li><strong>Functional</strong> — to remember settings such as language or display preferences.</li>
  <li><strong>Analytics</strong> — to understand aggregate usage, troubleshoot issues, and improve the Services. Where required, we rely on your consent before use.</li>
  <li><strong>Marketing</strong> — only if we offer such features and you opt in; we do not use non-essential marketing cookies without consent where law requires it.</li>
</ul>

<h2 class="legal-prose__h2">3. Third-party cookies</h2>
<p>Some cookies are placed by service providers we use (e.g. hosting, analytics, embedded content). Those partners process information according to their own policies. We seek to work with reputable providers and limit data shared to what they need to perform services for us.</p>

<h2 class="legal-prose__h2">4. Your choices</h2>
<p>You can control cookies through your browser settings (block, delete, or get notified). Blocking or clearing cookies may affect how the Services work (e.g. staying signed in). Where we provide a cookie or privacy preference tool in the Services, you can use it to adjust non-essential categories where available.</p>

<h2 class="legal-prose__h2">5. Mobile apps</h2>
<p>Our mobile applications may use software development kits (SDKs) and similar tools that collect device or usage information. Those practices are described in our <a href="privacy.html">Privacy Policy</a> and app store listings.</p>

<h2 class="legal-prose__h2">6. Changes</h2>
<p>We may update this Cookie Policy from time to time. We will post the revised version on this page.</p>

<h2 class="legal-prose__h2">7. Contact</h2>
<p>For questions about this Cookie Policy, email us at <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a></p>
`.trim();

export const DATA_POLICY_HTML = `
<h1 class="legal-prose__h1" id="legal-data-title">Data Policy</h1>
<p>This Data Policy summarizes how Luminy (“we,” “our,” or “us”) handles information in connection with our website, mobile applications, and related services (the “Services”). It complements our <a href="privacy.html">Privacy Policy</a>, which contains fuller detail on collection, use, sharing, and your rights.</p>
<p class="legal-prose__related">See also our <a href="cookie-policy.html">Cookie Policy</a> and <a href="terms.html">Terms of Use</a>.</p>

<h2 class="legal-prose__h2">1. Categories of data</h2>
<p>We process categories such as:</p>
<ul class="legal-prose__list">
  <li><strong>Identity and account</strong> — for example, name, email, and account identifiers you provide.</li>
  <li><strong>Financial and transaction-related information</strong> — when you choose to connect accounts or data through partners, subject to consent and partner terms.</li>
  <li><strong>Technical and usage</strong> — such as device type, app version, logs, and feature interactions.</li>
  <li><strong>Communications</strong> — messages you send to support or feedback channels.</li>
</ul>

<h2 class="legal-prose__h2">2. Purposes</h2>
<p>We use data to operate and improve the Services, secure accounts, provide insights you request, comply with law, communicate about the Services, and understand aggregated trends. We do not sell your personal information for monetary consideration.</p>

<h2 class="legal-prose__h2">3. Legal bases (where applicable)</h2>
<p>Depending on your region, we may rely on contract performance, legitimate interests (balanced against your rights), consent where required, or legal obligation. See the <a href="privacy.html">Privacy Policy</a> for more detail.</p>

<h2 class="legal-prose__h2">4. Retention</h2>
<p>We keep data only as long as needed for the purposes described or as required by law. Retention periods vary by data type; for example, we may retain security logs for a limited period and account records until you delete your account subject to exceptions.</p>

<h2 class="legal-prose__h2">5. Sharing</h2>
<p>We share data with service providers under contracts, with financial data partners you authorize, when required by law, or as described in the <a href="privacy.html">Privacy Policy</a> (including business transfers with notice where required).</p>

<h2 class="legal-prose__h2">6. Security</h2>
<p>We apply administrative, technical, and organizational safeguards appropriate to the nature of the data. No system is perfectly secure; contact us if you believe your account has been compromised.</p>

<h2 class="legal-prose__h2">7. Your rights</h2>
<p>Depending on your location, you may have rights to access, correct, delete, export, or restrict processing of your personal information. To exercise these rights, email <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a>; see the <a href="privacy.html">Privacy Policy</a> for additional information.</p>

<h2 class="legal-prose__h2">8. International processing</h2>
<p>We may process information in countries where we or our providers operate. Where required, we implement appropriate safeguards for cross-border transfers.</p>

<h2 class="legal-prose__h2">9. Changes</h2>
<p>We may update this Data Policy from time to time. We will post the revised version on this page.</p>

<h2 class="legal-prose__h2">10. Contact</h2>
<p>For questions about this Data Policy, email us at <a href="mailto:${LEGAL_SUPPORT_EMAIL}">${LEGAL_SUPPORT_EMAIL}</a></p>
`.trim();

export const LEGAL_PAGE_CONTENT: Record<
  LegalPageId,
  { readonly titleId: string; readonly html: string }
> = {
  privacy: { titleId: 'legal-privacy-title', html: PRIVACY_HTML },
  terms: { titleId: 'legal-terms-title', html: TERMS_HTML },
  cookie: { titleId: 'legal-cookie-title', html: COOKIE_HTML },
  data: { titleId: 'legal-data-title', html: DATA_POLICY_HTML },
};
