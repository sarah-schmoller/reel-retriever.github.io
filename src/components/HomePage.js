

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
                src="./leftSidebarBackground.png"
                alt="Left column background"
                className="leftColumnBackground"
              />
              <div className="leftColumnContent">
                <div className="leftColumnTile">
                  <img src="./leftWidget.png" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    <span className="highlightedText">
                      219,482 {" "}
                    </span> 
                      videos currently indexed
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidget.png" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    Oldest upload posted in {" "}
                    <span className="highlightedText">
                      Jan 2007 
                    </span>
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidget.png" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    <span className="highlightedText">
                      1,482 {" "}
                    </span>
                    videos rediscovered today
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidgetBottom.png" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextLowerWidget">
                    <span className="highlightedText">
                      Can't find what you're looking for?
                    </span> 
                    <br/>
                      Some low-view YouTube uploads do not allow embedding, and cannot be displayed directly on Reel Retriever. If you'd like to explore more of this kind of content, select "allow non-embeddable" in the video options, and we will direct you to links for viewing on YouTube.
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div class="centerColumn">
            </div>

            
          </div>
        </div>
      </div>
    </html>

  );
}

export default HomePage;

