import Link from 'next/link';

import type { LucideIcon } from 'lucide-react';
import {
	ArrowRight,
	CheckCircle2,
	Layers,
	Lightbulb,
	PenTool,
	Shield,
	Sparkles,
	Timer,
	Zap,
} from 'lucide-react';

import { Layout } from '@/components/layout/layout';
import { Button } from '@/components/ui/button';

type Feature = {
	title: string;
	description: string;
	icon: LucideIcon;
	metric: string;
};

type WorkflowStep = {
	title: string;
	description: string;
	icon: LucideIcon;
	duration: string;
};

const features: Feature[] = [
	{
		title: 'On-brand drafts, instantly',
		description:
			'Feed briefs, research, and reference work to our AI studio and receive polished first drafts that already sound like you.',
		icon: Sparkles,
		metric: '4× faster',
	},
	{
		title: 'Creative guardrails baked in',
		description:
			'Tone, audience, claims, and compliance notes stay attached to every output so revisions are intentional instead of guesswork.',
		icon: Shield,
		metric: '0 off-brief',
	},
	{
		title: 'Live collaboration hub',
		description:
			'Writers, strategists, and stakeholders review in one workspace with trackable edits and AI suggestions you can accept or refine.',
		icon: Layers,
		metric: '1 source of truth',
	},
];

const workflowSteps: WorkflowStep[] = [
	{
		title: 'Strategize',
		description:
			'We host a 45-minute intake to unpack campaign goals, voice rules, and existing assets before anyone writes a word.',
		icon: Lightbulb,
		duration: 'Day 0',
	},
	{
		title: 'Co-create',
		description:
			'AI co-pilots spin up drafts, while humans edit for story, insights, and rigor. You can peek in or leave it to us.',
		icon: PenTool,
		duration: 'Day 1–2',
	},
	{
		title: 'Review',
		description:
			'Stakeholders comment directly on components, toggle alt versions, and compare voice options with a single click.',
		icon: Timer,
		duration: 'Day 3',
	},
	{
		title: 'Activate',
		description:
			'Approved assets ship to your CMS, ads manager, or sales decks—with performance playbooks for the channel owners.',
		icon: Zap,
		duration: 'Launch',
	},
];

const ctaHighlights = [
	{
		title: '1:1 working session',
		detail:
			'We’ll transform a live brief together so you can see the process end-to-end.',
	},
	{
		title: 'Custom playbook',
		detail:
			'Leave with checklists, prompts, and team rituals tailored to your marketing org.',
	},
	{
		title: 'Voice cloning',
		detail:
			'Optional add-on that trains Quilbot on your best-performing assets in under a week.',
	},
	{
		title: 'Scale-ready stack',
		detail:
			'API hooks into your approval tools, DAM, or knowledge base keep everything in sync.',
	},
];

const heroStats = [
	{ label: 'Campaigns shipped', value: '280+' },
	{ label: 'Avg. revision cycle', value: '1.2 rounds' },
	{ label: 'Team satisfaction', value: '97%' },
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
	return (
		<span className="flex size-11 items-center justify-center rounded-xl border border-border/80 bg-background/80 shadow-sm">
			<Icon className="size-5 text-primary" />
		</span>
	);
}

