import StepTitle from "./StepTitle";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

export default function Step5() {
	return (
		<>
			<div className="flex flex-col min-h-[300px] w-full items-center justify-center gap-4 text-center lg:h-[568px] lg:min-h-0 lg:w-[435px] lg:gap-0">
				<img
					className="w-15 h-15 lg:w-20 lg:h-20"
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
