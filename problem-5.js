//Find if anybody got A+ 
//marks = [78 82 68]
function checkGpa(arr){
    for(let i = 0; i < arr.length; i++){
        // console.log('Friend'+ i + 'th mark: '+ arr[i]);
        if(arr[i] >= 80){
            return true;
        }
        
    }
    return false;
}
console.log(checkGpa([78, 79, 69]));