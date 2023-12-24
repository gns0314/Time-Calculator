document.addEventListener("DOMContentLoaded", function () {
    const timesDiv = document.getElementById("times");
    const addButton = document.getElementById("add-time");
    const plusButton = document.getElementById("plus");
    const resultDiv = document.getElementById("result");

    addButton.addEventListener("click", function () {
        const newTimeDiv = document.createElement("div");
        newTimeDiv.className = "time";

        newTimeDiv.innerHTML = `
            <input type="number" class="hour" max="23">
            <label for="hour">시간</label>
            <input type="number" class="min" max="59">
            <label for="min">분</label>
            <input type="number" class="sec" max="59">
            <label for="sec">초</label>
        `;

        timesDiv.appendChild(newTimeDiv);
    });

    plusButton.addEventListener("click", function () {
        const timeInputs = document.querySelectorAll(".time");
        let totalSeconds = 0;

        timeInputs.forEach(function (timeInput) {
            const hour = parseInt(timeInput.querySelector(".hour").value) || 0;
            const min = parseInt(timeInput.querySelector(".min").value) || 0;
            const sec = parseInt(timeInput.querySelector(".sec").value) || 0;

            if (min > 59 || sec > 59) {
                alert("올바른 시간을 입력하세요.");
                return;
            }

            totalSeconds += hour * 3600 + min * 60 + sec;
        });

        const resultTime = secondsToTime(totalSeconds);

        resultDiv.textContent = `결과: ${resultTime.hours}시간 ${resultTime.minutes}분 ${resultTime.seconds}초`;
    });

    function secondsToTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const sec = remainingSeconds % 60;
        return { hours, minutes, seconds: sec };
    }
});
