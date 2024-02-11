import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <ToastContainer />
        </div>
    )
}

export default Layout;