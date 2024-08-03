import Header from "./Component/header";
import Navbar from "./Component/navbar";
import List from "./Component/list";
import SearchBar from "./Component/searchbar";
import Story from "./Component/story";
import Loginn from "./pages/login2";
import SignUp from "./pages/sign";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Notb from "./Component/notbs";
import Footer from "./Component/Footer";
import Home from "./Component/home";
import Homee from "./Component/homee";






function App() {
      return (
        <>
    
          <BrowserRouter>
    
    
    
    
            <Routes >
            <Route index element={
              
              <>
        <Header/>
        <Navbar/>
        <SearchBar/>
        <Story/>
        <List/>
        <Notb/>
        <Footer/>

      </>}/>
      <Route path="/login" element={<><Header/><Navbar/><SearchBar/><Home/><Loginn/><Footer/></>}/>
      <Route path="/signup" element={<><Header/><Navbar/><SearchBar/><Homee/><SignUp/><Footer/></>}/>
    
            </Routes>
    
    
    
        </BrowserRouter>
        </>
      );
    }

export default App;
