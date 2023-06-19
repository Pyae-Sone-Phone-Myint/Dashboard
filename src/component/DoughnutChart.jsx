import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = () => {
	return (
		<>
			<Doughnut
				data={{
					labels: ["Sandra", "Becky", "Julie", "Romero"],
					datasets: [
						{
							label: "# of Votes",
							data: [250, 50, 100, 40],
							backgroundColor: [
								"rgba(14, 109, 253)",
								"rgba(158, 197, 254)",
								"rgba(110, 168, 254)",
								"rgba(61, 139, 252)",
								
							],
							borderColor: [
								"rgba(14, 109, 253)",
								"rgba(158, 197, 254)",
								"rgba(110, 168, 254)",
								"rgba(61, 139, 252)",
							],
							borderWidth: 2,
							cutout: "80%"
						},
					],
				}}

				options={{
					responsive: true,
					

				}}
			/>
		</>
	);
};

export default DoughnutChart;
