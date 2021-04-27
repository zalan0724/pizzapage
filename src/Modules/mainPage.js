const mainPage = (() => {
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'We love making the most delicious pizza!'
    article.appendChild(h1)
    let firstTab = document.createElement('section')
    firstTab.setAttribute('class', 'tab')
    let firstH2 = document.createElement('h2')
    firstH2.innerHTML = 'Traditions over 40 years'
    let firstSpan = document.createElement('span')
    firstSpan.innerHTML='OUR FAMILY HAS CRAFTED RICH ITALIAN TASTES WITH ARTISAN INGREDIENTS FOR 40+ YEARS. FROM PIZZA AND\n' +
        '                    PASTA TO FRESH SALADS AND DECADENT DESSERTS, WE OFFER CLASSIC CHICAGO-STYLE DISHES AND UNIQUE\n' +
        '                    ARIZONA CREATIONS.'
    firstTab.appendChild(firstH2)
    firstTab.appendChild(firstSpan)
    article.appendChild(firstTab)

    let firstImage = document.createElement('section')
    firstTab.setAttribute('class', 'tab')
    firstImage.setAttribute('class', 'image1')
    article.appendChild(firstImage)

    let secondTab = document.createElement('section')
    secondTab.setAttribute('class', 'tab')
    let secondH2 = document.createElement('h2')
    secondH2.innerHTML ='Order delivery'
    let secondSpan = document.createElement('span')
    secondSpan.innerHTML = 'WE PROVIDE OUR BEST QUALITY EVEN AT YOUR OWN HOME! LOW DELIVERY FEES AND TIME ARE GUARANTEED!'
    secondTab.appendChild(secondH2)
    secondTab.appendChild(secondSpan)
    article.appendChild(secondTab)

    let deliverImages = document.createElement('section')
    deliverImages.setAttribute('class', 'deliveryImages')
    let wolt = document.createElement('img')
    wolt.setAttribute('src', 'images/wolt.png')
    let uber = document.createElement('img')
    uber.setAttribute('src', 'images/uber.webp')
    deliverImages.appendChild(wolt)
    deliverImages.appendChild(uber)
    article.appendChild(deliverImages)

    return {article}
})()

export default mainPage
