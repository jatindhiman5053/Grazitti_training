function car(){
    let length = 6;
    for(let i = 1; i<=length; i++){
        if(i != 6){
            console.log(`Value of i is ${i} in if condition`);
        }else{
            console.log(`Value of i is ${i} in else condition`);
            i = 1;
            console.log(i);
            break;
            
        }
    }
}

car();