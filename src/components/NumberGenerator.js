import { useState } from "react";
import PlayersDisplay from "./PlayersDisplay";

const NumberGenerator = () => {

    const [ajiNums, setAjiNums] = useState([])
    const [alanNums, setAlanNums] = useState([])
    const [andrewNums, setAndrewNums] = useState([])
    const [oisinNums, setOisinNums] = useState([])

    const generateNumbers = () => {


        // const names = ["Aji", "Alan", "Andrew", "Oisin"]

        
        let numbers = [0, 0, 0, 0, 0, 0, 0, 0];
    
        for (let i = 0; i < 4; i += 1) {
            let n1 = Math.floor(Math.random() * 15) + 1;
            let n2 = Math.floor(Math.random() * 23) + 1;
    
            while (numbers.includes(n1) || numbers.includes(n2)) {
                n1 = Math.floor(Math.random() * 15) + 1;
                n2 = Math.floor(Math.random() * 23) + 1;
            }
            numbers[i] = n1;
            numbers[i + 4] = n2;
        }
    
        setAjiNums([numbers[0], numbers[4]])
        setAlanNums([numbers[1], numbers[5]])
        setAndrewNums([numbers[2], numbers[6]])
        setOisinNums([numbers[3], numbers[7]])

        
    }


    return ( 

        <div className="h-full">
            <PlayersDisplay 
            generateNumbers={generateNumbers}
            ajiNums={ajiNums}
            alanNums={alanNums}
            andrewNums={andrewNums}
            oisinNums={oisinNums}
            />
        </div>
        

     );
}

export default NumberGenerator;