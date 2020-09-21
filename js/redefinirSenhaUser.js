var form = document.getElementById("senhaForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var cpf_cnpj = document.getElementById("cpf_cnpj").value;

  fetch("https://zaf-dev.herokuapp.com/v1/user/forgotPassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpf_cnpj: cpf_cnpj,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      if (data.errors) {
        alert(data.errors);
      }
    })

    .catch((error) => console.log("Ocorreu um erro, tente novamente"));
});
