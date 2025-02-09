import { Route, Routes } from "react-router-dom";
import AlbumCreation from "./components/Album/AlbumCreation";

import { GoogleOAuthProvider } from "@react-oauth/google";
import List from "./components/Album/List";
import ViewAlbum from "./components/Album/ViewDetail";
import GoogleCallback from "./components/Authentication/GoogleCallBack";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import { AuthProvider } from "./contexts/authenticateContext";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => (
  <AuthProvider>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>

      <DefaultLayout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/create-album" element={<AlbumCreation />} />
          <Route path="/albums/:albumId" element={<ViewAlbum />} />
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
        </Routes>
      </DefaultLayout>
    </GoogleOAuthProvider>
  </AuthProvider>
);

export default App;
