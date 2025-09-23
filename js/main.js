// document.querySelector('#inputName').addEventListener('input', inputName)
let userName =""

console.log("connected")
document.getElementById('inputName').addEventListener('input', nameInput)
function nameInput(){
    userName = document.querySelector('#inputName').value.toString()
    console.log(userName)
    return userName
}
document.getElementById('submission').addEventListener('click', outputName)
/** function inputName(){
    userName = document.querySelector('#inputName').value.toString()
    console.log(userName)
    return userName
    
}**/

/* function randomGreeting1(){
    let greetings1 = ["Howdy", "Hi", "Welcome"],
    random1 = Math.floor(Math.random()*greetings1.length),
    selectedGreeting1 = greetings1[random1]
    console.log(random1)
    console.log(selectedGreeting1)
    return selectedGreeting1
}*/
/* function randomGreeting2(){
    let greetings2 = ["I hope you're having a good day!", "Please drink enough water.", "Take a deep breath."],
    random2 = Math.floor(Math.random()*greetings2.length),
    selectedGreeting2 = greetings2[random2]
    console.log(random2)
    console.log(selectedGreeting2)
    return selectedGreeting2
}*/

function outputName(){
    console.log("submitted")
    let inputtedName = nameInput(),
    greetingsPt1 = randomGreeting1(),
    greetingsPt2 = randomGreeting2()
    console.log(userName)
    document.querySelector('#outputText').innerText = `${greetingsPt1} ${inputtedName}! ${greetingsPt2}`
}