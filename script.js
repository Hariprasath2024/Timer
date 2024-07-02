const t = document.getElementById("ta");
const tas = document.getElementById("task");
const de = document.getElementById("des");
const n = document.getElementById("second");
const n1 = document.getElementById("minutes");
const n2 = document.getElementById("hours");

let sec = 0, min = 0, hou = 0;
let s;
const st = document.getElementById("start");

function times() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hou++;
        min = 0;
    }
    n.textContent = sec.toString().padStart(2, '0');
    n1.textContent = min.toString().padStart(2, '0');
    n2.textContent = hou.toString().padStart(2, '0');
}

function start() {
    if (st.textContent === "Stop Timer") {
        clearInterval(s);
        t.innerHTML += `<tr><td>${tas.value}</td><td>${de.value}</td><td>${hou.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}</td></tr>`;
        tas.value = "";
        de.value = "";
        st.style.backgroundColor = 'green';
        st.textContent = "Start Timer";
        sec = 0;
        min = 0;
        hou = 0;
        n.textContent = "00";
        n1.textContent = "00";
        n2.textContent = "00";
    } else {
        st.style.backgroundColor = 'red';
        st.textContent = "Stop Timer";
        s = setInterval(times, 1000);
    }
}

st.addEventListener("click", start);