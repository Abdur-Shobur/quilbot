import Link from 'next/link';

import {
	ArrowRight,
	CheckCircle2,
	Crown,
	Mail,
	Sparkles,
	Users,
	Zap,
} from 'lucide-react';

import { Layout } from '@/components/layout/layout';
import { Button } from '@/components/ui/button';

type Plan = {
	name: string;
	price: string;
	subtitle: string;
	features: string[];
	cta: string;
	href: string;
	badge?: string;
};

type ComparisonRow = {
	label: string;
	basic: string | boolean;
	studio: string | boolean;
	scale: string | boolean;
};

const plans: Plan[] = [
	{
		name: 'Pilot',
		price: '$1,250 / month',
		subtitle:
			'Spin up an AI-enabled creative pod for a single product line or campaign.',
		features: [
			'Dedicated strategist + writer pairing',
			'Voice system starter kit',
			'2 collaborative review rituals per week',
			'Workspace access for 5 teammates',
		],
		cta: 'Start a pilot',
		href: 'mailto:hello@quilbot.studio?subject=Pilot%20plan',
	},
	{
		name: 'Studio',
		price: '$3,800 / month',
		subtitle:
			'Our most popular plan for growth and lifecycle teams shipping weekly launches.',
		features: [
			'Full creative pod (strategy, writing, design)',
			'Custom AI copilot library & guardrails',
			'Async + live collaboration rooms',
			'Workspace access for 20 teammates',
			'Performance retro + insights dashboard',
		],
		cta: 'Book working session',
		href: '/ai-humanizer',
		badge: 'Most popular',
	},
	{
		name: 'Scale',
		price: 'Custom retainer',
		subtitle:
			'For product suites, multi-market launches, and teams needing deeper integrations.',
		features: [
			'Multi-pod coverage across regions',
			'Onsite or virtual workshops for stakeholders',
			'Private model fine-tuning + governance reviews',
			'Unlimited workspace seats + SSO',
			'Dedicated success manager & quarterly planning',
		],
		cta: 'Talk to sales',
		href: 'mailto:hello@quilbot.studio?subject=Scale%20plan',
	},
];

const comparison: ComparisonRow[] = [
	{
		label: 'Creative pod composition',
		basic: 'Strategist + writer',
		studio: 'Strategist + writer + designer',
		scale: 'Multiple pods, research + PM support',
	},
	{
		label: 'AI copilots & guardrails',
		basic: 'Shared templates',
		studio: 'Custom prompts + compliance notes',
		scale: 'Private models, SOC2-aligned reviews',
	},
	{
		label: 'Collaboration rituals',
		basic: '2 / week',
		studio: '4 / week + async hub',
		scale: 'Bespoke cadence per workstream',
	},
	{
		label: 'Integrations',
		basic: 'Google Docs, Notion',
		studio: 'HubSpot, Figma, Asana',
		scale: 'Custom API + DAM / CMS',
	},
	{
		label: 'Workspace seats',
		basic: '5',
		studio: '20',
		scale: 'Unlimited + SSO',
	},
	{
		label: 'Support',
		basic: 'Email / Slack within 1 biz day',
		studio: 'Same-day Slack + monthly retro',
		scale: 'Dedicated success lead + SLAs',
	},
];

const faqs = [
	{
		question: 'What happens during the pilot?',
		answer:
			'We spend week one building your voice system and AI guardrails, week two co-creating assets, and week three optimizing based on performance. You leave with reusable workflows whether or not you extend.',
	},
	{
		question: 'Can we plug our own data into the copilots?',
		answer:
			'Yes. On Studio and Scale we ingest approved briefs, research, and top-performing assets to keep outputs on-brand. Scale plans unlock private model fine-tuning and deeper compliance reviews.',
	},
	{
		question: 'Do you work with internal creative teams?',
		answer:
			'Absolutely—most clients pair us with in-house teams. We act as an elastic layer to accelerate launches, document rituals, and upskill teammates on AI-assisted workflows.',
	},
	{
		question: 'What if we just need the AI stack?',
		answer:
			'We can license our copilot library, knowledge base, and prompts separately, but we recommend at least a pilot sprint so we can tailor the system to your brand voice.',
	},
];

