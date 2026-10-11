import { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
const Card = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () =>{
        let newCoin = coin - player.price;
        if(newCoin >= 0){
            setCoin(coin - player.price);
        }else{
            toast.error("Not enough coin to purchase this player")
            return;
        }
        toast.success(`${player.playerName} is selected`)
        setIsSelected(true); 
        setSelectedPlayers([...selectedPlayers, player]);
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                src={player.playerImg}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.playerName}</h2>
                <div className="flex justify-between items-center gap-2">
                    <FaFlag />
                    <p>{player.playerCountry}</p>
                    <button className="btn">{player.playerType}</button>
                </div>
                <div className="divider"></div>
                <h2>({player.rating})</h2>
                <div className="flex justify-between gap-6 font-bold">
                    <p>{player.batStyle}</p>
                    <p className="text-right">{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className="font-semibold">Price : {player.price}</p>
                    <button onClick={handleChoosePlayer} disabled={isSelected} className="btn ">{isSelected ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;