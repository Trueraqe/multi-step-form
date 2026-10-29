type SelectPlanProps = {
	textLeft: string;
	textRight: string;
	selectedPlanTime: boolean;
	func: () => void;
};

export default function SelectPlanCheckbox(props: SelectPlanProps) {
	return (
		<>
			<div className="flex flex-row w-full items-center justify-center gap-5 bg-gray-50 text-center p-2 pr-7 rounded">
				{props.selectedPlanTime ? (
					<p className="text-gray-500 font-bold">{props.textLeft}</p>
				) : (
					<p className="text-blue-950 font-bold">{props.textLeft}</p>
				)}
				<label className="relative inline-flex items-center cursor-pointer">
					<input
						onChange={props.func}
						type="checkbox"
						role="switch"
						aria-label="Yearly billing"
						className="sr-only peer"
						checked={props.selectedPlanTime}
					/>
					<div className="w-10 h-6 bg-blue-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-900 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-purple-600"></div>
				</label>
				{!props.selectedPlanTime ? (
					<p className="text-gray-500 font-bold">{props.textRight}</p>
				) : (
					<p className="text-blue-950 font-bold">{props.textRight}</p>
				)}
			</div>
		</>
	);
}
