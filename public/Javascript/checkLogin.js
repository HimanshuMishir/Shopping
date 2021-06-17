const check_login = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      const linkImgBtn = document.createElement("a");
      linkImgBtn.href = "./user.html";
      const imgBtn = document.createElement("img");
      imgBtn.className = "userIcon";
      imgBtn.src = "./Icons/account.png";
      linkImgBtn.appendChild(imgBtn);
      const loginSignup = document.getElementById("login-signup-link");
      loginSignup.replaceChild(linkImgBtn, loginSignup.childNodes[0]);
    }
  };
  
  window.onload = check_login;