clock()
function clock(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let session = 'AM'
    if (hour > 12) {
        hour = hour - 12
        session = 'PM'
    }

    hour = hour < 10 ? "0"+hour : hour
    minute = minute < 10 ? "0"+minute : minute
    second = second < 10 ? "0"+second : second
    
    let time = hour + ":" + minute + ":" + second + " " + session

    setTimeout(clock, 1000)


    document.getElementById("clock").innerText = time

}