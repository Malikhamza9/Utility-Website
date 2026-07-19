// ConvertHub JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let filter = this.value.toLowerCase();

            let cards = document.querySelectorAll(".tool-card");

            cards.forEach(function(card){

                let text = card.innerText.toLowerCase();

                if(text.includes(filter)){
                    card.style.display="block";
                }else{
                    card.style.display="none";
                }

            });

        });

    }

    const buttons=document.querySelectorAll(".tool-card a");

    buttons.forEach(function(btn){

        btn.addEventListener("click",function(e){

            e.preventDefault();

            alert("🚀 یہ Tool ابھی Development میں ہے۔ جلد ہی Available ہوگا!");

        });

    });

});
