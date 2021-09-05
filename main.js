var product = "socks"; 

var app = new Vue({
    el: '#app', 
    data: {
        product: "Socks",
        description: "These are some high quality socks",
        image: "assets/green-socks.jpeg", 
        altText: "A pair of Socks", 
        link: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg", 
        inventory: 100, 
        onSale: true, 
        details: ["80% cotton", "20% Polyester", "Gender-neutral"], 
        variants: [{
            variantId: 2234, 
            variantColor: "green"
        },
        {
            variantId: 2235, 
            variantColor: "blue"
        } 
    ]
    }
})  