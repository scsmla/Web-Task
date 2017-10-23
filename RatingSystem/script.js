$("body").click(function (event) {
    if ($(event.target).is("input")) {
        var rating = parseInt(event.target.id) / 2;
        alert(rating);
    }
});