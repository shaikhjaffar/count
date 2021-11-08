var count =0 ;
function changeCount(num){
    if(num==0){
       count = 0;
       document.getElementById("count").innerHTML = count;
    }
    else{
    count += num;
    document.getElementById("count").innerHTML = count; 
}
}