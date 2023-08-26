

// button.addEventListener('click', () => {
//     main.removeChild(div)
//     let main2 = document.createElement('div')
//     let h1 = document.createElement('h1')
//     h1.innerText = "My name is Suman Bhandari"
//     main2.appendChild(h1)
//     main.prepend(main2)
// })

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

console.log(ruleContainer)
    }
}

ruleBtn.addEventListener('click', () => {
    createRule()
})