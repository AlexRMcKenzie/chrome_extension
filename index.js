let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputButton.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})

let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>"
  console.log(listItems)
}

ulEl.innerHTML = listItems
