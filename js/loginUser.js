var form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var cpf_cnpj = document.getElementById("cpf_cnpj").value;
  var password = document.getElementById("password").value;
  var releaseCode = document.getElementById("releaseCode").value;

  fetch("https://zaf-dev.herokuapp.com/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpf_cnpj: cpf_cnpj,
      password: password,
      releaseCode: releaseCode,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      if (data.success) {
        localStorage.setItem("token", data.user.token);
        localStorage.setItem("name", data.user.name);
        window.location.href = "mainUser.html";
      }
      if (data.errors) {
        alert(data.errors);
      }
    })

    .catch((error) => console.log("Ocorreu um erro, tente novamente"));
});
