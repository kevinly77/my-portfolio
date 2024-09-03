import "./App.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import stylex from "@stylexjs/stylex";
import ProjectsPage from "./pages/projects";
import PageWrapper from "./components/page-wrapper";

const styles = stylex.create({
	layoutContainer: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
	},
});
function Layout() {
	return (
		<div {...stylex.props(styles.layoutContainer)}>
			<div>
				<PageWrapper>
					<HomePage />
				</PageWrapper>
			</div>
		</div>
	);
}
function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>,
		),
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
