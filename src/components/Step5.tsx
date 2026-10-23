import StepTitle from "./StepTitle";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

export default function Step5() {
	return (
		<>
			<div className="flex min-h-[300px] w-full flex-col items-center justify-center gap-4 text-center sm:h-[370px] sm:min-h-0 sm:w-[435px] sm:gap-0">
				<img
					className="w-15 h-15 sm:w-20 sm:h-20"
					src={thankYouIcon}
					alt="icon-thank-you"
				/>
				<StepTitle
					title="Thank you!"
					paragraf="Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com."
				/>
			</div>
		</>
	);
}
