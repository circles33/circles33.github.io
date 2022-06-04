function rand(n,m){
return Math.random()*(n-m)+m;
};
rand(1,8);
document.getElementById("demo").innerHTML=rand;
