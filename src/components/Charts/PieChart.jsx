import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip,);

const PieChart = () => {
	return (
		<>
			<Pie className=" mx-auto"
				data={{
					labels: ["John", "Danny", "Frank", "Mark"],
					datasets: [
						{
							label: "",
							data: [300, 80, 100, 50],
							backgroundColor: ["#63ab45", "#82bb6a", "#72b357", "#91c47c"],
							hoverBackgroundColor: ["#a1cc8f", "#b1d5a2", "#c0ddb4", "#d0e5c7"],
							
						},
						
					],
				}}
				
				options={{
					responsive: false,
				}}
			/>
		</>
	);
};

export default PieChart;
