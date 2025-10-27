import express from "express"
import cors from "cors"
import dayjs from "dayjs"

const awaitTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const app = express()
app.use(cors())
app.use(express.json())

// Función para generar un timestamp futuro
function generateFutureTimestamp() {
  const now = dayjs()
  const endOfMonth = now.endOf("month")
  const daysUntilEndOfMonth = endOfMonth.diff(now, "day")

  // Genera un número aleatorio de días entre 0 y los días restantes del mes
  const randomDays = Math.floor(Math.random() * (daysUntilEndOfMonth + 1))

  return now.add(randomDays, "day").toISOString()
}

// Función para generar un item de métricas
function generateMetrics() {
  return {
    US: {
      timestamp: generateFutureTimestamp(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    EU: {
      timestamp: generateFutureTimestamp(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    LATAM: {
      timestamp: generateFutureTimestamp(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    APAC: {
      timestamp: generateFutureTimestamp(),
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
  await awaitTime(1000)
  const { count = 20 } = req.query // opcional: pasar ?count=50
  const metricsArray = Array.from({ length: Number(count) }, () =>
    generateMetrics()
  )
  res.json(metricsArray)
})

app.listen(4000, () => console.log("Mock API running on http://localhost:4000"))
