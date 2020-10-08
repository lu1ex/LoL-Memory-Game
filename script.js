const kartyDoGry = ["Ahri", "Ahri", "Ashe", "Ashe", "Diana", "Diana", 
"Fizz", "Fizz", "Janna", "Janna", "Jinx", "Jinx", "Maokai", "Maokai",
"Neeko", "Neeko", "Rengar", "Rengar"];

let karty = document.querySelectorAll("div");
karty = [...karty];

let czasPoczatekGry = new Date();
let iloscZebranychPar = 0;
let liczbaPar = karty.lenght;
let liczbaKlikniecPar = 0;

const poczatekGry = function() {
    karty.forEach(karta => {
        const pozycja = Math.floor(Math.random() * kartyDoGry.length);
        karta.classList.add(kartyDoGry[pozycja]);
        kartyDoGry.splice(pozycja,1);
    })

    setTimeout(function(){
        karty.forEach(karta => {
            karta.classList.add("hidden");
        })
    }, 600);
    }

poczatekGry();