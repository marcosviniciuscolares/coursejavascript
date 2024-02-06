let username;

document.getElementById('mybutton').onclick = function(){
    username = document.getElementById("itext").value;
    document.getElementById('myh1').textContent = `Hello, ${username}`;
}
