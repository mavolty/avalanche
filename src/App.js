import EmailVerification from './pages/Auth/EmailVerification';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';
import SetNewPassword from './pages/Auth/SetNewPassword';
import EmailSuccess from './pages/Auth/EmailSuccess';
import Products from './pages/Products/Products';
import Action from './services/Action';
import ProductDetail from './pages/Products/ProductDetail';
import Navbar from './components/UI/Navbar/Navbar';
import NavbarBottom from './components/UI/Navbar/NavbarBottom';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import Footer from './components/UI/Footer';
import { authStateObserver } from './store/auth-slice';
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Payment from './pages/Payment';

function Layout({ navColor }) {
  return (
    <>
      <Navbar color={navColor} />
      <Outlet />
      <Footer />
      <NavbarBottom />
    </>
  );
}

function RequireAuth({ authStatus }) {
  const location = useLocation();

  if (authStatus === null) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <Outlet />;
}

function AlreadyAuth({ authStatus }) {
  const location = useLocation();

  if (authStatus) {
    return <Navigate to='/' state={{ from: location }} />;
  }

  return <Outlet />;
}

function RequireVerifyEmail({ authStatus }) {
  if (authStatus && !authStatus.emailVerified) {
    return <Navigate to='/email/verify' />;
  }

  return <Outlet />;
}

function AlreadyVerifyEmail({ authStatus }) {
  if (authStatus && authStatus.emailVerified) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
}

function App() {
  const dispatch = useDispatch();
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;

  useEffect(() => {
    dispatch(authStateObserver());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route element={<AlreadyAuth authStatus={authStatus} />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route
            path='password'
            element={<RequireVerifyEmail authStatus={authStatus} />}
          >
            <Route path='reset' element={<ResetPassword />} />
            <Route path='set' element={<SetNewPassword />} />
          </Route>

          <Route path='email' element={<RequireAuth authStatus={authStatus} />}>
            <Route element={<AlreadyVerifyEmail authStatus={authStatus} />}>
              <Route path='verify' element={<EmailVerification />} />
              <Route path='success' element={<EmailSuccess />} />
            </Route>
          </Route>

          <Route path='products' element={<Layout navColor='black' />}>
            <Route index element={<Products />} />
            <Route path='page/:page' element={<Products />} />
            <Route path='category/:category' element={<Products />} />
            <Route path=':productId' element={<ProductDetail />} />
          </Route>

          <Route element={<Layout navColor='black' />}>
            <Route element={<RequireAuth authStatus={authStatus} />}>
              <Route element={<RequireVerifyEmail authStatus={authStatus} />}>
                <Route path='cart' element={<Payment />} />
                <Route path='checkout' element={<Payment />} />
                <Route path='confirmation' element={<Payment />} />
              </Route>
            </Route>
          </Route>

          <Route element={<Layout navColor='white' />}>
            <Route index element={<Home />} />
          </Route>

          <Route path='action' element={<Action />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
