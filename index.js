const API_KEY = "AIzaSyBuv4KNR2wKlm5dMp-FRZ9hLEKGbqkMErc";
let searchApiId = (keyword) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${keyword}&key=${API_KEY}`
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      let video = document.createElement("iframe");
      video.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
      video.width = 800;
      video.height = 500;
      let container = document.getElementById("list");
      if (container.firstElementChild != null) {
        container.removeChild(container.firstElementChild);
      }
      container.appendChild(video);
    });
};
document.getElementById("btn-search").addEventListener("click", () => {
  let word = document.getElementById("input-search").value;
  searchApiId(word);
});
