import { Link } from "react-router-dom";

export default function Buttons(props: {
	path1: string;
	text1: string;
	path2: string;
	text2: string;
	blocked: boolean;
}) {
	const stepBack = (
		<Link
			to={props.path1}
			className="w-30 font-bold text-gray-500 hover:text-blue-900 hover:cursor-pointer"
		>
			{props.text1}
		</Link>
	);

	const stepForward = (
		<>
			{props.blocked ? (
				<button
					type="submit"
					className="w-30 text-white bg-blue-950 p-3 text-center rounded-md hover:bg-blue-900 hover:cursor-pointer"
				>
					{props.text2}
				</button>
			) : (
				<Link
					to={props.path2}
					className="w-30 text-white bg-blue-950 p-3 text-center rounded-md hover:bg-blue-900 hover:cursor-pointer"
				>
					{props.text2}
				</Link>
			)}
		</>
	);
	return (
		<>
			<div className="hidden lg:flex flex-shrink-0 lg:w-[435px] items-center justify-between">
				{stepBack}
				{stepForward}
			</div>

			<div className="block lg:hidden flex flex-shrink-0 items-center justify-between fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg z-50">
				{stepBack}
				{stepForward}
			</div>
		</>
	);
}
