function clock(){
    var date = new Date()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var session = document.querySelector(".session")

    if(hour >= 12){
        session.innerHTML = "PM"
    }else{
        session.innerHTML = "AM"
    }
    if(hour>12){
        hour -= 12
    }

    document.querySelector(".hour").innerHTML = hour
    document.querySelector(".minutes").innerHTML = minute
    document.querySelector(".seconds").innerHTML = second
}

setInterval(clock,10)