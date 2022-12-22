import Divider from "@/elements/Divider";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { ContainerSection, DefaultSection } from "@/elements/DefaultSection";
import Modal from "@/elements/Modal";
import Button from "@/elements/Button";
import { toast } from "react-toastify";

const HeadingSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	return (
		<ContainerSection className="w-full">
			<Divider text="Random / random" />
			<div className="space-y-1 mx-auto w-fit">
				{Array(6)
					.fill(0)
					.map((_, index) => {
						const H = `h${
							index + 1
						}` as keyof JSX.IntrinsicElements;
						return (
							<H key={index}>
								<span
									className="text-animate-up overflow-hidden whitespace-pre"
									style={{
										// @ts-ignore
										"--start": `${startDelay}ms`,
										"--delay": `${index * 0.1}s`,
									}}
								>
									Crossover{" "}
								</span>
								<span
									className="text-animate-up overflow-hidden"
									style={{
										// @ts-ignore
										"--start": `${startDelay + 100}ms`,
										"--delay": `${index * 0.1}s`,
									}}
								>
									{index + 1}
								</span>
							</H>
						);
					})}
			</div>
		</ContainerSection>
	);
};

const FontFamilySection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	return (
		<ContainerSection>
			<Divider text="Font Family" />
			<div className="space-y-12 mx-auto w-fit">
				<div
					className="space-y-1 block-animate-up "
					style={{
						// @ts-ignore
						"--start": `${startDelay}ms`,
						"--delay": "50ms",
					}}
				>
					<h1>HaHahehe</h1>
					<h4 className="font-tertiary">XX 2392 XX</h4>
					<h6 className="font-secondary text-sm font-extra">
						funny! isn't it?
					</h6>
				</div>
				<div
					className="space-y-1 block-animate-up"
					style={{
						// @ts-ignore
						"--start": `${startDelay}ms`,
						"--delay": "150ms",
					}}
				>
					<h1 className="font-serif italic bold">AaBbCc</h1>
					<h4 className="font-serif bold font-tertiary">
						1234567890
					</h4>
					<h6 className="font-serif italic bold font-secondary text-sm font-extra">
						ONLY HUMANS!
					</h6>
				</div>
			</div>
		</ContainerSection>
	);
};

const FontWeightSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	const weightMap = {
		"I": "font-extralight",
		"Love": "font-light",
		"Football": "font-normal",
		"&": "font-medium",
		"Technological": "font-semibold",
		"-": "bold",
		"Stuff": "font-extrabold",
	};
	return (
		<ContainerSection>
			<Divider text="Boldness" />
			<div className="flex gap-12 flex-wrap justify-center">
				{Object.keys(weightMap).map((weight, index) => {
					return (
						<h1
							key={index}
							className={`text-animate-up ${
								weightMap[weight as keyof typeof weightMap]
							}`}
							style={{
								// @ts-ignore
								"--start": `${startDelay}ms`,
								"--delay": `${index * 0.1}s`,
							}}
						>
							{weight}
						</h1>
					);
				})}
			</div>
		</ContainerSection>
	);
};

const ModalSection: React.FC<{
	startDelay: Number;
}> = ({ startDelay }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPromptOpen, setIsPromptOpen] = useState(false);
	const DUMMY_TEXT = `The Firefox logo isn't a fox. It's actually a red panda.

	I'm 01100110 01100101 01100101 01101100 01101001 01101110 01100111 00100000 01101100 01110101 01100011 01101011 01111001 00001010.

	Spam Mail was named after the canned meat, SPAM meat.

	There are 1,000,000 ants for every human on Earth.

	Ninety percent of all the world's money has been printed in the last 20 years.

	Xkcd is pronounced "ex-keck-see-dee".

	The founders of Microsoft, Apple, Facebook, and SpaceX have one thing in common—they are all dropouts!

	A 50 PB hard drive could hold the entire written works of mankind, from the beginning of recorded history, in all languages.

	`;
	return (
		<ContainerSection>
			<Divider text="Modals/Prompts" />
			<div
				className="ReactModal__Content overflow-hidden block-animate-up"
				style={{
					// @ts-ignore
					"--start": "750ms",
					"--delay": `${0.25}s`,
				}}
			>
				<div className="flex justify-between py-6 px-8 text-lg font-secondary sticky bg-zinc-900 top-0 left-0 z-20 border-b border-gray-400 border-opacity-10">
					<span>Window</span>
					<a className="cursor-pointer text-zinc-600 hover:text-zinc-400 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</a>
				</div>
				<div className="w-fit relative max-h-[22rem px-8 py-12">
					<h4>This is your place to read.</h4>
				</div>
			</div>
			<div
				className="ReactModal__Content overflow-hidden block-animate-up mt-4"
				style={{
					// @ts-ignore
					"--start": "750ms",
					"--delay": `${0.375}s`,
				}}
			>
				<div className="flex justify-between py-6 px-8 text-lg font-secondary sticky bg-zinc-900 top-0 left-0 z-20 border-b border-gray-400 border-opacity-10">
					<span>Shell</span>
					<a className="cursor-pointer text-zinc-600 hover:text-zinc-400 transition-colors">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</a>
				</div>
				<div className="w-fit relative max-h-[22rem px-8 py-12">
					<h4>But be careful what you wish for!</h4>
				</div>
				<div className="mt-0 sticky flex flex-row-reverse gap-4 bottom-0 right-0 px-8 py-6 bg-zinc-900 border-t border-gray-400 border-opacity-10">
					<Button variant="primary">Sh!t</Button>
					<Button variant="secondary">Leave</Button>
				</div>
			</div>
			<div className="flex gap-12 flex-wrap justify-center mt-8 ">
				<button
					onClick={() => setIsModalOpen(true)}
					style={{
						// Dummy
						// @ts-ignore
						"--start": "1.5s",
						"--delay": `${0.25}s`,
					}}
					className="block-animate-up bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center cursor-pointer"
				>
					Open Command Line
				</button>
				<Modal
					title="Bee Movie Script"
					handleClose={() => setIsModalOpen(false)}
					isOpen={isModalOpen}
				>
					<h4>{DUMMY_TEXT}</h4>
				</Modal>
				<button
					onClick={() => setIsPromptOpen(true)}
					style={{
						// @ts-ignore
						"--start": "1.5s",
						"--delay": `${0.375}s`,
					}}
					className="block-animate-up bg-yellow-400 bg-opacity-25 border border-yellow-300 border-opacity-25 text-white flex items-center gap-2 py-2 px-4 font-semibold tracking-normal rounded-2xl transition-colors hover:border-opacity-0 hover:shadow-md justify-center cursor-pointer"
				>
					Open New Tab To Smile
				</button>
				<Modal
					title="Bee Movie Script"
					isPrompt={true}
					handleClose={() => setIsPromptOpen(false)}
					isOpen={isPromptOpen}
				>
					<h4>{DUMMY_TEXT}</h4>
				</Modal>
			</div>
		</ContainerSection>
	);
};

