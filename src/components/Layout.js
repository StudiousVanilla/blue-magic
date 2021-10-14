import Footer from "./Footer";
import Header from "./Header";
import NumberGenerator from "./NumberGenerator";

const Layout = () => {


    return ( 
        <main className="flex flex-col h-full">
            <Header/>
            <NumberGenerator/>
            <Footer/>
        </main>

     );
}
 
export default Layout;