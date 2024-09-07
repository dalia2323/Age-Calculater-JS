let birthdayEL=document.getElementById('birthday');
let btnEl=document.getElementById('btn');
let resultEL=document.getElementById('result');
function ageCalculation(){
    let birthdayValue=birthdayEL.value;
    if(birthdayValue===''){
        alert("Please Enter your Birthday");
    }
    else{
    const age=getAge(birthdayValue);
    resultEL.innerText="You are "+age+" years old";
    }
}
function getAge(birthdayValue){
    const currentDate= new Date();
    const birthday= new Date(birthdayValue);
    let age = currentDate.getFullYear()-birthday.getFullYear();
    let month =currentDate.getMonth()-birthday.getMonth();
    if(month<0 ||(month==0 && birthday.getDay()>currentDate.getDay())){
        age--;
    }
return age;
}
btnEl.addEventListener("click",ageCalculation);
