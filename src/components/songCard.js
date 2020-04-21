import React from "react";

const SongCard = (props) => {
    const {album, artist, title} = props; 
    return (
        <label>
            <input type="radio"/>
            <div className="song-card">
                <p>{title}</p>
                <p>{artist}</p>
                <p>{album}</p>
            </div>
        </label>
    )
}

export default SongCard