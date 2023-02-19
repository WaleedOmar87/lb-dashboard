import Head from "next/head";
import { Header, Products } from "@/components";
export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Dashboard" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main className="dashboard-container">
				<Header />
				<Products />
			</main>
		</>
	);
}
