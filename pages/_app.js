import '../styles/globals.css';
import '../styles/styles.css';
import 'react-multi-carousel/lib/styles.css';
import '../css/main.css';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import '../css/about.css';
import '../css/index.css';
import '../css/quizIntro.css';
import '../css/question.css';
import '../css/footer.css';
import '../css/mobile-nav.css';
import '../css/nav.css';
import '../css/startQuiz.css';

function MyApp({ Component, pageProps, test }) {
  let router = useRouter();
  console.log(router.pathname);
  console.log(Component);
  console.log(pageProps);
  console.log(test);
  return (
    <div>
      <MobileNav className="mobile-nav" />
      <Nav className="nav" />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
