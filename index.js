let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")

inputButton.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})
