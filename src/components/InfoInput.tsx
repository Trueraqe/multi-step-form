export default function InfoInput(props: {
	label: string;
	id: string;
	type: string;
	value: string;
	placeholder: string;
	error: boolean;
	func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<>
			{props.error ? (
				<>
					<div className="flex items-center justify-between text-blue-950 mb-1">
						<label htmlFor={props.id} className="text-blue-950">
							{props.label}
						</label>
						<p className="text-red-500 font-bold">This field is required</p>
					</div>
					<input
						id={props.id}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						className="w-[calc(100%-1rem)] w-auto p-3 mb-3 sm:mb-5 border border-red-500 rounded-md text-blue-950 font-bold hover:border-purple-600 focus:border-purple-600 outline-none cursor-pointer"
						onChange={props.func}
						aria-invalid={true} 
					/>
				</>
			) : (
				<>
					<div className="flex items-center justify-between text-blue-950 mb-1">
						<label htmlFor={props.id}>{props.label}</label>
						<p className="text-red-500 font-bold"></p>
					</div>
					<input
						id={props.id}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						onToggle={(e) => e.currentTarget.focus()}
						className="w-[calc(100%-1rem)] w-auto p-3 mb-3 sm:mb-5 border border-gray-500 rounded-md text-blue-950 font-bold hover:border-purple-600 focus:border-purple-600 outline-none cursor-pointer"
						onChange={props.func}
					/>
				</>
			)}
		</>
	);
}
