
import React, { Component} from "react";
import "../App.css";
import SongCard from "./songCard"
import { getCurrentUser } from "./../utilities/authentication";

export default class Room extends Component{
constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          title: "Your Song",
          artist: "Elton John",
          album: "Greatest Hits",
          image: null,
        },
        {
          title: "SoB",
          artist: "Nathaniel Ratefliff and The Nightsweats",
          album: "Nathaniel Ratefliff and The Nightsweats",
          image: null,
        }
      ]
    }
    this.renderSongCards = this.renderSongCards.bind(this);
  }
  renderSongCards() {
    let cards = [];
    this.state.songs.forEach((song, index) => {
      const {title, artist, album, image} = song;
      cards.push(
        <SongCard id={index} title={title} album={album} artist={artist} image={image} />
      )
    });
    return cards;
  }

  render(){
    return(
      <div>
          <h1>Welcome to the room</h1>
        <form>
          <div className="input-group">
            {this.renderSongCards()}
          </div>
        </form>
      </div>
    );
  }
}