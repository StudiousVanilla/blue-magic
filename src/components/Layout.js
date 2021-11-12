import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NumberGenerator from "./NumberGenerator";
import Scoring from "./Scoring";
import LeaderBoard from "./LeaderBoard";

const Layout = () => {


    return ( 
        <main className="flex flex-col h-screen">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<NumberGenerator/>}/>
                <Route path="/scoring" element={<Scoring/>}/>
                <Route path="/leaderboard" element={<LeaderBoard/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </main>

     );
}
 
export default Layout;