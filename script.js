const score0E1=document.querySelector('#score--0');
const score1E1=document.getElementById('score--1');
const diceE1=document.querySelector('.dice');

const btnRoll=document.querySelector('.btn-roll');
const btnNew=document.querySelector('.btn-new');
const btnHold=document.querySelector('.btn-hold');


const player0E1=document.querySelector('.player--0');
const player1E1=document.querySelector('.player--1');
const score0E1=document.querySelector('#score--0');
const score1E1=document.querySelector('#score--1');



let currentScore,activePlayer,scores,playing;

//StartingConditions 

function init()
{
    currentScore=0;
    activePlayer=0;
    scores=[0,0];
    playing=true;

    score0E1.textContent=0;
    score1E1.textContent=0;

    current0E1.textContent=0;
    current1E1=textContent=0;

    diceE1.classList.add('hidden');

    player0E1.classList.add('player--active');
    player0E1.classList.remove('player--active');

    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    diceE1.classList.add('hidden');

}
init();

 
 
//switchPlayer Function

const switchPlayer= function(){
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer=activePlayer===0?1:0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
}


btnHold.addEventListener('click', function(){

    if(playing){

    //1. Add current Score to ActivePlayer 

    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];

    //2. If socre is>=100

    if(scores[activePlayer]>=100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        diceE1.classList.add('hidden');
    }

    }
    else
     {
        //switch the user 
        switchPlayer();
    }
})

btnRoll.addEventListener('click', function(){

    if(playing)
    {
    //1. generate a dice roll
    const dice=Math.trunc(Math.random()*6)+1;
        
    //2. Display Dice
        
    diceE1.classList.remove('hidden');
    diceE1.src=`dice-${dice}.png`;
        
    //3. If Dice is not equal to 1
    if(diceE1!==1)
    {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent= currentScore;
    }
    else{

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        currentScore=0;
        activePlayer=activePlayer===0?1:0;
        player0E1.classList.toggle('player--active');
        player1E1.classList.toggle('player--active');

       // playerE01.classList.remove('player--active');
       // playerE01.classList.remove('player--active');
     
           //switch player 
    }

    }
    else 
    {
        switchPlayer();
    }
    
})
btnNew.addEventListener('click', init);

