'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/components/ui/sidebar';

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: LucideIcon;
		iconBg?: string;
		iconColor?: string;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const pathname = usePathname();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>QuillBot Tools</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => {
					const hasChildren = item.items && item.items.length > 0;
					const normalizedUrl = item.url?.startsWith('/')
						? item.url
						: undefined;
					const computedIsActive =
						item.isActive ??
						(Boolean(normalizedUrl) && pathname === normalizedUrl);

					if (!hasChildren) {
						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									tooltip={item.title}
									isActive={computedIsActive}
								>
									<Link href={item.url}>
										{item.icon && (
											<span
												className="text-sidebar-foreground/80 bg-sidebar-accent/30 flex size-8 shrink-0 items-center justify-center rounded-full group-data-[collapsible=icon]:size-5"
												style={
													item.iconBg || item.iconColor
														? {
																backgroundColor: item.iconBg,
																color: item.iconColor,
														  }
														: undefined
												}
											>
												<item.icon className="size-4" />
											</span>
										)}
										<span>{item.title}</span>
										</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					}

					return (
						<Collapsible
							key={item.title}
							asChild
							defaultOpen={computedIsActive}
							className="group/collapsible"
						>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuButton
										tooltip={item.title}
										isActive={computedIsActive}
										className="group-data-[collapsible=icon]:size-7"
									>
										{item.icon && (
											<span
												className="text-sidebar-foreground/80 bg-sidebar-accent/30 flex size-8 shrink-0 items-center justify-center rounded-full group-data-[collapsible=icon]:size-5"
												style={
													item.iconBg || item.iconColor
														? {
																backgroundColor: item.iconBg,
																color: item.iconColor,
														  }
														: undefined
												}
											>
												<item.icon className="size-4" />
											</span>
										)}
										<span>{item.title}</span>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													<Link href={subItem.url}>
														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					);
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}
