// React & Next
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

// MUI Components
import { Button } from "@mui/material";

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<main>
				
				<Button variant="contained">Hello World</Button>
			</main>
		</React.Fragment>
	);
}

export default Home;