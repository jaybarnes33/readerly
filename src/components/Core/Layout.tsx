import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header />
      <div className="app"> {children}</div>
      <Footer />
    </>
  );
};

export default Layout;
