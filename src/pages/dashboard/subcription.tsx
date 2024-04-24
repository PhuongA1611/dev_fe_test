import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Subcription Chart'
    }
  }
}

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const data = {
  labels,
  datasets: [
    {
      label: 'Last week',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#5C5C5C',
      backgroundColor: '#5C5C5C'
    },
    {
      label: 'This week',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#115BB2',
      backgroundColor: '#115BB2'
    }
  ]
}

export default function Subcription() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}
