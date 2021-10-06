'use strict';

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');

const btnRoll=document.querySelector('.btn-roll');
const btnNew=document.querySelector('.btn-new');
const btnHold=document.querySelector('.btn-hold');


const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');



let currentScore,activePlayer,scores,playing;

//StartingConditions 

function init()
{
    currentScore=0;
    activePlayer=0;
    scores=[0,0];
    playing=true;

    score0El.textContent=0;
    score1El.textContent=0;

    current0El.textContent=0;
    current1El=textContent=0;

    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player0El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    diceEl.classList.add('hidden');

}
init();

//initial setup
 
 



 
 
//switchPlayer Function

const switchPlayer= function(){
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer=activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


btnHold.addEventListener('click', function()
{

    if(playing)
    {

    //1. Add current Score to ActivePlayer 

    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];

    //2. If socre is>=100

    if(scores[activePlayer]>=100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        diceEl.classList.add('hidden');
    }

    }
    else
     {
        //switch the next player
        switchPlayer();
    }
})

btnRoll.addEventListener('click', function()
{
     if(playing)

        {

    //1. generate a dice roll
    const dice=Math.trunc(Math.random() *6) +1;
    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    //3. If Dice is not equal to 1
    if(dice!==1)
    {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;
    }
    
    else 
    {
        switchPlayer();
    }
}
    
})
btnNew.addEventListener('click', init);

