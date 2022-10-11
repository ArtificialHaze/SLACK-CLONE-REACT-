import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login user={user} setUser={setUser} />
        ) : (
          <>
            <Header user={user} />
            <div className="App__body">
              <Sidebar user={user} />
              <Routes>
                <Route path="/room/:roomId" element={<Chat user={user} />} />
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
