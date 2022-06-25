import NoImage from '../../images/no-image.svg'

class CinemaItem extends HTMLElement {
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
        #cinema-item {
            background: #FFF;
            width: 85%;
            margin: 0 auto 32px auto;
            padding-bottom: 11.2px;
            border-radius: 18px;
            box-shadow: 0 2px 12px rgba(36, 38, 64, 0.035);
            transition: 0.3s;
            cursor: pointer;
        }
        
        #cinema-item:hover {
            transform: scale(1.025);
        }
        
        #cinema-item img {
            background: #dbdbdb;
            box-shadow: 0 2px 12px rgba(36, 38, 64, 0.035);
            width: 100%;
            margin-bottom: 12.8px;
            border-radius: 18px;
        }
        
        #cinema-item h2 {
            font-size: 24px;
            font-weight: 600;
            padding: 0;
            margin: 0 20px 12.8px 20px;
        }
        
        @media (max-width: 1279px) {
            #cinema-item {
                width: 100%
            }
        }
        </style>
        <div id="cinema-item">
            <img src="${posterPath}" alt="${this._cinema.original_name}">
            <h2>${this._cinema.original_name}</h2>
        </div>`
  }
}

customElements.define('cinema-item', CinemaItem)
