import "./output.css";
import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import {useCookies} from "react-cookie";
import songContext from "./contexts/songContext";
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/SinglePlaylistView";
import ContactUs from "./routes/ContactUs";
import AboutUs from "./routes/AboutUs";
import SongsPage from "./pages/SongsPage";


function App() { 

  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      
        {cookie.token ? (  
          // Logged In Routes
          <songContext.Provider
              value={{
                  currentSong,
                  setCurrentSong,
                  soundPlayed,
                  setSoundPlayed,
                  isPaused,
                  setIsPaused,
              }}
          >

            <Routes>
              <Route path="/" element={<LoggedInHomeComponent />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/myMusic" element={<MyMusic />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/library" element={<Library />} />
              <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
              <Route path="/contactUs" element={<ContactUs />} />
              {/* <Route path="/songsPage" element={<SongsPage />} /> */}
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/aboutUs" element={<AboutUs />} />


              <Route path="*" element={<Navigate to="/home" />} />
              <></>
            </Routes>
          </songContext.Provider>

        ) : (
          // Logged Out Routes
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}



export default App;
