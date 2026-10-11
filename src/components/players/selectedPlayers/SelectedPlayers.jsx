import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setCoin, coin}) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) =>{
        const filteredPlayers = selectedPlayers.filter((selectedPlayer)=> selectedPlayer.playerName !== player.playerName);
        console.log(selectedPlayers, "selectedPlayers");
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    }

    return (
        <div>
            <div className="space-y-4">
                {
                    selectedPlayers.map((player, index) => {
                        return (
                            <div key={index} className="flex justify-between items-center p-5 border rounded-2xl">
                                <div className="flex items-center gap-2">
                                    <img className="h-[80px] w-auto rounded-2xl" src={player.playerImg} alt={player.playerName} />
                                    <div>
                                        <h2 className="flex items-center gap-2 font-bold text-xl"><FaUser />{player.playerName}</h2>
                                        <p>{player.playerType}</p>
                                    </div>
                                </div>
                                <button onClick={()=> handleDeleteSelectedPlayer(player)} className="btn text-red-500"><MdDelete /></button>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
    );
};

export default SelectedPlayers;