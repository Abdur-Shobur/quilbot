import { AppSidebar } from '../app-sidebar';
import { SidebarInset, SidebarProvider } from '../ui/sidebar';

export default function Container01({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
}
