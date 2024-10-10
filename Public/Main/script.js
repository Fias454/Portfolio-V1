const HomeSection = document.getElementById("ContentMain");
const ContentEducation = document.getElementById("ContentEducation");
const ContentWorkHistory = document.getElementById("ContentWorkHistory");
const Projects = document.getElementById("Projects");
const BackGroundBtn = document.getElementById("BackGroundBtn");
const WorkHistoryBtn = document.getElementById("WorkHistoryBtn");
const BackGroudWHBtn = document.getElementById("BackGroudWHBtn");
const WorkHistoryWHBtn = document.getElementById("WorkHistoryWHBtn");
const ProjectWHBtn = document.getElementById("ProjectWHBtn");
const ProjectBtn = document.getElementById("ProjectBtn");
const BackGroundPBtn = document.getElementById("BackGroundPBtn");
const WorkHistoryPBtn = document.getElementById("WorkHistoryPBtn");
const HomeBtn = document.getElementById("HomeBtn");
const EducationBtn = document.getElementById("EducationBtn");
//
function ShowContentWorkHistory(){
    ContentEducation.style.display = "block";
    Projects.style.display = "none";
    ContentWorkHistory.style.display = "none";
}
function ShowContentEducation(){
    Projects.style.display = "none";
    ContentEducation.style.display = "none";
    ContentWorkHistory.style.display = "block";
};
function ShowProjectsDiv(){
    Projects.style.display = "block";
    ContentEducation.style.display = "none";
    ContentWorkHistory.style.display = "none";
};
function ScrollToContentEducation(){
    ContentEducation.scrollIntoView({behavior: "smooth"});
};
function ScrollToHomeSection(){
    HomeSection.scrollIntoView({behavior : "smooth"});
}
BackGroundBtn.addEventListener("click", ShowContentWorkHistory);
WorkHistoryBtn.addEventListener("click", ShowContentEducation);
WorkHistoryWHBtn.addEventListener("click", ShowContentEducation);
BackGroudWHBtn.addEventListener("click", ShowContentWorkHistory);
ProjectWHBtn.addEventListener("click", ShowProjectsDiv);
ProjectBtn.addEventListener("click", ShowProjectsDiv);
BackGroundPBtn.addEventListener("click", ShowContentWorkHistory);
WorkHistoryPBtn.addEventListener("click", ShowContentEducation);
EducationBtn.addEventListener("click", ScrollToContentEducation);
HomeBtn.addEventListener("click", ScrollToHomeSection);