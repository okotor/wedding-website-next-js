import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import Head from "next/head";
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

// const noAuthRequired = ['/login']; // Add any other routes that don't require authentication

function MyApp({ Component, pageProps, router }) {
  // const isProtected = !noAuthRequired.includes(router.pathname);

  return (
    <div>
      <Head>
        <title>Marie & Tom - Svatební webová stránka</title>
      </Head>
      {/* {isProtected ? (
        <ProtectedRoute> */}
          <Component {...pageProps} />
        {/* </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )} */}
      <ToastContainer />
    </div>
  );
}

export default MyApp
