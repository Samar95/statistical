
function meancalc(){
	    var elm=document.getElementById("meaninputfield").value;
       var meanarr=elm.split(" ");
    
    var sum=0;
    
    for(var i=0;i<meanarr.length;i++){
        sum=sum+parseInt(meanarr[i]);
        
    }
    var m = sum/meanarr.length;
    
    var mean=document.getElementById("meanoutput");
    mean.innerHTML=m;
    
    
}
function clearmeanarr(){
    meanarr=[];
     var mean=document.getElementById("meanoutput");
     mean.innerHTML=" ";
     var y=document.getElementById("vetorcontent");
          y.innerHTML="";
    var o=document.getElementById("meaninputfield");
     o.value="";
    
}

function modcalc() {
var elm=document.getElementById("modinputfield").value;
var modearr= elm.split(" ");
var mode = 0;
var count = 0;
  for(var i = 0; i < modearr.length; i++){
    for(var j = 0; j < i; j++){
       if(parseInt(modearr[j]) === parseInt(modearr[i])){
           mode = parseInt(modearr[j]);
           count++;
        
       }
    }
  }
     var modeval=document.getElementById("modoutput");
   modeval.innerHTML=mode;
}

function clearmodarr(){
    modearr=[];
     var mean=document.getElementById("modoutput");
     mean.innerHTML=" ";
     var y=document.getElementById("vetor2content");
          y.innerHTML="";
    var o=document.getElementById("modinputfield");
     o.value="";
    
}

 

//median code
function mediancalc() {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var elm=document.getElementById("medinputfield").value;
    var medarr=elm.split(" ");
    var median = 0, numsLen = medarr.length;
    var med=[];
    for (var i=0 ; i<numsLen ; i++)
    {
        med.push(parseInt(medarr[i]));
    }
    med.sort();
 
    if (numsLen % 2 === 0  ) {   // is even   average of two middle numbers
          median = (med[numsLen / 2 - 1] + med[numsLen / 2]) / 2;
    } 
    
    else { // is odd  middle number only
        
        median = med[(numsLen - 1) / 2];
    }
 
    var medval=document.getElementById("medoutput");
    medval.innerHTML=median;
}
function clearmedarr(){
    medearr=[];
     var mean=document.getElementById("medoutput");
     mean.innerHTML=" ";
    var y=document.getElementById("vetor3content");
          y.innerHTML="";
    var o=document.getElementById("medinputfield");
     o.value="";
}

//range code
function rangcalc() {
	var r1=[];
	var elm=document.getElementById("ranginputfield").value;
    var rangarr=elm.split(" ");
	for (var i=0 ; i<rangarr.length; i++)
    {
        r1.push(parseInt(rangarr[i]));
    }
    r1.sort();
   var range= [r1[0], r1[rangarr.length-1]];
     var rangval=document.getElementById("rangoutput");
     rangval.innerHTML="["+range+"]";
    
}
function clearrangarr(){
    rangarr=[];
     var mean=document.getElementById("rangoutput");
     mean.innerHTML=" ";
     var y=document.getElementById("vetor4content");
          y.innerHTML="";
    var o=document.getElementById("ranginputfield");
     o.value="";
    
}

//standard deviation

function stdandcalc(){
	var elm=document.getElementById("stdinputfield").value;
	var st=elm.split(" ");
	var stdarr=[];
	for (var i=0 ; i<st.length; i++)
    {
        stdarr.push(parseInt(st[i]));
    }
  var sum1=0;
  var sum2=0;
    for(var i=0;i<stdarr.length;i++){
        sum1=sum1+stdarr[i];
        
    }
    var meu = sum1/stdarr.length;
    
    for(var j=0;j<stdarr.length;j++){
        sum2=sum2+Math.pow((stdarr[j]-meu),2);
        
    }
    
     var std=Math.sqrt(sum2/stdarr.length);
     var s=document.getElementById("stdandoutput");
     s.innerHTML=std;
    
}

function clearstdarr(){
    stdarr=[];
     var mean=document.getElementById("stdandoutput");
     mean.innerHTML=" ";
      var y=document.getElementById("vetor5content");
          y.innerHTML="";
    var o=document.getElementById("stdinputfield");
     o.value="";
    
}

//covariance
function covcalc(){
	var elm=document.getElementById("covarr1inputfield").value;
	var q=document.getElementById("covarr2inputfield").value;
	var covarr1=elm.split(" ");
	var covarr2=q.split(" ");
	if (q.length==elm.length){
    var suma1=0;
    var suma2=0;
    var suma3=0;
    for(var i=0;i<covarr1.length;i++){
        suma1=suma1+parseInt(covarr1[i]);
        
    }
    var mu1 = suma1/covarr1.length;
    
    for(var j=0;j<covarr2.length;j++){
        suma2=suma2+parseInt(covarr2[j]);
        
    }
    var mu2 = suma2/covarr2.length;
    
    for(var k=0;k<covarr1.length;k++){
        suma3=suma3+((parseInt(covarr1[k])-mu1)*(parseInt(covarr2[k])-mu2));
        
        
    }
    var cov=suma3/(covarr1.length-1);
     var c=document.getElementById("covoutput");
     c.innerHTML=cov;
 }
 else {
 	window.alert("you should enter the same length");
 }
}

function clearcovarr(){
   covarr1=[];
   covarr2=[];
     var mean=document.getElementById("covoutput");
     mean.innerHTML=" ";
       var y=document.getElementById("vetor6content");
          y.innerHTML="";
     var z=document.getElementById("covarr1inputfield");
     z.value="";
    var w=document.getElementById("covarr2inputfield");
     w.value="";  
    var p=document.getElementById("vetor7content");
          p.innerHTML="";
   
     
    
    
}


