'use client';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
type NavLink = {
	label: string;
	href: string;
};
const navLinks: NavLink[] = [
	{ label: 'Studio', href: '/ai-humanizer' },
	{ label: 'About', href: '/about' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Terms', href: '/terms' },
];

export function Header() {
	const pathname = usePathname();
	const isActive = (href: string) => pathname === href;
	return (
		<header className="rounded-2xl border border-border/70 bg-card/60 px-6 py-6 shadow-sm sm:px-10 lg:px-14">
			<div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex items-center justify-between gap-4">
					<Link
						href="/"
						className="flex items-center gap-3 text-lg font-semibold text-foreground"
					>
						<span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground">
							Q
						</span>
						Quilbot Studio
					</Link>
					<Button size="sm" className="gap-2 lg:hidden" asChild>
						<Link href="/ai-humanizer">
							Get started
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>
				<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
					<nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
						{navLinks.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={cn(
									'transition-colors hover:text-foreground',
									isActive(item.href) && 'text-primary'
								)}
							>
								{item.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-3 lg:gap-4">
						<ThemeToggle />
						<div className="hidden items-center gap-3 lg:flex">
							<Button variant="outline" asChild>
								<Link href="/ai-humanizer">Try for free</Link>
							</Button>
							<Button className="gap-2" asChild>
								<Link href="/auth">
									Login
									<ArrowRight className="size-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
