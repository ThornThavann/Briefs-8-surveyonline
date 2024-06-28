document.forms[0].addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");

  let grades = [];
  const grade = document.getElementsByName("grade");
  for (let i = 0; i < grade.length; i++) {
    if (grade[i].checked) {
      grades.push(grade[i].value);
    }
  }

  let schoolTypes = [];
  const schoolType = document.getElementsByName("schoolType");
  for (let i = 0; i < schoolType.length; i++) {
    if (schoolType[i].checked) {
      schoolTypes.push(schoolType[i].value);
    }
  }

  let interests = [];
  const inter = document.getElementsByName("inter");
  for (let i = 0; i < inter.length; i++) {
    if (inter[i].checked) {
      interests.push(inter[i].value);
    }
  }

  let experanswer = document.getElementById("experanswer");

  let experiences = [];
  const experience = document.getElementsByName("experience");
  for (let i = 0; i < experience.length; i++) {
    if (experience[i].checked) {
      experiences.push(experience[i].value);
    }
  }

  let aspects = [];
  const aspect = document.getElementsByName("aspect");
  for (let i = 0; i < aspect.length; i++) {
    if (aspect[i].checked) {
      aspects.push(aspect[i].value);
    }
  }

  let pedagogys = [];
  const pedagogy = document.getElementsByName("pedagogy");
  for (let i = 0; i < pedagogy.length; i++) {
    if (pedagogy[i].checked) {
      pedagogys.push(pedagogy[i].value);
    }
  }

  let pedagogyanswer = document.getElementById("pedagogyanswer");

  let pedagogylearns = [];
  const pedagogylearn = document.getElementsByName("pedagogylearn");
  for (let i = 0; i < pedagogylearn.length; i++) {
    if (pedagogylearn[i].checked) {
      pedagogylearns.push(pedagogylearn[i].value);
    }
  }

  let pedagogyexperience = document.getElementById("pedagogyexperience");

  let prefers = [];
  const prefer = document.getElementsByName("prefer");
  for (let i = 0; i < prefer.length; i++) {
    if (prefer[i].checked) {
      prefers.push(prefer[i].value);
    }
  }

  let environments = [];
  const environment = document.getElementsByName("environment");
  for (let i = 0; i < environment.length; i++) {
    if (environment[i].checked) {
      environments.push(environment[i].value);
    }
  }

  let interactions = [];
  const interaction = document.getElementsByName("interaction");
  for (let i = 0; i < interaction.length; i++) {
    if (interaction[i].checked) {
      interactions.push(interaction[i].value);
    }
  }

  let feedbacks = [];
  const feedback = document.getElementsByName("feedback");
  for (let i = 0; i < feedback.length; i++) {
    if (feedback[i].checked) {
      feedbacks.push(feedback[i].value);
    }
  }

  let achieves = [];
  const achieve = document.getElementsByName("achieve");
  for (let i = 0; i < achieve.length; i++) {
    if (achieve[i].checked) {
      achieves.push(achieve[i].value);
    }
  }

  let future = document.getElementById("future");
  let specific = document.getElementById("specific");
  let suggestions = document.getElementById("suggestions");
  let preferences = document.getElementById("preferences");

  let answers = [];
  for (let i = 0; i <= 20; i++) {
    answers.push({
      email: "thavann.thorn@gmail.com",
      fullname: "Thorn Thavann",
      question_id: i + 1,
      created_by: "Group 2",
    });
  }

  answers[0].answer = [fullName.value];
  answers[1].answer = [email.value];
  answers[2].answer = grades;
  answers[3].answer = schoolTypes;
  answers[4].answer = interests;
  answers[5].answer = [experanswer.value];
  answers[6].answer = experiences;
  answers[7].answer = aspects;
  answers[8].answer = pedagogys;
  answers[9].answer = [pedagogyanswer.value];
  answers[10].answer = pedagogylearns;
  answers[11].answer = [pedagogyexperience.value];
  answers[12].answer = prefers;
  answers[13].answer = environments;
  answers[14].answer = interactions;
  answers[15].answer = feedbacks;
  answers[16].answer = achieves;
  answers[17].answer = [future.value];
  answers[18].answer = [specific.value];
  answers[19].answer = [suggestions.value];
  answers[20].answer = [preferences.value];



  if (!fullName || fullName.length < 3) {
    errorMessage.innerText = 'Name must be at least 3 characters long.';
    return false;
}

if (!email) {
    errorMessage.innerText = 'Please enter a valid email.';
    return false;
}

if (!grades) {
    errorMessage.innerText = 'Please select your current grade level.';
    return false;
}

if (!schoolTypes) {
    errorMessage.innerText = 'Please select the type of school.';
    return false;
}
if (!interests) {
    errorMessage.innerText = 'Please select the interestEWebDev.';
    return false;
}
if (!experanswer) {
    errorMessage.innerText = 'Please select the previous experience.';
    return false;
}
if (!experiences) {
    errorMessage.innerText = 'Please complate Experience Description.';
    return false;
}
if (!aspects) {
    errorMessage.innerText = 'Please check interest aspects.';
    return false;
}
if (!pedagogys) {
    errorMessage.innerText = 'Please check familiar with the concept of active pedagogy .';
    return false;
}
if (!pedagogyanswer) {
    errorMessage.innerText = 'Please complete understanding Active Pedagogy.';
    return false;
}
if (!pedagogylearns) {
    errorMessage.innerText = 'Please check participated Active Pedagogy.';
    return false;
}
if (!pedagogyexperience) {
    errorMessage.innerText = 'Please check experience Active Pedagogy.';
    return false;
}
if (!prefers) {
    errorMessage.innerText = 'Please check learning Preferences.';
    return false;
}
if (!environments) {
    errorMessage.innerText = 'Please check learning Enviroment.';
    return false;
}
if (!interactions) {
    errorMessage.innerText = 'Please select peer interaction.';
    return false;
}
if (!feedbacks) {
  errorMessage.innerText = 'Please select peer interaction.';
  return false;
}
if (!achieves) {
    errorMessage.innerText = 'Please check instructor Feedback.';
    return false;
}
if (!future) {
    errorMessage.innerText = 'Please check goal achieve.';
    return false;
}
if (!specific) {
    errorMessage.innerText = 'Please complete webDevelopmentHelp.';
    return false
}
if (!suggestions) {
    errorMessage.innerText = 'Please complete improvment suggestion.';
    return false;
}
if (!preferences) {
    errorMessage.innerText = 'Please complete additional comments.';
    return false;
}
  getanswer(answers);
  
}
function getanswer(data) {
  const key = new Headers();
  key.append(
    "x-secret-key",
    "3c9e1f0a4d0f4e9b8b1a2e0d4e3f5a6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2"
  );
  key.append("Content-type", "application/data");
  fetch("https://wmad-survey-backend.vercel.app/api/form-answers/submit", {
    method: "POST",
    body: JSON.stringify({
      answers: data,
    }),
    headers: key,
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
    window.location.href = "../submit-page/index.html";

   
}
