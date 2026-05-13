const API_URL = import.meta.env.VITE_API_URL

export async function getMainApi(params) {
    const response = await fetch(`${API_URL}/`)
    return response.json()
}

export async function getLiveStatus(params) {
    const response = await fetch(`${API_URL}/live`)
    return response.json()
}

export async function getReadyStatus(params) {
    const response = await fetch(`${API_URL}/ready`)
    return response.json()
}