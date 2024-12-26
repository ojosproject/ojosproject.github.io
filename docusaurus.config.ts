import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
	// Appears as the order the keys appear in
	// https://docusaurus.io/docs/api/docusaurus-config
	title: "Ojos Project - a UCI research project",
	url: "https://ojosproject.org",
	baseUrl: "/",

	favicon: "https://ojosproject.org/images/logo.png",
	trailingSlash: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	future: { experimental_faster: true },
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "description",
				content:
					"The Ojos Project is a research project developing a tablet-like device that can be used in an at-home hospice care setting. This device is being developed under Professor Mark S. Baldwin's Undergraduate Research Lab at the University of California, Irvine.",
			},
		},
	],

	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				blog: {
					path: "./news",
					routeBasePath: "/news",
					blogTitle: "Project News",
					blogDescription:
						"Stay updated with the Ojos Project, a research project at the University of California, Irvine. The Ojos Project is creating a hospice device to help with the coordination of hospice patient care.",
					blogSidebarCount: "ALL",
					onInlineAuthors: "throw",
					onUntruncatedBlogPosts: "throw",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{ from: "/join-us/", to: "/news/join-us/" },
					{ from: "/qr/", to: "/" }, // Old `/qr/`
					{ from: "/iris/", to: "/docs/iris/" },
					{
						from: "/docs/iris/requirements/",
						to: "https://docs.google.com/document/d/1EJlghYqhiPrZsjPUHxxG_WeHkHulPB4a-HF8fL7QsCs/",
					},
					{
						from: "/events/uci-symposium-2024/",
						to: "/",
					},
					{
						from: "/docs/url/meeting-reports/",
						to: "/docs/meeting-reports/",
					},
					{
						from: "/docs/url/members/",
						to: "/docs/members/",
					},
					{
						from: "/docs/url/proposal/",
						to: "/docs/proposal/",
					},
					{
						from: "/docs/policies/url-lab-attendance/",
						to: "/docs/policies/url-attendance/",
					},
					{
						from: "/data/gpg/",
						to: "/docs/members/",
					},
				],
			},
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "light",
			respectPrefersColorScheme: true,
		},
		image: "https://ojosproject.org/images/header.png",
		navbar: {
			title: "Ojos Project",
			logo: {
				alt: "Ojos Project logo",
				src: "https://ojosproject.org/images/logo-space.png",
				className: "ojos_logo_in_navbar",
			},
			items: [
				{
					label: "About",
					to: "/about/",
				},
				{
					label: "News",
					to: "/news/",
				},
				{
					label: "Our Team",
					to: "/docs/members/",
				},
				{
					label: "Meeting Reports",
					to: "/docs/meeting-reports/",
				},
				{
					label: "Documentation",
					to: "/docs/",
					position: "right",
				},
			],
		},
		footer: {
			links: [
				{
					title: "Ojos Project",
					items: [
						{
							label: "Discord",
							href: "https://discord.gg/SejmYUthEj",
						},
						{
							label: "GitHub",
							href: "https://github.com/ojosproject/",
						},
						{
							label: "Finances",
							href: "https://docs.google.com/spreadsheets/d/1W9qHV4Bm3wPtvsBWxmY4jpJY9JbhpSFIvcgRSFbrr78/",
						},
						{
							label: "Meeting Reports",
							to: "/docs/meeting-reports/",
						},
						{
							label: "Policies",
							to: "/docs/policies/",
						},
						{
							label: "Undergraduate Research Lab",
							href: "https://urlatuci.org/",
						},
					],
				},
				{
					title: "Documentation",
					items: [
						{
							label: "Iris Docs",
							to: "/docs/iris/",
						},
						{
							label: "Palliaview Docs",
							href: "https://docs.google.com/document/d/1l60y9Kog3sbdiTm0TlWQSpLGMTpvvO05bGnn72r-dA8/",
						},
						{
							label: "Website Docs",
							to: "/docs/website/",
						},
					],
				},
			],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