export default function Page() {
	return (
		<Layout>
			<section className="relative overflow-hidden rounded-3xl border bg-[radial-gradient(circle_at_top,rgba(28,25,23,0.08),transparent_55%)] px-6 py-16 sm:px-10 lg:px-14">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							<Sparkles className="size-4" />
							Quilbot Studio
						</div>

						<div className="space-y-6">
							<h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
								Home for creative teams who want AI speed without losing their
								voice.
							</h1>
							<p className="text-lg text-muted-foreground">
								Launch high-performing campaigns, landing pages, enablement
								kits, and more. Quilbot blends human insight with AI co-pilots
								so your team spends more time storytelling and less time
								wrangling drafts.
							</p>
						</div>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<Button size="lg" className="w-full sm:w-auto" asChild>
								<Link
									href="/ai-humanizer"
									className="flex items-center justify-center gap-2"
								>
									Start creating
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
								asChild
							>
								<Link href="#work-process">See how we work</Link>
							</Button>
						</div>

						<div className="grid gap-6 rounded-2xl border border-border/70 bg-background/70 p-6 shadow-sm sm:grid-cols-3">
							{heroStats.map((stat) => (
								<div key={stat.label}>
									<p className="text-2xl font-semibold text-foreground">
										{stat.value}
									</p>
									<p className="text-sm text-muted-foreground">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-6 rounded-2xl border border-border/70 bg-background/80 p-6 shadow-lg">
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Featured Engagement
								</p>
								<h2 className="mt-2 text-2xl font-semibold text-foreground">
									Product Launch Sprint
								</h2>
							</div>
							<CheckCircle2 className="size-8 text-emerald-500" />
						</div>
						<p className="text-sm text-muted-foreground">
							Three-week partnership to relaunch a fintech onboarding flow
							across paid, email, and in-product education.
						</p>
						<ul className="space-y-4 text-sm">
							<li className="flex items-center gap-3 text-foreground">
								<span className="size-2.5 rounded-full bg-primary" />
								Voice workshop & knowledge transfer
							</li>
							<li className="flex items-center gap-3 text-foreground">
								<span className="size-2.5 rounded-full bg-primary" />
								AI drafting room with live stakeholder reviews
							</li>
							<li className="flex items-center gap-3 text-foreground">
								<span className="size-2.5 rounded-full bg-primary" />
								Activation toolkit for paid + lifecycle teams
							</li>
						</ul>
						<div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/50 p-4 text-sm text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-100">
							Result: +38% demo conversions and 2× faster go-live.
						</div>
					</div>
				</div>
			</section>

			<section id="capabilities" className="space-y-10">
				<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
					<div className="space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Capabilities
						</p>
						<h2 className="text-3xl font-semibold text-foreground">
							Everything you need to move from idea to launch.
						</h2>
						<p className="text-base text-muted-foreground md:max-w-2xl">
							We plug into your marketing workflow across research, copywriting,
							design systems, and enablement documentation. No more scattered
							docs or offline approvals.
						</p>
					</div>
					<Button variant="ghost" className="self-start md:self-auto" asChild>
						<Link href="/ai-humanizer" className="gap-2">
							Explore the studio
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{features.map((feature) => (
						<article
							key={feature.title}
							className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 shadow-sm"
						>
							<IconBadge icon={feature.icon} />
							<div className="mt-6 flex-1 space-y-3">
								<h3 className="text-xl font-semibold text-foreground">
									{feature.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{feature.description}
								</p>
							</div>
							<div className="mt-6 text-sm font-semibold text-primary">
								{feature.metric}
							</div>
						</article>
					))}
				</div>
			</section>

			<section
				id="work-process"
				className="space-y-12 rounded-3xl border bg-card/60 px-6 py-12 sm:px-10 lg:px-14"
			>
				<div className="space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						Work Process
					</p>
					<h2 className="text-3xl font-semibold text-foreground">
						Built for hybrid creative teams.
					</h2>
					<p className="text-base text-muted-foreground lg:max-w-3xl">
						Every engagement follows the same proven ritual so your stakeholders
						know exactly what’s next and how to contribute. Jump in at any step
						or let us handle the workflow.
					</p>
				</div>

				<div className="grid gap-6 lg:grid-cols-4">
					{workflowSteps.map((step) => (
						<article
							key={step.title}
							className="relative flex h-full flex-col rounded-2xl border border-border/70 bg-background/70 p-6"
						>
							<div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								<span>{step.duration}</span>
								<IconBadge icon={step.icon} />
							</div>
							<h3 className="mt-6 text-xl font-semibold text-foreground">
								{step.title}
							</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								{step.description}
							</p>
							<div className="mt-6 h-px w-full bg-border/80" />
							<p className="mt-4 text-xs text-muted-foreground">
								Hand-offs documented automatically.
							</p>
						</article>
					))}
				</div>
			</section>

			<section
				id="cta"
				className="rounded-3xl border border-primary/30 bg-primary  px-6 py-14 text-primary-foreground sm:px-10 lg:px-14"
			>
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
					<div className="space-y-6">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
							Ready to build?
						</p>
						<h2 className="text-3xl font-semibold leading-tight">
							Let’s co-create your next launch and leave you with a repeatable
							playbook.
						</h2>
						<p className="text-base text-primary-foreground/80 lg:max-w-2xl">
							Book a collaborative session with our strategists. We’ll work
							through a live brief, prototype assets, and map the rituals that
							keep your org aligned long after the call.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<Button
								variant="secondary"
								size="lg"
								className="w-full sm:w-auto"
								asChild
							>
								<Link href="/ai-humanizer" className="gap-2">
									Book a working session
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="lg"
								className="w-full border-white/40 dark:border-black dark:border dark:text-black text-white sm:w-auto"
								asChild
							>
								<Link href="mailto:hello@quilbot.studio">
									Talk to a strategist
								</Link>
							</Button>
						</div>
					</div>
					<div className="space-y-6 rounded-2xl border border-white/30 bg-white/10 p-6 text-sm text-primary-foreground">
						{ctaHighlights.map((item, index) => (
							<div key={item.title}>
								<p className="font-semibold">{item.title}</p>
								<p className="text-primary-foreground/80">{item.detail}</p>
								{index !== ctaHighlights.length - 1 && (
									<div className="my-4 h-px w-full bg-white/20" />
								)}
							</div>
						))}
						<p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
							<CheckCircle2 className="size-4" />
							Limited sessions each month
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}
