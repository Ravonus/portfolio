/**
 * @author Chad Koslovsky
 * @email Chad@biofi.tech
 * @create date 2021-05-08 16:28:16
 * @modify date 2021-05-08 16:33:08
 * @desc [Main React App - This will load all other pages and components]
 * @desc - Heart loading is not required for website to load. Website is packed and statically served and loads very fast
 */

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Suspense, lazy, useEffect, useState } from 'react';

import Nav from './components/Navs/Basic';

//Import Styles
import './App.scss';

// //Import Components
// import Navbar from './components/Navbar';
// import Footer from './components/Footers/Footer';

//Import configuration
// import nbc from './config/navbarConfiguration.json';
import routes from './config/routesConfiguration.json';

//Import Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Settings = lazy(() => import('./pages/Settings'));

interface ConfProps {
  Brand: {
    src: string;
    alt: string;
    width: number;
    height?: number;
  };
  Links: { name: string; path?: string; link: string; component?: string }[];
}

// const navbarConf: ConfProps = nbc;

const routePages: { [key: string]: any } = {
  Dashboard,
  Login,
  Signup,
  Settings,
};

const mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor);
  return check;
};

const animateBurger = async (toggle) => {
  const menuBtn = document.querySelector('.menu-btn');
  if (!menuBtn) return;
  if (toggle) menuBtn.classList.add('open');
  else menuBtn.classList.remove('open');
};

function getWindowDimensions() {
  if (!window) return;
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App(props) {
  const [sliderNavopen, setSliderNavOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const pageview = props.pageview;

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      animateBurger(true);
      setSliderNavOpen(true);
    },
  });

  return (
    <div className='bg-gray-100'>
      <Nav></Nav>
      <main className='relative'>
        <div className='flex flex-col justify-between'>
          <div {...handlers} className='bg-gray-100 h-screen'>
            <Router>
              {/* <Navbar
            {...props}
            mobileCheck={mobileCheck}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            sliderNavopen={sliderNavopen}
            setSliderNavOpen={setSliderNavOpen}
            brand={navbarConf.Brand}
            links={navbarConf.Links}
          ></Navbar> */}

              {/* {navbarConf.Links.map((link, i) => {
              const Component = routePages[link.component || link.name];
              return (
                <Suspense
                  key={`${link.name}-${i}`}
                  fallback={<div className='h-screen'></div>}
                >
                  <Route
                    render={(props) => {
                      pageview(props.location.pathname);
                      return (
                        <Component
                          mobileCheck={mobileCheck}
                          windowDimensions={windowDimensions}
                          {...props}
                        />
                      );
                    }}
                    path={link.link || '/'}
                    exact
                  />
                </Suspense>
              );
            })} */}
              {routes.map((link) => {
                const Component = routePages[link.component || link.name];
                return (
                  <Suspense
                    key={`${link.name}-r`}
                    fallback={<div className='h-screen'></div>}
                  >
                    <Route
                      render={(props) => {
                        pageview(props.location.pathname);
                        return (
                          <Component
                            mobileCheck={mobileCheck}
                            windowDimensions={windowDimensions}
                            {...props}
                          />
                        );
                      }}
                      path={link.link || '/'}
                      exact
                    />
                  </Suspense>
                );
              })}
              {/* <Footer /> */}
            </Router>
          </div>
        </div>
      </main>
      {/* <footer className="sticky bottom-0 z-50 bg-gray-100">
        <div className="bg-nav"> Footer Info</div>
      </footer> */}
    </div>
  );
}

export default App;
