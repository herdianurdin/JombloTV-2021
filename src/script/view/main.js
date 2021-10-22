import '../component/app-bar.js'
import '../component/nav-bar.js'
import '../component/search-bar.js'
import '../component/cinema-list.js'
import listUrl from '../data/api-config.js'
import ApiRepository from '../data/api-repository.js'

const main = () => {
    const appBar = document.querySelector('app-bar')
    const navBar = document.querySelector('nav-bar')
    const searchBar = document.querySelector('search-bar')
    const cinemaList = document.querySelector('cinema-list')

    appBar.clickEvent = () => {
        navBar.hideNavBar()
    }

    const renderResult = (results) => {
        cinemaList.cinemas = results
    }

    const fallbackResult = (message) => {
        cinemaList.renderError(message)
    }

    const getCinemaList = async (listUrl) => {
        searchBar.removeKeyword()

        try {
            const results = await ApiRepository.getCinemaList(listUrl)
            renderResult(results)
        } catch (message) {
            fallbackResult(message)
        }
    }

    searchBar.clickEvent = async () => {
        navBar.removeNavActive()

        try {
            const result = await ApiRepository.searchCinema(searchBar.keyword)
            renderResult(result)
        } catch (message) {
            fallbackResult(message)
        }
    }

    searchBar.keyUpEvent = async (event) => {
        if (event.keyCode == 13) {
            navBar.removeNavActive()

            try {
                const result = await ApiRepository.searchCinema(searchBar.keyword)
                renderResult(result)
            } catch (message) {
                fallbackResult(message)
            }
        }
    }

    navBar.clickEvent = () => {
        const category = navBar.value

        switch (category) {
            case 'popular':
                getCinemaList(listUrl.popular)
                break
            case 'airingToday':
                getCinemaList(listUrl.airingToday)
                break
            case 'onTv':
                getCinemaList(listUrl.onTv)
                break
            case 'topRated':
                getCinemaList(listUrl.topRated)
                break
        }

        if (document.querySelector('cinema-detail')) {
            document.querySelector('#content-list').classList.toggle('hide')
            document.querySelector('cinema-detail').remove()
        }
    }
    getCinemaList(listUrl.popular)
}

export default main
