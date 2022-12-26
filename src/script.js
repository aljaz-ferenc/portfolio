gsap.registerPlugin(ScrollToPlugin)

const menu = document.querySelector('.nav')
const mouseHighlightEl = document.querySelector('.mouse-highlight')
const aboutMeLink = document.querySelector('.about-link')
const workLink = document.querySelector('.work-link')
const contactLink = document.querySelector('.contact-link')
const aboutSection = document.querySelector('.hero')
const workSection = document.querySelector('.work')
const contactSection = document.querySelector('.contact')
const inputs = document.querySelectorAll('.input')

function menuOnScroll() {
    let currentPosition = window.scrollY
    document.addEventListener('scroll', (e) => {
        let newPosition = window.scrollY
        newPosition > currentPosition ? menu.style.transform = 'translateY(-100%)' : menu.style.transform = 'translateY(0)'
        currentPosition = newPosition
    })
}
menuOnScroll()

aboutMeLink.addEventListener('click', () => gsap.to(window, { duration: 1, scrollTo: aboutSection }))
workLink.addEventListener('click', () => gsap.to(window, { duration: 1, scrollTo: workSection }))
contactLink.addEventListener('click', () => gsap.to(window, { duration: 1, scrollTo: contactSection }))

inputs.forEach(input => {
    input.addEventListener('focus', (e) => {
        input.previousElementSibling.style.transform = 'translate(0)'
    })
})