const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer')
const copyright = document.createElement('p')

copyright.innerHTML = "&copy; Dennis Williams " + thisYear ; 
footer.appendChild(copyright);

let skills = ['JavaScript','HTML','Project Management','CSS'];
let skillsSection = document.querySelector('#skills')
let skillsList = skillsSection.querySelector('ul')

for (let i = 0; i<skills.length; i++) {
     let skill = document.createElement('li')

     skill.innerHTML = skills[i] 
     skillsList.appendChild(skill);
};

let messageForm = document.querySelector('[name="leave_message"]')
messageForm.addEventListener("submit", (event) => {
     event.preventDefault();
     let leaveName = messageForm.name.value
     let leaveEmail = messageForm.email.value
     let leaveMessage = messageForm.message.value

     console.log(leaveName + ",", leaveEmail + ",", leaveMessage)
     
     let messageSection = document.querySelector('#messages')
     let messageList = messageSection.querySelector('ul')
     let newMessage = document.createElement('li')

     newMessage.innerHTML = `<a href=mailto:${leaveEmail}>${leaveName}</a> <span> wrote: ${leaveMessage}</span>` 

     let removeButton = document.createElement('button')
     removeButton.innerText = "remove" 
     removeButton.type = "button"
     removeButton.addEventListener('click', () =>{
          let entry = removeButton.parentNode
          entry.remove();
     })
     newMessage.appendChild(removeButton)
     messageList.appendChild(newMessage)
     messageForm.reset();
}

);
 
var githubRequest = new XMLHttpRequest();
     githubRequest.open("GET", "https://api.github.com/users/Dlwjr0103/repos"); 
     githubRequest.send();
    
 githubRequest.addEventListener("load", function(){
     if (githubRequest.readyState === 4){
      if (githubRequest.status ===200){
           console.log("ok")
     let repositories = JSON.parse(this.response);
      console.log(repositories);


 const projectSection = document.querySelector('#projects')
 const projectList = projectSection.querySelector('ul')

 for (let i = 0; i < repositories.length; i++){

     const project = document.createElement('li')
     project.innerText= repositories[i].name;
     projectList.appendChild(project)
     }
    }
   }
 })

