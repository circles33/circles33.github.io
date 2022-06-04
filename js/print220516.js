function rand(n,m){
return Math.random()*(n-m)+m;
};
document.getElementById("demo").innerHTML=rand(8,1);
