require("")
const userId = "Matts966";
const request = new XMLHttpRequest();
request.open("GET", `https://api.github.com/users/${userId}`);
request.addEventListener("load", (event) => {
    console.log(event.target.status); // => 200
    console.log(event.target.responseText); // => "{...}"
});
request.send();
