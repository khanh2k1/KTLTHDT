const home = document.getElementsByName('home')[0]
console.log(home)
home.addEventListener('click', () => {
    location.reload()
})