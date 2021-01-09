import React, { useEffect, useState } from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import skipPrevious from '@material-ui/icons/SkipPrevious';
import { useDataLayerValue } from './DataLayer';
import track from "./SongRow";

function Footer({ spotify }) {
   
   
    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
      spotify.getMyCurrentPlaybackState().then((r) => {
        console.log(r);
  
        dispatch({
          type: "SET_PLAYING",
          playing: r.is_playing,
        });
  
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
      });
    }, [spotify]);
  
    const handlePlayPause = () => {
      if (playing) {
        spotify.pause();
        dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
      } else {
        spotify.play();
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      }
    };
  
    const skipNext = () => {
      spotify.skipToNext();
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    };
   
   
   
   
   
    return (
        <div className="footer">
            <div className="footer_left">
               <img 
               className="footer_albumlogo"
               src={item?.album.images[0].url}
               alt={item?.name}
               />
                <div className="footer_songinfo">
                    <h4>{track.name}</h4>
                  
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon onClick={skipNext} className="footer_icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                      onClick={handlePlayPause}
                      fontSize="large"
                      className="footer_icon"
                    />
                  ) : (
                    <PlayCircleOutlineIcon
                      onClick={handlePlayPause}
                      fontSize="large"
                      className="footer_icon"
                    />
                  )}
                  <SkipNextIcon onClick={skipPrevious} className="footer_icon" />
                  <RepeatIcon className="footer_green" />
                </div>
                <div className="footer_right">
                  <Grid container spacing={2}>
                    <Grid item>
                      <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                      <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                      <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                  </Grid>
                </div>

        </div>
    );
}

export default Footer;
