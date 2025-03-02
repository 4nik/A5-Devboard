function getLocalTime() {
    const dateTime = new Date();
    const setTimeFormat = { timeZone: 'Asia/Dhaka', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = dateTime.toLocaleTimeString('en-US', setTimeFormat);
    return formattedTime;
}

let taskCount = 6;
document.getElementById("btn-task-1")
    .addEventListener("click", function (event) {
        alert("Board updated Successfully");
        const button = event.target;
        const taskAssignedElement = document.getElementById("remaining-task");
        const activityLogElement = document.getElementById("activity-log");
        const currentCount = parseInt(taskAssignedElement.innerText);
        const totalTask = document.getElementById("counter");
        const totalTaskCount = parseInt(totalTask.innerText);
        taskAssignedElement.innerText = currentCount - 1;
        totalTask.innerText = totalTaskCount + 1;
        button.disabled = true;
        const newActivity = document.createElement("p");
        const formattedTime = getLocalTime();
        newActivity.classList.add(
            "text-base",
            "bg-slate-100",
            "p-2",
            "rounded-xl",
            "text-gray-700"
        );
        newActivity.innerText = `You have Completed The Fix Mobile Button Issue at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })