const usersList = document.querySelector("#users")
const pagesNum = document.querySelector("#pagesNum")
const quantityInput = document.querySelector("#quantity")
const quantityButton = document.querySelector("#quantityButton")

async function fetchUsers(pageNum, size) {
    await fetch(`http://localhost:8080/user?page=${pageNum}&size=${size}`, { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(data => {
            usersList.innerHTML = ""
            for (user of data.content) {
                const p = document.createElement("p")
                p.innerHTML = user.id + " - " + user.name
                p.classList.add(user.id)
                usersList.appendChild(p)

                if (user.id % 2 == 0) {
                    p.classList.add("background-pair")
                }
            }

            pagesNum.innerHTML = ""
            for (let i = 0; i < data.totalPages; i++) {
                const p = document.createElement("p")
                p.innerHTML = i + 1
                p.classList.add("pageSelector")
                p.addEventListener("click", (self) => fetchUsers(self.target.innerHTML - 1, quantityInput.value > 0 ? quantityInput.value : 10))
                pagesNum.appendChild(p)
            }
        })
}

fetchUsers(0, quantityInput.value ? quantityInput.value : 10)

quantityButton.addEventListener("click", () => {
    fetchUsers(0, quantityInput.value)
})


