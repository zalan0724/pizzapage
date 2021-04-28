const contactPage = (()=>{
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Be our guest anytime'
    article.appendChild(h1)
    let tab1 = document.createElement('section')
    tab1.setAttribute('class', 'tab')
    let firstH2 = document.createElement('h2')
    firstH2.innerHTML = 'Contact us with confidence'
    tab1.appendChild(firstH2)
    let phone = document.createElement('p')
    phone.innerHTML = '<b>Mobile:</b> (503)543-3467'
    tab1.appendChild(phone)
    let email = document.createElement('p')
    email.innerHTML = '<b>Email:</b> info@pizza.com'
    tab1.appendChild(email)
    let facebook = document.createElement('p')
    facebook.innerHTML = '<b>Facebook:</b> facebook.com/orderpizza'
    tab1.appendChild(facebook)
    article.appendChild(tab1)

    let placeHolderTab = document.createElement('section')
    placeHolderTab.setAttribute('class', 'tab')
    placeHolderTab.style.backgroundColor = 'rgba(0,0,0,0)'
    placeHolderTab.style.display = 'inline-block'
    placeHolderTab.style.height = '100px'
    article.appendChild(placeHolderTab)

    let tab2 = document.createElement('section')
    tab2.setAttribute('class', 'tab')

    let secondH2 = document.createElement('h2')
    secondH2.innerHTML = 'Meet us'
    tab2.appendChild(secondH2)

    let address = document.createElement('p')
    address.innerHTML = '<b>Address:</b> 2 W 34th St, New York, NY 10001, USA'
    tab2.appendChild(address)

    let map = document.createElement('iframe')
    map.setAttribute('id', 'map')
    map.setAttribute('loading', 'lazy')
    map.setAttribute('allowfullscreen', '')
    map.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyCqexLPFcIOkm1lksLKtAPd2nYSZxRcD3w&q=2 W 34th St, New York, NY 10001, USA")
    tab2.appendChild(map)

    article.appendChild(tab2)


    return {article}
})()


export default contactPage