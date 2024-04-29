function changePage(){
    let video = document.getElementById("url").value;
    video =video.substring(32);
    window.open("./watch/index.html?video=" + video)
}