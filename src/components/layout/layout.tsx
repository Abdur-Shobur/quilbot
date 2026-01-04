import { Footer } from './footer';
import { Header } from './header';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto max-w-[1500px] space-y-16 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
			<Header />
			{children}
			<Footer />
		</main>
	);
}
