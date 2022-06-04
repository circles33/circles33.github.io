function rand(n,m){
return Math.floor(Math.random()*(n-m)+m);
};
document.getElementById("demo").innerHTML=rand(8,1);
document.getElementById("demo1").innerHTML=rand(8,1);
document.getElementById("demo2").innerHTML=rand(6,1);
document.getElementById("demo3").innerHTML=rand(6,1);



