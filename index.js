(function() {
    document.addEventListener('DOMContentLoaded', () => {
        // Function to handle eye icon click
        const handleEyeIconClick = (event) => {
            const icon = event.target;
            if (icon.classList.contains('view')) {
                const productId = icon.parentElement.getAttribute('data-id');
                if (productId) {
                    window.location.href = `sproduct.html?product=${productId}`;
                }
            }
        };

        // Add click event listener to all eye icons
        const eyeIcons = document.querySelectorAll('.view');
        eyeIcons.forEach(icon => {
            icon.addEventListener('click', handleEyeIconClick);
        });
    });

    // Example product data
    const products = {
        "1": {
            "name": "Men's Fashion T Shirt",
            "category": "T SHIRT",
            "bigImage": "img/shop/1.jpg",
            "smallImages": [
                "img/shop/1.jpg",
                "img/shop/24.jpg",
                "img/shop/25.jpg",
                "img/shop/26.jpg" 
            ],
            "price": "$37.00",
            "productImg": "img/shop/1.jpg"
        },
        "2": {
            "name": "Echo Canvas ",
            "category": "SHOE",
            "bigImage": "img/shop/2.jpg",
            "smallImages": [
                "img/shop/2.jpg",
                "img/shop/14.jpg",
                "img/shop/7.jpg",
                "img/shop/4.jpg" 
            ],
            "price": "$60.00",
            "productImg": "img/shop/2.jpg"
        },
        "3": {
            "name": "Casual Colored Backpack",
            "category": "BAG",
            "bigImage": "img/shop/3.jpg",
            "smallImages": [
                "img/shop/3.jpg",
                "img/featured/3.jpg",
                "img/shop/9.jpg",
                "img/shop/22.jpg" 
            ],
            "price": "$95.00",
            "productImg": "img/shop/3.jpg"
        },
        "4": {
            "name": "Blue Shoe",
            "category": "SHOE",
            "bigImage": "img/shop/4.jpg",
            "smallImages": [
                "img/shop/4.jpg",
                "img/shop/14.jpg",
                "img/shop/7.jpg",
                "img/shop/8.jpg" 
            ],
            "price": "$55.89",
            "productImg": "img/shop/4.jpg"
        },
        "5": {
            "name": "Knit Cap",
            "category": "CAP",
            "bigImage": "img/shop/5.jpg",
            "smallImages": [
                "img/shop/5.jpg",
                "img/featured/4.jpg",
                "img/shop/15.jpg",
                "img/shop/18.jpg" 
            ],
            "price": "$123.00",
            "productImg": "img/shop/5.jpg"
        },
        "6": {
            "name": "Red Coat",
            "category": "COAT",
            "bigImage": "img/shop/6.jpg",
            "smallImages": [
                "img/shop/6.jpg",
                "img/shop/8.jpg",
                "img/shop/17.jpg"
            ],
            "price": "$140.00",
            "productImg": "img/shop/6.jpg"
        },
        "7": {
            "name": "Retro Groove Shoe",
            "category": "SHOE",
            "bigImage": "img/shop/7.jpg",
            "smallImages": [
                "img/shop/7.jpg",
                "img/shop/4.jpg",
                "img/shoes/6.jpg",
                "img/shoes/5.jpg"   
            ],
            "price": "$95.00",
            "productImg": "img/shop/7.jpg"
        },
        "8": {
            "name": "Navy Blue Coat",
            "category": "COAT",
            "bigImage": "img/shop/8.jpg",
            "smallImages": [
                "img/shop/8.jpg",
                "img/shop/6.jpg",
                "img/shop/17.jpg"
            ],
            "price": "$130.00",
            "productImg": "img/shop/8.jpg"
        },
        "9": {
            "name": "Sling Backpack",
            "category": "BAG",
            "bigImage": "img/shop/9.jpg",
            "smallImages": [
                "img/shop/9.jpg",
                "img/shop/22.jpg",
                "img/featured/3.jpg",
                "img/shop/3.jpg"
            ],
            "price": "$39.50",
            "productImg": "img/shop/9.jpg"
        },
        "10": {
            "name": "Vespera Wristwatch",
            "category": "WATCH",
            "bigImage": "img/shop/10.jpg",
            "smallImages": [
                "img/shop/10.jpg",
                "img/shop/13.jpg",
                "img/watches/2.jpg",
                "img/watches/3.jpg"
            ],
            "price": "$95.00",
            "productImg": "img/shop/10.jpg"
        },
        "11": {
            "name": "Female Cowboy Hat",
            "category": "HAT",
            "bigImage": "img/shop/11.jpg",
            "smallImages": [
                "img/shop/11.jpg",
                "img/shop/18.jpg",
                "img/shop/5.jpg",
                "img/shop/15.jpg"
            ],
            "price": "$38.49",
            "productImg": "img/shop/11.jpg"
        },
        "12": {
            "name": "White Shoes",
            "category": "SHOE",
            "bigImage": "img/shop/12.jpg",
            "smallImages": [
                "img/shop/12.jpg",
                "img/featured/1.jpg",
                "img/shop/7.jpg",
                "img/featured/2.jpg"
            ],
            "price": "$83.99",
            "productImg": "img/shop/12.jpg"
        },
        "13": {
            "name": "Elara Wristwatch",
            "category": "WATCH",
            "bigImage": "img/shop/13.jpg",
            "smallImages": [
                "img/shop/13.jpg",
                "img/shop/10.jpg",
                "img/watches/2.jpg",
                "img/watches/3.jpg"
            ],
            "price": "$82.00",
            "productImg": "img/shop/13.jpg"
        },
        "14": {
            "name": "Quest Canvas",
            "category": "SHOE",
            "bigImage": "img/shop/14.jpg",
            "smallImages": [
                "img/shop/14.jpg",
                "img/shoes/5.jpg",
                "img/featured/2.jpg",
                "img/shop/2.jpg"
            ],
            "price": "$75.00",
            "productImg": "img/shop/14.jpg"
        },
        "15": {
            "name": "Gray Knit Cap",
            "category": "CAP",
            "bigImage": "img/shop/15.jpg",
            "smallImages": [
                "img/shop/15.jpg",
                "img/shop/5.jpg",
                "img/featured/4.jpg",
                "img/shop/18.jpg" 
            ],
            "price": "$50.79",
            "productImg": "img/shop/15.jpg"
        },
        "16": {
            "name": "Purple T-shirt",
            "category": "T SHIRT",
            "bigImage": "img/shop/16.jpg",
            "smallImages": [
                "img/shop/16.jpg",
                "img/shop/24.jpg",
                "img/shop/25.jpg",
                "img/shop/26.jpg" 
            ],
            "price": "$40.00",
            "productImg": "img/shop/16.jpg"
        },
        "17": {
            "name": "Cityscape Coat",
            "category": "COAT",
            "bigImage": "img/shop/17.jpg",
            "smallImages": [
                "img/shop/17.jpg",
                "img/shop/6.jpg",
                "img/shop/8.jpg"
            ],
            "price": "$120.00",
            "productImg": "img/shop/17.jpg"
        },
        "18": {
            "name": "Hunker Cap",
            "category": "CAP",
            "bigImage": "img/shop/18.jpg",
            "smallImages": [
                "img/shop/18.jpg",
                "img/shop/5.jpg",
                "img/featured/4.jpg",
                "img/shop/15.jpg" 
            ],
            "price": "$38.78",
            "productImg": "img/shop/18.jpg"
        },
        "19": {
            "name": "Hoddie",
            "category": "HODDIE",
            "bigImage": "img/shop/19.jpg",
            "smallImages": [
                "img/shop/19.jpg",
                "img/shop/6.jpg",
                "img/shop/8.jpg",
                "img/shop/17.jpg" 
            ],
            "price": "$55.00",
            "productImg": "img/shop/19.jpg"
        },
        "20": {
            "name": "Long Sleeve",
            "category": "SLEEVE",
            "bigImage": "img/shop/20.jpg",
            "smallImages": [
                "img/shop/20.jpg",
                "img/clothes/1.jpg"
            ],
            "price": "$75.00",
            "productImg": "img/shop/20.jpg"
        },
        "21": {
            "name": "Sweat Shirt",
            "category": "SHIRT",
            "bigImage": "img/shop/21.jpg",
            "smallImages": [
                "img/shop/21.jpg",
                "img/clothes/2.jpg"
            ],
            "price": "$75.00",
            "productImg": "img/shop/21.jpg"
        },
        "22" : {
            "name": "Sport Bag",
            "category": "BAG",
            "bigImage": "img/shop/22.jpg",
            "smallImages": [
                "img/shop/22.jpg",
                "img/featured/3.jpg",
                "img/shop/3.jpg",
                "img/shop/9.jpg"
            ],
            "price": "$50.00",
            "productImg": "img/shop/22.jpg"
        },
        "23" : {
            "name": "SLight Green T-shirt",
            "category": "SHIRT",
            "bigImage": "img/shop/23.jpg",
            "smallImages": [
                "img/shop/23.jpg",
                "img/shop/24.jpg",
                "img/shop/16.jpg",
                "img/shop/25.jpg",
            ],
            "price": "42.00",
            "productImg": "img/shop/23.jpg"
        },
        "24" : {
            "name": "White T-shirt",
            "category": "SHIRT",
            "bigImage": "img/shop/24.jpg",
            "smallImages": [
                "img/shop/24.jpg",
                "img/shop/23.jpg",
                "img/shop/26.jpg",
                "img/shop/25.jpg",
            ],
            "price": "41.00",
            "productImg": "img/shop/24.jpg"
        },
        "25" : {
            "name": "Red T-shirt",
            "category": "SHIRT",
            "bigImage": "img/shop/25.jpg",
            "smallImages": [
                "img/shop/25.jpg",
                "img/shop/24.jpg",
                "img/shop/23.jpg",
                "img/shop/26.jpg",
            ],
            "price": "45.00",
            "productImg": "img/shop/25.jpg"
        },
        "26" : {
            "name": "Green T-shirt",
            "category": "SHIRT",
            "bigImage": "img/shop/26.jpg",
            "smallImages": [
                "img/shop/26.jpg",
                "img/shop/25.jpg",
                "img/shop/24.jpg",
                "img/shop/23.jpg"
            ],
            "price": "48.00",
            "productImg": "img/shop/26.jpg"
        },
        "27" : {
            "name": "Sport Boots",
            "category": "SHOE",
            "bigImage": "img/featured/1.jpg",
            "smallImages": [
                "img/featured/1.jpg",
                "img/shop/12.jpg",
                "img/shop/7.jpg",
                "img/featured/2.jpg"
            ],
            "price": "$123.00",
            "productImg": "img/featured/1.jpg"
        },
        "28" : {
            "name": "Casual Shoes",
            "category": "SHOE",
            "bigImage": "img/featured/2.jpg",
            "smallImages": [
                "img/featured/2.jpg",
                "img/shop/7.jpg",
                "img/featured/1.jpg",
                "img/shop/12.jpg"
            ],
            "price": "$140.00",
            "productImg": "img/featured/2.jpg"
        },
        "29" : {
            "name": "Casual Backpack",
            "category": "BAG",
            "bigImage": "img/featured/3.jpg",
            "smallImages": [
                "img/featured/3.jpg",
                "img/shop/22.jpg",
                "img/shop/3.jpg",
                "img/shop/9.jpg" 
            ],
            "price": "$95.00",
            "productImg": "img/featured/3.jpg"
        },
        "30" : {

            "name": "Comfy Knit Cap",
            "category": "CAP",
            "bigImage": "img/featured/4.jpg",
            "smallImages": [
                "img/featured/4.jpg",
                "img/shop/5.jpg",
                "img/shop/15.jpg",
                "img/shop/18.jpg" 
            ],
            "price": "$25.99",
            "productImg": "img/featured/4.jpg"
        }, 
        "31" : {

            "name": "Sleeveless Jumpsuit",
            "category": "SLEEVE",
            "bigImage": "img/clothes/1.jpg",
            "smallImages": [
                "img/clothes/1.jpg",
                "img/shop/20.jpg",
                "img/shop/27.jpg",
                "img/shop/28.jpg" 
            ],
            "price": "$123.00",
            "productImg": "img/clothes/1.jpg"
        },
        "32" : {
            "name": "Sheath Dress",
            "category": "DRESS",
            "bigImage": "img/clothes/2.jpg",
            "smallImages": [
                "img/clothes/2.jpg",
                "img/shop/21.jpg",
                "img/shop/29.jpg",
                "img/shop/30.jpg" 
            ],
            "price": "$80.00",
            "productImg": "img/clothes/2.jpg"
        },
        "33" : {
            "name": "Black T-shirt",
            "category": "T SHIRT",
            "bigImage": "img/clothes/3.jpg",
            "smallImages": [
                "img/clothes/3.jpg",
                "img/shop/26.jpg",
                "img/shop/25.jpg",
                "img/shop/1.jpg" 
            ],
            "price": "$55.00",
            "productImg": "img/clothes/3.jpg"
        },
        "34" : {
            "name": "Mic Graphic Tee",
            "category": "T SHIRT",
            "bigImage": "img/clothes/4.jpg",
            "smallImages": [
                "img/clothes/4.jpg",
                "img/clothes/3.jpg",
                "img/shop/1.jpg",
                "img/shop/26.jpg" 
            ],
            "price": "$99.00",
            "productImg": "img/clothes/4.jpg"
        },
        "35" : {
            "name": "Dive Watch",
            "category": "WATCH",
            "bigImage": "img/watches/1.jpg",
            "smallImages": [
                "img/watches/1.jpg",
                "img/watches/2.jpg",
                "img/watches/3.jpg",
                "img/watches/4.jpg"
            ],
            "price": "$900.99",
            "productImg": "img/watches/1.jpg"
        },
        "36" : {
            "name": "Dress Watch",
            "category": "WATCH",
            "bigImage": "img/watches/2.jpg",
            "smallImages": [
                "img/watches/2.jpg",
                "img/watches/1.jpg",
                "img/watches/3.jpg",
                "img/watches/4.jpg"
            ],
            "price": "$806.89",
            "productImg": "img/watches/2.jpg"
        },
        "37" : {
            "name": "Silver Watch",
            "category": "WATCH",
            "bigImage": "img/watches/3.jpg",
            "smallImages": [
                "img/watches/3.jpg",
                "img/watches/1.jpg",
                "img/watches/2.jpg",
                "img/watches/4.jpg"
            ],
            "price": "$775.00",
            "productImg": "img/watches/3.jpg"
        },
        "38" : {
            "name": "Chronograph Watch",
            "category": "WATCH",
            "bigImage": "img/watches/4.jpg",
            "smallImages": [
                "img/watches/4.jpg",
                "img/watches/1.jpg",
                "img/watches/2.jpg",
                "img/watches/3.jpg"
            ],
            "price": "$1009.90",
            "productImg": "img/watches/4.jpg"
        },
        "39" : {
            "name": "Casual Shoes",
            "category": "SHOE",
            "bigImage": "img/shoes/8.jpg",
            "smallImages": [
                "img/shoes/8.jpg",
                "img/shoes/7.jpg",
                "img/shoes/6.jpg",
                "img/shoes/5.jpg"
            ],
            "price": "$65.89",
            "productImg": "img/shoes/8.jpg"
        },
        "40" : {
            "name": "Brown Shoes",
            "category": "SHOE",
            "bigImage": "img/shoes/7.jpg",
            "smallImages": [
                "img/shoes/7.jpg",
                "img/shoes/5.jpg",
                "img/shoes/8.jpg",
                "img/shoes/6.jpg"
            ],
            "price": "$78.50",
            "productImg": "img/shoes/7.jpg"
        },
        "41" : {
            "name": "Classic Shoes",
            "category": "SHOE",
            "bigImage": "img/shoes/6.jpg",
            "smallImages": [
                "img/shoes/6.jpg",
                "img/shoes/8.jpg",
                "img/shoes/5.jpg",
                "img/shoes/7.jpg"
            ],
            "price": "$59.90",
            "productImg": "img/shoes/6.jpg"
        },
        "42" : {
            "name": "Leather Shoes",
            "category": "SHOE",
            "bigImage": "img/shoes/5.jpg",
            "smallImages": [
                "img/shoes/5.jpg",
                "img/shoes/7.jpg",
                "img/shoes/6.jpg",
                "img/shoes/8.jpg"
            ],
            "price": "$63.99",
            "productImg": "img/shoes/5.jpg"
        }
        // Add more products as needed
    };

    // Function to get query parameters
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const pairs = queryString.split('&');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            params[key] = decodeURIComponent(value);
        });
        return params;
    }

    // Function to populate the product page
    function populateProductPage() {
        const params = getQueryParams();
        const productId = params['product'];

        if (products[productId]) {
            const product = products[productId];
            document.querySelector('.big-image').src = product.bigImage;
            const smallImages = document.querySelectorAll('.small-img');
            product.smallImages.forEach((img, index) => {
                if (smallImages[index]) {
                    smallImages[index].src = img;
                }
            });
            document.querySelector('.product-category').textContent = product.category;
            document.querySelector('.product-title').textContent = product.name;
            document.querySelector('.product-price').textContent = product.price;
            document.querySelector('.product-img').src = product.productImg;
        } else {
            // Handle the case where the product doesn't exist
            document.querySelector('.sproduct-wrapper').innerHTML = '<p>Product not found.</p>';
        }
    }

    // Populate the page on load
    window.onload = populateProductPage;
})();










