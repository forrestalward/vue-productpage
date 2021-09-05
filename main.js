//Create a new button and method to decrement the value of `cart`.

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: 'assets/green-socks.jpeg',
      inStock: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'assets/green-socks.jpeg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'assets/socks-blue.jpeg'
        }
      ],
      cart: 0
    },
    // methods here
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      },
      removeFromCart() {
        this.cart -= 1
      }
    }
  })
  
  