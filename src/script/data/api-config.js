const baseUrl = 'https://api.themoviedb.org/3/'
const apiKey = '?api_key=25271b2a649526ffb66bf301ea305fd5'

const listUrl = {
  popular: `${baseUrl}tv/popular${apiKey}`,
  airingToday: `${baseUrl}tv/airing_today${apiKey}`,
  onTv: `${baseUrl}tv/on_the_air${apiKey}`,
  topRated: `${baseUrl}tv/top_rated${apiKey}`,
  search: `${baseUrl}search/tv${apiKey}&query=`,
}

export default listUrl
