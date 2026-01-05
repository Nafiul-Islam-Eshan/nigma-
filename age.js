function selectAge(group) {
  // Save selected age group
  localStorage.setItem("ageGroup", group);

  // Optional fun feedback
  console.log("Selected Age Group:", group);

  // Redirect to Questions page
  window.location.href = "questions.html";
}
