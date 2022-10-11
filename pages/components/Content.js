import React from 'react'
import styles from "../../styles/Home.module.css";
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

//data for bar chart
const data = {
	labels: [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Decembre",
	],
	datasets: [
		{
			label: "Charges/ mois",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};

//doughnut chart data set

const data1 = {
	labels: ["Gasoil", "Main d'Oeuvre", "Matériel"],
	datasets: [
		{
			data: [25, 15, 60],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};





function Content() {
  return (
    <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h4>Charges & Productions</h4>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h4>Coût de revient</h4>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h4>Statistiques</h4>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h4>Prévisions</h4>
                </div>
            </div>
        </div>
        {/* chart jsx started */}
        <div className={styles.charts}>
            <div className={styles.bar}>
                <h2>Tous les Chantiers</h2>
                <Line data={data} width={400} height={400}/>
            </div>
            <div className={styles.circle}>
                <h2>Répartitions par catégorie</h2>
                <Doughnut data={data1} width={400} height={400} />
            </div>
        </div>
    </div>
  )
}

export default Content