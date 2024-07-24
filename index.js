function showsideBar()
{
    var sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("show");
    document.body.classList.add('show');
    document.body.classList.add('fixedbg');
};
function HidesideBar()
{
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.remove("show");
    document.body.classList.remove('show');
    document.body.classList.remove('fixedbg');
};
function togglesiebar(){
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove("show")
    document.body.classList.remove('show')
    document.body.classList.remove('fixedbg');
};

//OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click",()=>{
    cart.classList.add("active");
    document.body.classList.add('show');
    document.body.classList.add('fixedbg');
});
closeCart.addEventListener("click",()=>{
    cart.classList.remove("active");
    document.body.classList.remove('show')
    document.body.classList.remove('fixedbg');
});


// Start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}   

//========== START ===========
function start() {
 addEvents();
}

//========= UPDATE & RERENDER ========
function update() {
    addEvents();
    updateTotal();  
}

//============== ADD EVENTS ========
function addEvents() {
    //Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // Change item Quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input => {
      input.addEventListener("change", handle_changeItemQuantity);
    });

     // Add item to cart
     let addCart_btns = document.querySelectorAll(".add-cart");
     addCart_btns.forEach((btn) =>{
        btn.addEventListener("click" , handle_addCartItem);
     });

     //Buy Order
     const buy_btn = document.querySelector(".btn-buy");
     buy_btn.addEventListener("click" , handle_buyOrder);
}

//============== HANDLE EVENTS FUNCTIONS =============
let itemCount = 0; // Variable to keep track of the number of items in the cart

let itemsAdded = []

function handle_addCartItem() {
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title, price, imgSrc);

    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    // handle item is already exist
    if(itemsAdded.find(el => el.title == newToAdd.title)){
        alert("This Item Already Exist!");
        return;
    } else {
        itemsAdded.push(newToAdd);
        itemCount++; // Increment item count
        
    }

    //Add product to Cart
    let cartBoxElement = CartBoxComponent(title, price, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
    updateCartCount(); // Update the cart count display
}
function showSearchBar(){
    const SearchBar = document.getElementById('#sidebar');
    SearchBar.addEventListener(clcik , () =>{
        
    } )
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    const cartTitleCountElement = document.getElementById("cart-title-count");

    cartCountElement.innerHTML = itemCount; // Update the count display
    cartTitleCountElement.innerHTML = itemCount; // Update the cart title count display

    // Show or hide the cart count based on itemCount
    if (itemCount === 0) {
        cartCountElement.style.display = "none"; // Hide the count
    } else {
        cartCountElement.style.display = "block"; // Show the count
    }
}

function handle_removeCartItem() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
        el=> el.title != 
        this.parentElement.querySelector('.cart-product-title').innerHTML
    );

    itemCount--; // Decrement item count
    updateCartCount(); // Update the cart count display
    update();
}

function handle_changeItemQuantity() {
    if(isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value); // to keep it integer

    update();
}

function handle_buyOrder(){
    if(itemsAdded.length <= 0){
        alert("There is No Order to Place Yet \nPlease Make an Order first.");
        cart.classList.remove("active"); // Close the cart
        document.body.classList.remove('show'); // Remove the body class
        document.body.classList.remove('fixedbg'); // Remove the body class
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Your Order is Placed Succesfully :)");
    itemsAdded = [];
    itemCount = 0; // Reset item count
    
    updateCartCount(); // Update the cart count display

    // Close the cart
    cart.classList.remove("active"); // Close the cart
    document.body.classList.remove('show'); // Remove the body class
    document.body.classList.remove('fixedbg'); // Remove the body class
    update(); // Call update to recalculate totals, etc.
    update();
}
//============== UPDATE AND RENDER FUNCTIONS ============
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
        cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });
    //keep 2 digit after the decimal ponint
    total = total.toFixed(2);   

    totalElement.innerHTML = "$" + total;
}


// ============= HTML COMPONENTS ==============
function CartBoxComponent(title, price, imgSrc){
    return `
    <div class="cart-box">
        <img src="${imgSrc}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!--REMOVE CART-->
        <i class='bx bxs-trash-alt cart-remove'></i>
    </div>`;
}

// ============= product tabs settings ==============
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