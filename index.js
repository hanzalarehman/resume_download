"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResume() {
    // Get the input field values
    const nameField = document.getElementById('nameField').value;
    const contactField = document.getElementById('contactField').value;
    const emailField = document.getElementById('emailField').value;
    const addressField = document.getElementById('addressField').value;
    const objectiveField = document.getElementById('objectiveField').value;
    const workExperienceField = document.getElementById('workExperienceField').value;
    const academicQualificationsField = document.getElementById('academicQualificationsField').value;
    // Update resume content
    document.getElementById('resumeName').innerText = nameField;
    document.getElementById('resumeContact').innerText = contactField;
    document.getElementById('resumeEmail').innerText = emailField;
    document.getElementById('resumeAddress').innerText = addressField;
    document.getElementById('resumeObjective').innerText = objectiveField;
    //Update Work Experience
    const workExperienceList = document.getElementById('resumeWorkExperience');
    workExperienceList.innerHTML = ''; // Clear previous entries
    workExperienceList.innerHTML += `<li>${workExperienceField}</li>`;
    // Update Academic Qualifications
    const academicQualificationsList = document.getElementById('resumeAcademicQualifications');
    academicQualificationsList.innerHTML = ''; // Clear previous entries
    academicQualificationsList.innerHTML += `<li>${academicQualificationsField}</li>`;
    // document.getElementById('resumeNameHeading').innerHTML=nameField
    document.getElementById('resumeNameHeading').innerText = nameField;
    const formSection = document.getElementById('form');
    const resumeSection = document.getElementById('resume-temp');
    if (formSection && resumeSection) {
        formSection.style.display = 'none'; // Hide the form
        resumeSection.style.display = 'block'; // Show the resume
    }
}
function printResume() {
    window.print();
}
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeData = urlParams.get('resume');
    if (resumeData) {
        const decodedData = decodeURIComponent(resumeData);
        const data = JSON.parse(decodedData);
        document.getElementById('nameField').value = data.name;
        document.getElementById('contactField').value = data.contact;
        document.getElementById('emailField').value = data.email;
        document.getElementById('addressField').value = data.address;
        document.getElementById('objectiveField').value = data.objective;
        document.getElementById('workExperienceField').value = data.workExperience.join('\n');
        document.getElementById('academicQualificationsField').value = data.academicQualifications.join('\n');
    }
}
// Call this function on page load to populate the form if there is a resume data in URL
window.onload = handleURLParameters;
// const shareBtn:any=document.querySelector('#shareBtn')
// shareBtn.addEventListener('click',(_event: any)=>{
//         if(navigator.share){
//          navigator.share({
//             title:"google official website",
//             url:"https://www.google.com"
//          }).then(()=>{
//             console.log("thanks for sharing")
//          }).catch((error)=>{
//        console.log("error using wep api")
//        console.log(error)
//          })
//          }
//           else{
//             alert("browser does not support wep api" )
//         }
// })
function addWorkExperience() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('workExperienceField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter Here');
    let weob = document.getElementById('we');
    let workob = document.getElementById('work');
    weob.insertBefore(newNode, workob);
}
function addAcademicQualification() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('academicQualificationsField');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter Here');
    let academicob = document.getElementById('wefield1');
    let qualificationob = document.getElementById('academic');
    academicob.insertBefore(newNode, qualificationob);
}
