import { useEffect, useState } from 'react'

export const useFetch = (apiURL) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)

        const resp = await fetch(apiURL)
        setStatus(resp.status)
        setData(await resp.json())
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [apiURL])

  return [data, loading, error, status]
}
