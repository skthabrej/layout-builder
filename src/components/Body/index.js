import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const onClickShowLeftNavbar = () => (
        <nav className="left-navbar-container">
          <h1 className="left-navbar-heading">Left Navbar Menu</h1>
          <ul>
            <li className="list-item">Item 1</li>
            <li className="list-item">Item 2</li>
            <li className="list-item">Item 3</li>
            <li className="list-item">Item 4</li>
          </ul>
        </nav>
      )

      const onClickShowContent = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="content-para">
            Lorem ipsum art, and communication, content is the information and
            experiences that are directed toward an end-user or audience.
            Content is "something that is to be expressed through some medium,
            as speech, writing or any of various arts".
          </p>
        </div>
      )

      const onClickShowRightNavbar = () => (
        <div className="right-navbar-container">
          <h1 className="right-navbar-heading">Right Navbar</h1>
          <div className="ad-container">
            <p className="ad-para">Ad 1</p>
          </div>
          <div className="ad-container">
            <p className="ad-para">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="bg-body">
          {showLeftNavbar ? onClickShowLeftNavbar() : null}
          {showContent ? onClickShowContent() : null}
          {showRightNavbar ? onClickShowRightNavbar() : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body