// Main JavaScript logic


// Sidebar functions
function showsideBar() {
    var sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("show");
    document.body.classList.add('show');
    document.body.classList.add('fixedbg');
}

function HidesideBar() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("show");
    document.body.classList.remove('show');
    document.body.classList.remove('fixedbg');
}

function togglesiebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove("show");
    document.body.classList.remove('show');
    document.body.classList.remove('fixedbg');
}

// Cart functions
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
    document.body.classList.add('show');
    document.body.classList.add('fixedbg');
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
    document.body.classList.remove('show');
    document.body.classList.remove('fixedbg');
});

// Start when the document is ready
if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', start);
} else {
    start();
}

function start() {
    loadCartFromLocalStorage();
    addEvents();
    updateTotal(); // Ensure total is updated when the page loads
}

function update() {
    addEvents();
    updateTotal(); // Ensure total is updated whenever update is called
}

function addEvents() {
    // Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // Change item quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    // Add item to cart
    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn) => {
        btn.addEventListener("click", handle_addCartItem);
    });

    // Buy Order
    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click", handle_buyOrder);
}

let itemCount = 0;
let itemsAdded = [];

function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;

    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    if (itemsAdded.find(el => el.title === newToAdd.title)) {
        alert("This Item Already Exists!");
        return;
    } else {
        itemsAdded.push(newToAdd);
        itemCount++;
    }

    saveCartToLocalStorage();

    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const cartTitleCountElement = document.getElementById("cart-title-count");

    cartCountElement.innerHTML = itemCount;
    cartTitleCountElement.innerHTML = itemCount;

    if (itemCount === 0) {
        cartCountElement.style.display = "none";
    } else {
        cartCountElement.style.display = "block";
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(itemsAdded));
}

