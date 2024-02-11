import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Loader'

const Layout = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <ToastContainer />
        </div>
    )
}

export default Layout;