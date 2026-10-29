import SelectPlanCard from "./SelectPlanCard";
import StepTitle from "./StepTitle";
import Buttons from "./Buttons";
import SelectPlanCheckbox from "./SelectPlanCheckbox";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

type Step2Props = {
	selectedPlan: string;
	onPlanChange: (plan: string) => void;
	selectedPlanTime: boolean;
	onPlanTimeChange: (plan: boolean) => void;
};

export default function Step2({
	selectedPlan,
	onPlanChange,
	selectedPlanTime,
	onPlanTimeChange,
}: Step2Props) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onPlanChange(e.currentTarget.value);
	};

	return (
		<>
			<StepTitle
				title="Select your plan"
				paragraf="You have the option of monthly or yearly billing."
			/>

			<div className="flex flex-col lg:h-[370px] lg:w-[435px] gap-8">
				<fieldset className="flex flex-col lg:flex-row gap-[15px]">
					<legend className="sr-only">Select your plan</legend>

					<SelectPlanCard
						src={arcadeIcon}
						alt="icon-arcade"
						name="select-plan"
						plan="Arcade"
						value="arcade"
						cost="$9/mo"
						cost2="$90/yr"
						free="2 months free"
						selectedPlan={selectedPlan}
						selectedPlanTime={selectedPlanTime}
						func={handleChange}
					/>

					<SelectPlanCard
						src={advancedIcon}
						alt="icon-advanced"
						name="select-plan"
						plan="Advanced"
						value="advanced"
						cost="$12/mo"
						cost2="$120/yr"
						free="2 months free"
						selectedPlan={selectedPlan}
						selectedPlanTime={selectedPlanTime}
						func={handleChange}
					/>

					<SelectPlanCard
						src={proIcon}
						alt="icon-pro"
						name="select-plan"
						plan="Pro"
						value="pro"
						cost="$15/mo"
						cost2="$150/yr"
						free="2 months free"
						selectedPlan={selectedPlan}
						selectedPlanTime={selectedPlanTime}
						func={handleChange}
					/>
				</fieldset>
				<SelectPlanCheckbox
					textLeft="Monthly"
					textRight="Yearly"
					selectedPlanTime={selectedPlanTime}
					func={() => {
						onPlanTimeChange(!selectedPlanTime);
					}}
				/>
			</div>

			<Buttons
				path1="/step_1"
				text1="Go Back"
				path2="/step_3"
				text2="Next Step"
				blocked={false}
			/>
		</>
	);
}
