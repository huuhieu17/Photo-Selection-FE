import { getAuthUrl } from "../../api/api";

function GoogleLoginButton() {
  const handleLogin = async () => {
    const response = await getAuthUrl()
    console.log(response.data);
    
    window.location.href = response.data.url;
  };

  return <button className="border px-2 py-1 cursor-pointer" onClick={handleLogin}>Đăng nhập google</button>;
}

export default GoogleLoginButton;