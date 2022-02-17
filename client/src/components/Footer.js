import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <div id="footer">
      <Button
        class="btn btn-large"
        style={{ backgroundColor: "#9fc94c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
        href="https://cash.app/$icseen"
      >
        Donate Today!
      </Button>

      <img 
        src="http://localhost:4000/images/logo.png"
        className="footerLogo"
        alt="footerLogo" 
      />

      <Button
        class="btn btn-large"
        style={{ backgroundColor: "#f4805c", color: "white", fontWeight: "bold", "fontSize":"14px"}}
        href="https://github.com/seenso/PawsClaws"
      >
        Github Repo
      </Button>

      
    </div>
  )
}