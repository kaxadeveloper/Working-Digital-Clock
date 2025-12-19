setInterval(function () {
    const clock = document.querySelector(".display");
    let time = new Date();

    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();

    // Determine AM / PM FIRST
    let day = hr >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hr = hr % 12;
    hr = hr === 0 ? 12 : hr;

    // Add leading zeros
    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    hr  = hr  < 10 ? '0' + hr  : hr;

    clock.textContent = `${hr}:${min}:${sec} ${day}`;
}, 1000);
