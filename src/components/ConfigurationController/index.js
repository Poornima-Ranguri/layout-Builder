import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div>
          <h1>Layout</h1>
          <ul className="list-container">
            <li className="item-container">
              <input
                type="checkbox"
                id="controller1"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="controller1">Content</label>
            </li>
            <li className="item-container">
              <input
                type="checkbox"
                id="controller2"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="controller2">Left Navbar</label>
            </li>
            <li className="item-container">
              <input
                type="checkbox"
                id="controller3"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="controller3">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
