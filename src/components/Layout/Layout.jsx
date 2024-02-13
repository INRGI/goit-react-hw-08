import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Loader';
import AppBar from '../AppBar';


const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <ToastContainer />
        </div>
    )
}

export default Layout;