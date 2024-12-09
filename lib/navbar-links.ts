import icon_github from '@/public/images/icons/github.svg';
import icon_slack from '@/public/images/icons/slack.svg';
import icon_twitter from '@/public/images/icons/twitter.svg';
const slackLink = 'https://io.permit.io/slack';

export const navLinks = [
	{
		id: 1,
		name: 'Solutions',
		isDrop: true,
		links: [
			{ id: 1, name: 'RBAC', link: 'https://www.permit.io/rbac' },
			{ id: 2, name: 'ABAC', link: 'https://www.permit.io/abac' },
			{
				id: 3,
				name: 'ReBAC',
				link: 'https://www.permit.io/rebac',
			},
			{ id: 4, name: 'Elements', link: 'https://www.permit.io/elements' },
			{ id: 5, name: 'FoAz', link: 'https://www.permit.io/foaz' },
			{ id: 6, name: 'Healthcare', link: 'https://www.permit.io/healthcare' },
		],
	},
	{
		id: 2,
		name: 'Learn',
		isDrop: true,
		links: [
			{ id: 1, name: 'Videos', link: 'https://www.permit.io/videos' },
			{ id: 2, name: 'Blog', link: 'https://www.permit.io/blog' },
			{
				id: 3,
				name: 'CSL Podcast',
				link: 'https://www.cmdshiftleft.com/',
				external: true,
			},
		],
	},
	{
		id: 3,
		name: 'Pricing',
		isDrop: false,
		link: 'https://www.permit.io/pricing',
	},
	{ id: 4, name: 'Docs', link: 'https://docs.permit.io', external: true },
	{
		id: 5,
		name: 'Company',
		isDrop: true,
		links: [
			{ id: 1, name: 'About', link: 'https://www.permit.io/about' },
			{ id: 2, name: 'Open Source', link: 'https://www.permit.io/open-source' },
			{ id: 3, name: 'Careers', link: 'https://www.permit.io/careers' },
			{ id: 4, name: 'Customers', link: 'https://www.permit.io/customers' },
		],
	},
];

export const socialMediaLink = [
	{
		id: 1,
		name: 'Twitter',
		link: 'https://twitter.com/permit_io',
		icon: icon_twitter,
	},
	{
		id: 2,
		name: 'Slack',
		link: slackLink,
		icon: icon_slack,
	},
	{
		id: 3,
		name: 'GitHub',
		link: 'https://github.com/permitio',
		icon: icon_github,
		data: async () => {
			const repo = await fetch('https://api.github.com/repos/permitio/opal');
			const data = await repo.json();
			const stargazers = data.stargazers_count;
			return `${(stargazers / 1000).toFixed(1)}k`;
		},
	},
];
