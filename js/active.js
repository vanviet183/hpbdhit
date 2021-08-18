var $ = document.querySelector.bind(document)

var btn = $('.btn')
var btnYes = $('.btn--size--l.btn--yes')
var btnYeb = $('.btn--size--s.btn--yes')
var audio = $('audio')


btn.onclick = function () {
    btn.classList.add('active')
    audio.play()
}

btnYes.onclick = function () {
    btnYes.classList.add('active')
}

btnYeb.onclick = function () {
    btnYeb.classList.add('active')
}