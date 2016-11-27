var a=prompt("Enter First Number");
var aa=parseFloat(a);
var x=prompt("Enter Operator ($)for square root ");
if (x==="$"){
    var one=Math.sqrt(x);
    document.write(one);
}
else if (x==="+"){
    var b=prompt("Enter Second Number");
    var bb=parseFloat(b);
    document.write(aa+bb)
}
else if (x==="-"){
    var b=prompt("Enter Second Number");
    var bb=parseFloat(b);
    document.write(aa-bb)
}
else if (x==="*"){
    var b=prompt("Enter Second Number");
    var bb=parseFloat(b);
    document.write(aa*bb)
}
else if (x==="/"){
    var b=prompt("Enter Second Number");
    var bb=parseFloat(b);
    document.write(aa/bb)
}
else{
    alert ("Please select correct number or operator");
}