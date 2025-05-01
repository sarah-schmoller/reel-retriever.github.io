

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

  const [history, setHistory] = useState([allVideos[0]]);
  const [historyPointer, setHistoryPointer] = useState(0);


  const currentVideo = history[historyPointer] || allVideos[0];
  const [recentVideos, setRecentVideos] = useState([]);
  const [playableIndices, setPlayableIndices] = useState([]);

  const [isReady, setIsReady] = useState(false);

const imagesToPreload = [
  '/aboutBackground.webp',
  '/aboutBackgroundSmall.webp',
  '/arrowLeft.webp',
  '/arrowRight.webp',
  '/background.webp',
  '/backgroundMobile.webp',
  '/controlPanel.webp',
  '/emptyHistory.webp',
  '/leftSidebarBackground.webp',
  '/leftWidget.webp',
  '/leftWidgetBottom.webp',
  '/postItLeft.webp',
  '/postItRight.webp',
  '/recentsBackground.webp',
  '/recentsBackgroundSmall.webp',
  '/rightSidebar.webp',
  '/sectionHeaderOne.webp',
  '/sectionHeaderThree.webp',
  '/sectionHeaderTwo.webp',
  '/titleBar.webp',
  '/titleBarMobile.webp',
  '/videoBackground.webp',
  '/videoBackgroundSmall.webp',
  '/videoPlayerContainer.webp'
];

