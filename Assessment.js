 //Question 1
 function fac(number){
    
     let factorial = 1;
    
     if(number < 0 ){
       return "fgru"
     }else {
         for(let num = 2; num <= number; num++ ){
             factorial = factorial * num;
         }
    }
    return factorial
    }


// Question 2
function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }

  

  
   //Question 3
  function upperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

 

 
//  Question 4
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
