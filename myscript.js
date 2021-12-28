numbers = [];

for (let i = 0; i < 5; i++) {                             

    let randomNumb = Math.floor(Math.random()*100+1);
    numbers.push(randomNumb);
}     

document.writeln(numbers);

setTimeout(questionPrompt , 3000);


function questionPrompt(){
    let question = prompt("scrivi il primo numero");
    let question2 = prompt("scrivi il secondo numero");
    let question3 = prompt("scrivi il terzo numero");
    let question4 = prompt("scrivi il quarto numero");
    let question5 = prompt("scrivi il quinto numero");
    
    if(numbers.includes(parseInt(question))==true){
        document.writeln("primo numero corretto");
    }else{
        document.writeln("primo numero NON corretto");
    }
    if(numbers.includes(parseInt(question2))==true){
        document.writeln("secondo numero corretto");
    }else{
        document.writeln("secondo numero NON corretto");
    }
    if(numbers.includes(parseInt(question3))==true){
        document.writeln("terzo numero corretto");
    }else{
        document.writeln("terzo numero NON corretto");
    }
    if(numbers.includes(parseInt(question4))==true){
        document.writeln("quarto numero corretto");
    }else{
        document.writeln("quarto numero NON corretto");
    }
    if(numbers.includes(parseInt(question5))==true){
        document.writeln("quinto numero corretto");
    }else{
        document.writeln("quinto numero NON corretto");
    }
}

