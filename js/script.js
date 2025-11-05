document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash')
  const enterBtn = document.getElementById('blob-btn')

  enterBtn.addEventListener('click', () => {
    splash.classList.add('hidden')
    setTimeout(() => {
      splash.style.display = 'none'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  })
})

document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth',
    })
  })
})
