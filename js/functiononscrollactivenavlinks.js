window.onscroll=function (){
   mousescrolleffect();
}

// control navigation bar postion control when scroll
function mousescrolleffect(){
    if(document.body.scrollTop > 1|| document.documentElement.scrollTop > 1){
        document.getElementById("headersection").style.top = "0";
        document.getElementById("headersection").style.position = "fixed";
        document.getElementById("headersection").style.width = "100%";
        document.getElementById("headersection").style.backgroundColor = "white";
        document.getElementById("headersection").style.webkitTextFillColor = "black";
        document.getElementById("headersection").style.active = "red";
        document.getElementById("getstartbtn").style.webkitTextFillColor = "white";
        document.getElementById("dotssss").style.webkitTextFillColor = "red";
        document.getElementById("mobilemenu").style.webkitTextFillColor = "black";
        document.getElementById("mobileicon1").style.backgroundColor = "black";
        document.getElementById("mobileicon2").style.backgroundColor = "black";
        document.getElementById("mobileicon3").style.backgroundColor = "black";
        document.getElementById("append").style.color = "black";
        document.getElementById("dropmenus").style.backgroundColor = "white";
        document.getElementById("headersection").style.boxShadow = "0px 0px 10px 0px lightgray";
        document.getElementById("toparrow").style.display = "flex";
    }
    else
    {
        document.getElementById("headersection").style.top = "-1px";
        document.getElementById("headersection").style.position = "fixed";
        document.getElementById("headersection").style.width = "100%";
        document.getElementById("headersection").style.backgroundColor = "transparent";
        document.getElementById("headersection").style.boxShadow = "0px 0px 0px 0px whitesmoke";
        document.getElementById("append").style.color = "white";  
        document.getElementById("dropmenus").style.backgroundColor = "transparent";
        document.getElementById("headersection").style.webkitTextFillColor = "whitesmoke";
        document.getElementById("headersection").style.active = "red";
        document.getElementById("mobileicon1").style.backgroundColor = "whitesmoke";
        document.getElementById("mobileicon2").style.backgroundColor = "whitesmoke";
        document.getElementById("mobileicon3").style.backgroundColor = "whitesmoke";
        document.getElementById("toparrow").style.display = "none";
        document.getElementById("mobilemenu").style.webkitTextFillColor = "black";
    }
}
