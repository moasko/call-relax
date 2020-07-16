const puce = document.querySelector('.puce')
const navigation = document.querySelector('.navigation')
const navlink = document.querySelectorAll('.navlink')
const puces = document.querySelectorAll('.puce>div')
const bodywidth = document.querySelector('body')
let ill = document.querySelector('.ill')

let voir = () => {
    navigation.classList.toggle('vue')
    navigation.classList.toggle('shadowb')
}

let colorchage = () => {
    puces.forEach(r => {
        r.classList.toggle('back')
    })
}

puce.onclick = () => {
    voir()
    colorchage()
}

navlink.forEach(e => {
    e.onclick = voir
})

window.onresize = () => {
    if (bodywidth.clientWidth >= 800) {

    }
}