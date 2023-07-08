import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Scale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
	return (
		<>
			<Bar
				datasetIdKey="id"
				data={{
					labels: [
						"Oct 5",
						"Oct 6",
						"Oct 7",
						"Oct 8",
						"Oct 9",
						"Oct 10",
						"Oct 11",
						"Oct 12",
						"Oct 13",
						"Oct 14",
						"Oct 15",
					],

					datasets: [
						{
							id: 1,
							label: "Organic Search $",
							data: [320, 500, 410, 610, 420, 360, 410, 400, 370, 400, 410],
							backgroundColor: "#63ab45",
							hoverBackgroundColor: "#82bb6a",
							barPercentage: 0.5,
						},
						{
							id: 2,
							label: "Facebook Ads $",
							data: [150, 220, 390, 200, 180, 290, 300, 100, 300, 250, 470],
							backgroundColor: "#CFF5E7",
							barPercentage: 0.5,
						},
					],
				}}

                options={{
                    responsive :true,
                    
                    scales : {
                        x : {
                           grid:{
                            display:false
                           }
                        }
                    }
                  
                }}
			/>
		</>
	);
};

export default BarChart;
