import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StepsSideBar from "./components/StepsSideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
	// Step 1
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");

	// Step 2
	const [selectedPlan, setSelectedPlan] = useState("arcade");
	const [selectedPlanTime, setSelectedPlanTime] = useState(false);

	type PlanId = "arcade" | "advanced" | "pro";

	const planPrices: Record<PlanId, { monthly: number; yearly: number }> = {
		arcade: { monthly: 9, yearly: 90 },
		advanced: { monthly: 12, yearly: 120 },
		pro: { monthly: 15, yearly: 150 },
	};

	const planPrice =
		planPrices[selectedPlan as PlanId][selectedPlanTime ? "yearly" : "monthly"];

	// Step 3
	const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

	type AddonId = "online-service" | "larger-storage" | "customizable-profile";

	const addonPrices: Record<AddonId, { monthly: number; yearly: number }> = {
		"online-service": { monthly: 1, yearly: 10 },
		"larger-storage": { monthly: 2, yearly: 20 },
		"customizable-profile": { monthly: 2, yearly: 20 },
	};

	// Step 4
	const billingPeriod = selectedPlanTime ? "yearly" : "monthly";

	const selectedAddonsList = selectedAddons.map((id) => (
		<div key={id} className="flex items-center justify-between">
			<p className="text-gray-500">
				{id.charAt(0).toUpperCase() +
					id.slice(1).toLowerCase().replace("-", " ")}
			</p>
			<p className="text-blue-950">
				+${addonPrices[id as AddonId][billingPeriod]}
				{selectedPlanTime ? "/yr" : "/mo"}
			</p>
		</div>
	));

	const addonsTotal = selectedAddons.reduce(
		(total, id) =>
			total +
			addonPrices[id as AddonId][selectedPlanTime ? "yearly" : "monthly"],
		0,
	);

	return (
		<>
			<main className="lg:flex w-full overflow-hidden lg:h-[600px] lg:w-[950px] lg:p-4 lg:bg-white lg:rounded-xl m-auto lg:mt-[100px]">
				<Routes>
					<Route
						path="/"
						element={
							<StepsSideBar
								number={1}
								step={
									<Step1
										name={name}
										email={email}
										number={number}
										setName={setName}
										setEmail={setEmail}
										setNumber={setNumber}
									/>
								}
							/>
						}
					/>
					<Route
						path="/step_1"
						element={
							<StepsSideBar
								number={1}
								step={
									<Step1
										name={name}
										email={email}
										number={number}
										setName={setName}
										setEmail={setEmail}
										setNumber={setNumber}
									/>
								}
							/>
						}
					/>
					<Route
						path="/step_2"
						element={
							<StepsSideBar
								number={2}
								step={
									<Step2
										selectedPlan={selectedPlan}
										onPlanChange={setSelectedPlan}
										selectedPlanTime={selectedPlanTime}
										onPlanTimeChange={setSelectedPlanTime}
									/>
								}
							/>
						}
					/>
					<Route
						path="/step_3"
						element={
							<StepsSideBar
								number={3}
								step={
									<Step3
										selectedPlanTime={selectedPlanTime}
										selectedAddons={selectedAddons}
										onSelectedAddonsChange={setSelectedAddons}
									/>
								}
							/>
						}
					/>
					<Route
						path="/step_4"
						element={
							<StepsSideBar
								number={4}
								step={
									<Step4
										selectedPlan={selectedPlan}
										selectedPlanTime={selectedPlanTime}
										planPrices={planPrice}
										selectedAddons={selectedAddons}
										addonsTotal={addonsTotal}
										selectedAddonsList={selectedAddonsList}
									/>
								}
							/>
						}
					/>
					<Route
						path="/step_5"
						element={
							<StepsSideBar number={4} hasNav={false} step={<Step5 />} />
						}
					/>
				</Routes>
				
			</main>
			<footer className="px-2 lg:px-0 pb-20 lg:pb-0 text-center">
				Challenge by{" "}
				<Link
					to="https://www.frontendmentor.io?ref=challenge"
					className="text-[hsl(228,45%,44%)]"
				>
					Frontend Mentor
				</Link>
				. Coded by{" "}
				<Link
					to="https://github.com/Trueraqe"
					className="text-[hsl(228,45%,44%)]"
				>
					Trueraqe
				</Link>
				.
			</footer>
		</>
	);
}

export default App;
