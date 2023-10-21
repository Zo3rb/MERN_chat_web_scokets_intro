import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div
      style={{
        background: `url("https://wallpapercrafter.com/sizes/3840x2160/70638-battlefield-4-ea-games-games-pc-games-xbox-games-ps4-games-pc-games-hd-4k.jpg") center top fixed`,
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          overflowY: "scroll",
        }}
      >
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
