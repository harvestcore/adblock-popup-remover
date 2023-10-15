console.log("[YouTube Addblock popup remover v1.0.0]");

// https://stackoverflow.com/a/54389066
document.addEventListener("yt-page-data-updated", () => {
    document.querySelector("ytd-popup-container")?.remove();
    document.querySelector("video")?.play();
});
