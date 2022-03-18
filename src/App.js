import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Tyc from "./component/T&C/Tyc";
import Error404 from "./component/pages/Error404";
import { AdProvider } from "./context/TechContext";
import Pdp from "./component/Pdp/Pdp";
import Byc from "./component/Byc/Byc";
import { ItemListContainer } from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
<<<<<<< HEAD
import Login from "./component/Login/Login";
=======
import { Requests } from "./component/Requests/Requests";
>>>>>>> 0d7b83f149a9117423d9613ba0aa225c1c1cf442

function App() {

  const token = localStorage.getItem('accessToken');

    // if(!token) {
    //     return <Login />
    // }

  return (
    <AdProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/byc" element={<Byc />} />
          <Route path="/pdp" element={<Pdp />} />
          <Route path="/tyc" element={<Tyc />} />
          <Route path="/licencias/:id" element={<ItemDetailContainer greeting={"Bienvenido a Licencias"} />} />
          <Route path="/category/:categoryID" element={<ItemListContainer greeting={"Bienvenido a Licencias"} />} />
          <Route path="/licencias" element={<ItemListContainer greeting={"Bienvenido a Licencias"} />} />
          <Route path="/solicitudes" element={<Requests />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </AdProvider>
  );
}

export default App;
