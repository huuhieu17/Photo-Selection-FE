import { useNavigate } from 'react-router-dom';
import { getCurrentUser, login } from '../api/api';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
const { createContext, useState, useEffect, useContext } = require('react');

const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.data);
    } catch {
      Cookies.remove('token');
      navigate('/login');
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    navigate('/login'); // Chuyển hướng về trang đăng nhập khi logout
  };

  const loginFn = async (username, password) => {
    try {
      const response = await login(username, password);
      const { data, status } = response;
      if (status === 200) {
        Cookies.set('token', data.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
        });
        getCurrentUser();
        window.location.href = ('/');
      }
    } catch (e) {
      const responseData = e.response?.data;
      toast.error(responseData ? responseData.message : 'Có lỗi xảy ra', {});
      console.log(e);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token'); // Lấy token từ cookie
    if (token) {
      getUser(token); // Gọi API để lấy thông tin user
    }
  }, []);

  return (
    <authContext.Provider value={{ user, logout, loginFn }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
