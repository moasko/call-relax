const puce = document.querySelector('.puce')
const navigation = document.querySelector('.navigation')
const navlink = document.querySelectorAll('.navlink')

let voir = () => {
    navigation.classList.toggle('vue')
    navigation.classList.toggle('shadowb')
}

puce.onclick = voir
navlink.forEach(e => {
    e.onclick = voir
})