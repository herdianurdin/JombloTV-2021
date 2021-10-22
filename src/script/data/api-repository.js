import listUrl from './api-config.js'

class ApiRepository {
    static getCinemaList(listUrl) {
        return fetch(listUrl)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return Promise.resolve(responseJson.results)
            })
    }

    static searchCinema(keyword) {
        return fetch(`${listUrl.search}${keyword}`)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results)
                }

                return Promise.reject(`${keyword} not found.`)
            })
    }
}

export default ApiRepository
