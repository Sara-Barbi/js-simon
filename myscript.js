numbers = [];

for (let i = 1; i < 6; i++) {                             

    let randomNumb = Math.floor(Math.random()*100+1);
    numbers.push(randomNumb);

}     

document.getElementById("numeridaricordare").innerHTML= numbers;


function disappear(){
    document.getElementById("numeridaricordare").classList.add("none");
    
}

setTimeout(disappear , 2900);
setTimeout(questionPrompt , 3000);



function questionPrompt(){
    let i;
    for(i = 1; i < 6; i++){
        let question = prompt('scrivi il '+i+'° numero');

        if(numbers.includes(parseInt(question))==true){
            document.writeln('<div id="green">'+i+'° numero corretto </div>');
            
        }else{
            document.writeln('<div id="red">'+i+'° numero ERRATO </div>');
        }
        
        
    }
       
}


