function rand(n,m){
return Math.floor(Math.random()*(n-m)+m);
};
document.getElementById("demo").innerHTML=rand(7,1);
document.getElementById("demo1").innerHTML=rand(7,1);
document.getElementById("demo2").innerHTML=rand(9,1);
document.getElementById("demo3").innerHTML=rand(9,1);



