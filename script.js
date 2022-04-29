const btn = document.querySelector('.scroll-to-top')
let root = document.querySelector(':root')

const webHeight = document.body.clientHeight
const viewPort = window.innerHeight

const handleScroll = () => {
	const scroll = window.scrollY
	const leftToScroll = webHeight - viewPort
	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)
	console.log(scrollBarWidth)

	if (scrollBarWidth > 80) {
		btn.classList.add('active')
	} else {
		btn.classList.remove('active')
	}
}

const handleTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}

btn.addEventListener('click', handleTop)
window.addEventListener('scroll', handleScroll)

// section.offsetHeight
// window.innerHeight
// window.scrollY
// document.body.offsetHeight
