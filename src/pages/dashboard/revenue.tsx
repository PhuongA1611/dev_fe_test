import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Revenue Chart'
    }
  }
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const revenueData = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: labels.map(() => Math.random() * 1000),
      backgroundColor: '#115BB2'
    }
  ]
}

export default function Revenu() {
  return (
    <div>
      <Bar options={options} data={revenueData} />
    </div>
  )
}
