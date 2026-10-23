import { useState } from "react";
import InfoInput from "./InfoInput";
import StepTitle from "./StepTitle";
import Buttons from "./Buttons";
import type { Dispatch, SetStateAction } from "react";

type Step1Props = {
	name: string;
	email: string;
	number: string;
	setName: Dispatch<SetStateAction<string>>;
	setEmail: Dispatch<SetStateAction<string>>;
	setNumber: Dispatch<SetStateAction<string>>;
};

export default function Step1(props: Step1Props) {
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [numberError, setNumberError] = useState(false);

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!props.name.trim()) {
			setNameError(true);
		} else {
			setNameError(false);
		}
		if (!props.email.trim()) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
		if (!props.number.trim()) {
			setNumberError(true);
		} else {
			setNumberError(false);
		}
	};

	return (
		<>
			<StepTitle
				title="Personal info"
				paragraf="Please provide your name, email address, and phone number."
			/>

			<form onSubmit={handleSubmit}>
				<div className="flex flex-col sm:h-[370px] sm:w-[435px]">
					<InfoInput
						label="Name"
						id="name"
						type="text"
						value={props.name}
						placeholder="e.g. Stephen King"
						error={nameError}
						func={(e) => props.setName(e.target.value)}
					/>

					<InfoInput
						label="Email Address"
						id="email-address"
						type="email"
						value={props.email}
						placeholder="e.g. stephenking@lorem.com"
						error={emailError}
						func={(e) => props.setEmail(e.target.value)}
					/>

					<InfoInput
						label="Phone Number"
						id="phone-number"
						type="text"
						value={props.number}
						placeholder="e.g. +1 234 567 890"
						error={numberError}
						func={(e) => props.setNumber(e.target.value)}
					/>
				</div>

				<Buttons
					path1=""
					text1=""
					path2="/step_2"
					text2="Next Step"
					lock={
						!props.name.trim() || !props.email.trim() || !props.number.trim()
					}
				/>
			</form>
		</>
	);
}
