//login user...................................

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    localStorage.setItem("token", result.data);
    window.location.reload();
  } else {
    console.log(result);
  }
}

// register user.........................
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", registeruser);

async function registeruser(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;
  const name = document.getElementById("name").value;

  const result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      username,
      password,
    }),
  }).then((res) => res.json());
  if (!(result.status === "ok")) {
    document.getElementById("error-msg").innerHTML = result.error;
  } else {
    console.log(result);
    window.location.reload();
    
  }
}
