// React & Next stuff
import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { CssBaseline, ThemeProvider, useMediaQuery, createTheme } from "@mui/material";

// MUI Typography CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


function CSHelp({ Component, pageProps }: AppProps) {

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark");

	const theme = React.useMemo(
		() => createTheme({
			palette: {
				mode: prefersDarkMode ? "dark" : "light",
			},
		}),
		[prefersDarkMode]
	)

	return(
		<ThemeProvider theme={theme}>
			<Head>
				{/* Ensure proper  MUI rendering */}
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			{/* Ensure consistent (baseline) CSS across browsers */}
			<CssBaseline enableColorScheme />

			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default CSHelp;
