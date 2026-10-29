import { useState } from "react";
import InfoInput from "./InfoInput";
import StepTitle from "./StepTitle";
import Buttons from "./Buttons";
import type { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

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
	const [emailErrorMessage, setEmailErrorMessage] = useState("required");

	const navigate = useNavigate();

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
	e.preventDefault(); 
	const nameMissing = !props.name.trim(); 
	const emailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.email.trim()); 
	const numberMissing = !props.number.trim(); 

	setNameError(nameMissing); 
	setEmailError(emailInvalid); 
	setNumberError(numberMissing);
	setEmailErrorMessage(!props.email.trim() ? "required" : "invalid")

	if (!nameMissing && !emailInvalid && !numberMissing) navigate("/step_2");
	};

	return (
		<>
			<StepTitle
				title="Personal info"
				paragraf="Please provide your name, email address, and phone number."
			/>

			<form onSubmit={handleSubmit} noValidate>
				<div className="flex flex-col lg:h-[370px] lg:w-[435px]">
					<InfoInput
						label="Name"
						id="name"
						type="text"
						value={props.name}
						placeholder="e.g. Stephen King"
						error={nameError}
						setError={"required"}
						func={(e) => props.setName(e.target.value)}
					/>

					<InfoInput
						label="Email Address"
						id="email-address"
						type="email"
						value={props.email}
						placeholder="e.g. stephenking@lorem.com"
						error={emailError}
						setError={emailErrorMessage}
						errorMessage="Enter a valid email address"
						func={(e) => props.setEmail(e.target.value)}
					/>

					<InfoInput
						label="Phone Number"
						id="phone-number"
						type="text"
						value={props.number}
						placeholder="e.g. +1 234 567 890"
						error={numberError}
						setError={"required"}
						func={(e) => props.setNumber(e.target.value)}
					/>
				</div>

				<Buttons
					path1=""
					text1=""
					path2="/step_2"
					text2="Next Step"
					blocked={true}
				/>
			</form>
		</>
	);
}
