var change = 0;
function toggleImg() {
    change++;
    if(change % 2 == 1){
        document.getElementById("img").src = "./img/chesk_icon_on.png";
    }
    else
        document.getElementById("img").src = "./img/check_icon_off.png";
}