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
							backgroundColor: ["#6610f2", "#c29ff9", "#a371f7", "#8540f5"],
							borderColor: ["#6610f2", "#c29ff9", "#a371f7", "#8540f5"],
							borderWidth: 1,
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
