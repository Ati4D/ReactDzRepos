import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import ToDo from "./components/ToDo/ToDo";
import FilmsComponent from "./components/FilmComponent/FilmsComponent";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import UserInfo from "./components/Users/UserInfo";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
