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
    for(i = 0; i < 5; i++){
        let question = prompt('scrivi il '+(i+1)+'° numero');

        if(numbers.includes(parseInt(question))==true){
            let div = document.createElement("div");
            div.textContent=( (i+1)+'° numero corretto' + '  ' +numbers[i] );
            div.classList.add("green");
            let trueItem = document.getElementById("itemContainer");
            trueItem.appendChild(div);
            
        }else{
            let div = document.createElement("div");
            div.textContent=( (i+1)+'° numero ERRATO'+ '  ' +numbers[i]);
            div.classList.add("red");
            let falseItem = document.getElementById("itemContainer");
            falseItem.appendChild(div);
        }
        
        
    }
       
}



