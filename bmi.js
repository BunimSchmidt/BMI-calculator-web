


function calculate()
{
  var age =0;
  age=document.getElementById("age").value;
  var waghit =0; 
  waghit=document.getElementById("waghit").value;
  var haight =0; 
  haight=document.getElementById("haight").value;
  if(age==0 || waghit==0 || haight==0 && !(document.getElementById("man").checked||document.getElementById("female").checked))
  alert("הזן נתונים בכל השדות");
  else if(age<19)
  alert("המחשבון מיועד מגיל 19 בלבד");
  else if(age>120)
  alert("אל תעבוד עלי, הכנס את גיך האמיתי");
  else if(waghit>340)
  alert("המחשבון לא מיועד לפילים");
else 
document.getElementById("result").innerHTML=" המשקל שלך "+waghit+" ק''ג "+"<br>"+" המשקל הרצוי "+desirableWeight(haight)+" ק''ג "+"<br>"+" BMI: "+bmi(waghit, haight)+"<br>"+" סטטוס המשקל שלך: "+status(bmi(waghit, haight));

   function desirableWeight(haight)
   {
   if(document.getElementById("man").checked)
    return desirableWeightMale(haight)
  	else 
    return desirableWeightFemale(haight)
}
	 //פונקציה לחישוה מספר BMI
   function bmi(weight,height)
	{
		height/=100;
		
		height= Math.pow(height,2);
		
		var temp=weight / height;
		temp=temp.toFixed(2);
		
		return	temp;
	}
	
	//פונקציה לחישוב סטטוס משקל
   function status(bmi) 
	{
		var result = null;
		
		if(bmi<15)
			result	="אנורקטי";
		else if( bmi>=15&&bmi<18.5)
			result	="תת משקל";
		else if( bmi>18.5&&bmi<25)
			result	="נורמלי";
		else if( bmi>=25&&bmi<30)
			result	="עודף משקל";
		else if( bmi>=30&&bmi<35)
			result	="שמן";
		else if( bmi>35)
			result	="שמן מאוד";

		return result;
	}
}
//פונקציה לחישוב משקל רצוי לגבר

function desirableWeightMale(haight)
	{
        var temp=(48 + 1.1 * (haight - 152));
        temp=temp.toFixed(2);

		return temp	;	
	}
    //פונקציה לחישוב משקל רצוי לאישה
    function desirableWeightFemale(haight)
	{
        var temp= (45.4 + 0.9 * (haight - 152));
        temp=temp.toFixed(2);

	 return	temp;
  }
  
  function slider()
  {
  var haight =0; 
  haight=document.getElementById("haight").value;
  document.getElementById("haightl").innerHTML=" מטר "+haight/100;
  }
