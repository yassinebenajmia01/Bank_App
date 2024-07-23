import Header from "./Component/header";
import Navbar from "./Component/navbar";
import List from "./Component/list";
import SearchBar from "./Component/searchbar";
import Story from "./Component/story";
import Login from "./pages/login";
import SignUp from "./pages/sign";
import { BrowserRouter,Routes,Route } from "react-router-dom";

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

      </>}/>
      
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
    
            </Routes>
    
    
    
        </BrowserRouter>
        </>
      );
    }

export default App;
