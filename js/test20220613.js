function myFunction(){
	const dongli ={xinhao:"XRN",dianan:"660V"}
        let text="";
	for(let x in dongli){
                text += dongli[x] +"";
	       }
	document.getElementById("demo").innerHTML=text;
}
