const two=document.getElementById("two");
function nmb(input){
    two.value += input;
}
function calculate(){
    try{
        two.value=eval(two.value);
    }
    catch(error){
        two.value="Error";
    }
}
function clr(){
    two.value="";
}