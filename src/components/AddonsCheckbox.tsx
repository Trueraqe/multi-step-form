type AddonsCheckboxProps = {
	id: string;
	title: string;
	text: string;
	cost: string;
	cost2: string;
	selectedPlanTime: boolean;
	checked: boolean;
	onChange: (id: string, checked: boolean) => void;
};

export default function AddonsCheckbox(props: AddonsCheckboxProps) {
	return (
		<>
			<label
				htmlFor={props.id}
				className="flex items-center sm:p-4 p-3 px-4 mb-4  justify-between border rounded-md cursor-pointer hover:border-purple-600 has-[:checked]:border-purple-600 has-[:checked]:bg-gray-50"
			>
				<div className="flex flex-row gap-5 items-center">
					<input
						id={props.id}
						type="checkbox"
						className="accent-purple-600 h-4 w-4"
						aria-checked={props.checked}
						checked={props.checked}
						onChange={(e) => props.onChange(props.id, e.currentTarget.checked)}
					/>
					<div>
						<p className="text-blue-950 font-bold">{props.title}</p>
						<p className="text-gray-500 text-sm">{props.text}</p>
					</div>
				</div>
				<p className="text-purple-600">
					{props.selectedPlanTime ? props.cost2 : props.cost}
				</p>
			</label>
		</>
	);
}
