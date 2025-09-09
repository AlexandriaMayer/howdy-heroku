document.querySelector('#inputName').addEventListener('input', inputName)
document.querySelector('#submission').addEventListener('click', randomGreeting1, randomGreeting2, outputName)

function inputName(){
    const userName = document.querySelector('#inputName').value
    return userName.toString()
}

function randomGreeting1(){
    let greetings1 = ["Howdy", "Hi", "Welcome"],
    greetings2 = ["I hope you're having a good day!", "Please drink enough water", "Take a deep breath"],
    random1 = Math.floor(Math.random()*greetings1.length),
    selectedGreeting1 = greetings1[random1]
    console.log(random1)
    console.log(selectedGreeting1)
    return selectedGreeting1
}
function randomGreeting2(){
    let greetings2 = ["I hope you're having a good day!", "Please drink enough water.", "Take a deep breath."],
    random2 = Math.floor(Math.random()*greetings2.length),
    selectedGreeting2 = greetings2[random2]
    console.log(random2)
    console.log(selectedGreeting2)
    return selectedGreeting2
}

function outputName(){
    let inputtedName = inputName(),
    greetingsPt1 = randomGreeting1(),
    greetingsPt2 = randomGreeting2()
    document.querySelector('#outputText').innerText = `${greetingsPt1} ${inputtedName}! ${greetingsPt2}`
}