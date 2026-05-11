import { useEffect, useState } from "react"
import {
  getMainApi,
  getLiveStatus,
  getReadyStatus,
} from "./services/api"

function App() {
  const [message, setMessage] = useState("Loading...")
  const [live, setLive] = useState("Checking...")
  const [ready, setReady] = useState("Checking...")

  useEffect(() => {
    async function loadData() {
      try {
        const apiData = await getMainApi()
        const liveData = await getLiveStatus()
        const readyData = await getReadyStatus()

        setMessage(apiData.message)
        setLive(liveData.status)
        setReady(readyData.status)
      } catch (err) {
        console.error(err)

        setMessage("Backend unreachable")
        setLive("failed")
        setReady("failed")
      }
    }

    loadData()
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>DevOps EKS Platform 🚀</h1>

      <div
        style={{
          marginTop: "30px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
        }}
      >
        <p>
          <strong>Backend API:</strong> {message}
        </p>

        <p>
          <strong>Liveness:</strong> {live}
        </p>

        <p>
          <strong>Readiness:</strong> {ready}
        </p>
      </div>
    </div>
  )
}

export default App