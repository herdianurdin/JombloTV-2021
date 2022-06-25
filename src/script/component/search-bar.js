class SearchBar extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    })
  }

  connectedCallback() {
    this.render()
  }

  set clickEvent(event) {
    this._clickEvent = event
    this.render()
  }

  set keyUpEvent(event) {
    this._keyUpEvent = event
    this.render()
  }

  get keyword() {
    return this.shadowDOM.querySelector('input').value
  }

  removeKeyword() {
    this.shadowDOM.querySelector('input').value = ''
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
            display: block;
            width: 100%;
        }
        #search-form {
            background: #FFF;
            box-shadow: 0 2px 12px rgba(36, 38, 64, 0.035);
            padding: 24px;
            display: flex;
            margin: 32px auto;
            width: 95%;
            border-radius: 24px;
            align-items: center;
        }
                
        svg {
            width: 28px;
            height: 28px;
            fill: #46399e;
        }
        
        #search-input {
            width: 100%;
            height: 42px;
            border: 3px solid #46399e;
            outline: 0;
            color: #46399e;
            border-radius: 32px;
            padding: 0 48px 0 24px;
            font-size: 16px;
        }
        
        #search-submit {
            margin-left: -48px;
            border: none;
            outline: none;
            cursor: pointer
        }
        
        @media (max-width: 1279px) {
            #search-form {
                width: 100%
            }        
        }
        </style>
        <div id="search-form">
            <input id="search-input" type="text" placeholder="Search" required/>
                <svg id="search-submit" viewBox="0 0 24 24">
                    <path
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
            </button>
        </div>`

    this.shadowDOM
      .querySelector('#search-submit')
      .addEventListener('click', this._clickEvent)
    this.shadowDOM
      .querySelector('input')
      .addEventListener('keyup', this._keyUpEvent)
  }
}

customElements.define('search-bar', SearchBar)
