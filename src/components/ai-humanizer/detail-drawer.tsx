'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';

export type DrawerType = 'history' | 'statistics' | 'settings' | 'feedback';

type DetailDrawerProps = {
	type: DrawerType | null;
	onClose: () => void;
};

const historyItems = [
	{ title: 'Product Launch Email', date: '2 hours ago', mode: 'Basic' },
	{ title: 'Quarterly Report Intro', date: 'Yesterday', mode: 'Advanced' },
	{ title: 'Social Media Post', date: 'Dec 4', mode: 'Basic' },
];

const statistics = [
	{ label: 'Total Words Humanized', value: '28,450' },
	{ label: 'AI Detection Score', value: '92% Human' },
	{ label: 'Average Turnaround', value: '8 sec' },
];

const settingOptions = [
	{ label: 'Auto-save drafts', description: 'Keep every input in history.' },
	{
		label: 'Tone suggestions',
		description: 'Surface tonal guidance while you type.',
	},
	{
		label: 'Email summaries',
		description: 'Send weekly performance insights.',
	},
];

export function DetailDrawer({ type, onClose }: DetailDrawerProps) {
	return (
		<Sheet open={Boolean(type)} onOpenChange={(open) => !open && onClose()}>
			<SheetContent side="right" className="w-full px-4 sm:max-w-md">
				{type && (
					<>
						<SheetHeader className="px-0">
							<SheetTitle className="capitalize">{type}</SheetTitle>
							<SheetDescription>{getDescriptionForType(type)}</SheetDescription>
						</SheetHeader>
						<div className="mt-6 space-y-6">
							{type === 'history' && (
								<div className="space-y-4">
									{historyItems.map((item) => (
										<div
											key={item.title}
											className="rounded-lg border border-border p-4"
										>
											<p className="font-medium text-foreground">
												{item.title}
											</p>
											<p className="text-sm text-muted-foreground">
												{item.date} · {item.mode} mode
											</p>
										</div>
									))}
								</div>
							)}

							{type === 'statistics' && (
								<dl className="space-y-4">
									{statistics.map((item) => (
										<div
											key={item.label}
											className="rounded-lg border border-border p-4"
										>
											<dt className="text-sm text-muted-foreground">
												{item.label}
											</dt>
											<dd className="text-2xl font-semibold text-foreground">
												{item.value}
											</dd>
										</div>
									))}
								</dl>
							)}

							{type === 'settings' && (
								<div className="space-y-5">
									{settingOptions.map((option) => (
										<label
											key={option.label}
											className="flex items-start gap-3 rounded-lg border border-border p-4"
										>
											<input
												type="checkbox"
												defaultChecked
												className="mt-1 size-4 accent-emerald-600"
											/>
											<div>
												<p className="font-medium text-foreground">
													{option.label}
												</p>
												<p className="text-sm text-muted-foreground">
													{option.description}
												</p>
											</div>
										</label>
									))}
								</div>
							)}

							{type === 'feedback' && (
								<form
									className="space-y-4"
									onSubmit={(event) => {
										event.preventDefault();
										onClose();
									}}
								>
									<textarea
										required
										className="h-40 w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-emerald-500"
										placeholder="Let us know how we can improve the humanizer experience..."
									/>
									<Button type="submit" className="w-full">
										Submit feedback
									</Button>
								</form>
							)}
						</div>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
}

function getDescriptionForType(type: DrawerType) {
	switch (type) {
		case 'history':
			return 'Review the latest documents you humanized.';
		case 'statistics':
			return 'Performance metrics from your recent sessions.';
		case 'settings':
			return 'Fine-tune how the AI humanizer behaves for you.';
		case 'feedback':
			return 'Share ideas or report issues with the team.';
		default:
			return '';
	}
}
