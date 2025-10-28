import express from "express"
import cors from "cors"
import dayjs from "dayjs"

const awaitTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const app = express()
app.use(cors())
app.use(express.json())

// Función para generar un timestamp basado en el día del mes
function generateTimestampByDay(day) {
  // Genera una fecha en el día especificado del mes actual
  return dayjs()
    .startOf("month")
    .add(day - 1, "day")
    .toISOString()
}

// Función para generar un item de métricas
function generateMetrics(day) {
  return {
    US: {
      timestamp: generateTimestampByDay(day),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    EU: {
      timestamp: generateTimestampByDay(day),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    LATAM: {
      timestamp: generateTimestampByDay(day),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    APAC: {
      timestamp: generateTimestampByDay(day),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    updatedAt: dayjs().startOf("month").toISOString(),
  }
}

// Endpoint de métricas simuladas con volumen
app.get("/metrics", async (req, res) => {
  await awaitTime(1500)
  const { count = 30 } = req.query // opcional: pasar ?count=50
  const metricsArray = Array.from({ length: Number(count) }, (_, index) =>
    generateMetrics(index + 1)
  )
  res.json(metricsArray)
})

app.listen(4000, () => console.log("Mock API running on http://localhost:4000"))
