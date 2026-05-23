const btnsEle = document.querySelectorAll("button");

const inpulEle =document.getElementById("result")

for(let i=0; i<btnsEle.length; i++){
    btnsEle[i].addEventListener("click", ()=>{
        const btnValue =btnsEle[i].textContent
        if(btnValue ==="C"){
            clearResult()
        }else if(btnValue ==="="){
            calculateResult()
        }else{
            appendValue(btnValue)
        }
    })
}
function clearResult(){
    inpulEle.value = " "
}
function calculateResult(){
    inpulEle.value = eval(inpulEle.value)
}
function appendValue( btnValue){
    inpulEle.value += btnValue
}