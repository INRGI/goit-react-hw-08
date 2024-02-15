import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = ({ msg }) => {
  useEffect(() => {
    const errorId = setTimeout(() => {
      toast.error(msg, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 0);

    return () => clearTimeout(errorId);

  }, [msg]);

  return null;
};

export default Error;

