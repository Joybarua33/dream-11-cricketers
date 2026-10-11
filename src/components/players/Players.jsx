import { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";

const Players = ({playersPromise}) => {
    const players = use(playersPromise);
    const [selectedType, setSelectedType] = useState("available");
    return (
        <div className="container mx-auto my-[60px]">
            <div className="flex justify-between items-center mb-[20px]">
                {selectedType ==="available" ? <h2 className="font-bold text-3xl">Available Players</h2> : <h2 className="font-bold text-3xl">Selected Players(0)</h2>}
                <div>
                    <button onClick={()=> setSelectedType("available")} className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected(0)</button>
                </div>
            </div>
            <AvailablePlayers players={players}/>
        </div>
    );
};

export default Players;