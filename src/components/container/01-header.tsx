'use client';

import { ThemeToggle } from '../theme-toggle';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
export default function Header01({ children }: { children: React.ReactNode }) {
	return (
		<header className="flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
			<div className="flex flex-1 items-center gap-2">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mr-2 data-[orientation=vertical]:h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem className="hidden md:block">
							<BreadcrumbLink href="#">AI Humanizer</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="hidden md:block" />
						<BreadcrumbItem>
							<BreadcrumbPage>AI Humanizer</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<ThemeToggle />
		</header>
	);
}
