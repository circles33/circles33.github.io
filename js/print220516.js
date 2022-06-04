function rand(n,m){
return Math.floor(Math.random()*(n-m)+m);
};
document.getElementById("demo").innerHTML=rand(8,1);
