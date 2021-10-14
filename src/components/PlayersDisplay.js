const PlayersDisplay = ({generateNumbers, ajiNums, alanNums, andrewNums, oisinNums}) => {


    return ( 

        <div className="h-4/5 flex flex-wrap pt-10">

            <div className="w-1/2">
                <p>Aji</p>
                <div className="w-full flex justify-evenly">
                    {ajiNums.map(number =>
                        <span key={number}>
                            {number}
                        </span>
                    )}
                </div>
            </div>


            <div className="w-1/2">
                <p>Alan</p>
                <div className="w-full flex justify-evenly">
                {alanNums.map(number =>
                    <span key={number}>
                        {number}
                    </span>
                )}
                </div>
            </div>


            <div className="w-1/2">
                <p>Andrew</p>
                <div className="w-full flex justify-evenly">
                {andrewNums.map(number =>
                    <span key={number}>
                        {number}
                    </span>
                )}
                </div>
            </div>


            <div className="w-1/2">
                <p>Oisin</p>
                <div className="w-full flex justify-evenly">
                {oisinNums.map(number =>
                    <span key={number}>
                        {number}
                    </span>
                )}
                </div>
            </div>

            <div className="w-full">
                <button onClick={generateNumbers} className="bg-red-500">Numbers</button>
            </div>


        </div>

     );
}
 
export default PlayersDisplay;