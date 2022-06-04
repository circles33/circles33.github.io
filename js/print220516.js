function rand(n,m){
return Math.random()*(n-m)+m;
};
rand(8,1);
document.getElementById("demo").innerHTML=rand;
