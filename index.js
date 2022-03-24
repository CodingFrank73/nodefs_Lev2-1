const fs = require("fs")
const data = require("./data.json")

let t = "";
data.map((item) => {
    t += `${item.id} - ${item.title}\n${item.description}\n`
})

fs.writeFile("./json.txt", t, (err) => {
    if (err) {
        console.log(err);
        return
    }
})