import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCallBack } from "../../api/api";

function GoogleCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get("code"); // Lấy mã code từ URL

      if (code) {
        try {
          await getCallBack(code)
          window.location.href = '/'
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return <p>Processing Google Login...</p>;
}

export default GoogleCallback;
