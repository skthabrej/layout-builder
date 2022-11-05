import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="bg-header">
          <h1 className="heading-header">Layout</h1>
          <form className="form-container">
            <input
              className="input"
              type="checkbox"
              id="content"
              value={showContent}
              onChange={onShowContent}
              checked={showContent ? 'checked' : ''}
            />
            <label className="label" htmlFor="content">Content</label> <br />

            <input
              className="input"
              type="checkbox"
              id="leftNavbar"
              value={showLeftNavbar}
              onChange={onShowLeftNavbar}
              checked={showLeftNavbar ? 'checked' : ''}
            />
            <label className="label" htmlFor="leftNavbar">Left Navbar</label> <br />
            
            <input
              className="input"
              type="checkbox"
              id="rightNavbar"
              value={showRightNavbar}
              onChange={onShowRightNavbar}
              checked={showRightNavbar ? 'checked' : ''}
            />
            <label className="label" htmlFor="rightNavbar">Right Navbar</label>
          </form>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController