export default function SelectPlanCard(props: {
	src: string;
	alt: string;
	name: string;
	plan: string;
	value: string;
	cost: string;
	cost2: string;
	free: string;
	selectedPlan: string;
	selectedPlanTime: boolean;
	func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			<label htmlFor={props.alt} className="cursor-pointer">
				<input
					type="radio"
					id={props.alt}
					name={props.name}
					value={props.value}
					checked={props.selectedPlan === props.value}
					onChange={props.func}
					className="sr-only peer"
				/>
				<div className="flex lg:flex-col lg:gap-9 gap-4 lg:max-h-full lg:w-[135px] py-3 pl-4 lg:pt-4 rounded-md border border-gray-500 hover:border-purple-600 peer-checked:bg-gray-50 peer-checked:border-purple-600 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-purple-600">
					<img src={props.src} alt="" width={40} height={40} />
					<div>
						<h2 className="text-blue-950 font-bold">{props.plan}</h2>
						<p className="text-gray-500 text-sm">
							{props.selectedPlanTime ? props.cost2 : props.cost}
						</p>
						<p className="text-blue-950 text-sm">
							{props.selectedPlanTime ? props.free : ""}
						</p>
					</div>
				</div>
			</label>
		</>
	);
}
