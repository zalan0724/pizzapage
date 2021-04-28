import mainPage from "./Modules/mainPage";
import menuPage from './Modules/menuPage';
import contactPage from "./Modules/contactPage";

const scrollTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const createButton = (type, page) => {
    let button = document.createElement('button')
    button.setAttribute('id', `${type}Button`)
    if (page===type) button.setAttribute('class', 'actualPageButton')
    button.addEventListener('click', ()=>{
        if(page==='mobile') document.querySelector('.hamburgerMenu').style.display = 'none'
        loadPage(`${type}`)
        scrollTop()
    })
    button.innerHTML=type.charAt(0).toUpperCase() + type.slice(1) + (type === 'order' ? ' now!' : '')

    return button
}

const createHeader = page =>{
    let header = document.createElement('header')
    let logo = document.createElement('img')
    logo.setAttribute('src','images/logo.png')
    logo.setAttribute('alt','logo')

    const buttons = ['home', 'menu', 'contact', 'order']

    let hamburgerButton = document.createElement('button')
    hamburgerButton.innerHTML = `<svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="3" fill="white"/>
        <rect y="14" width="40" height="3" fill="white"/>
        <rect y="28" width="40" height="3" fill="white"/>
        </svg>`
    hamburgerButton.setAttribute('id', 'hamburger')
    hamburgerButton.addEventListener('click', () => {
        document.querySelector('.hamburgerMenu').style.display = 'grid'
    })

    header.appendChild(logo)
    for(let i=0; i<buttons.length; i++){
        header.appendChild(createButton(`${buttons[i]}`, page))
    }
    header.appendChild(hamburgerButton)

    return header
}

const createHamburgerMenu = (() =>{
    let article = document.createElement('div')
    article.setAttribute('class', 'hamburgerMenu')

    const buttons = ['home', 'menu', 'contact']
    for(let i=0; i<buttons.length; i++){
        article.appendChild(createButton(`${buttons[i]}`, 'mobile'))
    }


    return {article}
})()

const createFooter = (() =>{
    let footer = document.createElement('footer')
    footer.setAttribute('class', 'tab')
    footer.setAttribute('id', 'footer')

    let link = document.createElement('a')
    link.setAttribute('href', 'https://github.com/zalan0724')
    let logo = document.createElement('img')
    logo.setAttribute('src', 'images/github.png')
    link.appendChild(logo)
    let credit = document.createElement('span')
    credit.innerHTML = "Created by: <br> @zalan0724"

    footer.appendChild(link)
    footer.appendChild(credit)

    return {footer}
})()

const loadPage = page => {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    content.appendChild(createHeader(page))
    content.appendChild(createHamburgerMenu.article)
    switch(page) {
        case 'home':
            content.appendChild(mainPage.article)
            break
        case 'menu':
            content.appendChild(menuPage.article)
            break
        case 'contact':
            content.appendChild(contactPage.article)
            break
        default:
            content.appendChild(mainPage.article)
            break
    }
    content.appendChild(createFooter.footer)
    console.log('Done')
}
loadPage('home')

