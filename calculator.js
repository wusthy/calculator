/**
 * Created by Administrator on 2017/4/20.
**/
var Ishow = document.getElementById('ishow');
var calString = '';
//var len = Ishow.innerText
//Ishow.innerHTML = '2++++++++2';
function Clearbutton()
{
    Ishow.innerHTML='';
    calString = '';
}
function SInput(num)
{
    var len = 14;
    calString+=num.value;
    if(Ishow.innerHTML.length<=14)
         Ishow.innerHTML+=num.value;
}

function Calculatoring()
{
   var symarr = [];
   var numarr = [];
   var Slen =  calString.length;
   try{
       for(var i =0;i< Slen;i++) {
           var tem = calString[i];
           if (tem == '(');
           else if (tem == '+') symarr.push(tem);
           else if(tem == '-')  symarr.push(tem);
           else if(tem == '¡Á') symarr.push(tem);
           else if (tem == '¡Â') symarr.push(tem);
           else if(tem == ')')
           {
               var sym = symarr.pop();
               //alert(sym);
               var num = numarr.pop();
               if(sym === undefined || num === undefined)
                   throw new ReferenceError();
               //alert(num);
               if (sym == '+') num = num+numarr.pop();
               else if(sym == '-') num=numarr.pop()-num;
               else if(sym == '¡Á') num=numarr.pop()*num;
               else if(sym == '¡Â') num = numarr.pop()/num;

               if(num === undefined)
                  throw new ReferenceError();
               numarr.push(num);

           }
           else numarr.push(parseInt(tem));
       }
       var sho = numarr.pop();
       if(isNaN(sho))
          throw new ReferenceError();
       Ishow.innerHTML = sho;
       //alert(numarr);
   }catch(e)
   {
       Ishow.innerHTML = '´íÎó';
   }
}