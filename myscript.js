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
            let hr = document.createElement("hr");
            
            let div = document.createElement("div");
            div.textContent=( (i+1)+'°' );
            div.classList.add("num");
            
            let span2 = document.createElement("span");
            span2.textContent=( 'CORRETTO' );
            span2.classList.add("corr");
            
            let span3 = document.createElement("span");
            span3.textContent=( numbers[i] );
            span3.classList.add("rememb");

            let trueItem = document.getElementById("itemContainer");
            trueItem.appendChild(div);
            trueItem.appendChild(span2);
            trueItem.appendChild(span3);
            trueItem.appendChild(hr);

          
        }else{
            let hr = document.createElement("hr");
            
            let = div = document.createElement("div");
            div.textContent=( (i+1)+'°');
            div.classList.add("num");
            
            let span2 = document.createElement("span");
            span2.textContent=( parseInt(question) + " ERRATO" );
            span2.classList.add("err");
            
            let span3 = document.createElement("span");
            span3.textContent=( numbers[i]);
            span3.classList.add("rememb");
        

            let falseItem = document.getElementById("itemContainer");
            falseItem.appendChild(div);
            falseItem.appendChild(span2);
            falseItem.appendChild(span3);
            falseItem.appendChild(hr);  

        }

        
        
    }
       
}



