import { useState } from "react";

export default function AppealModal(): JSX.Element {
	const [successAlertIsVisible, setSuccessAlertIsVisible] = useState(false);

	return (
		<>
			{successAlertIsVisible && (
				<div className="alert alert-success shadow-lg my-2">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-current flex-shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>The appeal was successfully sent!</span>
					</div>
				</div>
			)}
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<h3 className="text-lg font-bold">Appeal the rejection</h3>
					<textarea
						className="textarea textarea-primary w-full"
						placeholder="Mention any mistakes the AI made"
						defaultValue={""}
					/>
					<label
						htmlFor="my-modal-4"
						className="btn btn-outline btn-primary "
						onClick={() => setSuccessAlertIsVisible(true)}
					>
						Appeal
					</label>
				</label>
			</label>
		</>
	);
}
