function convertSuhu(){
     var c,f,hasil,pil;
     x=document.suhu.temp.value;
     Number(x);
     for (var i=0;i<document.suhu.pilihan.length;i++){
           if(document.suhu.pilihan[i].checked==true){
                tempType=document.suhu.pilihan[i].value;
                break;
           }
          
     }
     if(tempType=='fahrenheit'){
           hasil=9/5*x+32;
     }else{
           hasil=(x-32)*5/9;
     }
     document.suhu.resultfield.value=hasil;
     
}