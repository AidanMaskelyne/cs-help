import * as React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
// import Footer from "./Footer";

import { CssBaseline, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

export default function Layout({ children }) {
	
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark");

	const theme = React.useMemo(
		() => createTheme({
			palette: {
				mode: prefersDarkMode ? "dark" : "light",
			},
		}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<Head>
				{/* Ensure proper MUI rendering */}
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			{/* Ensure consistent (baseline) CSS across browsers */}
			<CssBaseline enableColorScheme />


			<React.Fragment>
				<Navbar />
				{ children }
				{/* <Footer /> 4*/}
			</React.Fragment>
		</ThemeProvider>
	)
}