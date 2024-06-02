import { Link } from '@/components/ui/link'
import { Title } from '@/components/ui/title'

const USES = [
	{
		title: 'Desk',
		items: [
			{
				title: 'MacBook M2 Pro 14"',
				description:
					'16 GB RAM and 256GB storage, the perfect balance for my needs.',
				link: 'https://www.amazon.com/Apple-MacBook-Laptop-10%E2%80%91core-16%E2%80%91core/dp/B0BSHDVBXZ',
			},
			{
				title: 'AirPods 2 Pro',
				description: 'Great sound quality and noise cancellation.',
				link: 'https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized',
			},
			{
				title: 'NuPhy Air75',
				description:
					"Compact, wireless, and with a great battery life. I'm in love.",
				link: 'https://nuphy.com/collections/keyboards/products/halo75-v2-qmk-via-wireless-custom-mechanical-keyboard',
			},
			{
				title: 'MX Master 3S',
				description: 'Ergonomic, customizable, and with a long battery life.',
				link: 'https://www.amazon.com/Logitech-MX-Master-3S-Performance/dp/B0B11LJ69K',
			},
			{
				title: 'Dell UltraSharp 27" 4K Monitor',
				description: 'Fidelity and color accuracy are key for my work.',
				link: 'https://www.amazon.com/Dell-U2723QE-UltraSharp-USB-C-Monitor/dp/B09TQZP9CL',
			},
			{
				title: 'SlikDesk',
				description: 'Standing desk with a minimal design and a sturdy build.',
				link: 'https://loja.slik.com.br/produtos/slikdesk-high-mesa-com-regulagem-de-altura-eletrica/',
			},
			{
				title: 'DX Racer Wide W0-N',
				description: 'I sit all day, so I might as well get a good chair.',
				link: 'https://www.dxracer.com/',
			},
		],
	},

	{
		title: 'Coding',
		items: [
			{
				title: 'VS Code',
				description: 'VS Code like everybody else.',
				link: 'https://code.visualstudio.com',
			},

			{
				title: 'JetBrains Mono',
				description:
					'The font I use for coding. It has ligatures and it looks great.',
				link: 'https://www.jetbrains.com/lp/mono/',
			},
			{
				title: 'Monokai Night',
				description:
					'My favorite theme. I tried others, but I always come back.',
				link: 'https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night',
			},
			{
				title: 'Bearded Icons',
				description: 'Minimalistic icons. They are easy to recognize.',
				link: 'https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedicons',
			},
		],
	},
	{
		title: 'Apps',
		items: [
			{
				title: 'Firefox',
				description:
					'My browser of choice. Fast, private, and no chromium like.',
				link: 'https://www.mozilla.org/firefox',
			},
			{
				title: 'Bitwarden',
				description: 'My password manager of choice. Open-source and free.',
				link: 'https://bitwarden.com',
			},
			{
				title: 'Raycast',
				description:
					'An app launcher that I use to open apps, run scripts, and much more.',
				link: 'https://www.raycast.com/',
			},
			{
				title: 'Kap',
				description:
					'A simple and free screen recorder. I use it to record my screen.',
				link: 'https://getkap.co/',
			},
			{
				title: 'NextDNS',
				description: 'A DNS resolver that blocks ads and trackers.',
				link: 'https://nextdns.io/',
			},
			{
				title: 'Apple Mail',
				description:
					'I use Apple Mail for my personal and work emails. It works great.',
				link: 'https://www.icloud.com/mail',
			},
			{
				title: 'AltTab',
				description:
					'A better app switcher for macOS. It works like Windows alt+tab.',
				link: 'https://alt-tab-macos.netlify.app/',
			},
			{
				title: 'Shottr',
				description: 'A screenshot and annotation tool for macOS.',
				link: 'https://shottr.cc/',
			},
			{
				title: 'Pocket Casts',
				description: 'The best podcast app. I use it every day.',
				link: 'https://pocketcasts.com/',
			},
		],
	},
]

const UsesPage = () => {
	return (
		<div className="container selection:bg-purple-500 selection:text-black">
			<div className="space-y-1">
				<Title className="from-purple-500 to-blue-500">Personal Uses</Title>

				<h2 className="text-muted text-lg">
					Here are some of the tools, apps, and gear that I use on a daily
					basis.
				</h2>
			</div>

			<div className="space-y-10 mt-10">
				{USES.map((use) => (
					<div key={use.title} className="space-y-4">
						<h2 className="text-2xl font-black">{use.title}</h2>

						<ul className="space-y-2 list-disc list-inside pl-6">
							{use.items.map((item) => (
								<li className="flex gap-2" key={item.title}>
									<Link
										href={item.link}
										className="underline underline-offset-4 hover:text-purple-500 transition"
										isExternal
									>
										{item.title}
									</Link>

									<span className="text-muted"> - {item.description}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default UsesPage
