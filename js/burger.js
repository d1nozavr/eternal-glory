const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
const navLinks = nav.querySelectorAll('a')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  nav.classList.toggle('open')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    nav.classList.remove('open')
  })
})
