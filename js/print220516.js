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
function produceNum1(){
  let arr1=[];
  for(let i=0;i<2;i++){
    let num=Math.floor((Math.random()*(9-1))+1);
    if(arr.indexOf(num)==-1){ //不存在推入
      arr.push(num);  
    }else{
      i--; //存在了使i-1增加一次循环次数
    }
  }
  return arr1;
}
produceNum(7,1);
produceNum1();
document.getElementById("demo").innerHTML=rand(7,1);
document.getElementById("demo1").innerHTML=rand(7,1);
document.getElementById("demo2").innerHTML=rand(9,1);
document.getElementById("demo3").innerHTML=rand(9,1);
if(rand(7,1)>3){
document.getElementById("if").innerHTML="后";
}else{
document.getElementById("if").innerHTML="前";
}
document.getElementById("demo10").innerHTML=produceNum(7,1);
document.getElementById("demo11").innerHTML=arr[1];


