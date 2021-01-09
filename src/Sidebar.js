import React from 'react'
import "./Sidebar.css";
import Sidebaroption from './Sidebaroption';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromResponse } from "./spotify";


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
    return (
        <div className="Sidebar">
            <img 
            className="sidebar__logo"    
            src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""
            />
            <Sidebaroption Icon={HomeIcon} title="Home" />
            <Sidebaroption Icon={SearchIcon} title="Search" />
            <Sidebaroption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
           
            {playlists?.items?.map((playlists) => (
                    <Sidebaroption title={playlists.name} />
            ))}
           
        </div>
    ); 
}

export default Sidebar;
