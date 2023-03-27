import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <div className="dark:bg-primaryDark dark:text-white bg-white text-black">
      <Navbar />
      <main> {children}</main>
      <Footer />
    </div>
  </>

}

export default Layout;
