const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "./home.html");
    document.getElementById("menuHome").style = "color: black; background-color: white;";
    document.getElementById("menuGame").style = "color: white; background-color: #298eb;";
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb;";
}

const menuJukebox = () => {
    document.getElementById("contentFrame").setAttribute("src", "./jukebox.html");
    document.getElementById("menuJukebox").style = "color: black; background-color: white;";
    document.getElementById("menuGame").style = "color: white; background-color: #298eb;";
    document.getElementById("menuHome").style = "color: white; background-color: #298eb;";
}

const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src", "./game.html");
    document.getElementById("menuGame").style = "color: black; background-color: white;";
    document.getElementById("menuHome").style = "color: white; background-color: #298eb;";
    document.getElementById("menuJukebox").style = "color: white; background-color: #298eb;";
}