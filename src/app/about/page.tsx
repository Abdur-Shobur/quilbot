import Link from 'next/link';

import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Globe, Sparkles, Target, Users } from 'lucide-react';

import { Layout } from '@/components/layout/layout';
import { Button } from '@/components/ui/button';

type Value = {
	title: string;
	description: string;
	icon: LucideIcon;
	pillar: string;
};

type TimelineEvent = {
	year: string;
	title: string;
	description: string;
	result: string;
};

type Leader = {
	name: string;
	title: string;
	focus: string;
	principle: string;
};

const heroStats = [
	{ label: 'Team members', value: '42' },
	{ label: 'Markets served', value: '18' },
	{ label: 'Campaigns shipped', value: '280+' },
];

const values: Value[] = [
	{
		title: 'Voice-first creativity',
		description:
			'Our studio begins with brand voice systems so AI outputs never sound generic. Story beats, tone ladders, and audiences anchor every decision.',
		icon: Sparkles,
		pillar: 'Craft',
	},
	{
		title: 'Transparent collaboration',
		description:
			'We invite stakeholders into the process with living docs, async reviews, and trackable AI prompts. Nothing happens in black boxes.',
		icon: Users,
		pillar: 'Collaboration',
	},
	{
		title: 'Responsibility by design',
		description:
			'Compliance notes, sourcing, and brand guardrails stay attached to drafts so teams can ship fast without risking accuracy or trust.',
		icon: Target,
		pillar: 'Integrity',
	},
	{
		title: 'Global empathy',
		description:
			'Our teammates span 9 time zones. Research rituals keep us close to the humans behind every metric, no matter the market.',
		icon: Globe,
		pillar: 'Impact',
	},
];

const timeline: TimelineEvent[] = [
	{
		year: '2021',
		title: 'The spark',
		description:
			'We launched Quilbot Studio after hearing the same frustration from growth teams: AI could draft faster, but it couldn’t sound like them.',
		result: 'Pilot projects with three B2B SaaS companies',
	},
	{
		year: '2022',
		title: 'Workflow system',
		description:
			'Codified our hybrid rituals—voice workshops, AI co-pilot rooms, async review lanes—so any team could plug in within days.',
		result: 'Avg. revision cycles dropped to 1.5 rounds',
	},
	{
		year: '2023',
		title: 'Scale with guardrails',
		description:
			'Introduced compliance annotations, prompt libraries, and CMS integrations so enterprise clients could trust every asset.',
		result: 'Onboarded first fintech and healthcare partners',
	},
	{
		year: '2024',
		title: 'Global creative ops',
		description:
			'Expanded to 18 markets, pairing local strategists with AI research assistants for culturally resonant storytelling.',
		result: '+38% average lift on launch KPIs across programs',
	},
];

const leadership: Leader[] = [
	{
		name: 'Alia Park',
		title: 'CEO & Head of Narrative Systems',
		focus:
			'Helps founders translate product truth into voice playbooks the entire org can rally behind.',
		principle: '“Clarity beats clever. We write to be remembered.”',
	},
	{
		name: 'Mateo Rivera',
		title: 'COO & Workflow Architect',
		focus:
			'Designs the rituals, hand-offs, and AI guardrails that keep fast teams aligned without bottlenecks.',
		principle: '“Speed matters, but alignment is the real superpower.”',
	},
	{
		name: 'Leila Banerjee',
		title: 'Chief Strategist',
		focus:
			'Leads research pods that synthesize customer calls, product updates, and market intel into actionable creative briefs.',
		principle:
			'“Every asset should answer why now, for whom, and to what end.”',
	},
];

const principles = [
	'Show the work: briefs, prompts, and iterations stay visible so everyone learns from the process.',
	'Bias toward pilots: we test new ideas in 7-day sprints before institutionalizing them.',
	'Respect deep work: no-meeting blocks and async reviews keep our best ideas flowing.',
	'Build responsibly: we stress-test every AI workflow for bias, accuracy, and compliance.',
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
	return (
		<span className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-background/80 shadow-sm">
			<Icon className="size-5 text-primary" />
		</span>
	);
}

