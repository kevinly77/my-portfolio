import stylex from "@stylexjs/stylex";
import React, { ReactNode } from "react";

import TopBorder from "/top-border.svg";
import BottomBorder from "/bottom-border.svg";

import LeftBorder from "/left-border.svg";
import RightBorder from "/right-border.svg";
const styles = stylex.create({
	container: {
		//padding: "2rem",
		display: "flex",
	},
	innerWrapper: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		width: "100%",
		height: "100%",
		paddingInline: "2rem",
		//padding: "2rem",
		//border: "1px solid red",
	},

	borders: {
		width: "100%",
		height: "100%",
		marginBottom: "3rem",
		marginTop: "3rem",
	},

	sideBorders: {
		height: "100%",
		marginTop: "1rem",
		marginBottom: "1rem",
	},
});

interface I_PageWrapperProps {
	children: ReactNode;
}
export default function PageWrapper({ children }: I_PageWrapperProps) {
	return (
		<div {...stylex.props(styles.container)}>
			<img src={LeftBorder} {...stylex.props(styles.sideBorders)} />
			<div {...stylex.props(styles.innerWrapper)}>
				<img src={TopBorder} {...stylex.props(styles.borders)} />
				{children}
				<img src={BottomBorder} {...stylex.props(styles.borders)} />
			</div>
			<img src={RightBorder} {...stylex.props(styles.sideBorders)} />
		</div>
	);
}
