let deret ="0, 1"
function OnButtonShow (a,b){
    if(b<1000){
        a=(a+b);
        deret += ", "+a;
        OnButtonShow(b,a);
    }
}
OnButtonShow(0, 1)
document.getElementById("hasil").innerHTML

console.log(OnButtonShow)