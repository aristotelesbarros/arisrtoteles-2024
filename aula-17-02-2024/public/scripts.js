const modal_overlay =  document.querySelector ('.modal_overlay');

const cards = document.querySelectorAll ('.card');
var home = window.document.elementFromPoint

for (let card of cards) {
card.addEventListener ("click", function()
{
    const videoid = card.getAttribute("id")
    modal_overlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoid}`
    modal_overlay.classList.add('active')
})
};

document.querySelector('.close_modal').addEventListener('click', function(){
    modal_overlay.classList.remove('active')
});

