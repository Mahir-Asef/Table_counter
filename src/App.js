import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
     <Header></Header>
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={
            <PrivateRoute>
              <List />
            </PrivateRoute>} />
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
