function usernameValidity(username){
    var valUsername = '';
    var polaUsername = /^[a-z][^A-Z\W]{4,11}$/;
    valUsername = polaUsername.test(username);
    return valUsername;
}

function passwordValidity(password){
    var valPassword = '';
    var polaPassword = /^(?=.*\d)(?=.*\W)(?=.*[A-Z]{5}).{7}$/;
    valPassword = polaPassword.test(password);
    return valPassword;
}