'use client';
import {
	DetailDrawer,
	DrawerType,
} from '@/components/ai-humanizer/detail-drawer';
import Container01 from '@/components/container/01-container';
import Header01 from '@/components/container/01-header';
import { BarChart3, History, MessageSquare, Settings } from 'lucide-react';
import { useState } from 'react';

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
			<Header01 breadcrumb="AI Humanizer" />
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
									<div className="flex items-center justify-center h-full text-gray-400">
										Output will appear here
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
							Humanize
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
