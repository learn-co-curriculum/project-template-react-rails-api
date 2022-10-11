import React from "react";
import '../SocialMedia/SocialMedia.css'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function SocialMedia() {
    
    const iconStyles = {
        border: "1px solid grey",
        padding: "10px",
        margin: "5px"
    }

  
    

    

	return (
		<div className="mediaContainer">
			<div className="media">
				<FaFacebookF style={iconStyles} size = "2em"  color = "blue"/>
				<FaInstagram style={iconStyles} size = "2em"  color = "gold"/>
			</div>

			<div className="media">
                <FaYoutube style={iconStyles} size = "2em"  color = "red" />
                <FaTwitter style={iconStyles} size = "2em"  color = "lightBlue"/>
            </div>
		</div>
	);
}

export default SocialMedia;
