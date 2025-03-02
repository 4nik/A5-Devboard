function getLocalTime() {
    const dateTime = new Date();
    const setTimeFormat = {
        timeZone: 'Asia/Dhaka',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
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

document.getElementById("btn-task-2")
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
            "text-small",
            "bg-slate-100",
            "p-1",
            "rounded-xl",
            "text-gray-700",
            "mb-2",
            "text-center"
        );
        newActivity.innerText = `You have Completed Add Pay Success Modal at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })

document.getElementById("btn-task-3")
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
            "text-small",
            "bg-slate-100",
            "p-1",
            "rounded-xl",
            "text-gray-700",
            "mb-2",
            "text-center"
        );
        newActivity.innerText = `You have Completed the Add new reaction 🤲 at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })

document.getElementById("btn-task-4")
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
            "text-small",
            "bg-slate-100",
            "p-1",
            "rounded-xl",
            "text-gray-700",
            "mb-2",
            "text-center"
        );
        newActivity.innerText = `You have Completed the Fix Video Loading Issue at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })

document.getElementById("btn-task-5")
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
            "text-small",
            "bg-slate-100",
            "p-1",
            "rounded-xl",
            "text-gray-700",
            "mb-2",
            "text-center"
        );
        newActivity.innerText = `You have Completed the Integrate AI search at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })

document.getElementById("btn-task-6")
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
            "text-small",
            "bg-slate-100",
            "p-1",
            "rounded-xl",
            "text-gray-700",
            "mb-2",
            "text-center"
        );
        newActivity.innerText = `You have Completed the Review Ami Probashi Site at ${formattedTime}`;
        activityLogElement.appendChild(newActivity);
        taskCount--;
        if (!taskCount) {
            alert("congrates!!! You have completed all the current tasks");
        }
    })
document.getElementById("activity-history")
    .addEventListener("click", function () {
        const activityLogElement = document.getElementById("activity-log");
        activityLogElement.innerHTML = "";
    });

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('theme-btn').addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    const divColor = document.getElementById("div-color");
    const bodyColor = document.getElementById("body-color");
    const sectionColor = document.getElementById("section-color");
    bodyColor.style.backgroundColor = randomColor;
    divColor.style.backgroundColor = randomColor;
    sectionColor.style.backgroundColor = randomColor;
});
document.getElementById("discover-section")
    .addEventListener("click", function () {
        window.location.href = "query.html";
    });

function formatDate(date) {
    const format = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'Asia/Dhaka'
    };
    return date.toLocaleDateString('en-US', format);
}

document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    document.getElementById("current-date").innerText = formatDate(currentDate);
});