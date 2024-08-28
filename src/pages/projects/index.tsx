import React, { useState } from "react";
import ProjectsSidebar from "./sidebar";
import stylex from "@stylexjs/stylex";
import ProjectDetails from "./details";

const styles = stylex.create({
	container: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		//alignItems: "center",
		backgroundColor: "#000000",
		boxSizing: "border-box",
	},
	wrapper: {
		display: "grid",
		gridTemplateColumns: "40% 60%",
		color: "white",
		border: "1px solid red",
		width: "100%",
		//maxHeight: "24rem",
		//maxWidth: "50%",
		maxWidth: "80rem",
	},
});
export default function ProjectsPage() {
	const [currentProject, setCurrentProject] = useState("Project 1");

	function handleProjectClick(projectName: string) {
		setCurrentProject(projectName);
	}
	return (
		<div {...stylex.props(styles.container)}>
			<div {...stylex.props(styles.wrapper)}>
				<ProjectsSidebar handleProjectClick={handleProjectClick} />
				<ProjectDetails selectedProject={currentProject} />
			</div>
		</div>
	);
}
