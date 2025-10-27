import express from "express"
import cors from "cors"

const awaitTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const app = express()
app.use(cors())
app.use(express.json())

// Función para generar un item de métricas
function generateMetrics() {
  return {
    US: {
      timestamp: new Date().toISOString(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    EU: {
      timestamp: new Date().toISOString(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    LATAM: {
      timestamp: new Date().toISOString(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
    APAC: {
      timestamp: new Date().toISOString(),
      activeUsers: Math.floor(Math.random() * 5000),
      newUsers: Math.floor(Math.random() * 200),
      revenue: +(Math.random() * 10000).toFixed(2),
      churnRate: +(Math.random() * 0.15).toFixed(3),
    },
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
