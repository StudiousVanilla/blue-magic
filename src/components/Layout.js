import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NumberGenerator from "./NumberGenerator";
import Scoring from "./Scoring";
import LeaderBoard from "./LeaderBoard";
import { useState } from "react";

const Layout = () => {

    const [names, setNames] = useState([])


    return ( 
        <main className="flex flex-col h-screen">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<NumberGenerator setNames={setNames} names={names}/>}/>
                <Route path="/scoring" element={<Scoring/>}/>
                <Route path="/leaderboard" element={<LeaderBoard/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </main>

     );
}
 
export default Layout;