import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => {
    return(
        <div className='bg-layout'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default Layout