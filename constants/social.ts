import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

export const SOCIAL_LINKS = [
	{
		title: 'GitHub',
		icon: Github,
		link: '/github',
		className: 'hover:bg-black',
	},
	{
		title: 'Twitter',
		icon: Twitter,
		link: '/twitter',
		className: 'hover:bg-[#239EF0]',
	},
	{
		title: 'Linkedin',
		icon: Linkedin,
		link: '/linkedin',
		className: 'hover:bg-[#0882BD]',
	},
	{
		title: 'Instagram',
		icon: Instagram,
		link: '/instagram',
		className:
			'hover:[background:radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]',
	},
]
