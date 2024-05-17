const questions = document.querySelectorAll(".question");
const toggles = document.querySelectorAll(".toggle");
const answers = document.querySelectorAll(".answer-container");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    if(answers[index].classList.contains("hidden")) {
      answers[index].classList.remove("hidden");
      toggles[index].classList.add("minus");
    } else {
      answers[index].classList.add("hidden");
      toggles[index].classList.remove("minus");
    }
  });
});

toggles.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    if(answers[index].classList.contains("hidden")) {
      answers[index].classList.remove("hidden");
      toggles[index].classList.add("minus");
    } else {
      answers[index].classList.add("hidden");
      toggles[index].classList.remove("minus");
    }
  });
});