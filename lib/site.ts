/** Outbound links and copy for the docs header, sidebar and footer. */

export const SITE = 'https://praxis.net';

export const LINKS = {
  signup: 'https://app.praxis.causq.com/auth/signup',
  github: 'https://github.com/CausQ-Networks/praxis',
  status: 'https://status.praxis.net',
  trust: 'https://trust.praxis.net',
} as const;

/** announcement card at the top of the sidebar; bump `id` when the copy changes */
export const FEATURE_BANNER = {
  id: 'ai-gateway',
  badge: 'New',
  title: 'AI Gateway is now available',
  description: 'Identity-aware access to any AI provider. No API keys to hand out.',
  href: '/manage/ai/overview',
};

export const FEATURE_BANNER_STORAGE_KEY = 'praxis:docs-feature-banner';
export const FEATURE_BANNER_DISMISSED_ATTR = 'data-feature-banner-dismissed';

/** marks <html> before first paint so a dismissed banner never flashes */
export const FEATURE_BANNER_INIT_SCRIPT = `try{if(localStorage.getItem(${JSON.stringify(
  FEATURE_BANNER_STORAGE_KEY,
)})===${JSON.stringify(FEATURE_BANNER.id)})document.documentElement.setAttribute(${JSON.stringify(
  FEATURE_BANNER_DISMISSED_ATTR,
)},"")}catch(e){}`;

export const FOOTER_LEGAL_ENTITY = 'CausQ Inc.';

export const FOOTER_ADDRESS = [
  '169 Madison Ave STE 81373',
  'New York, New York 10016',
  'United States',
] as const;

export type FooterLink = { label: string; href: string };

/** Footer columns, laid out like the praxis.net footer; local paths are docs pages. */
export const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Get started',
    links: [
      { label: 'Introduction', href: '/' },
      { label: 'How Praxis Works', href: '/about/how-praxis-works' },
      { label: 'Cloud vs. Self-Hosted', href: '/about/praxis-cloud-vs-self-hosted' },
      { label: 'System Architecture', href: '/development/system-architecture' },
    ],
  },
  {
    title: 'Manage',
    links: [
      { label: 'Sites', href: '/manage/sites/understanding-sites' },
      { label: 'Resources', href: '/manage/resources/understanding-resources' },
      { label: 'Clients', href: '/manage/clients/understanding-clients' },
      { label: 'Identity Providers', href: '/manage/identity-providers/add-an-idp' },
      { label: 'AI Gateway', href: '/manage/ai/overview' },
      { label: 'Integration API', href: '/manage/integration-api' },
    ],
  },
  {
    title: 'Self-host',
    links: [
      { label: 'Quick Install', href: '/self-host/quick-install' },
      { label: 'Choosing a VPS', href: '/self-host/choosing-a-vps' },
      { label: 'Docker Compose', href: '/self-host/manual/docker-compose' },
      { label: 'DNS & Networking', href: '/self-host/dns-and-networking' },
      { label: 'How to Update', href: '/self-host/how-to-update' },
      { label: 'Enterprise Edition', href: '/self-host/enterprise-edition' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: `${SITE}/discord` },
      { label: 'Slack', href: `${SITE}/slack` },
      { label: 'GitHub', href: 'https://github.com/CausQ-Networks/praxis' },
      { label: 'Discussions', href: 'https://github.com/CausQ-Networks/praxis/discussions' },
      { label: 'Contribution Guide', href: '/development/contributing' },
      { label: 'Feature Requests & Bugs', href: '/development/feature-requests-and-bug-reports' },
    ],
  },
  {
    title: 'Praxis',
    links: [
      { label: 'Website', href: SITE },
      { label: 'Downloads', href: `${SITE}/downloads` },
      { label: 'Release Notes', href: `${SITE}/news/tags/release` },
      { label: 'Pricing', href: `${SITE}/pricing` },
      { label: 'Trust Center', href: 'https://trust.praxis.net' },
      { label: 'Status', href: 'https://status.praxis.net' },
    ],
  },
];
