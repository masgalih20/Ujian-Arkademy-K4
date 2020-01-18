function cetak_gambar(x){
    if(x % 2 == 1){
        var s = '';
        for (var i = 0; i < x; i++){
            for (var j = 0; j < x; j++){
                s += '*   ';
            }
            s += '\n';
        }
        return '\n --- panjang --- \n' + s;
    }else{
        console.log('Parameter harus angka dan ganjil!');
    }
}