const addOns = [
	{
		title: 'Voice cloning & research sprints',
		description:
			'Deep interviews with customers + top performers, plus dataset creation for your brand voice model.',
	},
	{
		title: 'Enablement & training',
		description:
			'Live and async workshops to roll out AI rituals across sales, CS, and regional teams.',
	},
	{
		title: 'Systems integration',
		description:
			'Custom hooks into your CMS, DAM, approval flows, and analytics stack.',
	},
];

function PlanCard({ plan }: { plan: Plan }) {
	return (
		<div className="flex h-full flex-col rounded-3xl border border-border/70 bg-card/60 p-6 shadow-sm">
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						{plan.name}
					</p>
					{plan.badge ? (
						<span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
							{plan.badge}
						</span>
					) : null}
				</div>
				<p className="text-3xl font-semibold text-foreground">{plan.price}</p>
				<p className="text-sm text-muted-foreground">{plan.subtitle}</p>
			</div>
			<ul className="mt-6 space-y-3 text-sm text-muted-foreground">
				{plan.features.map((feature) => (
					<li key={feature} className="flex items-start gap-2">
						<CheckCircle2 className="mt-0.5 size-4 text-primary" />
						<span>{feature}</span>
					</li>
				))}
			</ul>
			<Button asChild size="lg" className="mt-8 w-full justify-center">
				<Link href={plan.href}>{plan.cta}</Link>
			</Button>
		</div>
	);
}

