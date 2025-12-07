import { Layout } from '@/components/layout/layout';
import Link from 'next/link';

const commitments = [
	{
		title: 'Clarity first',
		description:
			'We explain why data is needed before we collect it. No dark patterns, no surprises.',
	},
	{
		title: 'Control stays with you',
		description:
			'You can access, export, or delete your data at any time by contacting our privacy team.',
	},
	{
		title: 'Security by default',
		description:
			'Role-based access, encryption in transit and at rest, and continuous monitoring protect your workspace.',
	},
];

const dataCategories = [
	{
		label: 'Account data',
		items: [
			'Name, email, role, and workspace preferences.',
			'Billing contact details and subscription metadata.',
		],
	},
	{
		label: 'Usage data',
		items: [
			'Product interactions, feature adoption, and performance metrics.',
			'Prompt history and AI outputs (stored only inside your workspace).',
		],
	},
	{
		label: 'Support data',
		items: [
			'Conversations with our team via chat or email.',
			'Attachments or briefs you choose to share for troubleshooting.',
		],
	},
];

const rights = [
	'Request a copy of the data we store about you.',
	'Ask us to update, correct, or delete personal information.',
	'Export your workspace content in a human-readable format.',
	'Opt out of marketing emails while still receiving operational notices.',
	'Lodge a complaint with your local data protection authority.',
];

const processors = [
	{
		name: 'Vercel',
		use: 'Hosting and edge delivery of the Quilbot web application.',
	},
	{
		name: 'Stripe',
		use: 'Secure billing, invoicing, and subscription management.',
	},
	{
		name: 'OpenAI & Anthropic',
		use: 'AI inference partners powering select copilots with workspace-specific guardrails.',
	},
];

export default function PrivacyPage() {
	return (
		<Layout>
			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
					Last updated: December 7, 2025
				</p>
				<h1 className="text-4xl font-semibold leading-tight text-foreground">
					Privacy at Quilbot Studio
				</h1>
				<p className="text-base text-muted-foreground">
					We built Quilbot for teams that care about brand trust, so we hold
					ourselves to the same standard. This Privacy Policy explains what data
					we collect, how we use it to run the platform, and the controls you
					have. If you have questions, email{' '}
					<Link
						href="mailto:privacy@quilbot.studio"
						className="text-primary underline-offset-4 hover:underline"
					>
						privacy@quilbot.studio
					</Link>
					.
				</p>
				<div className="grid gap-4 sm:grid-cols-3">
					{commitments.map((commitment) => (
						<div
							key={commitment.title}
							className="rounded-2xl border border-border/60 bg-card/40 p-4 text-sm"
						>
							<p className="text-sm font-semibold text-foreground">
								{commitment.title}
							</p>
							<p className="text-muted-foreground">{commitment.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-foreground">
						Information we collect
					</h2>
					<p className="text-base text-muted-foreground">
						We only capture what’s required to deliver secure, collaborative
						creative workflows. You always remain the owner of the assets you
						upload or create inside Quilbot.
					</p>
				</div>
				<div className="space-y-6">
					{dataCategories.map((category) => (
						<div
							key={category.label}
							className="rounded-2xl border border-border/60 bg-card/40 p-5"
						>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
								{category.label}
							</p>
							<ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
								{category.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<div className="grid gap-8 lg:grid-cols-2">
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-foreground">
							How we use data
						</h3>
						<ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
							<li>
								Operate and secure your workspace, including authentication and
								role-based permissions.
							</li>
							<li>
								Deliver AI-assisted drafting, editing, and review experiences
								configured to your brand guardrails.
							</li>
							<li>
								Provide customer support, incident response, and service
								notifications.
							</li>
							<li>
								Improve the product based on anonymised usage patterns (never
								the contents of your assets).
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-foreground">
							Retention & deletion
						</h3>
						<p className="text-sm text-muted-foreground">
							Workspace content is retained while your subscription is active.
							You may request deletion at any time and we will remove all
							associated content within 30 days, except where legal obligations
							require otherwise.
						</p>
						<p className="text-sm text-muted-foreground">
							Backups are encrypted and automatically purged on a rolling 35-day
							schedule.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<div className="space-y-3">
					<h2 className="text-2xl font-semibold text-foreground">
						Your rights
					</h2>
					<p className="text-base text-muted-foreground">
						If you are in the EU/EEA, UK, or any jurisdiction with similar
						protections, you have the following rights. We honor these for every
						user, regardless of location.
					</p>
				</div>
				<ul className="grid gap-3 rounded-2xl border border-border/70 bg-card/40 p-6 text-sm text-muted-foreground">
					{rights.map((item) => (
						<li key={item} className="flex items-start gap-2">
							<span className="mt-1 size-1.5 rounded-full bg-primary" />
							{item}
						</li>
					))}
				</ul>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<h2 className="text-2xl font-semibold text-foreground">
					Sub-processors & third parties
				</h2>
				<p className="text-base text-muted-foreground">
					We only share data with vendors who meet our security and compliance
					requirements. Each partner signs a Data Processing Agreement (DPA)
					reflecting GDPR-standard clauses.
				</p>
				<div className="space-y-4">
					{processors.map((processor) => (
						<div
							key={processor.name}
							className="rounded-2xl border border-border/60 bg-card/40 p-5"
						>
							<p className="text-sm font-semibold text-foreground">
								{processor.name}
							</p>
							<p className="text-sm text-muted-foreground">{processor.use}</p>
						</div>
					))}
				</div>
			</section>

			<section className="space-y-4 rounded-3xl border border-primary/30 bg-primary px-6 py-10 text-primary-foreground sm:px-10">
				<h2 className="text-2xl font-semibold">Need something else?</h2>
				<p className="text-base text-primary-foreground/80">
					Email{' '}
					<Link
						href="mailto:privacy@quilbot.studio"
						className="underline-offset-4 hover:underline"
					>
						privacy@quilbot.studio
					</Link>{' '}
					or submit a request through the in-app support portal. We reply within
					two business days.
				</p>
			</section>
		</Layout>
	);
}
