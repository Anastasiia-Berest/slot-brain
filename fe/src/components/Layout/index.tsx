import Header from "../Header"
import Footer from "../Footer"
import BtnToTop from "../BtnToTop"

const Layout = ({ children }: any) => {

    return (
        <>
            <div className="wrapper">
                <Header />
                <main>{children}</main>
            </div>
            <BtnToTop />
            <Footer />
        </>
    )
}

export default Layout
