function handleLoginCheck() {

let key = window.localStorage.getItem('session');
if(key){
    window.location = "success.html"; //redirecting to other page
}


}

