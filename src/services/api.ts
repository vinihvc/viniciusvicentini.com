const _USERNAME = 'viniciushvc'

const api = async (url: string) => {
  const data = await fetch(url, { method: 'GET' })

  const response = data.json()

  return response
}

export const fetchPinnedRepos = async () => {
  const pinnedUrl = process.env.PINNED_REPOS_URL

  return await api(`${pinnedUrl}?username=${_USERNAME}`)
}

export const fetchStarredRepos = async () => {
  const starredUrl = process.env.STRARED_REPOS_URL

  return await api(`${starredUrl}?username=${_USERNAME}`)
}
