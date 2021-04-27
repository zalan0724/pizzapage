const food = (name, price, picture) => {
    let pizzaName = document.createElement('span')
    pizzaName.setAttribute('id', 'pizzaName')
    pizzaName.innerHTML = name
    let pizzaPrice = document.createElement('span')
    pizzaPrice.innerHTML = `${price}$`
    pizzaPrice.setAttribute('id', 'pizzaPrice')
    let pizzaPicture = document.createElement('img')
    pizzaPicture.setAttribute('src', `images/pizzas/${picture}.jpg`)

    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.appendChild(pizzaName)
    card.appendChild(pizzaPicture)
    card.appendChild(pizzaPrice)

    return card
}
const menuPage = (() => {
    let article = document.createElement('article')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Providing the best quality pizzas'
    article.appendChild(h1)
    let menu = document.createElement('div')
    menu.setAttribute('class', 'tab menu')
    const pizzas = ['Cheese Pizza', 'Veggie Pizza', 'Pepperoni Pizza', 'Meat Pizza', 'Margherita Pizza',
        'Hawaiian Pizza', 'Buffalo Pizza', 'Supreme Pizza']
    const prices = [5,6,7,10,4,7,15,20]
    const picture = ['cheese', 'veggie', 'pepperoni', 'meat', 'margherita', 'hawaiian', 'buffalo', 'supreme']
    for(let i=0; i<pizzas.length; i++){
        menu.appendChild(food(pizzas[i],prices[i],picture[i]))
    }
    article.appendChild(menu)


    return {article}
})()

export default menuPage