useEffect(() => {
  let loadedCount = 0;
  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === imagesToPreload.length) setIsReady(true);
    };
    img.onerror = () => {
      console.error('Failed to load:', src);
      loadedCount++;
      if (loadedCount === imagesToPreload.length) setIsReady(true);
    };
  });
}, []);


  useEffect(() => {
    const recentIds = new Set(recentVideos.map(v => v.id));
    const newPlayableIndices = allVideos
      .map((_, i) => i)
      .filter(i => !recentIds.has(allVideos[i].id));

    setPlayableIndices(newPlayableIndices);

    if (!newPlayableIndices.includes(currentIndex)) {
      const firstIndex = newPlayableIndices[0] ?? 0;
      setCurrentIndex(0);
    }
  }, [recentVideos, allVideos]);


  useEffect(() => {
if (!isReady) return;

    let body = document.getElementById('body');
    let mobileBody = document.getElementById('mobileBody');

    let mobileCheck = isMobile();
    if (mobileCheck) {

      if (!body.classList.contains('noDisplay')) {
        body.classList.toggle('noDisplay');
      }

      if (mobileBody.classList.contains('noDisplay')) {
        mobileBody.classList.toggle('noDisplay');
      }

    } else {
      
      if (!mobileBody.classList.contains('noDisplay')) {
        mobileBody.classList.toggle('noDisplay');
      }

      if (body.classList.contains('noDisplay')) {
        body.classList.toggle('noDisplay');
      }

    }
    
  })

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


  function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  if (!isReady) {
    return (
      <div className="loadingScreen">
        {/* optional: spinner or blank */}
      </div>
    );
  }

  
  // HTML FORMATTING
  return (
    <div>


      {/* DESKTOP BODY */}
      <div id="body">


        {/* HEADER */}
        <header class="header"></header>

        <div className="titleBar">
          <img src="./titleBar.webp" alt="Reel Retriever Title Bar" />
          <div className="titleBarText">
            Bringing you overlooked videos from across YouTube’s history.
          </div>
        </div>


        {/* MAIN PAGE */}
        <div class="page">

          {/* LEFT AND CENTER COLUMN CONTAINER */}
          <div class="leftField"   
            style={{
              backgroundImage: "url(./background.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "top center",
            }}>


            {/* LEFT COLUMN */}
            <div className="leftColumn">
              <img
                src="./leftSidebarBackground.webp"
                alt="Left column background"
                className="leftColumnBackground"
              />
              <div className="leftColumnContent">
                <div className="leftColumnTile">
                  <img src="./leftWidget.webp" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    <span className="highlightedText">
                      219,482 {" "}
                    </span> 
                      videos currently indexed
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidget.webp" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    Oldest upload posted in {" "}
                    <span className="highlightedText">
                      Jan 2007 
                    </span>
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidget.webp" alt="Left Widget Bottom" />
                  <div className="overlayText" id="overlayTextUpperWidgets">
                    <span className="highlightedText">
                      1,482 {" "}
                    </span>
                    videos rediscovered today
                  </div>
                </div>
                <div className="leftColumnTile">
                  <img src="./leftWidgetBottom.webp" alt="Left Widget Bottom" />
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
                    src="./videoBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="innerWidgetFieldContents">
                    <img
                      src="./sectionHeaderOne.webp"
                      alt="Video header top"
                      className="sectionHeader"
                    />
                    <div className="videoPlayer">
                      <img
                        src="./videoPlayerContainer.webp"
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
                        src="./controlPanel.webp"
                        alt="Video controls background"
                        className="videoControlsBackground"
                      />
                      <div className="videoControlsContent">
                        <img
                          src="./arrowLeft.webp"
                          alt="Previous video"
                          className="videoArrow"
                          onClick={goPrevious}
                        />
                        <img
                          src="./discover.webp"
                          alt="Discover new video"
                          className="videoDiscover"
                          onClick={goNext}
                        />
                        <img
                          src="./arrowRight.webp"
                          alt="Next video"
                          className="videoArrow"
                          onClick={goNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WATCH HISTORY WIDGET */}
              <div class="centerWidget">
                <img
                  src="./recentsBackground.webp"
                  alt="Large widget frame"
                />
                <div class="innerWidgetField">
                  <img
                    src="./recentsBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="innerWidgetFieldContents">
                    <img
                      src="./sectionHeaderTwo.webp"
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

              {/* ABOUT US WIDGET */}
              <div class="centerWidget">
                <img
                  src="./aboutBackground.webp"
                  alt="Large widget frame"
                />
                <div class="innerWidgetField">
                  <img
                    src="./aboutBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="innerWidgetFieldContents">
                    <img
                      src="./sectionHeaderThree.webp"
                      alt="Video header top"
                      className="sectionHeader"
                    />
                    <div className="aboutUsNotes">
                      <div className="topCenterLeftPostit">
                        <img src="./postItLeft.webp" alt="Top Center Left" />
                        <div className="overlayTextPostitLeft">
                          In the age of social media algorithms, it can feel impossible to recapture the quieter, more human style of the early internet.{' '}
                          <span className="highlightSentence">
                            Reel Retriever helps you find videos that few people have seen, many of which were not filmed with a large audience in  mind.{' '}
                          </span> 
                          Discover forgotten recordings of performances, academic projects, auditions, home videos, and other simple windows into the daily lives of folks around the globe.
                        </div>
                      </div>
                      <div className="topCenterRightPostit">
                        <img src="./postItRight.webp" alt="Top Center Right" />
                          <div className="overlayTextPostitRight">
                            <span className="highlightSentence">
                              How it Works: 
                              <br/><br/>
                            </span>  
                              We periodically search YouTube for videos that receive very little algorithmic exposure and help our users discover them.{' '}
                            <span className="highlightSentence">
                              We don’t download or modify videos, 
                            </span>  
                              and all views, likes, and comments happen on YouTube.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* RIGHT COLUMN */}
            <div class="rightColumn">
              <img src="./rightSidebar.webp" alt="Right Sidebar" />
            </div>

          </div>
        </div>


      {/* MOBILE BODY */}
      <div id="mobileBody">
        <header className="mobileHeader"></header>
          <div className="mobileTitleBar">
            <img src="./titleBarMobile.webp" alt="Reel Retriever Title Bar" />
          </div>
          <div className="mobilePage">


            {/* MOBILE CENTER COLUMN */}
            <div className="mobileCenterColumnBackground"   
              style={{
                backgroundImage: "url(./backgroundMobile.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "top center",
              }}>
            <div className="mobileCenterColumnContents">


              {/* MOBILE VIDEO FINDER WIDGET */}
              <div className="mobileCenterWidget largeWidget">
                <img
                  src="./videoBackground.webp"
                  alt="Large widget frame"
                />
                <div className="mobileInnerWidgetField">
                  <img
                    src="./videoBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="mobileInnerWidgetFieldContents">
                    <img
                      src="./sectionHeaderOne.webp"
                      alt="Video header top"
                      className="mobileSectionHeader"
                    />
                    <div className="videoPlayer">
                      <img
                        src="./videoPlayerContainer.webp"
                        alt="Video player background"
                        className="videoPlayerBackgroundImage"
                      />
                      <div className="videoPlayerFilterOverlay">
                        <select className="mobileFilter mobileEmbeddings">
                          <option>Embeddable Only</option>
                          <option>Allow Non-Embeddable</option>
                        </select>
                        <select className="mobileFilter mobileDateRange">
                          <option>All Time</option>
                          <option>2005–2008</option>
                          <option>2009–2012</option>
                          <option>2013–2016</option>
                        </select>
                        <select className="mobileFilter mobileUploadType">
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
                        src="./controlPanel.webp"
                        alt="Video controls background"
                        className="mobileVideoControlsBackground"
                      />
                      <div className="mobileVideoControlsContent">
                        <img
                          src="./arrowLeft.webp"
                          alt="Previous video"
                          className="mobileVideoArrow"
                          onClick={goPrevious}
                        />
                        <img
                          src="./discover.webp"
                          alt="Discover new video"
                          className="mobileVideoDiscover"
                          onClick={goNext}
                        />
                        <img
                          src="./arrowRight.webp"
                          alt="Next video"
                          className="mobileVideoArrow"
                          onClick={goNext}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* MOBILE WATCH HISTORY WIDGET */}
              <div className="mobileCenterWidget largeWidget">
                <img
                  src="./recentsBackground.webp"
                  alt="Large widget frame"
                />
                <div className="mobileInnerWidgetField">
                  <img
                    src="./recentsBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="mobileInnerWidgetFieldContents">
                    <img
                      src="./sectionHeaderTwo.webp"
                      alt="Video header top"
                      className="mobileSectionHeader"
                    />
                    <div className="recentsWidgetOverlay">
                      <div className="mobileRecentsList">
                        {recentVideos.length === 0 ? (
                          <div className="recentsEmptyState">
                            <img
                              src="./emptyHistory.webp"
                              alt="No recent videos yet"
                              className="mobileRecentsEmptyStateImage"
                            />
                            <div className="mobileRecentsEmptyStateText">
                                No watch history is currently available.
                            </div>
                            <div className="mobileRecentsEmptyStateTextSmall">
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


              {/* MOBILE ABOUT US WIDGET */}
              <div className="mobileCenterWidget largeWidget">
                <img
                  src="./aboutBackground.webp"
                  alt="Large widget frame"
                />
                <div className="mobileInnerWidgetField">
                  <img
                    src="./aboutBackgroundSmall.webp"
                    alt="Small widget frame"
                  />
                  <div className="mobileInnerWidgetFieldContents">
                    <img
                      src="./sectionHeaderThree.webp"
                      alt="Video header top"
                      className="mobileSectionHeader"
                    />
                    <div className="mobileAboutUsNotes">
                      <div className="topCenterLeftPostit">
                      <img src="./postItLeft.webp" alt="Top Center Left" />
                      <div className="mobileOverlayTextPostitLeft">
                        In the age of social media algorithms, it can feel impossible to recapture the quieter, more human style of the early internet.{' '}
                        <span className="mobileHighlightSentence">
                          Reel Retriever helps you find videos that few people have seen, many of which were not filmed with a large audience in  mind.{' '}
                        </span> 
                        Discover forgotten recordings of performances, academic projects, auditions, home videos, and other simple windows into the daily lives of folks around the globe.
                      </div>
                    </div>
                    <div className="topCenterRightPostit">
                      <img src="./postItRight.webp" alt="Top Center Right" />
                        <div className="mobileOverlayTextPostitRight">
                          <span className="mobileHighlightSentence">
                            How it Works: 
                            <br/><br/>
                          </span>  
                            We periodically search YouTube for videos that receive very little algorithmic exposure and help our users discover them.{' '}
                          <span className="mobileHighlightSentence">
                            We don’t download or modify videos, 
                          </span>  
                            and all views, likes, and comments happen on YouTube.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePage;