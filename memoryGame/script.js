var count = 0;
var first = 0;
var second = 0;


$('body').click(function (event) {
    var listContainer = document.getElementsByClassName('flipper');
    var matrix = [
        [1, 2, 3, 1],
        [4, 5, 8, 7],
        [7, 6, 8, 4],
        [2, 3, 6, 5]
    ]
    var target = $(event.target);

    if (target.is('div') && target.hasClass('front')) {
        if (count == 0) {
            target.parent().addClass('flipped');
            first = parseInt(target.parent().attr('id'));
            count++;
            return;
        } else if (count == 1) {
            target.parent().addClass('flipped');
            second = parseInt(target.parent().attr('id'));
            count++;
        }
        else if(count == 2)
        {
            if (matrix[parseInt(Math.floor(first / 4))][first % 4] ==
                matrix[parseInt(Math.floor(second / 4))][second % 4]) {
                

            } else {
                listContainer[first].classList.remove('flipped');
                listContainer[second].classList.remove('flipped');
            }
            count = 0;
        }
    }
});