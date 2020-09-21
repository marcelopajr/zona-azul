var form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var cpf_cnpj = document.getElementById("cpf_cnpj").value;
  var birthday = document.getElementById("birthday").value;
  var phone = document.getElementById("phone").value;

  fetch("https://zaf-dev.herokuapp.com/v1/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
      cpf_cnpj: cpf_cnpj,
      birthday: birthday,
      phone: phone,
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
