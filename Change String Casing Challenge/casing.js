let user = String(prompt("What is your name?"));

let x = user[0].toUpperCase() + user.substring(1, user.length).toLowerCase();

alert(`Hello ${x}`);
