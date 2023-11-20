function signFn() {

    a = parseInt(document.getElementById("num1").value);

    if(a > 0) {
        document.getElementById("resultShow").value="The Value "+a+" is a Positive Number";
    } else if(a == 0) {
        document.getElementById("resultShow").value="The Value is "+a+" [Neither + nor -]";
    } else if(a < 0) {
        document.getElementById("resultShow").value="The Value "+a+" is a Negative Number"; 
    } else {
        document.getElementById("resultShow").value="Invalid Input";
    }
}