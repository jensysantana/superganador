import React from 'react';
import { history } from './helpers/history';
import './App.css';
import LayoutDashboard from './views/layout/wrapper';
import SignIn from './views/views/Signin/Singin';
import SignUp from './views/views/SignUp/SignUp';
import PublicRoute from './routes/PublicRoute/PublicRoute';
import { Router} from 'react-router-dom';
import LockSreen from './views/views/LockScreen/LockScreen';
import RecoverPassword from './views/views/RecoverPassword/RecoverPassword';
import ForgotPassword from './views/views/ForgotPassword/ForgotPassword';
// import RunRaffleBasket from './views/views/RunRaffleBasket/RunRaffleBasket';

// import GlobalHelpers from './helpers/helpers';
// const helpers = new GlobalHelpers();
const arrayPaths = [
  {
    url:'/sign-in',
  },
  {
    url:'/sign-up',
  },
  {
    url:'/lock-screen',
  },
  {
    url:'/recover-password',
  },
  {
    url:'/forgot-password',
  },
  // {
  //   url:'/run-raffle-basket',
  // }
]

function App() {

  const { location } = history;
  // console.log('APPPPPPPPPPPP');
  // console.log(location.pathname);
  // console.log();
  // console.log('APPPPPPPPPPPP');

  return (
    <Router basename="/" history={history}>
      {!arrayPaths.some(url=>location.pathname === url.url) && 
        <LayoutDashboard />
      }
    
      {/* <PublicRoute exact path="/" component={LayoutDashboard} /> */}

      <PublicRoute exact path="/sign-in" component={SignIn} />
      <PublicRoute exact path="/sign-up" component={SignUp} />
      <PublicRoute exact path="/lock-screen" component={LockSreen} />
      <PublicRoute exact path="/recover-password" component={RecoverPassword} />
      <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
     

      {/* {!helpers.localStorageSync('__wua', 'get', null, 'decode') &&
        <PublicRoute path="*" component={()=>{
          return <div className="mx-5"><h2>Page 404 2222</h2></div> 
        }} />
      } */}
    </Router>
  );
}

export default App;