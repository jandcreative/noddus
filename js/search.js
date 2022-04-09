const search = document.querySelector('.fa-search');
const form = document.querySelector('.search-form');
const links = document.querySelector('.box-items');

const list = document.querySelectorAll(".item-list");
const input = document.querySelector("input");


search.addEventListener ('click', () => {
    form.classList.toggle('block');
    links.classList.toggle('block');
})

input.addEventListener("keyup", runForEach);

function runForEach() {
  return list.forEach(filterItems);
}

function filterItems(item) {
  const getInput = input.value;
  const lowerCaseInput = getInput.toLowerCase();
  const lowerCaseText = item.innerHTML.toLowerCase();
  console.log(item);
  if (lowerCaseText.includes(lowerCaseInput)) {
    return (item.style.display = "");
  } else {
    return (item.style.display = "none");
  }
}


