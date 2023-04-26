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