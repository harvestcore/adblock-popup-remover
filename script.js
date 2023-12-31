// Set defaults
const version = "1.0.2";

function isVideoPlaying(video) {
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
}

// https://stackoverflow.com/a/54389066
document.addEventListener("yt-page-data-updated", () => {
    [document.querySelector("ytd-popup-container"), document.querySelector("tp-yt-paper-dialog")].forEach(popup => {
        if (popup) {
            console.log("YT adblock popup found!");
            popup.remove();
        }
    });

    setTimeout(() => {
        const video = document.querySelector("video");
        if (video && !isVideoPlaying(video)) {
            video.play();
        }
    }, 500);
});

console.log(`[Adblock popup remover v${version}]`);
