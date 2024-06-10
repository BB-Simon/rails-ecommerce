import { Controller } from "@hotwired/stimulus";
// import { Chart, registerables } from "chart.js"

// Chart.register(...registerables)

// Connects to data-controller="dashboard"
export default class extends Controller {
  static targets = ['myChart'];

  connect() {
    console.log("Hi")
    const data = [12, 34, 54, 54, 54, 54, 54];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const ctx = document.getElementById('revenueChart');

    // new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: labels,
    //     datasets: [{
    //       label: 'Revenue $',
    //       data: data,
    //       borderWidth: 3,
    //       fill: true,
    //     }]
    //   },
    //   options: {
    //     plugins: {
    //       legend: {
    //         display: false,
    //       }
    //     },
    //     scales: {
    //       x: {
    //         grid: {
    //           display: false,
    //         }
    //       },
    //       y: {
    //         border: {
    //           dash: [5, 5]
    //         },
    //         grid: {
    //           color: "#d4f3ef"
    //         },
    //         beginAtZero: true,
    //       }
    //     }
    //   }
    // })
  }
}
