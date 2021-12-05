function adduser()
{
    var user_name = document.getElementById("user_name").value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(user_name))
    {
        return;
    }

    localStorage.setItem("userName", user_name);
    window.location = "kwitter_room.html";
}