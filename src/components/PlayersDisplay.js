import { useState } from "react";

const PlayersDisplay = ({ generateNumbers, startingXV, bench }) => {

    const [names, setNames] = useState([])

    const [ajiNumber, setAjiNumber] = useState(null)
    const [alanNumber, setAlanNumber] = useState(null)
    const [andrewNumber, setAndrewNumber] = useState(null)
    const [oisinNumber, setOisinNumber] = useState(null)

    const addNames = (name) => {


        if (names.includes(name)) {
            return
        }
        else {
            generateNumbers()
            setNames(names.concat(name))
            console.log(names)
            console.log(startingXV)
            console.log(bench)
        }
    }

    const incrementNumber = (name) =>{
        if(name === 'aji'){
            setAjiNumber((prev) =>{
                if(prev > 22){
                    return 1
                }
                else{
                    return prev+1
                }
            })
        }
        else if(name === 'alan'){
            setAlanNumber((prev) =>{
                if(prev > 22){
                    return 1
                }
                else{
                    return prev+1
                }
            })
        }
        else if(name === 'andrew'){
            setAndrewNumber((prev) =>{
                if(prev > 22){
                    return 1
                }
                else{
                    return prev+1
                }
            })
        }
        else if(name === 'oisin'){
            setOisinNumber((prev) =>{
                if(prev > 22){
                    return 1
                }
                else{
                    return prev+1
                }
            })
        }
    }


    return (

        <div className="h-full flex items-start justify-evenly flex-wrap pt-10">

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold"
                onClick={() => addNames('aji')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Aji</p>
                <div className="w-full h-full flex flex-col justify-start">
                    <div className="my-2 text-white text-5xl font-bold font-jersey transition transform hover:-translate-y-1">{startingXV[names.indexOf('aji')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{bench[names.indexOf('aji')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{ajiNumber}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold"
                onClick={() => addNames('alan')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Alan</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('alan')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{bench[names.indexOf('alan')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{alanNumber}</div>
                </div>
            </div>

            <div className="w-full flex  items-start justify-evenly">
                <div className="w-2/5 flex justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-lg text-leinster-gold bg-leinster-blue rounded-full"
                    onClick={() => incrementNumber('aji')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
                <div className="w-2/5 flex justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-lg text-leinster-gold bg-leinster-blue rounded-full" 
                    onClick={() => incrementNumber('alan')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold"
                onClick={() => addNames('andrew')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Andrew</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('andrew')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{bench[names.indexOf('andrew')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{andrewNumber}</div>
                </div>
            </div>

            <div className="w-2/5 h-2/5 max-h-64 rounded-lg shadow-xl bg-leinster-blue border-2 hover:border-leinster-gold"
                onClick={() => addNames('oisin')}>
                <p className="p-2 sm:text-3xl text-2xl text-leinster-gold font-body">Oisín</p>
                <div className="w-full h-3/4 flex flex-col justify-start">
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{startingXV[names.indexOf('oisin')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{bench[names.indexOf('oisin')]}</div>
                    <div className="my-2 text-white text-5xl font-bold font-jersey">{oisinNumber}</div>
                </div>
            </div>

            <div className="w-full flex  items-start justify-evenly">
                <div className="w-2/5 flex justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-lg text-leinster-gold bg-leinster-blue rounded-full"
                    onClick={() => incrementNumber('andrew')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
                <div className="w-2/5 flex justify-center">
                    <div className="w-10 h-10 flex justify-center items-center text-lg text-leinster-gold bg-leinster-blue rounded-full"
                    onClick={() => incrementNumber('oisin')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default PlayersDisplay;