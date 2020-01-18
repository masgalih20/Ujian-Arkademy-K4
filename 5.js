function sequence(x,y){
    if(x>y){
        var A = [];
        for(var i = 0; i ; i++){
            A(x++) = Math.pow(i-1, 2) % (x++);
        }
    }else{
        console.log('parameter x harus lebih besar dibanding y');
    }
}