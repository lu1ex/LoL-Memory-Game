const kartyDoGry = ["Ahri", "Ahri", "Ashe", "Ashe", "Diana", "Diana", 
"Fizz", "Fizz", "Janna", "Janna", "Jinx", "Jinx", "Maokai", "Maokai",
"Neeko", "Neeko", "Rengar", "Rengar"];

let karty = document.querySelectorAll("div");
karty = [...karty];

let czasPoczatekGry = new Date();
let iloscZebranychPar = 0;
let liczbaPar = karty.lenght;
let liczbaKlikniecPar = 0;
let aktywnaKarta = "";
const aktywne2Karty = [];

const klikniecieKarty = function() {
    aktywnaKarta = this;
    aktywnaKarta.classList.remove("hidden")
    if (aktywne2Karty.length ===0){
        aktywne2Karty[0] = aktywnaKarta;
        return;
    }
    else {
        karty.forEach(karta =>{
            karta.removeEventListener('click', klikniecieKarty);
        })
        aktywne2Karty[1] = aktywnaKarta;
        setTimeout(function(){
            if (aktywne2Karty[0].className === aktywne2Karty[1].className){
                aktywne2Karty.forEach( karta => {
                    karta.classList.add ("off");
                })
            }
        },500)
    }
}

const poczatekGry = function() {
    karty.forEach(karta => {
        const pozycja = Math.floor(Math.random() * kartyDoGry.length);
        karta.classList.add(kartyDoGry[pozycja]);
        kartyDoGry.splice(pozycja,1);
    })

    setTimeout(function(){
        karty.forEach(karta => {
            karta.classList.add("hidden");
            karta.addEventListener('click', klikniecieKarty);
        })
    }, 600);
    }

poczatekGry();