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
                    selectedPlayers.length === 0 ? 
                    <div className="h-[400px] flex items-center justify-center flex-col gap-4">
                        <h2 className="font-semibold text-xl">No Players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div> :
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