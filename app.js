let video_btn = document.getElementById("thumbnail_box")  
let video_section = document.getElementById("video_section")
let navEnd = document.getElementById("navbar")
let playBackContainer = document.createElement("div")
// video_btn.addEventListener("click", function() {
//     video_section.style.display = "none"
//     // video_section.remove();
//     playBackContainer.setAttribute("class", "playback-container")
//     navEnd.insertAdjacentElement("afterend", playBackContainer)
//     playBackContainer.innerHTML = `
//     <div class="video-box">
//           <iframe
//             src="https://www.youtube.com/embed/RqhumbLZ9Pk"
//             title="Apple Watch ULTRA - IT'S BIG - Ocean Band | Unboxing & First Impressions"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//           <div class="title-row"></div>
//           <span class="video-title">Apple Watch Ultra Unboxing</span>
//           <span class="like-btn"><span class="material-symbols-outlined">
//             thumb_up
//             </span></span> 
//         </div>

//         <div class="recommended-sidebar">
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/4.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/3.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/9.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/9.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/9.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/9.webp"
//             /></a>
//           </div>
//           <div class="boxes">
//             <a class="thumbnail-link" href="./playback.html"
//               ><img class="thumbnail" src="./assets/images/9.webp"
//             /></a>
//           </div>
//         </div>
//     `
//     console.log(video_section.style.display)
// })

let discover_btn = document.getElementById("discover-btn")
discover_btn.addEventListener("click", function(){
    if (video_section.style.display === "none"){
        console.log("hello")
        playBackContainer.remove()
        video_section.style.display = "flex"
    }
})

function onThumbnailClick(){
    video_section.style.display = "none"
    // video_section.remove();
    playBackContainer.setAttribute("class", "playback-container")
    navEnd.insertAdjacentElement("afterend", playBackContainer)
    playBackContainer.innerHTML = `
    <div class="video-box">
          <iframe
            src="https://www.youtube.com/embed/RqhumbLZ9Pk"
            title="Apple Watch ULTRA - IT'S BIG - Ocean Band | Unboxing & First Impressions"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="title-row"></div>
          <span class="video-title">Apple Watch Ultra Unboxing</span>
          <span class="like-btn"><span class="material-symbols-outlined">
            thumb_up
            </span></span> 
        </div>

        <div class="recommended-sidebar">
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/4.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/3.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/9.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/9.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/9.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/9.webp"
            /></a>
          </div>
          <div class="boxes">
            <a class="thumbnail-link" href="./playback.html"
              ><img class="thumbnail" src="./assets/images/9.webp"
            /></a>
          </div>
        </div>
    `
    console.log(video_section.style.display)
}