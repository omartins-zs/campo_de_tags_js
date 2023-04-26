const ul = document.querySelector("ul")
const input = document.querySelector("input")

const itemList = []

input.addEventListener("keydown", (e) => {
    if (e.code.includes("Enter") && e.target.value) {
        itemList.push(e.target.value);
        input.value = "";

        loadItens()
    }
})

function loadItens() {
    ul.innerHTML = ""

    itemList.forEach((item, i) => {
        const li = document.createElement("li")

        li.innerHTML = `
        <div>
        <span>${item}</span>
            <button onclick="removeItem(${i})">x</button>
        </div>`

        ul.appendChild(li);
    })
}