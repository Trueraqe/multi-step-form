import StepTitle from "./StepTitle";
import { Link } from "react-router-dom";
import ButtonsStep4 from "./ButtonsStep4";

type Step4Props = {
	selectedPlan: string;
	selectedPlanTime: boolean;
	planPrices: number;
	selectedAddons: string[];
	addonsTotal: number;
	selectedAddonsList: React.JSX.Element[];
};

export default function Step4(props: Step4Props) {
	return (
		<>
			<StepTitle
				title="Finishing up"
				paragraf="Double-check everything looks OK before confirming."
			/>

			<div className="sm:h-[370px] sm:w-[435px]">
				<div className="bg-gray-50 rounded rounded-md text-gray-500">
					<div className="flex items-center justify-between p-5">
						<div>
							<p className="text-blue-950 font-bold">
								{props.selectedPlan
									.toLowerCase()
									.replace(/\b\w/g, (char) => char.toUpperCase())}
								({props.selectedPlanTime ? "Yearly" : "Monthly"})
							</p>
							<Link
								to={"/step_2"}
								className="hover:cursor-pointer hover:text-purple-600 underline"
							>
								Change
							</Link>
						</div>
						<p className="text-blue-950 font-bold ">
							+${props.planPrices}
							{props.selectedPlanTime ? "/yr" : "/mo"}
						</p>
					</div>
					<hr className="ml-5 mr-5" />
					<div className="flex flex-col gap-2 p-5">
						{props.selectedAddonsList}
					</div>
				</div>
				<div className="flex items-center justify-between p-5 pb-0">
					<p className="text-gray-500">
						Total (per {props.selectedPlanTime ? "year" : "month"})
					</p>
					<p className="text-purple-600 font-bold text-lg">
						${props.planPrices + props.addonsTotal}
						{props.selectedPlanTime ? "/yr" : "/mo"}
					</p>
				</div>
			</div>
			<ButtonsStep4
				path1="/step_3"
				text1="Go Back"
				path2="/step_5"
				text2="Confirm"
				lock={false}
			/>
		</>
	);
}
