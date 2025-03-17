import SideNavigation from "@/app/_components/SideNavigation";
import Spinner from "@/starter/components/Spinner";
import { Suspense } from "react";

function Layout({ children }) {
	return (
		<div className="grid h-full grid-cols-[16rem_1fr] gap-12">
			<SideNavigation />
			<div>{children}</div>
		</div>
	);
}

export default Layout;
