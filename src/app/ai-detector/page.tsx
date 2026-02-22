'use client';
import {
	DetailDrawer,
	DrawerType,
} from '@/components/ai-humanizer/detail-drawer';
import { ChartBar } from '@/components/chart/bar-chart';
import Container01 from '@/components/container/01-container';
import Header01 from '@/components/container/01-header';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
	BarChart3,
	CircleAlert,
	History,
	MessageSquare,
	Settings,
} from 'lucide-react';
import { useState } from 'react';
const aiStatus = [
	{ name: 'ChatGPT', percentage: 5 },
	{ name: 'Grok', percentage: 0 },
	{ name: 'Copilot', percentage: 0 },
	{ name: 'Gemini', percentage: 0 },
	{ name: 'DeepSeek', percentage: 0 },
	{ name: 'DeepAI', percentage: 0 },
	{ name: 'Qwen', percentage: 0 },
	{ name: 'Claude', percentage: 0 },
	{ name: 'Llama', percentage: 0 },
	{ name: 'Gemma', percentage: 0 },
	{ name: 'Z.ai', percentage: 0 },
	{ name: 'Perplexity', percentage: 0 },
	{ name: 'Mistral AI', percentage: 0 },
	{ name: 'Poe', percentage: 0 },
	{ name: 'Nova', percentage: 0 },
	{ name: 'BLACKBOXAI', percentage: 0 },
	{ name: 'Pi', percentage: 0 },
];

const contentStatus = [
	{ label: 'AI-generated and Human-written', percentage: 0 },
	{ label: 'AI-generated and AI-refined', percentage: 0 },
	{ label: 'Human-written and AI-refined', percentage: 0 },
	{ label: 'AI-generated and AI-refined and Human-written', percentage: 0 },
];

