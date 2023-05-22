import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let ventas = [0, 56, 20, 36, 80, 40, 10, 1,];
let videogames = [
  "Firewatch",
  "The Witcher 3: Wild Hunt",
  "Tomb Raider (2013)",
  "The Elder Scrolls V: Skyrim",
  "God of War (2018)",
  "Terraria",
  "Warframe",
  "Grand ThefT Auto IV",
];

var midata = {
  labels: videogames,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Beneficios",
      data: ventas,
      tension: 0.5,
      fill: true,
      borderColor: "rgb (21, 101, 192)",
      backgroundColor: "rgb (66, 165, 245)",
      pointRadius: 5,
      pointBorderColor: "rgb (0, 188, 212)",
      pointBackgroundColor: "rgb (178, 235, 242)",
    },
  ],
};

var misoptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "rgb (1, 87, 155)" },
    },
  },
};

export default function LinesChart() {
  return <Line data={midata} options={misoptions} />;
}