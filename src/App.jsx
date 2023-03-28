import DisplayProduct from "./Components/DisplayProduct";
import Jumbotron from "./Components/Jumbotron";
import MidSection from "./Components/MidSection";
import Nav from "./Components/Nav";
import WebGiViewer from "./Components/WebGiViewer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   { path: "/product", element: <WebGiViewer /> },
  // ]);
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <MidSection />
      <DisplayProduct />
   
    </div>
  );
}

export default App;
