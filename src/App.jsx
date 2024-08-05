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
import Profile from "./Component/profile";
import Contact from "./Component/contact";
import Checkout from "./Component/checkout";






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
       

      </>}/>
      <Route path="/login" element={<><Header/><Navbar/><SearchBar/><Home/><Loginn/></>}/>
      <Route path="/signup" element={<><Header/><Navbar/><SearchBar/><Homee/><SignUp/></>}/>
      <Route path="/profile" element={<><Header/><Navbar/><SearchBar/><Profile/></>}/>
      <Route path="/contact" element={<><Header/><Navbar/><SearchBar/><Contact/></>}/>
      <Route path="/checkout" element={<><Header/><Navbar/><SearchBar/><Checkout/></>}/>

    
            </Routes>
    
    
    
        </BrowserRouter>
        <Footer/>
        </>
      );
    }

export default App;
