import { useState } from "react";

const PlayersDisplay = ({generateNumbers, startingXV, bench}) => {

    const [names, setNames] = useState([])

    const addNames = (name) =>{

        
        if(names.includes(name)){
            return
        }
        else{
            generateNumbers()
            setNames(names.concat(name))
            console.log(names)
            console.log(startingXV)
            console.log(bench)
        }
    }


    return ( 

        <div className="h-full flex justify-evenly flex-wrap pt-10">

            <div className="w-2/5 h-2/5 bg-red-200 -2" 
            onClick={()=>addNames('aji')}>
                <p className=" text-3xl text-leinster-gold">Aji</p>
                <div className="w-full flex justify-evenly">
                    <div >{startingXV[names.indexOf('aji')]}</div>
                    <div >{bench[names.indexOf('aji')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 bg-green-200 -2" 
            onClick={()=>addNames('alan')}>
                <p className=" text-3xl text-leinster-gold">Alan</p>
                <div className="w-full flex justify-evenly">
                    <div>{startingXV[names.indexOf('alan')]}</div>
                    <div>{bench[names.indexOf('alan')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 bg-blue-200 -2" 
            onClick={()=>addNames('andrew')}>
                <p className=" text-3xl text-leinster-gold">Andrew</p>
                <div className="w-full flex justify-evenly">
                    <div>{startingXV[names.indexOf('andrew')]}</div>
                    <div>{bench[names.indexOf('andrew')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 bg-yellow-200 -2" 
            onClick={()=>addNames('oisin')}>
                <p className=" text-3xl text-leinster-gold">Oisín</p>
                <div className="w-full flex justify-evenly">
                    <div>{startingXV[names.indexOf('oisin')]}</div>
                    <div>{bench[names.indexOf('oisin')]}</div>
                </div>
            </div>


        </div>

     );
}
 
export default PlayersDisplay;