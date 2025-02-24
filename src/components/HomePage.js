

import React, { useEffect, useRef, useState } from 'react';
import '../styles/homePageStyles.css';

function HomePage() {


  // HTML FORMATTING
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Reel Retriever</title>
        <link rel="stylesheet" href="styles.css" />
      </head>


      {/* DESKTOP BODY */}
      <div id="body">


        {/* HEADER */}
        <header class="header"></header>

        <div className="titleBar">
          <img src="./titleBar.png" alt="Reel Retriever Title Bar" />
          <div className="titleBarText">
            Bringing you overlooked videos from across YouTube’s history.
          </div>
        </div>

        {/* MAIN PAGE */}
        <div class="page">

          {/* LEFT AND CENTER COLUMN CONTAINER */}
          <div class="leftField"   
            style={{
              backgroundImage: "url(./background.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "top center",
            }}>

            {/* LEFT COLUMN */}
            <div className="leftColumn">
              <img
                src="./left-sidebar-background.png"
                alt="Left column background"
                className="leftColumnBackground"
              />
            </div>

            
          </div>
        </div>
      </div>
    </html>

  );
}

export default HomePage;

