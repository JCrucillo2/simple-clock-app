const hoursT = document.getElementById("hour");
const minutesT = document.getElementById("minutes");
const secondsT = document.getElementById("seconds");
const dnT = document.getElementById("dn");

const updateClock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let dn = "AM";

    if (h > 12) {
        h = h - 12;
        dn = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursT.innerText = h;
    minutesT.innerText = m;
    secondsT.innerText = s;
    dnT.innerText = dn;

    setTimeout(() => {
        updateClock();
    }, 1000);
};

updateClock();
