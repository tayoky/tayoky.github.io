par = new URLSearchParams(window.location.search);
par = par.get("video");
document.getElementById("display").src="https://youtube.com/embed/" + par;