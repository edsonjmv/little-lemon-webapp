import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Header />
      {children}
      <Footer></Footer>
    </>
  );
}

export default Layout;
