
document.addEventListener("DOMContentLoaded", function () {
    
    if (!localStorage.getItem('userScore')) {
        localStorage.setItem('userScore', '0');
    }

    if (!localStorage.getItem('pcScore')) {
        localStorage.setItem('pcScore', '0');
  }
  let userScoreInt = parseInt(localStorage.getItem('userScore'));
let pcScoreInt = parseInt(localStorage.getItem('pcScore'));

    
   

    
    let userScore = document.querySelector('.user-score');
    userScore.innerText = userScoreInt;

    let pcScore = document.querySelector('.pc-score');
    pcScore.innerText = pcScoreInt;

    
  let ruleBtn = document.querySelector('.rule-btn')
let mainRuleContainer = document.querySelector('.main-rule-container') 


function createRule() {
let ruleConatiner1 = document.querySelector('.rule-container')
if (!ruleConatiner1) {

let ruleContainer = document.createElement('div');
let crossBtn = document.createElement('button')
let btnSpan =document.createElement('span')
crossBtn.className = "cross-btn"
let crossSym = document.createElement('img')
crossSym.src = './assets/circle.svg';

btnSpan.innerText = "X"
crossBtn.appendChild(btnSpan)
crossBtn.appendChild(crossSym)
ruleContainer.className = "rule-container"
ruleContainer.prepend(crossBtn)
let ruleHeader = document.createElement('h1')
ruleHeader.innerText = "Rules"    
let ruleList = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let li4 = document.createElement('li')
li1.innerText = "Rock beats scissors, scissors beat paper, and paper beats rock."
li2.innerText = "Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”"
li3.innerText = "Use rock, paper, scissors to settle minor decisions or simply play to pass the time"
li4.innerText = "If both players lay down the same hand, each player lays down another hand"
ruleList.appendChild(li1)
ruleList.appendChild(li2)
ruleList.appendChild(li3)
ruleList.appendChild(li4)
ruleContainer.prepend(ruleHeader)
ruleContainer.appendChild(ruleList)
 mainRuleContainer.prepend(ruleContainer)   
  }
  
  let crossBtn = document.querySelector('.cross-btn');  
function removeRule() {
    
    let ruleContainer = document.querySelector('.rule-container')
    mainRuleContainer.removeChild(ruleContainer)
}

crossBtn.addEventListener('click', () => {
    removeRule()
})
}

ruleBtn.addEventListener('click', () => {
    
    createRule()
})
  console.log(mainRuleContainer)

/**
 * Game Play Section
 */


const handOptions = {
    rock: {
        Svg: "./assets/rock.svg",
        Png:"./assets/rock.png"
  },
   paper: {
        Svg: "./assets/paper.svg",
        Png:"./assets/paper.png"
  },
   scissors: {
        Svg: "./assets/scissors.svg",
        Png:"./assets/scissors.png"
  }
}



let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors')

function setUserScore() {
    userScoreInt++;
    localStorage.setItem('userScore', userScoreInt.toString());
    let userScore = document.querySelector('.user-score');
    userScore.innerText = userScoreInt;
}
function setPcScore() {
    pcScoreInt++;
    localStorage.setItem('pcScore', pcScoreInt.toString());
    let pcScore = document.querySelector('.pc-score');
    pcScore.innerText = pcScoreInt;
}

function setDecision(message, btnMessage, prop) {
   let main  = document.querySelector('main')
    let rockPaperScissors = document.querySelector('.rock-paper-scissors-container')
    main.removeChild(rockPaperScissors)
    
    /**
     * User Picked
     */
  let userPickedContainer = document.createElement('div');
  userPickedContainer.classList="user-picked-container"
  let userPickedImages = document.createElement('div')
  userPickedImages.classList="user-picked-images"
    let upicked = document.createElement('h3');
    upicked.innerText="YOU PICKED"
    let userPickSvg = document.createElement('img');
    userPickSvg.src = handOptions[prop.userHand].Svg;
    let userPickPng = document.createElement('img');
  userPickPng.src = handOptions[prop.userHand].Png;
  userPickedImages.appendChild(userPickSvg)
  userPickedImages.appendChild(userPickPng)
  userPickedContainer.prepend(upicked)
  userPickedContainer.append(userPickedImages)
    // console.log(userPickedContainer)
    // console.log(userPickPng)
  
  
  /**
   * Msg And Play Again Area
   */
  let msgDiv = document.createElement('div');
   msgDiv.classList="msg-container"
  let msgHeader = document.createElement('h2');
  let againstPc = document.createElement('h4');
  let replyButton = document.createElement('button')
  againstPc.innerText = "AGAINST PC"
  if(message!="TIE UP")
  {
    msgHeader.innerText = `${ message }` 
    
    replyButton.classList="replay-btn"
    replyButton.innerText = `${btnMessage}`
    msgDiv.prepend(msgHeader)
    msgDiv.appendChild(againstPc)
    msgDiv.appendChild(replyButton)
    
    
  }
  else {
    msgHeader.innerText = `${ message }` 
    
    replyButton.classList="replay-btn"
    replyButton.innerText = `${btnMessage}`
    msgDiv.prepend(msgHeader)
     msgDiv.appendChild(replyButton)
    
  }
 
  
  
    
    /**
     * Computer Picked
     */
  let pcPickedContainer = document.createElement('div');
  pcPickedContainer.classList = "pc-picked-container"
  // let pcShadowDiv = document.createElement('div')
  let pcPickedImages = document.createElement('div')
  pcPickedImages.classList="pc-picked-images"
    let cpicked = document.createElement('h3');
    cpicked.innerText="PC PICKED"
    let pcPickSvg = document.createElement('img');
    pcPickSvg.src = handOptions[prop.cpHand].Svg;
    let pcPickPng = document.createElement('img');
  pcPickPng.src = handOptions[prop.cpHand].Png;
  pcPickedImages.appendChild(pcPickSvg)
  pcPickedImages.appendChild(pcPickPng)
  pcPickedContainer.prepend(cpicked)
  pcPickedContainer.appendChild(pcPickedImages)
  // console.log(pcPickedContainer)
   

   
  if (message === "YOU WIN") {
    
    let nextBtn = document.createElement('button');
    nextBtn.classList = 'next-btn rule-btn ';
    // nextBtn.classList='rule-btn'
    nextBtn.innerText = "NEXT"
    mainRuleContainer.appendChild(nextBtn)
    // console.log(nextBtn)
    userPickedContainer.setAttribute('id',"animation")
    // userPickedContainer.style.backgroundColor = "#2E9A2563"
    
  }
  if (message == "YOU LOST") {
  
    
    pcPickedContainer.setAttribute('id',"animation")
    // pcPickedContainer.style.backgroundColor="#2E9A2563"
  }

 

  let resultConatiner = document.createElement('div');
  resultConatiner.classList = "result-container"
  
  resultConatiner.prepend(userPickedContainer)
  resultConatiner.appendChild(msgDiv)
  resultConatiner.appendChild(pcPickedContainer)
  main.prepend(resultConatiner)
  console.log(resultConatiner)
  function gameUI() {
    let nextBtn = document.querySelector('.next-btn')
      if (nextBtn) {
       mainRuleContainer.removeChild(nextBtn)
  
    }
      main.removeChild(resultConatiner)
      
        main.prepend(rockPaperScissors) 
     }

    replyButton.addEventListener('click', () => {
        gameUI()
    })
}
function referee(userHand, cpHand) {
    if (userHand == "paper" && cpHand == "scissors") {
      setPcScore()  
    setDecision("YOU LOST","PLAY AGAIN",{userHand,cpHand});
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN","PLAY AGAIN",{userHand,cpHand});
    setUserScore();
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP","REPLAY",{userHand,cpHand});
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN","PLAY AGAIN",{userHand,cpHand});
    setUserScore();
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOST","PLAY AGAIN",{userHand,cpHand});
      setPcScore()
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP","REPLAY",{userHand,cpHand});
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP","REPLAY",{userHand,cpHand});
  }
  if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOST","PLAY AGAIN",{userHand,cpHand});
      
      setPcScore()
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN","PLAY AGAIN",{userHand,cpHand});
    setUserScore();
  }
}

function pickComputerHand(hand) {
    
    let hands = ['rock', 'paper', 'scissors'];
    let cpHand = hands[Math.floor(Math.random() * hands.length)]
    // console.log(`Computer choose ${cpHand}`)
    // console.log(`User choose ${hand}`)
    referee(hand,cpHand)
}

function pickUserHand(hand) {
    pickComputerHand(hand)
}


rockBtn.addEventListener('click', () => {
    pickUserHand("rock")
})

paperBtn.addEventListener('click', () => {
    pickUserHand("paper")
})
scissorsBtn.addEventListener('click', () => {
    pickUserHand("scissors")
})
});


// button.addEventListener('click', () => {
//     main.removeChild(div)
//     let main2 = document.createElement('div')
//     let h1 = document.createElement('h1')
//     h1.innerText = "My name is Suman Bhandari"
//     main2.appendChild(h1)
//     main.prepend(main2)
// })
/**
 * TO create a rule
 */
