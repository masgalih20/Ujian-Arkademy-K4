var content = '';

function kata(content){
    var i = 0;
    var jumlahKata = 1;

    while(i <= content.lenght){
        if(content.substring(i, i+1) == " "){
            jumlahKata++;
            i++;
        }
        i++;
    }
    return jumlahKata;
}