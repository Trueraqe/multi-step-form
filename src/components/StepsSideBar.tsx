export default function StepsSideBar({
	step,
	number,
	hasNav = true,
}: {
	step: React.ReactNode;
	number: number;
	hasNav?: boolean;
}) {
	const current =
		"inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 bg-blue-200 text-black [&_p]:text-black [&_p]:font-bold";

	const normal =
		"inline-flex h-10 w-10 items-center justify-center rounded-full border";

	return (
		<>
			<aside className="sm:h-[568px] sm:w-[274px] sm:p-7 sm:bg-[url('../assets/images/bg-sidebar-desktop.svg')] sm:py-10 bg-[url('../assets/images/bg-sidebar-mobile.svg')] bg-no-repeat aspect-[375/172] bg-cover [&_span]:text-white [&_div>span:first-child]:text-grey-500">
				<ol className="flex flex-row sm:flex-col sm:gap-9 gap-4 justify-center pt-7 sm:pt-0">
					<li className="flex flex-row gap-5">
						<span id="1" className={number === 1 ? current : normal}>
							<p>1</p>
						</span>
						<div className="hidden sm:flex flex-col leading-tight">
							<span>STEP 1</span>
							<span className="font-bold">YOUR INFO</span>
						</div>
					</li>

					<li className="flex flex-row gap-5">
						<span id="2" className={number === 2 ? current : normal}>
							<p>2</p>
						</span>
						<div className="hidden sm:flex flex-col leading-tight">
							<span className="text-grey-500">STEP 2</span>
							<span className="font-bold">SELECT PLAN</span>
						</div>
					</li>

					<li className="flex flex-row gap-5">
						<span id="3" className={number === 3 ? current : normal}>
							<p>3</p>
						</span>
						<div className="hidden sm:flex flex-col leading-tight">
							<span>STEP 3</span>
							<span className="font-bold">ADD-ONS</span>
						</div>
					</li>

					<li className="flex flex-row gap-5">
						<span id="4" className={number === 4 ? current : normal}>
							<p>4</p>
						</span>
						<div className="hidden sm:flex flex-col leading-tight">
							<span>STEP 4</span>
							<span className="font-bold">SUMMARY</span>
						</div>
					</li>
				</ol>
			</aside>
			<section
				className={`relative -mt-15 sm:mt-0 sm:flex sm:flex-col sm:w-[435px] w-[calc(100%-2rem)] p-7 sm:p-0 ${hasNav ? "pt-5 pb-24" : "py-12"} sm:pt-0 sm:pb-0 bg-white rounded-xl items-center m-auto`}
			>
				{step}
			</section>
		</>
	);
}
