function rand(n,m){
return Math.floor(Math.random()*(n-m)+m);
};
function produceNum(n,m){
  let arr=[];
  for(let i=0;i<2;i++){
    let num=Math.floor((Math.random()*(n-m))+m);
    if(arr.indexOf(num)==-1){ //不存在推入
      arr.push(num);  
    }else{
      i--; //存在了使i-1增加一次循环次数
    }
  }
  return arr;
}
function produceNum1(n,m){
  let arr1=[];
  for(let i=0;i<2;i++){
    let num=Math.floor((Math.random()*(n-m))+m);
    if(arr1.indexOf(num)==-1){ //不存在推入
      arr1.push(num);  
    }else{
      i--; //存在了使i-1增加一次循环次数
    }
  }
  return arr1;
}
produceNum(7,1);
produceNum1();
document.getElementById("demo").innerHTML=rand(4,1);
document.getElementById("demo1").innerHTML=rand(8,1);

document.getElementById("demo2").innerHTML=rand(12,1);}

document.getElementById("demo3").innerHTML=rand(26,1);

if(rand(4,1)=1){
document.getElementById("if").innerHTML="general part";
}else if(rand(4,1)=2){
document.getElementById("if").innerHTML="3 part";
}
else{
document.getElementById("if").innerHTML="2 part";
}
document.getElementById("demo10").innerHTML=produceNum(7,1);
document.getElementById("demo11").innerHTML=produceNum1(9,1);
document.getElementById("demo12").innerHTML=rand(43,1);


