import { Layout } from '@/components/layout/layout';
import Link from 'next/link';

type Section = {
	title: string;
	body: string;
	items?: string[];
};

const sections: Section[] = [
	{
		title: '1. Agreement overview',
		body: 'By accessing Quilbot Studio you (and your organization, if you are using a team workspace) agree to these Terms as well as our Privacy Policy. If you are entering into this agreement on behalf of an organization, you confirm that you have authority to do so.',
	},
	{
		title: '2. Acceptable use',
		body: 'You agree not to misuse the platform or assist someone else in doing so. Prohibited activities include:',
		items: [
			'Uploading unlawful, infringing, or deceptive content.',
			'Attempting to gain unauthorized access to another workspace.',
			'Reverse engineering or duplicating the Quilbot platform.',
			'Using the service to train competing AI models without written permission.',
		],
	},
	{
		title: '3. Accounts & security',
		body: 'You are responsible for safeguarding your credentials and ensuring collaborators follow your internal policies. Notify us immediately at support@quilbot.studio if you suspect unauthorized access. We may suspend accounts that threaten platform security.',
	},
	{
		title: '4. Payments & billing',
		body: 'Paid plans renew automatically each billing cycle unless cancelled. Downgrades take effect at the end of the current term. All fees are non-refundable except where required by law or if we materially breach these Terms.',
	},
	{
		title: '5. Intellectual property',
		body: 'You retain ownership of assets, prompts, and creative work submitted to your workspace. Quilbot retains ownership of the platform, templates, and methodologies. We only use your content to provide the service and as otherwise permitted in writing by you.',
	},
	{
		title: '6. AI outputs & accuracy',
		body: 'AI-generated suggestions may occasionally be inaccurate or outdated. You are responsible for reviewing, approving, and verifying all outputs before use. Do not rely on the platform for regulated advice (medical, legal, financial) without independent validation.',
	},
	{
		title: '7. Confidentiality',
		body: 'Both parties agree to protect confidential information shared during the engagement. We do not disclose your briefs, prompts, or brand data to other customers. You agree not to publicly share proprietary elements of the Quilbot platform or documentation.',
	},
	{
		title: '8. Termination',
		body: 'Either party may terminate with 30 days’ written notice. We may suspend access immediately if you breach these Terms, fail to pay fees, or put the platform at risk. Upon termination we will delete workspace data upon request per our Privacy Policy.',
	},
	{
		title: '9. Warranty disclaimer',
		body: 'Quilbot Studio is provided “as-is.” We disclaim all warranties to the fullest extent permitted by law, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
	},
	{
		title: '10. Limitation of liability',
		body: 'Our total liability under these Terms is limited to the amount you paid to Quilbot in the 12 months preceding the event giving rise to the claim. We are not liable for indirect, consequential, or special damages.',
	},
	{
		title: '11. Updates to these Terms',
		body: 'We may update these Terms to reflect product changes or new legal requirements. We will notify workspace owners of material updates via email or in-app notice. Continued use after the effective date constitutes acceptance.',
	},
];

export default function TermsPage() {
	return (
		<Layout>
			<section className="space-y-4 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				<p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
					Last updated: December 7, 2025
				</p>
				<h1 className="text-4xl font-semibold text-foreground">
					Terms of Service
				</h1>
				<p className="text-base text-muted-foreground">
					These Terms set the foundation for partnering with Quilbot Studio.
					They cover account responsibilities, acceptable use, billing, and how
					we protect the work you create. For questions, email{' '}
					<Link
						href="mailto:legal@quilbot.studio"
						className="text-primary underline-offset-4 hover:underline"
					>
						legal@quilbot.studio
					</Link>
					.
				</p>
			</section>

			<section className="space-y-6 rounded-3xl border border-border/70 bg-card/60 px-6 py-10 sm:px-10">
				{sections.map((section) => (
					<div key={section.title} className="space-y-3">
						<h2 className="text-xl font-semibold text-foreground">
							{section.title}
						</h2>
						<p className="text-sm text-muted-foreground">{section.body}</p>
						{section.items && (
							<ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
								{section.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</section>

			<section className="space-y-4 rounded-3xl border border-primary/30 bg-primary px-6 py-10 text-primary-foreground sm:px-10">
				<h2 className="text-2xl font-semibold">Need a custom agreement?</h2>
				<p className="text-base text-primary-foreground/80">
					We support enterprise DPAs, procurement reviews, and security
					questionnaires. Contact{' '}
					<Link
						href="mailto:legal@quilbot.studio"
						className="underline-offset-4 hover:underline"
					>
						legal@quilbot.studio
					</Link>{' '}
					to kick off the process.
				</p>
			</section>
		</Layout>
	);
}
