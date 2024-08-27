import React from "react";
import ProjectsSidebar from "./sidebar";
import stylex from "@stylexjs/stylex";
import ProjectDetails from "./details";

const styles = stylex.create({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		color: "white",
	},
});
export default function ProjectsPage() {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<ProjectsSidebar />
			<ProjectDetails />
		</div>
	);
}
