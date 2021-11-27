import { useState } from "react";
import PlayersDisplay from "./PlayersDisplay";

const NumberGenerator = ({setNames, names}) => {

    const [startingXV, setStartingXV] = useState([])
    const [bench, setBench] = useState([])

    const getStartingXV = () =>{

        if(startingXV.length === 4){
            console.log('all full up')
            return
        }

        const number =  Math.floor(Math.random() * (16 - 1) + 1);

        if(startingXV.includes(number)){
            getStartingXV()
        }
        else{
            setStartingXV(startingXV.concat(number))
        }
    }

    const getBench = () =>{

        if(bench.length === 4){
            console.log('all the bench warmers are here')
            return
        }

        const number =  Math.floor(Math.random() * (24 - 16) + 16);

        if(bench.includes(number)){
            getBench()
        }
        else{
            setBench(bench.concat(number))
        }
    }

    const generateNumbers = () => {

        getStartingXV()

        getBench()


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

        
    }


    return ( 

        <div className="h-full">
            <PlayersDisplay
            names={names} 
            setNames={setNames}
            generateNumbers={generateNumbers}
            startingXV={startingXV}
            bench={bench}
            />
        </div>
        

     );
}

export default NumberGenerator;