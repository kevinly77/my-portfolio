import stylex from "@stylexjs/stylex";
import React from "react";

import { projectsList } from "../projects-info";
const styles = stylex.create({
	wrapper: {},
	project: {
		/* borderStyle: "solid",
		borderWidth: "0px 10px",
		borderImage: "url(/info-card.svg) 0 0 fill", */
		//padding: "1rem",
		//minWidth: "24rem",
		//border: "1px solid blue",
		padding: "0.5rem",
		backgroundImage: "url(/info-card.svg)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		marginLeft: "4rem",
	},
	projectsList: {
		display: "flex",
		flexDirection: "column",
		gap: "0.25rem",
	},
	projectName: {
		color: "var(--cyan-main)",
		fontFamily: "var(--font-accent)",
		marginLeft: "2.5rem",
	},

	projectHeader: {
		backgroundImage: "url(/info-card.svg)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		padding: "0.5rem",
	},
});

interface I_ProjectsSidebarProps {
	handleProjectClick: (projectName: string) => void;
}
export default function ProjectsSidebar({
	handleProjectClick,
}: I_ProjectsSidebarProps) {
	return (
		<div {...stylex.props(styles.wrapper)}>
			<div {...stylex.props(styles.projectHeader)}>
				<h2 {...stylex.props(styles.projectName)}>PROJECTS</h2>
			</div>
			<div {...stylex.props(styles.projectsList)}>
				{projectsList.map((project) => {
					return (
						<div
							key={project.name}
							{...stylex.props(styles.project)}
							onClick={() => handleProjectClick(project.name)}
						>
							<h2 {...stylex.props(styles.projectName)}>
								{project.name.toUpperCase()}
							</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}
