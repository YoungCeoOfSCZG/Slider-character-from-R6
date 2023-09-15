const operatori = [
    {
        nome: 'Bandit',
        weapon: 'asset/MP7.png',
        ability: 'asset/Shock-Wire.png',
        description: 'Bandit is a secure, anti-hard breacher and roamer, capable of denying key entry points for the attackers and defending the objective while on the move.        Bandit is capable of electrifying a variety of surfaces thanks to his special ability: Crude Electrical Device or CED-1 Shock Wire.',
        image: 'asset/bandit-PhotoRoom.png'
    },

    {
        nome: 'Kaid',
        weapon: 'asset/AUG_A3.png',
        ability: 'asset/Rtila.png',
        description: 'Kaid’s "Rtila" Electroclaw can electrify reinforced walls and hatches, barbed wire, and deployable shields, making it tougher for the enemy to breach the Kasbah and any facility he’s tasked with protecting. He enters the field with two of these throwable gadgets.',
        image: 'asset/kaid-PhotoRoom.png'
    },

    {
        nome: 'Castle',
        weapon: 'asset/UMP45.png',
        ability: 'asset/armorPanel.png',
        description: `Castle is an anchor and secure Operator, capable of creating defensive strongholds around the objective, controlling the flow of the attackers and slowing down their assault. Castle's unique ability is to create reinforced barricades using the: UTP1-Universal Tactical Panel.`,
        image: 'asset/castle-PhotoRoom.png',
    }
];

const nome = document.getElementById('nome');
const ability = document.getElementById('ability');
const weapon = document.getElementById('weapon');
const description = document.getElementById('description');
const img = document.getElementById('op-img');

const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const randButton = document.querySelector('.btn-random');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', showOperator(currentItem));

function showOperator(index) {
    const item = operatori[index];
    img.src = item.image;
    ability.src = item.ability;
    weapon.src = item.weapon;
    description.textContent = item.description;
}

prevButton.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = operatori.length - 1;
    }   
    showOperator(currentItem);
});

nextButton.addEventListener('click', function() {
    currentItem++;
    if (currentItem > operatori.length - 1) {
        currentItem = 0;
    }   
    showOperator(currentItem);
});

randButton.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * operatori.length);  
    showOperator(currentItem);
});
