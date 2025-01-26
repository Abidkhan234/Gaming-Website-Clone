let movieList = [
    "./images/Videos/hero-1.mp4",
    "./images/Videos/hero-2.mp4",
    "./images/Videos/hero-3.mp4",
    "./images/Videos/hero-4.mp4"
];

const videoEle = document.querySelector(".video-box video");

const nextBtn = document.querySelector("#next-btn");

let index = 0;

nextBtn.addEventListener("click", () => {
    index++;

    if(index === movieList.length){
        index = 0;
    }
    
    videoEle.src = movieList[index];
});