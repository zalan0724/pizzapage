import mainPage from "./Modules/mainPage";
import menuPage from './Modules/menuPage';
import contactPage from "./Modules/contactPage";

const scrollTop = () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const createHeader = () =>{
    let header = document.createElement('header')
    let logo = document.createElement('img')
    logo.setAttribute('src','images/logo.png')
    logo.setAttribute('alt','logo')
    let homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'mainButton')
    homeButton.addEventListener('click', ()=>{
        loadPage('main')
        scrollTop()
    })
    homeButton.innerHTML='Home'
    let menuButton = document.createElement('button')
    menuButton.setAttribute('id', 'menuButton')
    menuButton.addEventListener('click', ()=>{
        loadPage('menu')
        scrollTop()
    })
    menuButton.innerHTML ='Menu'
    let contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contactButton')
    contactButton.addEventListener('click', ()=>{
        loadPage('contact')
        scrollTop()
    })
    contactButton.innerHTML ='Contact'
    let orderButton = document.createElement('button')
    orderButton.setAttribute('id','order')
    orderButton.innerHTML = 'Order Now!'

    header.appendChild(logo)
    header.appendChild(homeButton)
    header.appendChild(menuButton)
    header.appendChild(contactButton)
    header.appendChild(orderButton)

    return header
}

const createFooter = () =>{
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

    return footer
}

function loadPage(page) {
    let content = document.querySelector('#content')
    content.innerHTML = ''
    content.appendChild(createHeader())
    switch(page) {
        case 'main':
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
    content.appendChild(createFooter())
    document.querySelector(`#${page}Button`).setAttribute('class', 'actualPageButton')
    console.log('Done')
}
loadPage('main')

