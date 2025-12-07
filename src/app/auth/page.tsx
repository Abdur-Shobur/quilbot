'use client';

import Link from 'next/link';
import * as React from 'react';

import type { LucideIcon } from 'lucide-react';
import {
	ArrowLeft,
	CheckCircle2,
	Lock,
	Mail,
	ShieldCheck,
	Sparkles,
	UserPlus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Benefit = {
	title: string;
	description: string;
	icon: LucideIcon;
};

const benefits: Benefit[] = [
	{
		title: 'One workspace, every ritual',
		description:
			'Briefs, drafts, approvals, and playbooks stay synced so teams always know the next action.',
		icon: Sparkles,
	},
	{
		title: 'Secure AI guardrails',
		description:
			'Role-based access, policy-aware prompts, and audit logs keep compliance teams confident.',
		icon: ShieldCheck,
	},
	{
		title: 'Human + AI collaboration',
		description:
			'Writers, strategists, and copilots share context so outputs feel unmistakably on-brand.',
		icon: CheckCircle2,
	},
];

type AuthMode = 'signin' | 'register';

export default function AuthPage() {
	const [mode, setMode] = React.useState<AuthMode>('signin');

	const signInForm = (
		<form className="space-y-4 rounded-2xl border border-border/70 bg-card/40 p-5 shadow-sm">
			<div className="flex items-center gap-3 text-sm font-semibold text-foreground">
				<Lock className="size-4 text-primary" />
				Sign in
			</div>
			<div className="space-y-2">
				<label htmlFor="login-email" className="text-sm text-muted-foreground">
					Work email
				</label>
				<Input
					id="login-email"
					type="email"
					placeholder="you@company.com"
					required
				/>
			</div>
			<div className="space-y-2">
				<label
					htmlFor="login-password"
					className="text-sm text-muted-foreground"
				>
					Password
				</label>
				<Input
					id="login-password"
					type="password"
					placeholder="••••••••"
					required
				/>
			</div>
			<div className="flex items-center justify-between text-sm">
				<label className="flex items-center gap-2 text-muted-foreground">
					<input type="checkbox" className="size-4 rounded border-border/70" />
					Remember me
				</label>
				<Link
					href="/reset"
					className="text-primary underline-offset-4 hover:underline"
				>
					Forgot password?
				</Link>
			</div>
			<Button type="submit" className="w-full">
				Access workspace
			</Button>
		</form>
	);

	const registerForm = (
		<form className="space-y-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 shadow-sm">
			<div className="flex items-center gap-3 text-sm font-semibold text-foreground">
				<UserPlus className="size-4 text-primary" />
				Create account
			</div>
			<div className="space-y-2">
				<label
					htmlFor="register-name"
					className="text-sm text-muted-foreground"
				>
					Full name
				</label>
				<Input
					id="register-name"
					type="text"
					placeholder="Jordan Patel"
					required
				/>
			</div>
			<div className="space-y-2">
				<label
					htmlFor="register-email"
					className="text-sm text-muted-foreground"
				>
					Work email
				</label>
				<Input
					id="register-email"
					type="email"
					placeholder="you@company.com"
					required
				/>
			</div>
			<div className="space-y-2">
				<label
					htmlFor="register-password"
					className="text-sm text-muted-foreground"
				>
					Create password
				</label>
				<Input
					id="register-password"
					type="password"
					placeholder="At least 8 characters"
					required
				/>
			</div>
			<div className="text-xs text-muted-foreground">
				By continuing you agree to our{' '}
				<Link
					href="/terms"
					className="text-primary underline-offset-4 hover:underline"
				>
					Terms
				</Link>{' '}
				and{' '}
				<Link
					href="/privacy"
					className="text-primary underline-offset-4 hover:underline"
				>
					Privacy Policy
				</Link>
				.
			</div>
			<Button type="submit" className="w-full" variant="secondary">
				Start collaborating
			</Button>
		</form>
	);
	return (
		<main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-12 sm:px-6 lg:px-8">
			<section className="grid gap-10 rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
				<div className="space-y-8">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						<ArrowLeft className="size-4" />
						Back to home
					</Link>

					<div className="space-y-6">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Access Quilbot Studio
						</p>
						<h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground">
							Sign in or create your account to unlock human + AI workflows
							built for modern creative teams.
						</h1>
						<p className="text-base text-muted-foreground">
							Join strategists, lifecycle marketers, founders, and enablement
							leaders using Quilbot to ship on-brand campaigns 4× faster. Your
							workspace includes AI copilots, live collaboration rooms, and
							activation playbooks ready on day one.
						</p>
					</div>

					<div className="space-y-4 rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm">
						<p className="text-sm font-semibold text-foreground">
							Why teams choose us
						</p>
						<div className="grid gap-4 sm:grid-cols-2">
							{benefits.map((benefit) => (
								<div
									key={benefit.title}
									className="space-y-2 rounded-xl border border-border/60 bg-card/40 p-4"
								>
									<div className="flex items-center gap-3">
										<benefit.icon className="size-5 text-primary" />
										<p className="text-sm font-medium text-foreground">
											{benefit.title}
										</p>
									</div>
									<p className="text-xs text-muted-foreground">
										{benefit.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="space-y-8 rounded-3xl border border-border/80 bg-background/80 p-6 shadow-lg">
					<div className="space-y-2 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Workspace access
						</p>
						<h2 className="text-2xl font-semibold text-foreground">
							Log in or start collaborating
						</h2>
					</div>

					<div className="space-y-8">
						<div className="flex justify-center">
							<div className="inline-flex rounded-full border border-border/60 bg-card/40 p-1">
								<button
									type="button"
									onClick={() => setMode('signin')}
									className={cn(
										'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
										mode === 'signin'
											? 'bg-primary text-primary-foreground shadow-sm'
											: 'text-muted-foreground hover:text-foreground'
									)}
								>
									Sign in
								</button>
								<button
									type="button"
									onClick={() => setMode('register')}
									className={cn(
										'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
										mode === 'register'
											? 'bg-primary text-primary-foreground shadow-sm'
											: 'text-muted-foreground hover:text-foreground'
									)}
								>
									Create account
								</button>
							</div>
						</div>

						{mode === 'signin' ? signInForm : registerForm}

						<div className="rounded-2xl border border-border/70 bg-card/30 p-4 text-sm text-muted-foreground">
							<Mail className="mb-2 size-4 text-primary" />
							Need to onboard a full team?{' '}
							<Link
								href="mailto:hello@quilbot.studio"
								className="text-primary underline-offset-4 hover:underline"
							>
								Contact us for concierge setup
							</Link>
							.
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
