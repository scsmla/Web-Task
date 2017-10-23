var rating = 4;
for (i = 1; i <= 5; i++) {
    var targetStar = document.getElementById("star" + (6 - i));
    if (i <= rating) {
        targetStar.innerHTML = "&starf;";
    } else {
        targetStar.innerHTML = "☆";
    }
}