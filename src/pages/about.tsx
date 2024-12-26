import Layout from "@theme/Layout";
import "../css/about.css";
import CarlosGrandmaImage from "@site/static/images/grandma.jpg";
import OjosProjectLogo from "@site/static/images/logo.png";
import Button from "../components/Button";

{
	/*
        Things needed in an about page: (Or, what we will have)
        - Overview
        - Mission statement
        - History
        - 
    */
}

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

function HistorySection({ title, children }: SectionProps) {
	return (
		<div className="section-history">
			<h2>{title}</h2>
			{children}
		</div>
	);
}

function Section({ title, children }: SectionProps) {
	return (
		<div className="section">
			<h1 className="large_header">{title}</h1>
			{children}
		</div>
	);
}

export default function About() {
	return (
		<Layout>
			<div className="container-about">
				<div className="header-about">
					<h1>About Us</h1>
				</div>
				<Section title="Our Mission">
					<h2>
						Our mission is to create{" "}
						<span className="blue_text">a better hospice experience</span> by
						creating{" "}
						<span className="blue_text">open and reliable systems</span> for
						caregivers.
					</h2>
				</Section>
				<Section title="Our Values">
					<h2>1. Open technology</h2>
					<p>
						We are a group dedicated towards the principles of open technology.
						We do so in many different ways. Iris' code is protected with the
						GNU GPLv3, ensuring that our program is used for the benefit of
						humanity.
					</p>
					<p>
						Palliaview's designs are protected with the Creative Commons
						NonCommercial license.
					</p>
					<p>All of our technology will be documented.</p>
					<h2>2. Ease-of-use</h2>
					<p>
						Ease-of-use should be a requirement in the healthcare software
						space. In our case, we want caregivers to be able to quickly
						understand our technology so that they can move on to more important
						tasks. Ensuring our system is easy to use, understand, and benefit
						from is crucial to the Ojos Project.
					</p>
					<h2>3. Ease-of-mind</h2>
					<p>
						Caregiving can be a stressful task. We want to be as helpful as
						possible. Therefore, the Ojos Project is putting an emphasis on our
						technology being able to ease the mind, let go of various anxieties
						that can come from caregiving.
					</p>
					<h2>4. Reliability</h2>
					<p>
						Ojos Project uses technology that puts an emphasis on reliability,
						such as the Rust programming language.
					</p>
					<h2>5. Helping because we can</h2>
					<p>
						Ojos Project helps because we <em>can</em>. We're a group that
						volunteers our time at the University of California, Irvine.
					</p>
				</Section>
				<Section title="Our Goals">
					<h2>1. Understand the needs of caregivers.</h2>
					<p>
						As a research project, we aim to research the needs of caregivers.
						We do so by reading academic papers, interviewing healthcare
						professionals, and general outreach.
					</p>
					<h2>2. Create an open, reliable system for caregivers.</h2>
					<p>
						Our ultimate goal is to create reliable technology for caregivers,
						starting with Iris and Palliaview.
					</p>
				</Section>
				{/* Include another section for Our History. */}
			</div>
		</Layout>
	);
}
