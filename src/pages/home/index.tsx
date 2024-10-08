import stylex from "@stylexjs/stylex";
import { useEffect, useRef, useState } from "react";
import Circles from "/lots-of-circles.svg";
import BodyIcon from "/body-icon.svg";
import IntelligenceIcon from "/intelligence-icon.svg";
import ReflexIcon from "/reflex-icon.svg";
import TechnicalIcon from "/technical-icon.svg";
import CoolIcon from "/cool-icon.svg";
import ProjectsPage from "../projects";
const styles = stylex.create({
	container: {
		//backgroundColor: "black",
		height: "100%",
		display: "flex",
		gap: "2rem",
		gridTemplateColumns: "auto 1fr",
		paddingInline: "4rem",
		justifyContent: "center",
		alignItems: "center",
		//gap: "2rem",
		boxSizing: "border-box",
		//backgroundImage: "url(/.svg)",
		backgroundRepeat: "repeat",
	},
	flag: {
		display: "flex",
		border: "4px solid var(--purple-main)",
		padding: "1rem",
		boxShadow: "0px 4px 25px var(--purple-main)",
		backgroundColor: "rgba(176, 5, 128, 0.1)",
		//backgroundColor: "rgba(94, 246, 255, 0.1)",
		maxWidth: "fit-content",
		//padding: "5rem",
	},

	sidewaysName: {
		color: "var(--cyan-main)",
		fontFamily: "var(--font-main)",
		whiteSpace: "nowrap",
		writingMode: "vertical-lr",
		padding: "0",
		margin: "0",
		fontSize: "5em",
		//textShadow: "0px 4px 25px var(--purple-main)",
	},

	sidewaysJapanese: {
		WebkitTextStrokeWidth: "2px",
		WebkitTextStrokeColor: "var(--cyan-main)",
		//textShadow: "0px 4px 25px var(--purple-main)",
		fontFamily: "var(--font-main)",
		whiteSpace: "nowrap",
		writingMode: "vertical-lr",
		padding: "0",
		margin: "0",
		fontSize: "5em",
	},

	leftSide: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "2rem",
		//backgroundColor: "pink",
		height: "100%",
		width: "fit-content",
	},

	rightSide: {
		//color: "white",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		//alignItems: "center",
		//backgroundColor: "red",
		height: "100%",
		width: "fit-content",
		//backgroundColor: "blue",
	},

	description: {
		color: "white",
		fontFamily: "Rajdhani, sans-serif",
		fontSize: "1.5em",
		maxWidth: "45rem",
	},

	descriptionWrapper: {
		display: "flex",
		padding: "2rem",
		//boxSizing: "border-box",
		//border: "4px solid transparent",
		borderStyle: "solid",
		borderWidth: "0px 20px",
		borderImage: "url(/cut-box.svg) 0 20 fill",

		//backgroundColor: "blue",
		//backgroundPosition: "center",
	},

	svg: {
		width: "100%",
		height: "100%",
	},

	infoCard: {
		display: "flex",
		//padding: "2rem",
		//boxSizing: "border-box",
		//border: "4px solid transparent",
		borderStyle: "solid",
		borderWidth: "0px 10px",
		borderImage: "url(/info-card.svg) 0 0 fill",
		//backgroundColor: "pink",
		maxWidth: "60rem",
		minWidth: "35rem",
		paddingTop: "1rem",
		paddingBottom: "1rem",
	},

	infoCardTextWrapper: {
		//backgroundColor: "blue",
		color: "var(--purple-main)",
		width: "80%",
		marginInline: "auto",
	},

	infoCardHeader: {
		fontFamily: "var(--font-accent)",
		color: "var(--purple-main)",
		fontSize: "1.5em",
	},

	infoCardDescription: {
		fontFamily: "var(--font-accent)",
		color: "var(--cyan-main)",
	},
	infoCardAttributes: {
		display: "flex",
		flexDirection: "column",
		//gap: "0.25rem",
		paddingLeft: "1rem",
	},
	infoCardAttribute: {
		display: "flex",
		gap: "0.5rem",
		color: "var(--cyan-main)",
		fontFamily: "var(--font-accent)",
		fontSize: "1.5em",
	},
	divider: {
		border: "1px solid var(--purple-main)",
		width: "100%",
	},
});
export default function HomePage() {
	return (
		<div>
			<div {...stylex.props(styles.container)}>
				<div {...stylex.props(styles.leftSide)}>
					<div {...stylex.props(styles.flag)}>
						<h1 {...stylex.props(styles.sidewaysName)}>KEVIN LY</h1>
						<h1 {...stylex.props(styles.sidewaysJapanese)}>はじめまして</h1>
					</div>
					<img alt="circles" src={Circles} />
				</div>

				<div {...stylex.props(styles.rightSide)}>
					<div {...stylex.props(styles.infoCard)}>
						<div {...stylex.props(styles.infoCardTextWrapper)}>
							<div>
								<p {...stylex.props(styles.infoCardHeader)}>NAME</p>
								<hr {...stylex.props(styles.divider)} />
								<p {...stylex.props(styles.infoCardDescription)}>Kevin Ly</p>
							</div>
							<div>
								<p {...stylex.props(styles.infoCardHeader)}>OCCUPATION</p>
								<hr {...stylex.props(styles.divider)} />
								<p {...stylex.props(styles.infoCardDescription)}>
									Software Developer / Netrunner
								</p>
							</div>
							<div>
								<p {...stylex.props(styles.infoCardHeader)}>BACK STORY</p>
								<hr {...stylex.props(styles.divider)} />
								<p {...stylex.props(styles.infoCardDescription)}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									nec purus ac libero finibus euismod. Sed blandit, nunc at
									tincidunt tincidunt, nunc velit convallis nulla, id aliquet
									arcu tortor vitae erat.
								</p>
							</div>
							<div>
								<p {...stylex.props(styles.infoCardHeader)}>
									ATTRIBUTES OF CAPABILITY PREDISPOSITIONS
								</p>
								<hr {...stylex.props(styles.divider)} />
								<div {...stylex.props(styles.infoCardAttributes)}>
									<div {...stylex.props(styles.infoCardAttribute)}>
										<img src={BodyIcon} />
										<p>4</p>
										<p>BODY</p>
									</div>
									<div {...stylex.props(styles.infoCardAttribute)}>
										<img src={IntelligenceIcon} />
										<p>8</p>
										<p>INTELLIGENCE</p>
									</div>
									<div {...stylex.props(styles.infoCardAttribute)}>
										<img src={ReflexIcon} />
										<p>6</p>
										<p>REFLEX</p>
									</div>
									<div {...stylex.props(styles.infoCardAttribute)}>
										<img src={TechnicalIcon} />
										<p>8</p>
										<p>TECHNICAL ABILITY</p>
									</div>
									<div {...stylex.props(styles.infoCardAttribute)}>
										<img src={CoolIcon} />
										<p>10</p>
										<p>COOL</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
