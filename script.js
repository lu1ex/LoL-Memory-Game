const kartyDoGry = ["Ahri", "Ahri", "Ashe", "Ashe", "Diana", "Diana", 
"Fizz", "Fizz", "Janna", "Janna", "Jinx", "Jinx", "Maokai", "Maokai",
"Neeko", "Neeko", "Rengar", "Rengar"];

let karty = document.querySelectorAll("div");
karty = [...karty];

const czasPoczatekGry = new Date().getTime();

let aktywnaKarta = "";
const aktywne2Karty = [];
const liczbaPar = karty.length/2;
let iloscZebranychPar = 0;

let liczbaKlikniecPar = 0;

const klikniecieKarty = function() {
    aktywnaKarta = this;
    aktywnaKarta.classList.remove("hidden");

    if (aktywne2Karty.length === 0){
        aktywne2Karty[0] = aktywnaKarta;
        return;
    }
    else {
        karty.forEach(karta =>{
            karta.removeEventListener('click', klikniecieKarty) });
        aktywne2Karty[1] = aktywnaKarta;
        liczbaKlikniecPar++;

        setTimeout(function(){
            if (aktywne2Karty[0].className === aktywne2Karty[1].className){
                aktywne2Karty.forEach( karta => karta.classList.add ("off"));
            
                iloscZebranychPar++;
            
                if (iloscZebranychPar == liczbaPar){
                    const czasKoniecGry = new Date().getTime();
                    const czasGry = (czasKoniecGry - czasPoczatekGry)/1000
                
                    alert(`WYGRALES!!! Twój czas to: ${czasGry} . Ilość prób to ${liczbaKlikniecPar}`);
                    location.reload();
                }
            }
            else{
                aktywne2Karty.forEach (karta => karta.classList.add("hidden"));
            }
            aktywnaKarta = "";
            aktywne2Karty.length = 0;
            
            karty.forEach( karta => karta.addEventListener('click', klikniecieKarty));
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