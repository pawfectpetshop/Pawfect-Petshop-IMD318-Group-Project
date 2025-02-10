document.addEventListener("DOMContentLoaded", () => {
    
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
    
  
    const searchIcon = document.querySelector(".bx-search");
    searchIcon.addEventListener("click", () => {
        let searchQuery = prompt("Enter product name:");
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        }
    });


let cart = []; 

const cartIcon = document.querySelector(".bx-shopping-bag");

cartIcon.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`You have ${cart.length} items in your cart.`);
    }
});

const productBoxes = document.querySelectorAll(".product-card");

productBoxes.forEach(box => {
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.classList.add("add-to-cart");

    box.appendChild(addButton);

    addButton.addEventListener("click", () => {
        let productName = box.querySelector("h3").textContent;
        cart.push(productName);
        alert(`${productName} added to cart!`);
    });
});

    window.addEventListener("scroll", () => {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 50);
    });
});

const userIcon = document.getElementById("userIcon");
const userProfile = document.getElementById("userProfile");

userIcon.addEventListener("click", () => {
    if (userProfile.style.display === "none") {
        userProfile.style.display = "block";  
    } else {
        userProfile.style.display = "none";  
    }
});

document.getElementById('playPauseButton').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseIcon = this.querySelector('i');
    
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseIcon.classList.remove('bx-play');
      playPauseIcon.classList.add('bx-pause'); 
    } else {
      audioPlayer.pause();
      playPauseIcon.classList.remove('bx-pause');
      playPauseIcon.classList.add('bx-play'); 
    }
  });


function showConfirmation() {
   
    document.querySelector('.booking-form').style.display = 'none';
  
    
    document.getElementById('confirmationMessage').style.display = 'block';
  }
  
  
  