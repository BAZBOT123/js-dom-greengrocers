const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};



function renderStoreItem() {

  const fruitList = document.querySelector('ul')
  fruitList.setAttribute('class', 'item-list store--item-list')

  for (const item of state.items) {
    const li = document.createElement('li')
    fruitList.appendChild(li)

    const div = document.createElement('div')
    div.setAttribute('class', 'store--item-icon')
    li.appendChild(div)

    const image = document.createElement('img')
    image.src = `assets/icons/${item.id}.svg`
    image.alt = `${item.name}`
    div.appendChild(image)

    const button = document.createElement('button')
    li.appendChild(button)
    button.innerText = 'Add to cart'

    button.addEventListener('click', function () {
      cart.unshift(state.items)
    })
  }
}

renderStoreItem()


function RenderCartItem(item) {

  const div = document.createElement('div')
  div.setAttribute('cart--item-list-container')

  const cartList = document.querySelector('ul')
  cartList.setAttribute('class', 'item-list cart--item-list')
  div.append('cartList')

  const li = document.createElement('li')
  cartList.appendChild(li)

  const image = document.createElement('img')
  image.src = `assets/icons/${item.id}.svg`
  image.alt = `${item.name}`

  const p = document.createElement('p')
  p.innerText = `${item.name}`

  const removeButton = document.createElement('button')
  removeButton.setAttribute('class', 'quantity-btn remove-btn center')
  removeButton.innerText = '-'

  const span = document.createElement('span')
  span.setAttribute('class', 'quantity-text center')
  span.innerText = '1'

  const addButton = document.createElement('button')
  addButton.setAttribute('class', 'quantity-btn add-btn center')
  addButton.innerText = '+'

  li.append(image, p, removeButton, span, addButton)
}

RenderCartItem(item)