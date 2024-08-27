import stylex from "@stylexjs/stylex";
import React from "react";

import { projectsList } from "../projects-info";
const styles = stylex.create({});
export default function ProjectsSidebar() {
	return (
		<div>
			{projectsList.map((project) => {
				return <div key={project.name}>{project.name}</div>;
			})}
		</div>
	);
}
