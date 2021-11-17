export const api = async (url: string) => {
  const data = await fetch(url, { method: 'GET' })

  const response = data.json()

  return response
}
