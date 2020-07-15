const puce = document.querySelector('.puce')
const navigation = document.querySelector('.navigation')
const navlink = document.querySelectorAll('.navlink')
const puces = document.querySelectorAll('.puce>div')



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