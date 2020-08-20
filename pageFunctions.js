window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

var section = document.getElementById("about-me-btn");
section.scrollIntoView();