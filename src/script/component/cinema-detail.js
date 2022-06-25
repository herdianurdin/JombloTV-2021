import NoImage from '../../images/no-image.svg'

class CinemaDetail extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    })
  }

  set cinema(cinema) {
    this._cinema = cinema
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  render() {
    const posterPath = this._cinema.poster_path
      ? `https://www.themoviedb.org/t/p/w500/${this._cinema.poster_path}`
      : `${NoImage}`

    this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
        }
        #back-button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #46399e;
            font-weight: 600;
            font-size: 16px;
            border: 3px solid;
            width: 160px;
            padding: 8px;
            border-radius: 32px;
            cursor: pointer;
            margin: 32px 24px 24px 24px;
            background: #FFF;
        }
        
        #back-button svg {
            width: 28px;
            height: 28px;
            vertical-align: middle;
            margin-right: 4px;
        }

        #cinema-detail {
            width: 95%;
            margin: 0 auto 32px auto;
            display: grid;
            grid-template-columns: 20% 80%;
            background: linear-gradient(rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.7)100%), url("https://www.themoviedb.org/t/p/w500/${this._cinema.backdrop_path}") no-repeat fixed center;
            background-size: cover;
            box-shadow: 0 2px 12px rgba(36, 38, 64, 0.035);
            padding: 32px;
            border-radius: 24px
        }
        
        #cinema-poster {
            width: 95%;
            margin: auto;
        }
        
        #cinema-poster img {
            width: 100%;
            border-radius: 16px;
            background: #dbdbdb;
        }
        
        #cinema-summary {
            width: 95%;
            margin: 0 auto;
        }
        
        h1,
        p {
            padding: 0;
            margin: 0 0 12.8px 0;
            color: #FFF;
        }
        
        h1 {
            font-size: 36px;
            font-weight: 600;
        }
        
        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5;
            text-align: justify;
        }

        @media (max-width: 1279px) {
            #back-button {
                margin: 32px 0 24px 0;
                padding: 6px;
            }

            #cinema-detail {
                grid-template-columns: 100%;
                width: 100%;
            }
        
            #cinema-detail img {
                margin-bottom: 12.8px;
            }
        
            #cinema-poster {
                width: 100%;
            }
        
            #cinema-summary {
                width: 100%;
            }
        
            #cinema-summary h1 {
                font-size: 28px
            }
        }
        </style>
        <div id="back-button">
            <svg viewBox="0 0 45.58 45.58"><path d="M 45.506 33.532 C 43.765 26.112 38.345 15.774 21.952 13.59 L 21.952 7.047 C 21.952 5.683 21.126 4.454 19.865 3.934 C 18.604 3.413 17.153 3.705 16.19 4.671 L 1.305 19.63 C -0.434 21.378 -0.435 24.202 1.304 25.95 L 16.19 40.909 C 17.151 41.875 18.605 42.167 19.866 41.646 C 21.127 41.125 21.953 39.896 21.953 38.533 L 21.953 32.202 C 27.546 32.209 35.609 32.945 41.345 36.515 C 42.298 37.109 43.513 37.07 44.425 36.414 C 45.335 35.762 45.763 34.624 45.506 33.532 Z" fill="rgb(70, 57, 158)"/></svg> Back to List
        </div>
        <div id="cinema-detail">
            <div id="cinema-poster">
                <img src="${posterPath}" alt="poster">
            </div>
            <div id="cinema-summary">
                <h1>${this._cinema.original_name}</h1>
                <p>${this._cinema.overview}</p>
            </div>
        </div>`

    this.shadowDOM
      .querySelector('#back-button')
      .addEventListener('click', this._clickEvent)
  }
}

customElements.define('cinema-detail', CinemaDetail)
