import AddonsCheckbox from "./AddonsCheckbox";
import StepTitle from "./StepTitle";
import Buttons from "./Buttons";
import type { Dispatch, SetStateAction } from "react";

export default function Step3({
	selectedPlanTime,
	selectedAddons,
	onSelectedAddonsChange,
}: {
	selectedPlanTime: boolean;
	selectedAddons: string[];
	onSelectedAddonsChange: Dispatch<SetStateAction<string[]>>;
}) {
	const handleAddonChange = (id: string, checked: boolean) => {
		onSelectedAddonsChange((current) =>
			checked
				? [...current, id]
				: current.filter((addonId: string) => addonId !== id),
		);
	};
	return (
		<>
			<StepTitle
				title="Pick add-ons"
				paragraf="Add-ons help enhance your gaming experience."
			/>
			<fieldset className="flex flex-col sm:h-[370px] sm:w-[435px]">
				<legend className="sr-only">Pick add-ons</legend>
				<AddonsCheckbox
					id="online-service"
					title="Online service"
					text="Access to multiplayer games"
					cost="+$1/mo"
					cost2="+10/yr"
					selectedPlanTime={selectedPlanTime}
					checked={selectedAddons.includes("online-service")}
					onChange={handleAddonChange}
				/>

				<AddonsCheckbox
					id="larger-storage"
					title="Larger storage"
					text="Extra 1TB of cloud save"
					cost="+$2/mo"
					cost2="+20/yr"
					selectedPlanTime={selectedPlanTime}
					checked={selectedAddons.includes("larger-storage")}
					onChange={handleAddonChange}
				/>

				<AddonsCheckbox
					id="customizable-profile"
					title="Customizable Profile"
					text="Custom theme on your profile"
					cost="+$2/mo"
					cost2="+20/yr"
					selectedPlanTime={selectedPlanTime}
					checked={selectedAddons.includes("customizable-profile")}
					onChange={handleAddonChange}
				/>
			</fieldset>

			<Buttons
				path1="/step_2"
				text1="Go Back"
				path2="/step_4"
				text2="Next Step"
				lock={false}
			/>
		</>
	);
}
