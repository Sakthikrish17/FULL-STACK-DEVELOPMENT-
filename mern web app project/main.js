function addJob() {
    var companyName = document.getElementById("companyName").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var jobMode = document.getElementById("jobMode").value;
    var salary = document.getElementById("salary").value;
    var startDate = document.getElementById("startDate").value;
    var location = document.getElementById("location").value;

    var jobList = document.getElementById("jobList");

    var jobItem = document.createElement("div");
    jobItem.className = "job-item";
    jobItem.innerHTML = "<strong>Company Name:</strong> " + companyName + "<br>" +
                        "<strong>Job Title:</strong> " + jobTitle + "<br>" +
                        "<strong>Job Mode:</strong> " + jobMode + "<br>" +
                        "<strong>Salary:</strong> $" + salary + "<br>" +
                        "<strong>Start Date:</strong> " + startDate + "<br>" +
                        "<strong>Location:</strong> " + location + "<br>" +
                        "<button onclick='deleteJob(this)'>Delete</button>";
    
    jobList.appendChild(jobItem);

    // Clear input fields after submitting
    document.getElementById("companyName").value = "";
    document.getElementById("jobTitle").value = "";
    document.getElementById("jobMode").selectedIndex = 0;
    document.getElementById("salary").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("location").value = "";
}

function deleteJob(element) {
    element.parentNode.remove();
}