const HumanizeInterface = () => {
	const [activeMode, setActiveMode] = useState('Basic');
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [drawerType, setDrawerType] = useState<DrawerType | null>(null);

	const modes = ['Basic', 'Advanced'];

	const handleDrawerToggle = (type: DrawerType) => {
		setDrawerType((current) => (current === type ? null : type));
	};

	return (
		<Container01>
			<Header01 breadcrumb="Ai Detector" />
			<div className="flex min-h-[calc(100svh-80px)] px-4 ">
				{/* Main Content Area */}
				<div className="flex-1 flex flex-col">
					{/* Mode Tabs */}
					<div className="   border-b dark:border-gray-600 border-gray-200 px-2 md:px-6">
						<div className="flex gap-8">
							<span className="text-sm font-medium dark:text-gray-300 text-gray-600 py-4">
								Modes:
							</span>
							{modes.map((mode) => (
								<button
									key={mode}
									onClick={() => setActiveMode(mode)}
									className={`py-4 text-sm font-medium border-b-2 transition-colors ${
										activeMode === mode
											? 'border-emerald-600 text-emerald-600'
											: 'border-transparent dark:text-gray-300 text-gray-600 hover:text-gray-900'
									}`}
								>
									{mode}
								</button>
							))}
						</div>
					</div>

					{/* Input/Output Section */}
					<div className="border-l border-r dark:border-gray-600 border-gray-200  flex-1 grid grid-cols-1 md:grid-cols-2">
						{/* Input Side */}
						<div className="flex-1  border-b md:border-r dark:border-gray-600 border-gray-200 flex flex-col">
							<div className="flex-1 p-3 lg:p-6">
								<textarea
									value={inputText}
									onChange={(e) => setInputText(e.target.value)}
									placeholder="Enter or paste your text here and click Humanize to Humanize AI text."
									className="w-full h-full resize-none border-none focus:outline-none dark:text-gray-300 text-gray-600 text-base"
								/>
							</div>

							{/* Bottom Actions */}
							<div className="hidden xl:flex p-6 border-t dark:border-gray-600 border-gray-200  items-center justify-between">
								<div className="flex gap-3">
									<button className="flex whitespace-nowrap items-center gap-2 px-4 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-colors">
										<span className="text-xl">✨</span>
										Try Sample Text
									</button>
									<button className="flex whitespace-nowrap items-center gap-2 px-4 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-full font-medium hover:bg-emerald-50 transition-colors">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											/>
										</svg>
										Paste Text
									</button>
								</div>

								<button className="flex items-center gap-2 px-4 py-2.5 dark:text-gray-300 text-gray-600 hover:text-gray-900 transition-colors">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										/>
									</svg>
									Upload Doc
								</button>
							</div>
						</div>

						{/* Output Side */}
						<div className="flex-1  flex flex-col">
							<div className="flex-1 p-3 lg:p-6">
								{outputText ? (
									<div className="text-gray-700 text-base">{outputText}</div>
								) : (
									<div className="flex items-center flex-col gap-4  justify-center h-full text-gray-400">
										<div className="text-center border-b pb-10 max-w-xl w-full">
											<p className="text-lg">
												Add text to <br /> begin analysis
											</p>
										</div>

										<ChartBar />

										<div className="w-full border-b pb-4">
											<ul className="space-y-4 text-black dark:text-white">
												<li className="space-y-2 shadow p-3 rounded-md">
													<div className="flex justify-between items-center">
														<p className="flex items-center gap-1 font-medium">
															AI-generated <CircleAlert className="size-4" />
														</p>
														<div className="flex items-center gap-4">
															<span className="w-4 h-4 inline-flex rounded-full bg-yellow-600"></span>
															<span>--%</span>
														</div>
													</div>
													<div className="space-y-1 space-x-2">
														{aiStatus.map((ai, index) => (
															<Badge key={index} variant="outline">
																{ai.name} ({ai.percentage}%)
															</Badge>
														))}
													</div>
												</li>
												<li className="flex justify-between items-center  shadow p-3 rounded-md">
													<p className="flex items-center gap-1 font-medium">
														Human written
														<CircleAlert className="size-4" />
													</p>
													<div className="flex items-center gap-4">
														<span className="w-4 h-4 inline-flex rounded-full bg-blue-100"></span>
														<span>--%</span>
													</div>
												</li>

												<li className="space-y-2  shadow p-3 rounded-md">
													<div className="flex justify-between items-center">
														<p className="flex items-center gap-1 font-medium">
															Mix of both <CircleAlert className="size-4" />
														</p>
														<div className="flex items-center gap-4">
															<span className="w-4 h-4 inline-flex rounded-full bg-yellow-600"></span>
															<span>--%</span>
														</div>
													</div>
													<div className="space-y-1 space-x-2 flex flex-col">
														{contentStatus.map((ai, index) => (
															<Badge key={index} variant="outline">
																{ai.label} ({ai.percentage}%)
															</Badge>
														))}
													</div>
												</li>
											</ul>
										</div>

										<div className="w-full">
											<Accordion
												className="my-4 w-full space-y-2"
												collapsible
												type="single"
												defaultValue="item-1"
											>
												<AccordionItem
													className="rounded-md border px-4 last:border-b"
													value={`item-1`}
												>
													<AccordionTrigger>
														Main AI Contributors
													</AccordionTrigger>
													<AccordionContent className="space-y-2">
														<div className="space-y-2 border-b pb-4">
															<Badge className="rounded-sm" variant="outline">
																AI Generated
															</Badge>
															<p>Probability Level</p>
															<Slider value={[33]} max={100} step={1} />
														</div>
														<div>
															<p className="text-base font-semibold">
																Main AI-content Indicators
															</p>
															<div>
																Lorem ipsum dolor sit amet consectetur,
																adipisicing elit. Molestiae, ut!
															</div>
														</div>
													</AccordionContent>
												</AccordionItem>
											</Accordion>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Humanize Button */}
					<div className=" border-t dark:border-gray-600 border-gray-200 p-6 flex justify-center">
						<button
							onClick={() => setOutputText(inputText)}
							className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
						>
							AI Detect
						</button>
					</div>
				</div>

				{/* Right Sidebar */}
				<div className="w-16  hidden xl:flex dark:border-gray-600 border-gray-200   flex-col items-center py-6 gap-8">
					<button
						onClick={() => handleDrawerToggle('history')}
						className="flex flex-col items-center gap-1.5 dark:text-gray-300 text-gray-600 hover:text-emerald-600 transition-colors group"
					>
						<History className="w-6 h-6" />
						<span className="text-xs">History</span>
					</button>

					<button
						onClick={() => handleDrawerToggle('statistics')}
						className="flex flex-col items-center gap-1.5 dark:text-gray-300 text-gray-600 hover:text-emerald-600 transition-colors group"
					>
						<BarChart3 className="w-6 h-6" />
						<span className="text-xs">Statistics</span>
					</button>

					<div className="flex-1" />

					<button
						onClick={() => handleDrawerToggle('settings')}
						className="flex flex-col items-center gap-1.5 dark:text-gray-300 text-gray-600 hover:text-emerald-600 transition-colors group"
					>
						<Settings className="w-6 h-6" />
						<span className="text-xs">Settings</span>
					</button>

					<button
						onClick={() => handleDrawerToggle('feedback')}
						className="flex flex-col items-center gap-1.5 dark:text-gray-300 text-gray-600 hover:text-emerald-600 transition-colors group"
					>
						<MessageSquare className="w-6 h-6" />
						<span className="text-xs">Feedback</span>
					</button>
				</div>
			</div>

			<DetailDrawer type={drawerType} onClose={() => setDrawerType(null)} />
		</Container01>
	);
};

export default HumanizeInterface;
