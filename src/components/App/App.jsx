import { lazy, useEffect } from "react"
import { useDispatch } from "react-redux";
import { useAuth } from '../../hooks';
import { refreshUser } from '../../redux/auth/operations';
import { Route, Routes } from "react-router-dom";
import Loader from '../Loader';
import Layout from '../Layout';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFound = lazy(() => import("../../pages/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <Loader />
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />}/> }
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}/>}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />}/>}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