export default function PricingPage() {
	return (
		<Layout>
			<section className="rounded-3xl border border-border/70 bg-card/60 px-6 py-16 sm:px-10 lg:px-14">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
					<div className="space-y-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Pricing
						</div>
						<h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
							Choose the partnership that fits your creative velocity.
						</h1>
						<p className="text-base text-muted-foreground">
							Every plan pairs you with humans who obsess over your story and AI
							copilots tuned to your brand. Scale up or down as launch volume
							changes—no more spinning up net-new agencies every quarter.
						</p>
						<div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Zap className="size-4 text-primary" />
								Average launch time: 10 business days
							</div>
							<div className="flex items-center gap-2">
								<Users className="size-4 text-primary" />
								Teams onboarded this year: 48
							</div>
							<div className="flex items-center gap-2">
								<Crown className="size-4 text-primary" />
								97% renewal rate
							</div>
						</div>
					</div>
					<div className="space-y-4 rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm text-sm text-muted-foreground">
						<p className="text-sm font-semibold text-foreground">
							Every plan includes:
						</p>
						<ul className="space-y-2">
							<li className="flex items-center gap-2">
								<Sparkles className="size-4 text-primary" />
								AI copilot workspace personalized to your voice system
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-primary" />
								Shared rituals (briefing, review, activation) documented in
								Notion
							</li>
							<li className="flex items-center gap-2">
								<Mail className="size-4 text-primary" />
								Slack connect + 24h response during business days
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="grid gap-6 md:grid-cols-3">
				{plans.map((plan) => (
					<PlanCard key={plan.name} plan={plan} />
				))}
			</section>

			<section className="space-y-8 rounded-3xl border border-border/70 bg-card/60 px-6 py-14 sm:px-10 lg:px-14">
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						Compare plans
					</p>
					<h2 className="text-3xl font-semibold text-foreground">
						Transparency on what changes as you scale.
					</h2>
				</div>
				<div className="overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
					<table className="min-w-full text-left text-sm text-muted-foreground">
						<thead className="bg-card/60 text-xs uppercase tracking-[0.3em] text-muted-foreground">
							<tr>
								<th className="px-6 py-4 font-medium text-foreground">
									Capability
								</th>
								<th className="px-6 py-4 font-medium text-foreground">Pilot</th>
								<th className="px-6 py-4 font-medium text-foreground">
									Studio
								</th>
								<th className="px-6 py-4 font-medium text-foreground">Scale</th>
							</tr>
						</thead>
						<tbody>
							{comparison.map((row, index) => (
								<tr
									key={row.label}
									className={index % 2 === 0 ? 'bg-background/30' : ''}
								>
									<td className="px-6 py-4 font-medium text-foreground">
										{row.label}
									</td>
									<td className="px-6 py-4">
										{typeof row.basic === 'boolean' ? (
											row.basic ? (
												<CheckCircle2 className="size-4 text-primary" />
											) : (
												<span>—</span>
											)
										) : (
											row.basic
										)}
									</td>
									<td className="px-6 py-4">
										{typeof row.studio === 'boolean' ? (
											row.studio ? (
												<CheckCircle2 className="size-4 text-primary" />
											) : (
												<span>—</span>
											)
										) : (
											row.studio
										)}
									</td>
									<td className="px-6 py-4">
										{typeof row.scale === 'boolean' ? (
											row.scale ? (
												<CheckCircle2 className="size-4 text-primary" />
											) : (
												<span>—</span>
											)
										) : (
											row.scale
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			<section className="space-y-8 rounded-3xl border border-border/70 bg-card/60 px-6 py-14 sm:px-10 lg:px-14">
				<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div className="space-y-3">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Add-ons
						</p>
						<h2 className="text-3xl font-semibold text-foreground">
							Tailor the engagement even further.
						</h2>
						<p className="text-base text-muted-foreground">
							Layer in research, training, and integrations as needed. Add-ons
							are scoped separately and available on any plan.
						</p>
					</div>
					<Button variant="ghost" className="self-start lg:self-auto" asChild>
						<Link href="mailto:hello@quilbot.studio" className="gap-2">
							Get a tailored proposal
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{addOns.map((addon) => (
						<div
							key={addon.title}
							className="rounded-2xl border border-border/70 bg-background/70 p-6 text-sm text-muted-foreground"
						>
							<p className="text-lg font-semibold text-foreground">
								{addon.title}
							</p>
							<p>{addon.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-14 sm:px-10 lg:px-14">
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						FAQ
					</p>
					<h2 className="text-3xl font-semibold text-foreground">
						Everything else teams ask.
					</h2>
				</div>
				<div className="space-y-4">
					{faqs.map((faq) => (
						<div
							key={faq.question}
							className="rounded-2xl border border-border/60 bg-background/70 p-5"
						>
							<p className="text-lg font-semibold text-foreground">
								{faq.question}
							</p>
							<p className="text-sm text-muted-foreground">{faq.answer}</p>
						</div>
					))}
				</div>
			</section>

			<section className="rounded-3xl border border-primary/30 bg-primary px-6 py-14 text-primary-foreground sm:px-10 lg:px-14">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
					<div className="space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
							Ready?
						</p>
						<h2 className="text-3xl font-semibold">
							Let’s map your first 90 days and show exactly how the partnership
							works.
						</h2>
						<p className="text-base text-primary-foreground/80">
							Share your launch goals, team structure, and channels. We’ll
							respond with a tailored roadmap plus the AI + human pod we’d
							assemble.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<Button
								variant="secondary"
								size="lg"
								className="w-full sm:w-auto"
								asChild
							>
								<Link href="/ai-humanizer" className="gap-2">
									Book a strategy call
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<Button
								variant="ghost"
								size="lg"
								className="w-full border-white/40 text-white sm:w-auto"
								asChild
							>
								<Link href="mailto:hello@quilbot.studio">Email the team</Link>
							</Button>
						</div>
					</div>
					<div className="rounded-2xl border border-white/30 bg-white/10 p-6 text-sm text-primary-foreground">
						<p className="text-base font-semibold">What you receive:</p>
						<ul className="mt-4 space-y-3">
							<li className="flex items-start gap-2">
								<CheckCircle2 className="mt-0.5 size-4" />
								Detailed plan covering rituals, talent mix, and deliverables
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="mt-0.5 size-4" />
								AI copilot preview with example prompts + guardrails
							</li>
							<li className="flex items-start gap-2">
								<CheckCircle2 className="mt-0.5 size-4" />
								Pricing breakdown for core plan + optional add-ons
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Layout>
	);
}
