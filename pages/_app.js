import '../styles/globals.css';
import '../styles/styles.css';
import 'react-multi-carousel/lib/styles.css';
import '../css/main.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
