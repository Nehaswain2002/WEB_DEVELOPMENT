const meme_img = document.getElementById("meme-img");
const meme_btn = document.getElementById("meme-btn");
const meme_title = document.getElementById("meme-title");

const getMemes = async () => {
  try {
    const res = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await res.json();
    meme_img.src = data.url;
    meme_title.textContent = data.title;
  } catch (error) {
    console.log(error);
  }
};

meme_btn.addEventListener("click", getMemes);

window.onload = getMemes;