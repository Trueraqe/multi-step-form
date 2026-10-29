export default function StepTitle(props: { title: string; paragraf: string }) {
	return (
		<>
			<header className="flex-shrink-0 pb-5 pt-3 lg:pb-8 lg:pt-5 w-full">
				<h1 className="text-blue-950 font-bold text-[30px]">{props.title}</h1>
				<p className="text-gray-500">{props.paragraf}</p>
			</header>
		</>
	);
}
