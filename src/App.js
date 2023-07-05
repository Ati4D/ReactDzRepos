import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import ToDo from "./components/ToDo/ToDo";
import FilmsComponent from "./components/FilmComponent/FilmsComponent";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import UserInfo from "./components/Users/UserInfo";
import UsersContext from "./contexts/UsersContext";
import ThemeProvider from "./providers/ThemeProvider";
import LikedFilmsProvider from "./providers/LikedFilmsProvider";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsers(result);
  }
  useEffect(() => { getUsers(); }, []);


  return (
    <>
      <UsersContext.Provider value={users}>
        <ThemeProvider>
          <LikedFilmsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ToDo />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/films" element={<FilmsComponent />} />

              <Route path="/users" element={<Users />}>
                <Route path=":id" element={<UserInfo />} />
              </Route>

              <Route path="*" element={<h1>Page not found!</h1>} />
            </Routes>
            <Footer/>
          </LikedFilmsProvider>
        </ThemeProvider>
      </UsersContext.Provider>
    </>
  );
}

export default App;
