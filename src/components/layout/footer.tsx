import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
export function Footer() {
	type FooterLinkGroup = {
		title: string;
		links: NavLink[];
	};
	type NavLink = {
		label: string;
		href: string;
	};

	const footerLinks: FooterLinkGroup[] = [
		{
			title: 'Product',
			links: [
				{ label: 'AI Studio', href: '/ai-humanizer' },
				{ label: 'Voice systems', href: '/#voice' },
				{ label: 'Collaboration', href: '/#collaboration' },
			],
		},
		{
			title: 'Solutions',
			links: [
				{ label: 'Growth teams', href: '/#growth' },
				{ label: 'Enablement', href: '/#enablement' },
				{ label: 'Founders', href: '/#founders' },
			],
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: '/#about' },
				{ label: 'Careers', href: '/#careers' },
				{ label: 'Press', href: '/#press' },
			],
		},
	];
	return (
		<footer className="space-y-10 rounded-3xl border border-border/70 bg-card/60 px-6 py-12 sm:px-10 lg:px-14">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
				<div className="space-y-4">
					<Link
						href="/"
						className="inline-flex items-center gap-3 text-lg font-semibold text-foreground"
					>
						<span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground">
							Q
						</span>
						Quilbot Studio
					</Link>
					<p className="text-base text-muted-foreground">
						Hybrid creative partners pairing human storytellers with AI
						co-pilots so every launch feels intentional, on-brand, and fast.
					</p>
					<Button
						variant="ghost"
						className="gap-2 px-0 text-sm text-foreground"
						asChild
					>
						<Link href="mailto:hello@quilbot.studio">
							hello@quilbot.studio
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{footerLinks.map((group) => (
						<div key={group.title} className="space-y-3 text-sm">
							<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
								{group.title}
							</p>
							<ul className="space-y-2">
								{group.links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-muted-foreground transition-colors hover:text-foreground"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
				<p>© 2025 Quilbot Studio. All rights reserved.</p>
				<div className="flex flex-wrap gap-6">
					<Link
						href="/privacy"
						className="transition-colors hover:text-foreground"
					>
						Privacy
					</Link>
					<Link
						href="/terms"
						className="transition-colors hover:text-foreground"
					>
						Terms
					</Link>
					<Link
						href="/sitemap"
						className="transition-colors hover:text-foreground"
					>
						Site map
					</Link>
				</div>
			</div>
		</footer>
	);
}
