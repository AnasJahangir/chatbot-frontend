import LeftMenu from "./components/LeftMenu.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import Chatting from "./pages/Chatting.jsx";
import CreateBot from "./pages/CreateBot.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Search from "./pages/Search.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <section>
        <div className="w-full">
          <div className="flex">
            <div className="lg:w-3/12 md:w-3/12 w-4/12 fix-width-menu">
              <LeftMenu />
            </div>
            <div className='lg:w-9/12 md:w-9/12 w-8/12 px-6 grow'>
                <Routes>
                  <Route path="/chatbot" element={<Home />} />
                  <Route path="/chatbot/create" element={<CreateBot />} />
                  <Route path="/chatbot/bot" element={<ChatBot />} />
                  <Route path="/chatbot/chatting" element={<Chatting />} />
                  <Route path="/chatbot/profile" element={<Profile />} />
                  <Route path="/chatbot/search" element={<Search />} />
                </Routes>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
