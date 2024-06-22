// source: https://stackoverflow.com/a/31978777
let tweetcount = 0;

async function fetch_tweet() {
  try {
    const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&sentences=2&format=text`);
    if (!response.ok) {
      throw new Error(`Invalid text.`);
    }

    const tweet = await response.text();

    const last_element = document.getElementById("scroll_for_more");
    for (let i = 0; i < 5; i++) {
      let new_tweet = `<div class="tweet-box"><img class="avatar-tweet" src="./assets/pepe-compress.png"/><h3>P.E.P.E.</h3><p>@shadilay · 1m</p><p class="actual-tweet">${tweet}</p><div class="icon-and-number">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 22.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg fill="#E7E9EA" width="16" height="16" version="1.1" id="lni_lni-bubble" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <g><g><g><path d="M5.9,56.1c-0.6,0-1.2-0.1-1.8-0.4c-1.5-0.7-2.4-2.1-2.4-3.8V14.2c0-3.4,2.8-6.3,6.3-6.3h48c3.4,0,6.3,2.8,6.3,6.3v27.6
                c0,3.4-2.8,6.3-6.3,6.3H17.1l-8.5,7C7.8,55.7,6.9,56.1,5.9,56.1z M8,12.4c-1,0-1.8,0.8-1.8,1.8v37l8.6-7.1
                c0.4-0.3,0.9-0.5,1.4-0.5H56c1,0,1.8-0.8,1.8-1.8V14.2c0-1-0.8-1.8-1.8-1.8H8z"/>
            </g></g></g>
        </svg>
      <p>10</p></div><div class="icon-and-number">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 22.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg fill="#E7E9EA" width="16" height="16" version="1.1" id="lni_lni-reload" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <g>
          <path d="M8.4,29c0.3,0,0.7-0.1,1-0.2l11.1-3.9c1.2-0.4,1.8-1.7,1.4-2.9c-0.4-1.2-1.7-1.8-2.9-1.4l-6.9,2.4
            c3.3-8.6,11.7-14.4,21.3-14.4c10.5,0,19.6,7,22.2,17c0.3,1.2,1.5,1.9,2.7,1.6c1.2-0.3,1.9-1.5,1.6-2.7c-3.1-12-14-20.4-26.6-20.4
            c-11.2,0-21.1,6.6-25.2,16.5l-2.1-6c-0.4-1.2-1.7-1.8-2.9-1.4c-1.2,0.4-1.8,1.7-1.4,2.9l3.8,10.9C6.1,28.3,7.2,29,8.4,29z"/>
          <path d="M62.1,49.7L58,39c-0.3-0.7-0.8-1.3-1.5-1.6c-0.7-0.3-1.5-0.3-2.2,0l-11,4.2c-1.2,0.4-1.7,1.7-1.3,2.9
            c0.4,1.2,1.7,1.7,2.9,1.3l6.9-2.6C47.8,50.5,40,55.3,31.3,55.3c-9.9,0-18.6-6.2-21.7-15.4c-0.4-1.2-1.7-1.8-2.8-1.4
            c-1.2,0.4-1.8,1.7-1.4,2.8c3.7,11,14.1,18.4,25.9,18.4c10.3,0,19.6-5.7,24.3-14.5l2.3,6.1c0.3,0.9,1.2,1.4,2.1,1.4
            c0.3,0,0.5,0,0.8-0.2C62,52.2,62.5,50.9,62.1,49.7z"/>
        </g>
        </svg>
      <p>10</p></div><div class="icon-and-number">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 22.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg fill="#E7E9EA" width="16" height="16" version="1.1" id="lni_lni-heart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <g>
          <path d="M32,59c-1.3,0-2.6-0.5-3.6-1.4c-2.3-2-4.4-3.8-6.3-5.4c-5.7-4.9-10.7-9-14.2-13.2c-4.1-5-6.1-9.7-6.1-15
            c0-5.1,1.8-9.9,5-13.4C10.1,7,14.7,5,19.6,5c3.7,0,7.2,1.2,10.2,3.5c0.8,0.6,1.5,1.2,2.2,2c0.7-0.7,1.4-1.4,2.2-2
            c3-2.3,6.4-3.5,10.2-3.5c5,0,9.5,2,12.8,5.6c3.3,3.5,5,8.3,5,13.4c0,5.3-1.9,10-6.1,15c-3.5,4.2-8.5,8.4-14.2,13.2
            c-1.9,1.6-4.1,3.5-6.4,5.4C34.6,58.5,33.3,59,32,59z M19.6,9.5c-3.7,0-7.1,1.5-9.6,4.1C7.6,16.3,6.3,20,6.3,24c0,4.1,1.6,8,5,12.1
            c3.3,3.9,8.1,8,13.6,12.7c1.9,1.6,4.1,3.5,6.4,5.5c0.4,0.3,1,0.3,1.4,0c2.3-2,4.5-3.8,6.4-5.5C44.7,44,49.5,40,52.7,36.1
            c3.4-4.1,5-8,5-12.1c0-4-1.4-7.7-3.8-10.3C51.4,11,48,9.5,44.4,9.5c-2.7,0-5.2,0.9-7.4,2.5c-0.9,0.7-1.7,1.5-2.5,2.4
            c-0.6,0.7-1.5,1.2-2.5,1.2s-1.8-0.4-2.5-1.2c-0.8-0.9-1.6-1.7-2.5-2.4C24.9,10.4,22.4,9.5,19.6,9.5z"/>
        </g>
        </svg>
      <p>10</p></div><div class="icon-and-number">
        <?xml version="1.0" encoding="utf-8"?>
        <!-- Generator: Adobe Illustrator 22.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg fill="#E7E9EA" width="16" height="16" version="1.1" id="lni_lni-bar-chart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
          y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
        <path d="M60,55.2h-5.4V35.5c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2,0-5.7,2.6-5.7,5.7v19.7h-6V20.4c0-3.2-2.6-5.7-5.7-5.7h-5.8
          c-3.2,0-5.7,2.6-5.7,5.7v34.8H6.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v48.9c0,2.3,1.9,4.3,4.3,4.3h54c1.2,0,2.3-1,2.3-2.3
          S61.2,55.2,60,55.2z M18.7,55.2V20.4c0-0.7,0.6-1.2,1.2-1.2h5.8c0.7,0,1.2,0.6,1.2,1.2v34.8H18.7z M41.9,55.2V35.5
          c0-0.7,0.6-1.2,1.2-1.2h5.8c0.7,0,1.2,0.6,1.2,1.2v19.7H41.9z"/>
        </svg>
      <p>10</p></div></div>`;
      last_element.insertAdjacentHTML('beforebegin', new_tweet);
      tweetcount++;
    }    
  }
  
  catch (error) {
    console.error(error);
  }
}

// source: https://dev.to/trex777/infinite-scrolling-using-intersection-observer-api-118l
document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (tweetcount !== 150) {
          fetch_tweet();
        }
      }
    });
  }

  let loader = document.getElementById("scroll_for_more");
  let observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(loader);
});