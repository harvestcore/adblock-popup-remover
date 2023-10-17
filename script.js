console.log("[YouTube Adblock popup remover v1.0.0]");

function isVideoPlaying(video) {
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
}

// https://stackoverflow.com/a/54389066
document.addEventListener("yt-page-data-updated", () => {
    const popup = document.querySelector("ytd-popup-container");
    if (popup) {
        console.log("YT adblock popup found!");
        popup.remove();
    }

    setTimeout(() => {
        const video = document.querySelector("video");
        if (video && !isVideoPlaying(video)) {
            video.play();
        }
    }, 500);
});
