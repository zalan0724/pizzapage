import mainPage from "./Modules/mainPage";

const createHeader = () =>{
    let header = document.createElement('header')
    let logo = document.createElement('img')
    logo.setAttribute('src','images/logo.png')
    logo.setAttribute('alt','logo')
    let homeButton = document.createElement('button')
    homeButton.innerHTML='Home'
    let menuButton = document.createElement('button')
    menuButton.innerHTML ='Menu'
    let contactButton = document.createElement('button')
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

(function loadPage() {
    let content = document.querySelector('#content')
    content.appendChild(createHeader())
    content.appendChild(mainPage())
    content.appendChild(createFooter())
    console.log('Done')
})()