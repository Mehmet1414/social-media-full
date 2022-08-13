var settingsmenu = document.querySelector(".settings-menu"); /* settings menu acip kapatmak icin */
var darkBtn = document.getElementById("dark-btn"); /* buton click degisimi icin */

function sttingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height"); /* settings menu acip kapatmak icin */
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on"); /* buton click degisimi icin */
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
    }
    else{
    localStorage.setItem("theme", "light");

    }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light");
}