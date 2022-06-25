class NavBar extends HTMLElement {
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

  get value() {
    return this.shadowDOM.querySelector('.active').id
  }

  hideNavBar() {
    this.shadowDOM.querySelector('nav').classList.toggle('hide')
  }

  removeNavActive() {
    if (this.shadowDOM.querySelector('.active')) {
      this.shadowDOM.querySelector('.active').classList.remove('active')
    }
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
            height: calc(100% - 81px);
        }
        nav {
            height: 100%;
            background: #5143b8;
            border-top-right-radius: 42px;
            padding-top: 72px;
        }
        
        ul {
            display: block;
            list-style: none;
            margin: 0;
            padding: 0 0 0 32px;
        }
        
        ul li {
            display: block;
            color: #FFF;
            margin-bottom: 24px;
            padding: 16px 32px;
            font-weight: 600;
            font-size: 16px;
            border-top-left-radius: 64px;
            border-bottom-left-radius: 64px;
            border: 3px solid #FAFAFA;
            border-right-width: 0;
            transition: 0.3s;
            cursor: pointer;
        }
        
        ul li:hover,
        .active {
            background: #4DB6AC;
        }
        
        @media (max-width: 1279px) {
            nav {
                display: block;
                border-top-right-radius: 0;
                padding: 24px 0;
            }
            ul {
                margin: 18px 0 0 0;
            }
            ul li {
                padding: 12px 28px;
            }
            .hide {
                display: none;
            }
        }
        </style>
        <nav class="hide">
            <ul>
                <li id="popular" class="active">Popular</li>
                <li id="airingToday">Airing Today</li>
                <li id="onTv">On TV</li>
                <li id="topRated">Top Rated</li>
            </ul>
        </nav>`

    const navItems = this.shadowDOM.querySelectorAll('li')
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', (event) => {
        this.removeNavActive()

        event.target.classList.add('active')
        this.addEventListener('click', this._clickEvent)
      })
    })
  }
}

customElements.define('nav-bar', NavBar)
