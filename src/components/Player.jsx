import React from 'react'
import { useState } from 'react'

const Player = ({ initialName , symbol}) => {
    const [playerName , setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing((editing)=>!editing); // If the fuction form is used react makes sure that the latest state value is used.
        
    }
    function handleChange(event){
        setPlayerName(event.target.value); // The two way binding helps us to get access to values entered by a user to an input field and then feeding the updated value back to the input.
    }
let editablePlayerName = <span className="player-name">{playerName}</span>;

if (isEditing === true){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
}

  return (
    <li>
    <span className="player">
        {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
  </li>
  )
}

export default Player