import axios from 'axios';
import Cookies from "js-cookie";

const API_URL = `${process.env.REACT_APP_API_URL}/api`;

export const apiInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // Instance Axios cho API private (Gửi token từ cookie)
  export const authApiInstance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // Cho phép gửi cookie
  });
  
  // Interceptor để tự động thêm Authorization Header từ Cookie
  authApiInstance.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token"); // Lấy token từ cookie
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Interceptor để xử lý lỗi 401 (Token hết hạn)
  authApiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        Cookies.remove("token"); // Xóa token khi hết hạn
        window.location.href = "/login"; // Chuyển hướng về trang login
      }
      return Promise.reject(error);
    }
  );
export const register = (name, email, password) => apiInstance.post(`/auth/register`, { email, password, name });
export const login = (email, password) => apiInstance.post(`/auth/login`, { email, password });
export const createAlbum = (folderId, name) => authApiInstance.post(`/albums`, { folderId, name });
export const getAlbum = (albumId) => apiInstance.get(`/albums/${albumId}`);
export const getMyAlbum = (page, size) => authApiInstance({
  url: `/albums`,
  method: 'GET',
  params: {
    page,
    size
  }
});
export const getCurrentUser = () => authApiInstance.get(`/auth/current-user`);

export const getAuthUrl = () => authApiInstance.get(`/google-drive/auth`)
export const getCallBack = (code) => authApiInstance({
  url: '/google-drive/callback',
  params: {
    code
  }
})
export const getPhotoAlbum = (albumId) => authApiInstance.get(`/google-drive/${albumId}/photos`)
export const getListMyDriveFolder = () => authApiInstance.get(`/google-drive/folders`)
export const checkLogin = () => authApiInstance.get('/google-drive/check-login')