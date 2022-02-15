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



const fruitList = document.querySelector('#itemList')
const cartList = document.querySelector('#cartList')


function render() {
  clear();
  renderStoreItem()
  renderCartItem()
  totalPrice()
}

function clear() {
  fruitList.innerHTML = ''
  cartList.innerHTML = ''
}


function renderStoreItem() {

  for (const item of state.items) {
    const li = document.createElement('li')
    fruitList.append(li)

    const div = document.createElement('div')
    div.setAttribute('class', 'store--item-icon')
    li.append(div)

    const image = document.createElement('img')
    image.src = `assets/icons/${item.id}.svg`
    image.alt = `${item.name}`
    div.append(image)

    const button = document.createElement('button')
    li.append(button)
    button.innerText = 'Add to cart'

    button.addEventListener('click', function () {

      const existingOrderItem = state.items.find(i => i.item === item)
      if (existingOrderItem !== undefined) {
        existingOrderItem.quantity++
      }

      state.cart.push({
        quantity: 1,
        item: item,
      })

      render()
    })
  }
}

renderStoreItem()

function renderCartItem() {

  for (const addedItem of state.cart) {
    console.log("hello", addedItem)

    const li = document.createElement('li')
    cartList.append(li)

    const image = document.createElement('img')
    image.setAttribute('src', 'cart--item-icon')
    image.src = `assets/icons/${addedItem.item.id}.svg`
    image.alt = `${addedItem.item.name}`

    const p = document.createElement('p')
    p.innerText = `${addedItem.item.name}`

    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'quantity-btn remove-btn center')
    removeButton.innerText = '-'
    removeButton.addEventListener('click', function () {

      //1. Update the state
      addedItem.quantity--
      //If quantity is 0, remove it from the ordered list
      if (addedItem.quantity === 0) {
        const orderItemIndex = state.cart.findIndex(i => i === addedItem)
        state.cart.splice(orderItemIndex, 1)
      }

      //2. Render the DOM
      render()
    })

    const span = document.createElement('span')
    span.setAttribute('class', 'quantity-text center')
    span.innerText = `${addedItem.quantity}`

    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'quantity-btn add-btn center')
    addButton.innerText = '+'

    addButton.addEventListener('click', function () {

      //1. Update the state
      addedItem.quantity++

      //2. Render the DOM
      render()
    })

    li.append(image, p, removeButton, span, addButton)
    cartList.append(li)
  }
}

const cartTotal = document.querySelector('#totalNumber')
function totalPrice() {
  let total = 0
  for (const cartItem of state.cart) {
  total =  total + cartItem.quantity * cartItem.item.price
      cartTotal.innerText = '£' + total
  }
  totalPrice()
}

render()



