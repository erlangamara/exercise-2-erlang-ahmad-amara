function balikString(str){
    var kataTerbalik = '';
    for (i = str.length - 1; i >= 0; i--){
        kataTerbalik += str[i];
    }

    return kataTerbalik;
}

console.log(balikString('hello world!'));