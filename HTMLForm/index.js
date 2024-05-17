function validatePhone(){
    
    var y=document.getElementById('phono');
    
    if(y.value==""||y.value==null){
        alert("Please enter your mobile number");
        return false
    }
    var charCode = y.keycode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            alert("Please enter only Numbers.");
            return false;
        }

    if(y.value.length<10||y.value.length>10){
        alert("Please enter a 10 digit mobile number");
        return false;
    }
    
    
    return true;


}

function validateEmail(){
    var x=document.getElementById('emailer');
    var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(x.value==""||x.value==null){
        alert("Please enter your email");
        return false
    }
    else if (!mailFormat.test(x.value)) {
        alert( "  Email Address is not valid, Please provide a valid Email ");
        return false;
    }
   


}

var el=document.getElementById("texting");
var rl=document.getElementById("lasty")
var cl=document.getElementById("characterRemaining");
const MAXI=255;
el.addEventListener('input',()=>{

    var remain=MAXI-el.value.length;

    cl.textContent=`${remain} characters remaining`
})

