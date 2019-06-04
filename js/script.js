function getRadomArrayElement(poen) {
    return poen[Math.floor(Math.random() * poen.length)];
}


function fun() {

    var poen = ["Hány programozó kell egy villanykörte kicseréléséhez?-Sehány. Ez hardveres probléma.", "Milyen nyelven programoznak az űrlények? Olaszul, mert ITalien", "Mi az objektum-orientált módja a meggazdagodásnak?-Öröklés.", "Feleség leküldi programozó férjét az üzletbe:- Hozz egy liter tejet, és ha van tojás, akkor hozzál hatot.Hazaállít a férj hat liter tejjel. Kérdi az asszony:- Miért vettél ennyi tejet?- Volt tojás."];
    var random = getRadomArrayElement(poen);
    alert(random);
};

var team = [{
        name: 'Skravan Krisztina',
        age: 25,
        hobbi: 'túrázás'

    },
    {
        name: 'Pál Sára',
        age: 22,
        hobbi: 'macskakínzás'
    },
    {
        name: 'Makó Julianna Napsugár',
        age: 38,
        hobbi: "sör"
    },
    {
        name: 'Neslanovic Tímea',
        age: 28,
        hobbi: 'dinó lovaglás'
    },
    {
        name: 'Takács Tamás',
        age: 28,
        hobbi: 'american football'
    },

];

document.querySelector('p.first-person-name').innerHTML = "Név: " + team[0].name;
document.querySelector('p.first-person-age').innerHTML = "Életkor: " + team[0].age;
document.querySelector('p.first-person-hobbi').innerHTML = "Hobbi: " + team[0].hobbi;
document.querySelector('p.second-person-name').innerHTML = "Név: " + team[1].name;
document.querySelector('p.second-person-age').innerHTML = "Életkor: " + team[1].age;
document.querySelector('p.second-person-hobbi').innerHTML = "Hobbi: " + team[1].hobbi;
document.querySelector('p.third-person-name').innerHTML = "Név: " + team[2].name;
document.querySelector('p.third-person-age').innerHTML = "Életkor: " + team[2].age;
document.querySelector('p.third-person-hobbi').innerHTML = "Hobbi: " + team[2].hobbi;
document.querySelector('p.fourth-person-name').innerHTML = "Név: " + team[3].name;
document.querySelector('p.fourth-person-age').innerHTML = "Életkor: " + team[3].age;
document.querySelector('p.fourth-person-hobbi').innerHTML = "Hobbi: " + team[3].hobbi;
document.querySelector('p.fifth-person-name').innerHTML = "Név: " + team[4].name;
document.querySelector('p.fifth-person-age').innerHTML = "Életkor: " + team[4].age;
document.querySelector('p.fifth-person-hobbi').innerHTML = "Hobbi: " + team[4].hobbi;