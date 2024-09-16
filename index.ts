function addWorkExperience(){
    let newNode:any=document.createElement("textarea")
    newNode.classList.add('workExperienceField')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Here')
    let weob:any=document.getElementById('we')
    let workob:any=document.getElementById('work')
    weob.insertBefore(newNode,workob)
}

function addAcademicQualification(){
    let newNode:any=document.createElement("textarea")
    newNode.classList.add('academicQualificationsField')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter Here')
    let academicob:any=document.getElementById('wefield1')
    let qualificationob:any=document.getElementById('academic')
    academicob.insertBefore(newNode,qualificationob)
}



function generateResume(): void {
    // Get the input field values
    const nameField = (document.getElementById('nameField') as HTMLInputElement).value;
    const contactField = (document.getElementById('contactField') as HTMLInputElement).value;
    const emailField = (document.getElementById('emailField') as HTMLInputElement).value;
    const addressField = (document.getElementById('addressField') as HTMLTextAreaElement).value;
    const objectiveField = (document.getElementById('objectiveField') as HTMLTextAreaElement).value;
    const workExperienceField = (document.getElementById('workExperienceField') as HTMLTextAreaElement).value;
    const academicQualificationsField = (document.getElementById('academicQualificationsField') as HTMLTextAreaElement).value;

    // Update resume content
    (document.getElementById('resumeName') as HTMLElement).innerText = nameField;
    (document.getElementById('resumeContact') as HTMLElement).innerText = contactField;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = emailField;
    (document.getElementById('resumeAddress') as HTMLElement).innerText = addressField;
    (document.getElementById('resumeObjective') as HTMLElement).innerText = objectiveField;

    // Update Work Experience
    const workExperienceList = document.getElementById('resumeWorkExperience') as HTMLUListElement;
    workExperienceList.innerHTML = ''; // Clear previous entries
    workExperienceList.innerHTML += `<li>${workExperienceField}</li>`;

    // Update Academic Qualifications
    const academicQualificationsList = document.getElementById('resumeAcademicQualifications') as HTMLUListElement;
    academicQualificationsList.innerHTML = ''; // Clear previous entries
    academicQualificationsList.innerHTML += `<li>${academicQualificationsField}</li>`;

    (document.getElementById('resumeNameHeading') as HTMLElement).innerText = nameField;

    // Generate and set the shareable link
    const queryParams = new URLSearchParams({
        name: nameField,
        contact: contactField,
        email: emailField,
        address: addressField,
        objective: objectiveField,
        workExperience: workExperienceField,
        academicQualifications: academicQualificationsField
    });

    const encodedParams = encodeURIComponent(queryParams.toString());
    const baseUrl = window.location.origin; // Adjust if using a specific path
    const shareableLink = document.getElementById('share-link') as HTMLAnchorElement;

    shareableLink.href = `${baseUrl}/resume?data=${encodedParams}`;
    shareableLink.innerText = `${baseUrl}/resume?data=${encodedParams}`;

    // Show the shareable link section
    document.getElementById('shareable-link')!.style.display = 'block';

    const formSection = document.getElementById('form') as HTMLElement;
    const resumeSection = document.getElementById('resume-temp') as HTMLElement;

    if (formSection && resumeSection) {
        formSection.style.display = 'none'; // Hide the form
        resumeSection.style.display = 'block'; // Show the resume
    }
}

function printResume(): void {
    window.print();
}



window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data = urlParams.get('data');

    if (data) {
        const decodedParams = decodeURIComponent(data);
        const params = new URLSearchParams(decodedParams);

        (document.getElementById('nameField') as HTMLInputElement).value = params.get('name') || '';
        (document.getElementById('contactField') as HTMLInputElement).value = params.get('contact') || '';
        (document.getElementById('emailField') as HTMLInputElement).value = params.get('email') || '';
        (document.getElementById('addressField') as HTMLTextAreaElement).value = params.get('address') || '';
        (document.getElementById('objectiveField') as HTMLTextAreaElement).value = params.get('objective') || '';
        (document.getElementById('workExperienceField') as HTMLTextAreaElement).value = params.get('workExperience') || '';
        (document.getElementById('academicQualificationsField') as HTMLTextAreaElement).value = params.get('academicQualifications') || '';

        generateResume(); // Generate the resume based on the parameters
    }
};










