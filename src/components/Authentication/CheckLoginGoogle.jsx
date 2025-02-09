import { useEffect, useState } from "react";
import GoogleLoginButton from "./LoginGoogle";
import { checkLogin } from "../../api/api";

function CheckGoogleLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin()
      .then(response => setIsLoggedIn(response.data.isLoggedIn))
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <div>
      {isLoggedIn ? <p>✅ Đã đăng nhập Google</p> : <GoogleLoginButton/>}
    </div>
  );
}

export default CheckGoogleLogin;
