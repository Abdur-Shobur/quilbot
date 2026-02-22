'use client';

import { Bar, BarChart, CartesianGrid, Cell, XAxis } from 'recharts';

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from '@/components/ui/chart';

export const description = 'A bar chart';

const chartData = [
	{ month: 'AI', desktop: 45 },
	{ month: 'Human', desktop: 35 },
	{ month: 'Hybrid Text', desktop: 25 },
];

const chartConfig = {
	desktop: {
		label: 'Data',
		color: 'var(--chart-1)',
	},
} satisfies ChartConfig;

export function ChartBar() {
	return (
		<ChartContainer className="w-xs" config={chartConfig}>
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent hideLabel />}
				/>

				<Bar dataKey="desktop" radius={4}>
					{/* AI → Yellow */}
					<Cell fill="#facc15" /> {/* tailwind yellow-400 */}
					{/* Human → Stone */}
					<Cell fill="#cdcdcd" /> {/* tailwind stone-500 */}
				</Bar>
			</BarChart>
		</ChartContainer>
	);
}
