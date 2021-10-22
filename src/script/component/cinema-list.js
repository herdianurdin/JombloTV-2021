import './cinema-item.js'
import './cinema-detail.js'

class CinemaList extends HTMLElement {
    constructor() {
        super()
        this.shadowDOM = this.attachShadow({
            mode: 'open',
        })
    }

    set cinemas(cinemas) {
        this._cinemas = cinemas
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: grid;
            grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
        }
        @media (max-width: 1279px) {
            :host {
                grid-template-columns: 100%;
            }
        }
        </style>`

        this._cinemas.forEach((cinema) => {
            const cinemaItemElement = document.createElement('cinema-item')

            cinemaItemElement.cinema = cinema
            cinemaItemElement.addEventListener('click', () => {
                const cinemaItemDetailElement = document.createElement('cinema-detail')
                const contentList = document.querySelector('#content-list')
                cinemaItemDetailElement.cinema = cinema
                cinemaItemDetailElement.clickEvent = () => {
                    contentList.classList.toggle('hide')
                    cinemaItemDetailElement.remove()
                }

                contentList.classList.toggle('hide')
                document.querySelector('#content-detail').append(cinemaItemDetailElement)
            })

            this.shadowDOM.appendChild(cinemaItemElement)
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
            <style>
                #message {
                    background: #FFF;
                    box-shadow: 0 2px 12px rgba(36, 38, 64, 0.035);
                    border-radius: 24px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 0 32px 32px 32px;
                }
                h2 {
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    font-size: 32px
                }
                svg {
                    width: 300px;
                    display: block;
                }
                @media (max-width: 1279px) {
                    #message {
                        margin: 0 0 32px 0;
                    }
                }
                @media (max-width: 479px) {
                    svg {
                        width: 100%;
                    }
                }
            </style>
            <div id="message">
                <svg viewBox="0 0 496.158 496.158">
                    <path style="fill: rgb(70, 57, 158);" d="M 488.079 248.086 C 488.079 115.526 380.627 8.083 248.083 8.083 C 115.532 8.083 8.079 115.526 8.079 248.086 C 8.079 380.625 115.532 488.077 248.083 488.077 C 380.627 488.077 488.079 380.625 488.079 248.086 Z"/>
                    <path style="fill:#FFFFFF;" d="M 141.794 176.019 C 141.794 162.557 146.115 148.916 154.76 135.099 C 163.402 121.282 176.018 109.84 192.598 100.769 C 209.178 91.701 228.522 87.165 250.629 87.165 C 271.176 87.165 289.317 90.958 305.047 98.537 C 320.778 106.12 332.927 116.43 341.503 129.466 C 350.076 142.506 354.363 156.675 354.363 171.98 C 354.363 184.026 351.919 194.586 347.029 203.653 C 342.14 212.723 336.327 220.553 329.598 227.141 C 322.866 233.731 310.785 244.821 293.355 260.409 C 288.536 264.803 284.672 268.666 281.77 271.995 C 278.864 275.326 276.702 278.372 275.286 281.134 C 273.868 283.898 272.768 286.661 271.991 289.425 C 271.21 292.187 270.042 297.044 268.484 303.986 C 265.791 318.726 257.358 326.094 243.189 326.094 C 235.819 326.094 229.617 323.686 224.589 318.866 C 219.557 314.049 217.043 306.892 217.043 297.397 C 217.043 285.493 218.883 275.183 222.57 266.468 C 226.254 257.751 231.142 250.099 237.237 243.511 C 243.328 236.921 251.549 229.092 261.895 220.022 C 270.963 212.087 277.519 206.098 281.558 202.059 C 285.597 198.02 288.998 193.524 291.762 188.561 C 294.525 183.602 295.907 178.218 295.907 172.405 C 295.907 161.069 291.689 151.504 283.259 143.708 C 274.826 135.917 263.948 132.017 250.629 132.017 C 235.038 132.017 223.559 135.95 216.192 143.815 C 208.822 151.68 202.588 163.265 197.486 178.57 C 192.667 194.586 183.526 202.59 170.064 202.59 C 162.125 202.59 155.43 199.793 149.976 194.194 C 144.521 188.596 141.794 182.538 141.794 176.019 Z M 245.528 408.996 C 236.882 408.996 229.336 406.195 222.889 400.599 C 216.439 395.003 213.217 387.174 213.217 377.111 C 213.217 368.182 216.332 360.673 222.57 354.578 C 228.804 348.486 236.456 345.438 245.527 345.438 C 254.455 345.438 261.965 348.486 268.059 354.578 C 274.15 360.673 277.2 368.182 277.2 377.111 C 277.2 387.032 274.011 394.826 267.634 400.493 C 261.256 406.161 253.888 408.996 245.528 408.996 Z"/>
                </svg>
                <h2>${message}</h2>
            <div>
        `
    }
}

customElements.define('cinema-list', CinemaList)
