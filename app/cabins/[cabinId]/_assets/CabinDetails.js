import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function CabinDetails({ cabin }) {
	return (
		<div className="border-primary-800 mb-24 grid grid-cols-[3fr_4fr] gap-20 border px-10 py-3">
			<div className="relative -translate-x-3 scale-[1.15]">
				<Image
					fill
					priority={true}
					quality={80}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					src={cabin.image}
					alt={`Cabin ${cabin.name}`}
					className="object-cover"
				/>
			</div>

			<div>
				<h3 className="text-accent-100 bg-primary-950 mb-5 w-[150%] translate-x-[-254px] p-6 pb-1 text-7xl font-black">
					Cabin {cabin.name}
				</h3>

				<p className="text-primary-300 mb-10 text-lg">
					<TextExpander>{cabin.description}</TextExpander>
				</p>

				<ul className="mb-7 flex flex-col gap-4">
					<li className="flex items-center gap-3">
						<UsersIcon className="text-primary-600 h-5 w-5" />
						<span className="text-lg">
							For up to <span className="font-bold">{cabin.maxCapacity}</span>{" "}
							guests
						</span>
					</li>
					<li className="flex items-center gap-3">
						<MapPinIcon className="text-primary-600 h-5 w-5" />
						<span className="text-lg">
							Located in the heart of the{" "}
							<span className="font-bold">Dolomites</span> (Italy)
						</span>
					</li>
					<li className="flex items-center gap-3">
						<EyeSlashIcon className="text-primary-600 h-5 w-5" />
						<span className="text-lg">
							Privacy <span className="font-bold">100%</span> guaranteed
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default CabinDetails;
