import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
	return (
		<>
			<Doughnut
				className=" mx-auto"
				data={{
					labels: ["Sandra", "Becky", "Julie", "Romero"],
					datasets: [
						{
							label: "# of Votes",
							data: [250, 50, 100, 40],
							backgroundColor: ["#63ab45", "#82bb6a", "#72b357", "#91c47c"],
							hoverBackgroundColor: [
								"#a1cc8f",
								"#b1d5a2",
								"#c0ddb4",
								"#d0e5c7",
							],
							cutout: "70%",
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

export default DoughnutChart;
