// import { useState } from "react";

const PlayersDisplay = ({generateNumbers, startingXV, bench, setNames, names}) => {

    // const [names, setNames] = useState([])

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

        <div className="h-full flex items-start justify-evenly flex-wrap pt-10">

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold" 
            onClick={()=>addNames('aji')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Aji</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-4 text-white text-5xl font-bold font-jersey transition transform hover:-translate-y-1">{startingXV[names.indexOf('aji')]}</div>
                    <div className="text-white text-5xl font-bold font-jersey">{bench[names.indexOf('aji')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold" 
            onClick={()=>addNames('alan')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Alan</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-4 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('alan')]}</div>
                    <div className="text-white text-5xl font-bold font-jersey">{bench[names.indexOf('alan')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold" 
            onClick={()=>addNames('andrew')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Andrew</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-4 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('andrew')]}</div>
                    <div className="text-white text-5xl font-bold font-jersey">{bench[names.indexOf('andrew')]}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold" 
            onClick={()=>addNames('oisin')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Oisín</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-4 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('oisin')]}</div>
                    <div className="text-white text-5xl font-bold font-jersey">{bench[names.indexOf('oisin')]}</div>
                </div>
            </div>


        </div>

     );
}
 
export default PlayersDisplay;