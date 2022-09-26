import '../styles/globals.css';
import '../styles/styles.css';
import 'react-multi-carousel/lib/styles.css';
import '../css/main.css';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import '../css/about.css';
import '../css/index.css';
import '../css/quizIntro.css';
import '../css/question.css';
import '../css/footer.css';
import '../css/mobile-nav.css';
import '../css/nav.css';

function MyApp({ Component, pageProps, test }) {
  console.log(Component);
  console.log(pageProps);
  console.log(test);
  let mobile = 1;
  return (
    <div>
      {/* {mobile === 1 ? <MobileNav /> : <Nav />} */}
      <MobileNav className="mobile-nav" />
      <Nav className="nav" />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