function handle_removeCartItem() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
        el => el.title !== this.parentElement.querySelector('.cart-product-title').innerHTML
    );

    itemCount--;
    saveCartToLocalStorage();
    updateCartCount();
    update();
}

function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);
    saveCartToLocalStorage();
    update();
}

function handle_buyOrder() {
    if (itemsAdded.length <= 0) {
        alert("There is No Order to Place Yet\nPlease Make an Order first.");
        cart.classList.remove("active");
        document.body.classList.remove('show');
        document.body.classList.remove('fixedbg');
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Your Order is Placed Successfully :)");
    itemsAdded = [];
    itemCount = 0;

    saveCartToLocalStorage();
    updateCartCount();

    cart.classList.remove("active");
    document.body.classList.remove('show');
    document.body.classList.remove('fixedbg');
    update();
}

function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });
    total = total.toFixed(2);
    totalElement.innerHTML = "$" + total;
}

function loadCartFromLocalStorage() {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    itemsAdded = savedCart;
    itemCount = itemsAdded.length;

    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    itemsAdded.forEach(item => {
        let cartBoxElement = CartBoxComponent(item.title, item.price, item.imgSrc);
        let newNode = document.createElement("div");
        newNode.innerHTML = cartBoxElement;
        cartContent.appendChild(newNode);
    });

    updateCartCount();
    updateTotal(); // Ensure total is updated when loading from localStorage
}

function CartBoxComponent(title, price, imgSrc) {
    return `
    <div class="cart-box">
        <img src="${imgSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}


// Product tabs settings
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active_tab");
        });

        target.classList.add("active_tab");

        tabs.forEach((tab) => {
            tab.classList.remove("active_tab");
        });
        tab.classList.add("active_tab");
    });
});

// Login/Signup Page
document.getElementById('create-account-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});
