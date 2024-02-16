import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tobace.jpg"
								alt="Tobace"
								className="work-image"
							/>
							<div className="work-title">B. Tobace</div>
							<div className="work-subtitle">
								System Analyst
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./tobace.jpg"
								alt="Tobace"
								className="work-image"
							/>
							<div className="work-title">B. Tobace</div>
							<div className="work-subtitle">
								Support Analyst
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
