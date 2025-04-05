import React, { useState } from "react";
import { CuerpoSemaforo } from "./CuerpoSemaforo";
import { CabezaSemaforo } from "./CabezaSemaforo";

//include images into your bundle

//create your first component

const Home = () => {
	return (
		<>
			<div className="row d-flex justify-content-between align-items-center">
				<div className="col-sm-12 col-md-12 col-lg-9">
					<CabezaSemaforo />
					<div className="container">
						<CuerpoSemaforo />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;