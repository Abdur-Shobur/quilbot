'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
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
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const closeMobileNav = () => setMobileNavOpen(false);

	return (
		<header className="rounded-2xl border mb-8 border-border/70 bg-card/60 px-6 py-4 shadow-sm sm:px-10 lg:sticky lg:top-6 lg:z-40 lg:px-14">
			<div className="flex items-center justify-between gap-4 lg:hidden">
				<Link
					href="/"
					className="flex items-center gap-3 text-lg font-semibold text-foreground"
				>
					<span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground">
						Q
					</span>
					Quilbot Studio
				</Link>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Button size="sm" className="hidden sm:flex gap-2" asChild>
						<Link href="/ai-humanizer">
							Get started
							<ArrowRight className="size-4" />
						</Link>
					</Button>
					<Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
						<SheetTrigger asChild>
							<Button
								size="icon"
								variant="outline"
								className="shrink-0"
								aria-label="Toggle navigation menu"
							>
								<Menu className="size-4" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="px-0 py-10">
							<div className="flex h-full flex-col gap-6 px-6">
								<nav className="flex flex-col gap-4 text-base font-semibold text-foreground">
									{navLinks.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											onClick={closeMobileNav}
											className={cn(
												'rounded-lg px-2 py-1.5 transition-colors hover:text-primary',
												isActive(item.href)
													? 'bg-muted text-primary'
													: 'text-muted-foreground'
											)}
										>
											{item.label}
										</Link>
									))}
								</nav>
								<div className="mt-auto flex flex-col gap-3">
									<Button variant="outline" asChild>
										<Link href="/ai-humanizer" onClick={closeMobileNav}>
											Try for free
										</Link>
									</Button>
									<Button className="gap-2" asChild>
										<Link href="/auth" onClick={closeMobileNav}>
											Login
											<ArrowRight className="size-4" />
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
			<div className="hidden items-center justify-between gap-8 lg:flex">
				<Link
					href="/"
					className="flex items-center gap-3 text-lg font-semibold text-foreground"
				>
					<span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground">
						Q
					</span>
					Quilbot Studio
				</Link>
				<div className="flex flex-1 items-center justify-end gap-8">
					<nav className="flex flex-wrap gap-x-6 text-sm font-medium text-muted-foreground">
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
					<div className="flex items-center gap-4">
						<ThemeToggle />
						<div className="flex items-center gap-3">
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