const ToastSection: React.FC<{
	startDelay: number;
}> = ({ startDelay }) => {
	const notify = () => toast("This is a toast");
	const notifyInfo = () => toast.info("This is a toast");
	const notifyWarning = () => toast.warning("This is a toast");
	const notifySuccess = () => toast.success("This is a toast");
	const notifyError = () => toast.error("This is a toast");
	return (
		<ContainerSection className="w-full">
			<Divider text="RGB section" />
			<div className="space-y-1 mx-auto w-fit">
				<div className="flex gap-4 flex-wrap justify-center">
					<Button
						variant="tertiary"
						onClick={notify}
						className="block-animate-up"
						style={{
							// @ts-ignore
							"--start": "0.5s",
							"--delay": `${0.2}s`,
						}}
					>
					hiiiii!!
					</Button>
					<Button
						variant="primary"
						onClick={notifyWarning}
						className="block-animate-up"
						style={{
							// @ts-ignore
							"--start": "0.5s",
							"--delay": `${0.2 + 0.05}s`,
						}}
					>
						holaa
					</Button>
					<Button
						variant="primary"
						className="bg-blue-400 border-blue-300 block-animate-up"
						style={{
							// @ts-ignore
							"--start": "0.5s",
							"--delay": `${0.2 + 0.1}s`,
						}}
						onClick={notifyInfo}
					>
					hallo
					</Button>
					<Button
						variant="primary"
						className="bg-red-400 border-red-300 block-animate-up"
						style={{
							// @ts-ignore
							"--start": "0.5s",
							"--delay": `${0.2 + 0.15}s`,
						}}
						onClick={notifyError}
					>
						salut
					</Button>
					<Button
						variant="primary"
						className="bg-green-400 border-green-300 block-animate-up"
						style={{
							// @ts-ignore
							"--start": "0.5s",
							"--delay": `${0.2 + 0.2}s`,
						}}
						onClick={notifySuccess}
					>
					privet
					</Button>
				</div>
			</div>
		</ContainerSection>
	);
};

const MoreSection: React.FC<{
	startDelay: number;
}> = ({ startDelay }) => {
	const [show, setShow] = useState(false);
	return (
		<ContainerSection className="w-full">
			<Divider text="More" />
			<div className="space-y-1 mx-auto w-fit">
				<div className="flex gap-4 flex-wrap justify-center">
					<h3
						className="block-animate-up"
						style={{
							// @ts-ignore
							"--start": "1s",
							"--delay": `${0.375}s`,
						}}
					>
						More coming{" "}
						<RoughNotation
							type="underline"
							show={true}
							strokeWidth={3}
							animationDuration={400}
							animationDelay={startDelay}
							color="rgb(130 255 0 / 0.5)"
						>
							soon...
						</RoughNotation>
					</h3>
					<p
						className="font-extra text-animate-up"
						style={{
							// @ts-ignore
							"--start": "1s",
							"--delay": `${0.5}s`,
						}}
					>
						Meanwhile you can sitback at your home & make a{" "}
						<a
							href={`https://github.com/adityassharma-ss/`}
							target="_blank"
							rel="noreferrer"
							className="text-zinc-400 hover:text-zinc-100 cursor-pointer"
							onMouseOut={() => setShow(false)}
							onMouseOver={() => setShow(true)}
						>
							<RoughNotation
								type="underline"
								show={show}
								strokeWidth={3}
								animationDuration={400}
								animationDelay={0}
								color="rgb(130 255 0 / 0.5)"
							>
								Pull Request
							</RoughNotation>
						</a>
					</p>
				</div>
			</div>
		</ContainerSection>
	);
};

const SectionUIKit = () => {
	return (
		<div>
			<HeadingSection startDelay={150} />
			<FontFamilySection startDelay={1000} />
			<FontWeightSection startDelay={1200} />
			<ModalSection startDelay={1400} />
			<ToastSection startDelay={1600} />
			<MoreSection startDelay={1800} />
		</div>
	);
};

export default SectionUIKit;
