type Step1Error = "required" | "invalid";

export default function InfoInput(props: {
	label: string;
	id: string;
	type: string;
	value: string;
	placeholder: string;
	error: boolean;
	setError: string;
	errorMessage?: string;
	func: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	const getErrorMessage: Record<Step1Error, { message: string | undefined }> = {
		required: { message: "This field is required" },
		invalid: { message: props.errorMessage },
	};

	return (
		<>
			{props.error ? (
				<>
					<div className="flex items-center justify-between text-blue-950 mb-1">
						<label htmlFor={props.id} className="text-blue-950">
							{props.label}
						</label>
						<p id={`${props.id}-error`} className="text-red-500 font-bold">
							{getErrorMessage[props.setError as Step1Error].message}
						</p>
					</div>
					<input
						id={props.id}
						type={props.type}
						placeholder={props.placeholder}
						value={props.value}
						className="w-[calc(100%-1rem)] w-auto p-3 mb-3 lg:mb-5 border border-red-500 rounded-md text-blue-950 font-bold hover:border-purple-600 focus:border-purple-600 outline-none cursor-pointer"
						onChange={props.func}
						aria-invalid={props.error}
						aria-describedby={props.error ? `${props.id}-error` : undefined}
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
						className="w-[calc(100%-1rem)] w-auto p-3 mb-3 lg:mb-5 border border-gray-500 rounded-md text-blue-950 font-bold hover:border-purple-600 focus:border-purple-600 outline-none cursor-pointer"
						onChange={props.func}
					/>
				</>
			)}
		</>
	);
}
