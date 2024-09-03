import stylex from "@stylexjs/stylex";
import React from "react";
import { projectsList } from "../projects-info";
const styles = stylex.create({
	wrapper: {
		border: "1px solid brown",
		width: "100%",
		height: "100%",
	},
});

interface I_ProjectDetailsProps {
	selectedProject: string;
}
export default function ProjectDetails({
	selectedProject,
}: I_ProjectDetailsProps) {
	const selectedProjectDetails = projectsList.find(
		(project) => project.name === selectedProject,
	);
	return (
		<div {...stylex.props(styles.wrapper)}>
			<h2>{selectedProjectDetails?.name}</h2>
			<p>{selectedProjectDetails?.description}</p>
		</div>
	);
}
