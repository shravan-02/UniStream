let video_btn = document.getElementById("thumbnail_box");
let video_section = document.getElementById("video_section");
let navEnd = document.getElementById("navbar");
let playBackContainer = document.createElement("div");

let discover_btn = document.getElementById("discover-btn");
discover_btn.addEventListener("click", function () {
  if (video_section.style.display === "none") {
    console.log("hello");
    playBackContainer.remove();
    video_section.style.display = "flex";
  }
});

function onThumbnailClick() {
  video_section.style.display = "none";
  // video_section.remove();
  playBackContainer.setAttribute("class", "playback-container");
  navEnd.insertAdjacentElement("afterend", playBackContainer);
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
        <p class="scroll-for-more"> Scroll for More ↓</p>
                <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/4.webp);">
                    <div class="video-details">
                        <img src="./assets/images/dp/teeqo.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div>
                </div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/5.webp);"><div class="video-details">
                    <img src="./assets/images/dp/nikoLeo.jpeg" alt="" class="creator-image">
                    <p class="video-title">well NYC, Today is the Day</p>
                </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/6.webp);"><div class="video-details">
                    <img src="./assets/images/dp/ninja.jpeg" alt="" class="creator-image">
                    <p class="video-title">well NYC, Today is the Day</p>
                </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/7.webp);"><div class="video-details">
                        <img src="./assets/images/dp/shevon.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/8.webp);"><div class="video-details">
                        <img src="./assets/images/dp/ninja.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/9.webp);"><div class="video-details">
                        <img src="./assets/images/dp/shevon.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
                <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/4.webp);">
                    <div class="video-details">
                        <img src="./assets/images/dp/teeqo.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div>
                </div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/5.webp);"><div class="video-details">
                    <img src="./assets/images/dp/nikoLeo.jpeg" alt="" class="creator-image">
                    <p class="video-title">well NYC, Today is the Day</p>
                </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/6.webp);"><div class="video-details">
                    <img src="./assets/images/dp/ninja.jpeg" alt="" class="creator-image">
                    <p class="video-title">well NYC, Today is the Day</p>
                </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/7.webp);"><div class="video-details">
                        <img src="./assets/images/dp/shevon.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/8.webp);"><div class="video-details">
                        <img src="./assets/images/dp/ninja.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
            <div class="boxes">
                <!-- <img class="thumbnail" src="./assets/images/3.webp" /> -->
                <div onclick="onThumbnailClick()" class="thumbnail-gradient" style="background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(117, 19, 93, 0.618)),url(./assets/images/9.webp);"><div class="video-details">
                        <img src="./assets/images/dp/shevon.jpeg" alt="" class="creator-image">
                        <p class="video-title">well NYC, Today is the Day</p>
                    </div></div>
            </div>
    </div>
    `;
  console.log(video_section.style.display);
}


//Code to autplay on thumbnail on hover

// let thumbnail_box = document.getElementsByClassName("boxes")
// for(let i = 0; i < thumbnail_box.length; i++){
//     let currentBackgroundImage = thumbnail_box[i].getElementsByClassName("thumbnail-gradient")[0].style.backgroundImage
//     console.log(currentBackgroundImage)
//     thumbnail_box[i].addEventListener("mouseover", function(){
//         console.log(thumbnail_box[i].getElementsByClassName("thumbnail-gradient")[0])
//         thumbnail_box[i].getElementsByClassName("thumbnail-gradient")[0].style.backgroundImage = "none"
//         thumbnail_box[i].getElementsByClassName("thumbnail-gradient")[0].innerHTML +=
//         `
//         <iframe
//             // src="https://www.youtube.com/embed/RqhumbLZ9Pk?autoplay=1&mute=1&controls=0&modestbranding=1"
//             title="Apple Watch ULTRA - IT'S BIG - Ocean Band | Unboxing & First Impressions"
//             frameborder="0" autoplay=1 showinfo="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//         `

//     }, {once: true} )

//     thumbnail_box[i].addEventListener("mouseout", function(){
//         thumbnail_box[i].getElementsByClassName("thumbnail-gradient")[0].style.backgroundImage = currentBackgroundImage[i]
//         thumbnail_box[i].getElementsByTagName("iframe")[0].remove
//     })
// }
