let index = 1;
let colors = ['#429997', '#dd926c', '#816c96', '#898442'];
// NodeList.forEach
// querySelectorAll returns a static non-live NodeList exposing a forEach method:

let ilustracionsDescripcions = document.querySelectorAll('.picture-container, .description-container');


document.querySelectorAll('.nav-control').forEach(element => {
    element.addEventListener("click", () => {
        //gestió contador index
        if (element.classList.contains('next') && index < document.getElementsByClassName('picture-container').length) { index++ }
        if (element.classList.contains('prev') && index > 1) { index-- }
        // eliminem totes les class  'displayed' de les il.lustracions i descripcions
        ilustracionsDescripcions.forEach(element => {
            element.classList.remove('displayed');
        });
        // afegim las class 'displayed' al index que toca.
        console.log('index', index);
        //var enric = document.getElementsByClassName('picture-' + index + '');
        var enric = document.querySelector('.picture-' + index + '');


        document.querySelector('.picture-' + index).classList.add('displayed');
        document.querySelector('.description-' + index).classList.add('displayed');
        document.querySelector('.character-description').style.backgroundColor = colors[index - 1];

    })

});




//document.getElementsByClassName('nav-control').addEventListener//("click", () => {

/* if (this.classList.contains('next') && index < document.getElementsByClassName('picture-container').length) { index++ }
if (this.classList.contains('prev') && index > 1) { index++ }
document.getElementsByClassName('picture-container').removeClass('displayed');
document.getElementsByClassName('description-container').removeClass('displayed');
document.getElementsByClassName('picture-' + index + '').addClass('displayed');
document.getElementsByClassName('description-' + index + '').addClass('displayed');
document.getElementsByClassName('character-description').css('background-color', colors[index - 1]); */
//});




/* $
('.nav-control').on('click', function() {

    if ($(this).hasClass('next') && index < $('.picture-container').length) {
        index++;
    }
    if ($(this).hasClass('prev') && index > 1) {
        index--;
    }
    $('.picture-container, .description-container').removeClass('displayed');
    $('.picture-' + index + '').addClass('displayed');
    $('.description-' + index + '').addClass('displayed');
    $('.character-description').css('background-color', colors[index - 1]);

}); */