//haming distance
function hamingcalc(){
	var q=document.getElementById("hamarr1inputfield").value;
	var i=document.getElementById("hamarr2inputfield").value;
	var hamarr1=q.split(" ");
    var hamarr2=i.split(" ");
    if (q.length==i.length){
 var mismatches = 0;
  for (var i = 0; i <= hamarr1.length; i++) {
    if (parseInt(hamarr1[i]) != parseInt(hamarr2[i])) {
      mismatches ++;
    }
  }
     var h=document.getElementById("hamoutput");
     h.innerHTML=mismatches;
   }
   else{
   	window.alert("you should enter the same length");
   } 
}

function clearhamarr(){
   hamarr1=[];
   hamarr2=[];
     var mean=document.getElementById("hamoutput");
     mean.innerHTML=" ";
    var y=document.getElementById("vetor8content");
          y.innerHTML="";
     var z=document.getElementById("hamarr1inputfield");
     z.value="";
    var w=document.getElementById("hamarr2inputfield");
     w.value="";  
    var p=document.getElementById("vetor9content");
          p.innerHTML="";
    
}


//correlation 

function corelationcalc(){
    var q=document.getElementById("corrarr1inputfield").value;
	var i=document.getElementById("corrarr2inputfield").value;
	var corrarr1=q.split(" ");
    var corrarr2=i.split(" ");
    var xy=0;
    var arr1sum=0;
    var arr2sum=0;
    var arr1square=0;
    var arr2square=0;
    
    for(var i=0;i<corrarr1.length;i++){
        
        arr1sum=arr1sum+corrarr1[i];
        arr2sum=arr2sum+corrarr2[i];
        arr1square=arr1square+Math.pow(corrarr1[i] , 2);
        arr2square=arr2square+Math.pow(corrarr2[i] , 2);
    }
    for(var j=0;j<corrarr1.length;j++){
        xy=xy+(corrarr1[j]*corrarr2[j]);
    }
    var product=arr1sum*arr2sum;
    var pan=(corrarr1.length*xy)-product;
    var ma=Math.sqrt(((corrarr1.length*arr1square)-Math.pow(arr1sum , 2))-((corrarr2.length*arr2square)-Math.pow(arr2sum,2)));
    var answer=pan/ma;
     var ns=document.getElementById("corroutput");
     ns.innerHTML=answer;
    
}



function clearcorrarr(){
   corrarr1=[];
   corrarr2=[];
     var mean=document.getElementById("corroutput");
     mean.innerHTML=" ";
      var y=document.getElementById("v10content");
          y.innerHTML="";
     var z=document.getElementById("corrarr1inputfield");
     z.value="";
    var w=document.getElementById("corrarr2inputfield");
     w.value="";  
    var p=document.getElementById("v11content");
          p.innerHTML="";
   
    
}

//cosine distance

function cosdcalc(){
    var q=document.getElementById("cosdarr1inputfield").value;
	var i=document.getElementById("cosdarr2inputfield").value;
	var cosdarr1=q.split(" ");
    var cosdarr2=i.split(" ");
    var sum1=0;
    var sum2=0;
    var sum3=0;
    for(var i=0;i<cosdarr1.length;i++){
        sum1=sum1+cosdarr1[i]*cosdarr2[i];
        sum2=sum2+Math.pow(cosdarr1[i],2);
        sum3=sum3+Math.pow(cosdarr2[i],2);
    }
    
    var np= sum1/(Math.sqrt(sum2)*Math.sqrt(sum3))
    var answer=1-np;
    var ns=document.getElementById("cosdoutput");
     ns.innerHTML=answer;
}

function clearcosdarr(){
  cosdarr1=[];
  cosdarr2=[];
     var mean=document.getElementById("cosdoutput");
     mean.innerHTML=" ";
    var y=document.getElementById("vector12content");
          y.innerHTML="";
     var z=document.getElementById("cosdarr1inputfield");
     z.value="";
    var w=document.getElementById("cosdarr2inputfield");
     w.value="";  
    var p=document.getElementById("vector13content");
          p.innerHTML="";
    
}

//jaccard
function jaccardcalc(){
    var q=document.getElementById("jacarr1inputfield").value;
	var i=document.getElementById("jacarr2inputfield").value;
	var jacarr1=q.split(" ");
    var jacarr2=i.split(" ");
    
    var union = jacarr1.concat(jacarr2);
    var count=0;
    for (var i = 0; i < union.length; i++) {
        for (var j = i+1; j < union.length; j++) {
            if (union[i]=== union[j]) {
                union.splice(j, 1);
                j--;
            }
        }
    }
    for(k=0;k<jacarr1.length;k++){
        if(jacarr1[k]===jacarr2[k]){
            count++;
        }
        
        var answer=union.length/count;
    }
    
    
    var ns=document.getElementById("jacoutput");
     ns.innerHTML=answer;
    
    
}

                                                      


function clearjacarr(){
  jacarr1=[];
  jacarr2=[];
     var jacar=document.getElementById("jacoutput");
     jacar.innerHTML=" ";
     var y=document.getElementById("vector14content");
          y.innerHTML="";
     var z=document.getElementById("jacarr1inputfield");
     z.value="";
    var w=document.getElementById("jacarr2inputfield");
     w.value="";  
    var p=document.getElementById("vector15content");
          p.innerHTML="";
    
}









