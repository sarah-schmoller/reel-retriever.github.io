

import React, { useEffect, useRef, useState } from 'react';
import '../styles/homePageStyles.css';

function HomePage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [allVideos, setAllVideos] = useState([
      {
        id: "5Sn31FUtuTA",
        thumbnail: "https://img.youtube.com/vi/5Sn31FUtuTA/mqdefault.jpg",
        title: "DSCF5684.AVI",
        channelName: "Ploegie19",
        uploadDate: "15 years ago",
        length: "0:26"
  
      },
      {
        id: "R6p22Tp1lsI",
        thumbnail: "https://img.youtube.com/vi/R6p22Tp1lsI/mqdefault.jpg",
        title: "DSCF5684",
        channelName: "charlie sincinito",
        uploadDate: "15 years ago",
        length: "5:12"
      },
      {
        id: "IY3yziDfb3g",
        thumbnail: "https://img.youtube.com/vi/IY3yziDfb3g/mqdefault.jpg",
        title: "DSCF5684",
        channelName: "PlasticLucy",
        uploadDate: "16 years ago",
        length: "0:26"
      },
      {
        id: "qt-116gtD5I",
        thumbnail: "https://img.youtube.com/vi/qt-116gtD5I/mqdefault.jpg",
        title: "DSCF5684",
        channelName: "8940sora",
        uploadDate: "16 years ago",
        length: "1:01"
      },
      {
        id: "zSRdHbhkCrc",
        thumbnail: "https://img.youtube.com/vi/zSRdHbhkCrc/mqdefault.jpg",
        title: "DSCF5684",
        channelName: "KrAxRACING",
        uploadDate: "16 years ago",
        length: "0:20",
      },
      {
        id: "Mi_sMNfNBhs",
        thumbnail: "https://img.youtube.com/vi/Mi_sMNfNBhs/mqdefault.jpg",
        title: "DSCF5684",
        channelName: "Tina Huang",
        uploadDate: "16 years ago",
        length: "0:16",
      },
      {
        id: "JXH6lyO2bAI",
        thumbnail: "https://img.youtube.com/vi/JXH6lyO2bAI/mqdefault.jpg",
        title: "DSCF5435",
        channelName: "david henry donald",
        uploadDate: "13 years ago",
        length: "0:11",
      },
      {
        id: "xTn5TyIyhMs",
        thumbnail: "https://img.youtube.com/vi/xTn5TyIyhMs/mqdefault.jpg",
        title: "DSCF5435.AVI",
        channelName: "SergLit",
        uploadDate: "14 years ago",
        length: "2:26",
      },
      {
        id: "mOMCm-mBGBs",
        thumbnail: "https://img.youtube.com/vi/mOMCm-mBGBs/mqdefault.jpg",
        title: "DSCF5435",
        channelName: "urban",
        uploadDate: "14 years ago",
        length: "0:50",
      },
      {
        id: "Q_sc4bIYUkI",
        thumbnail: "https://img.youtube.com/vi/Q_sc4bIYUkI/mqdefault.jpg",
        title: "DSCF5435",
        channelName: "Alberto García",
        uploadDate: "14 years ago",
        length: "0:44",
      },
      {
        id: "yB_IfLGQJ5Y",
        thumbnail: "https://img.youtube.com/vi/yB_IfLGQJ5Y/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "rzorzoster",
        uploadDate: "12 years ago",
        length: "0:11",
      },
      {
        id: "F6qJLUcZpj4",
        thumbnail: "https://img.youtube.com/vi/F6qJLUcZpj4/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "Canale 74",
        uploadDate: "12 years ago",
        length: "0:20",
      },
      {
        id: "mU067devfmg",
        thumbnail: "https://img.youtube.com/vi/mU067devfmg/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "Lari paes",
        uploadDate: "12 years ago",
        length: "3:15",
      },
      {
        id: "kR0AI0hpGj8",
        thumbnail: "https://img.youtube.com/vi/kR0AI0hpGj8/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "Neil Wilson",
        uploadDate: "12 years ago",
        length: "0:23",
      },
      {
        id: "m9TxO-fn9AA",
        thumbnail: "https://img.youtube.com/vi/m9TxO-fn9AA/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "Angelina Black",
        uploadDate: "12 years ago",
        length: "1:53",
      },
      {
        id: "FAYXnrcVN6A",
        thumbnail: "https://img.youtube.com/vi/FAYXnrcVN6A/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "Raymond462",
        uploadDate: "12 years ago",
        length: "2:20",
      },
      {
        id: "OJaCNj0RdFM",
        thumbnail: "https://img.youtube.com/vi/OJaCNj0RdFM/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "zac bot",
        uploadDate: "13 years ago",
        length: "0:45",
      },
      {
        id: "QAiqTSo0NNU",
        thumbnail: "https://img.youtube.com/vi/QAiqTSo0NNU/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "劉懿萱",
        uploadDate: "13 years ago",
        length: "3:08",
      },
      {
        id: "3LIObwA0fmk",
        thumbnail: "https://img.youtube.com/vi/3LIObwA0fmk/mqdefault.jpg",
        title: "DSCF2856 0",
        channelName: "Karunyu Kieangjun",
        uploadDate: "13 years ago",
        length: "3:58",
      },
      {
        id: "WFI73AOgLBA",
        thumbnail: "https://img.youtube.com/vi/WFI73AOgLBA/mqdefault.jpg",
        title: "DSCF2856",
        channelName: "xavdecat",
        uploadDate: "13 years ago",
        length: "0:27",
      },
    ]);



  const goNext = () => {
    const leavingVideo = history[historyPointer];

    const newRecents = (() => {
      const filtered = recentVideos.filter(v => v.id !== leavingVideo.id);
      return [leavingVideo, ...filtered].slice(0, 10);
    })();

    setRecentVideos(newRecents);

    const recentIds = new Set(newRecents.map(v => v.id));

    setHistoryPointer(prevPointer => {
      let nextPointer = prevPointer + 1;

      while (
        nextPointer < history.length &&
        recentIds.has(history[nextPointer].id)
      ) {
        nextPointer++;
      }

      if (nextPointer < history.length) {
        return nextPointer;
      }

      const historyIds = new Set(history.map(v => v.id));
      const nextVideo = allVideos.find(
        v => !historyIds.has(v.id) && !recentIds.has(v.id)
      );

      if (nextVideo) {
        const newIndex = history.length;
        setHistory(prev => [...prev, nextVideo]);
        return newIndex;
      }

      return prevPointer;
    });
  };


  const goPrevious = () => {
    const leavingVideo = history[historyPointer];

    const nextPointer = Math.max(historyPointer - 1, 0);
    const nextVideo = history[nextPointer];

    setRecentVideos(prev => {
      const filtered = prev.filter(v => v.id !== leavingVideo.id);
      const updated = [leavingVideo, ...filtered].slice(0, 10);
      return updated.filter(v => v.id !== nextVideo.id);
    });

    setHistoryPointer(nextPointer);
  };

    const handleThumbnailClick = (video) => {
    const leavingVideo = history[historyPointer];

    setRecentVideos(prev => {
      const filtered = prev.filter(v => v.id !== leavingVideo.id && v.id !== video.id);
      return [leavingVideo, ...filtered].slice(0, 10);
    });

    setHistory(prevHistory => {
      const pointer = historyPointer;

      if (prevHistory[pointer].id === video.id) return prevHistory;

      const filteredHistory = prevHistory.filter(v => v.id !== video.id);
      const newHistory = [
        ...filteredHistory.slice(0, pointer),
        video,
        ...filteredHistory.slice(pointer)
      ];

      return newHistory;
    });

    setHistoryPointer(historyPointer);
  };



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
              
              {/* VIDEO FINDER WIDGET */}
              <div class="centerWidget">
                <img
                  src="./videoBackground.webp"
                  alt="Large widget frame"
                />
                <div class="innerWidgetField">
                  <img
                    src="./videoBackgroundSmall.png"
                    alt="Small widget frame"
                  />
                  <div className="innerWidgetFieldContents">
                    <img
                      src="./sectionHeaderOne.png"
                      alt="Video header top"
                      className="sectionHeader"
                    />
                    <div className="videoPlayer">
                      <img
                        src="./videoPlayerContainer.png"
                        alt="Video player background"
                        className="videoPlayerBackgroundImage"
                      />
                      <div className="videoPlayerFilterOverlay">
                        <div className="overlayTextLabelOne">
                          Embeddings:
                        </div>
                        <select className="filter embeddings">
                          <option>Embeddable Only</option>
                          <option>Allow Non-Embeddable</option>
                        </select>
                        <div className="overlayTextLabelTwo">
                          Date:
                        </div>
                        <select className="filter dateRange">
                          <option>All Time</option>
                          <option>2005–2008</option>
                          <option>2009–2012</option>
                          <option>2013–2016</option>
                        </select>
                        <div className="overlayTextLabelThree">
                          File Type:
                        </div>
                        <select className="filter uploadType">
                          <option>All Uploads</option>
                          <option>DSCF</option>
                          <option>IMG</option>
                          <option>MOV</option>
                        </select>
                      </div>
                      <iframe
                        className="videoEmbedding"
                        src={`https://www.youtube.com/embed/${currentVideo.id}`}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="videoControls">
                      <img
                        src="./controlPanel.png"
                        alt="Video controls background"
                        className="videoControlsBackground"
                      />
                      <div className="videoControlsContent">
                        <img
                          src="./arrowLeft.png"
                          alt="Previous video"
                          className="videoArrow"
                          onClick={goPrevious}
                        />
                        <img
                          src="./discover.png"
                          alt="Discover new video"
                          className="videoDiscover"
                          onClick={goNext}
                        />
                        <img
                          src="./arrowRight.png"
                          alt="Next video"
                          className="videoArrow"
                          onClick={goNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* WATCH HISTORY WIDGET */}
            <div class="centerWidget">
              <img
                src="./recentsBackground.png"
                alt="Large widget frame"
              />
              <div class="innerWidgetField">
                <img
                  src="./recentsBackgroundSmall.png"
                  alt="Small widget frame"
                />
                <div className="innerWidgetFieldContents">
                  <img
                    src="./sectionHeaderTwo.png"
                    alt="Video header top"
                    className="sectionHeader"
                  />
                  <div className="recentsWidgetOverlay">
                    <div className="recentsList">
                      {recentVideos.length === 0 ? (
                        <div className="recentsEmptyState">
                          <img
                            src="./emptyHistory.webp"
                            alt="No recent videos yet"
                            className="recentsEmptyStateImage"
                          />
                          <div className="recentsEmptyStateText">
                              No watch history is currently available.
                          </div>
                          <div className="recentsEmptyStateTextSmall">
                              Start discovering videos above!
                          </div>
                        </div>
                      ) : (
                        recentVideos.map((video) => (
                          <div key={video.id} className="recentsItem" onClick={() => handleThumbnailClick(video)}>
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="recentsThumbnail"
                            />
                            <div className="recentsInfo">
                              <div className="recentsTitle">{video.title}</div>

                              <div className="recentsMetadata">
                                <span className="recentsChannelName">
                                  {video.channelName}
                                </span>
                                <span className="recentsDot"> • </span>
                                <span className="recentsDate">
                                  {video.uploadDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </html>

  );
}

export default HomePage;

