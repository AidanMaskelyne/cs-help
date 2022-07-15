// React & Next stuff
import * as React from "react";
import Head from "next/head";

// MUI theme stuff
import { CssBaseline, ThemeProvider, useMediaQuery, createTheme } from "@mui/material";

// MUI typography CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function CSHelp({ Component, pageProps }) {

	const getLayout = Component.getLayout || ((page) => page)

	return getLayout(<Component {...pageProps} />);
}