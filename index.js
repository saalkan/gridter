async function fetch_tweet() {
  try {
    const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&sentences=2&format=text`);
    if (!response.ok) {
      throw new Error(`Invalid text.`);
    }

    const tweet = await response.text();

    const last_element = document.getElementById("scroll_for_more");
    for (let i = 0; i < 3; i++) {
    let new_tweet = `<div><p>${tweet}</p></div>`;
    last_element.insertAdjacentHTML('beforebegin', new_tweet);
    }    
  }
  
  catch (error) {
    console.error(error);
  }
}