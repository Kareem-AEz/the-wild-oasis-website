import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
	const session = await auth();

	return (
		<nav className="z-10 text-xl">
			<ul className="flex items-center gap-16">
				<li>
					<Link
						href="/cabins"
						className="hover:text-accent-400 transition-colors"
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="hover:text-accent-400 transition-colors"
					>
						About
					</Link>
				</li>
				<li>
					{session?.user ? (
						<Link
							href="/account"
							className="hover:text-accent-400 flex items-center gap-4 transition-colors"
						>
							{session?.user?.image && (
								<img
									src={session?.user.image}
									className="w-8 rounded-full"
								/>
							)}
							<span>{session?.user.name}</span>
						</Link>
					) : (
						<Link
							href="/account"
							className="hover:text-accent-400 transition-colors"
						>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
