// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-card">
          {showLeftNavbar && (
            <div className="content-card">
              <h1 className="body-headings">Left Navbar Menu</h1>
              <ul className="items-list">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="left-nav-menu">
              <h1 className="body-headings">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-nav-menu">
              <h1 className="body-headings">Right Navbar</h1>
              <div className="Ad">
                <p>Ad 1</p>
              </div>
              <div className="Ad">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
