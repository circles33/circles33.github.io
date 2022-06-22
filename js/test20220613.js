demo1(){
var i =1;
var sum=0;
while(i<10){
sum+=i;
i++;
}
}

document.getElementById("demo1").innerHTML = demo1();

var sum1=0;
        var i1=1;
        do {
            sum1+=i1;
            i1++;
        } while (i1<=100);
document.getElementById("demo2").innerHTML = sum1;

var maney=10000;
        for (int i2=1;i2<=5;i++) {
            maney=maney*1.003;
        }
document.getElementById("demo3").innerHTML = maney;
