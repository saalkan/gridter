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
      let new_tweet = `<div class="tweet-box"><p>${tweet}</p></div>`;
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