export default function AboutPage() {
	return (
		<Layout>
			<section className="rounded-3xl border border-border/70 bg-card/60 px-6 py-16 sm:px-10 lg:px-14">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							About Quilbot Studio
						</div>
						<div className="space-y-6">
							<h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
								Creative partners for teams that need AI speed and human heart.
							</h1>
							<p className="text-lg text-muted-foreground">
								We blend narrative strategists, creative technologists, and AI
								co-pilots who obsess over outcomes. Our mission is simple: help
								ambitious teams ship work that feels unmistakably theirs—faster
								than ever.
							</p>
						</div>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<Button size="lg" className="w-full sm:w-auto" asChild>
								<Link
									href="/ai-humanizer"
									className="flex items-center justify-center gap-2"
								>
									Meet the studio
									<ArrowRight className="size-4" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="w-full sm:w-auto"
								asChild
							>
								<Link href="mailto:hello@quilbot.studio">Send us a brief</Link>
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
					<div className="space-y-6 rounded-2xl border border-border/80 bg-background/80 p-6 shadow-lg">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							How we operate
						</p>
						<ul className="space-y-4 text-sm">
							<li>
								<span className="font-semibold text-foreground">
									Studio pods
								</span>
								<p className="text-muted-foreground">
									Multidisciplinary teams of strategists, writers, designers,
									and engineers anchored to each client.
								</p>
							</li>
							<li>
								<span className="font-semibold text-foreground">
									AI copilots
								</span>
								<p className="text-muted-foreground">
									Custom prompt libraries per brand, with compliance rules and
									voice samples embedded.
								</p>
							</li>
							<li>
								<span className="font-semibold text-foreground">
									Creative council
								</span>
								<p className="text-muted-foreground">
									Weekly critique rituals keep the work sharp and aligned to the
									mission.
								</p>
							</li>
						</ul>
						<div className="rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-4 text-sm text-primary">
							“We built Quilbot to prove that AI doesn’t replace creative
							teams—it frees them to chase the ideas only humans can see.”
						</div>
					</div>
				</div>
			</section>

			<section className="space-y-10">
				<div className="space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						Values
					</p>
					<h2 className="text-3xl font-semibold text-foreground">
						Principles that shape every engagement.
					</h2>
					<p className="text-base text-muted-foreground md:max-w-3xl">
						We designed our operating system to keep creativity intentional.
						These values show up in the tools we build, the partners we choose,
						and the way we run every workshop or sprint.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{values.map((value) => (
						<article
							key={value.title}
							className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card/40 p-6 shadow-sm"
						>
							<div className="flex items-center justify-between">
								<IconBadge icon={value.icon} />
								<span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
									{value.pillar}
								</span>
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-semibold text-foreground">
									{value.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{value.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="space-y-10 rounded-3xl border border-border/70 bg-card/60 px-6 py-12 sm:px-10 lg:px-14">
				<div className="space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						Journey
					</p>
					<h2 className="text-3xl font-semibold text-foreground">
						Built from pilots, refined by partnerships.
					</h2>
					<p className="text-base text-muted-foreground lg:max-w-3xl">
						Every year we iterate on the studio based on what ambitious teams
						actually need. Here’s how we got here.
					</p>
				</div>
				<div className="space-y-6">
					{timeline.map((event) => (
						<div
							key={event.year}
							className="grid gap-6 rounded-2xl border border-border/70 bg-background/80 p-6 sm:grid-cols-[120px_minmax(0,1fr)]"
						>
							<div className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
								{event.year}
							</div>
							<div className="space-y-3">
								<h3 className="text-xl font-semibold text-foreground">
									{event.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{event.description}
								</p>
								<div className="rounded-xl border border-dashed border-primary/50 bg-primary/5 p-3 text-sm text-primary">
									{event.result}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-10">
				<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div className="space-y-4">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							Leadership
						</p>
						<h2 className="text-3xl font-semibold text-foreground">
							Experienced operators who still love the craft.
						</h2>
						<p className="text-base text-muted-foreground lg:max-w-3xl">
							Our leadership team has built growth engines, creative studios,
							and product orgs. They still join workshops, review drafts, and
							coach teams weekly.
						</p>
					</div>
					<Button variant="ghost" className="self-start lg:self-auto" asChild>
						<Link href="mailto:hello@quilbot.studio" className="gap-2">
							Request a capabilities deck
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{leadership.map((leader) => (
						<article
							key={leader.name}
							className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card/40 p-6 shadow-sm"
						>
							<div>
								<p className="text-lg font-semibold text-foreground">
									{leader.name}
								</p>
								<p className="text-sm text-muted-foreground">{leader.title}</p>
							</div>
							<p className="text-sm text-muted-foreground">{leader.focus}</p>
							<div className="mt-auto rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary">
								{leader.principle}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="space-y-6 rounded-3xl border border-primary/30 bg-primary px-6 py-12 text-primary-foreground sm:px-10 lg:px-14">
				<div className="space-y-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
						Operating principles
					</p>
					<h2 className="text-3xl font-semibold">
						How we show up for partners every day.
					</h2>
					<p className="text-base text-primary-foreground/80 lg:max-w-3xl">
						These are the promises we make to every team we work with. They keep
						the work transparent, ethical, and energizing.
					</p>
				</div>
				<ul className="grid gap-4 md:grid-cols-2">
					{principles.map((principle) => (
						<li
							key={principle}
							className="rounded-2xl border border-white/30 bg-white/10 p-4 text-sm"
						>
							{principle}
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
					<Button
						variant="secondary"
						size="lg"
						className="w-full sm:w-auto"
						asChild
					>
						<Link href="/ai-humanizer" className="gap-2">
							Explore our process
							<ArrowRight className="size-4" />
						</Link>
					</Button>
					<Button
						variant="ghost"
						size="lg"
						className="w-full border-white/40 text-white sm:w-auto"
						asChild
					>
						<Link href="mailto:hello@quilbot.studio">
							Book a chemistry call
						</Link>
					</Button>
				</div>
			</section>
		</Layout>
	);
}
