var form = document.getElementById("editForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var birthday = document.getElementById("birthday").value;
  var phone = document.getElementById("phone").value;
  var newPassword = document.getElementById("newPassword").value;

  fetch("https://zaf-dev.herokuapp.com/v1/user/edit", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      name: name,
      email: email,
      birthday: birthday,
      phone: phone,
      newPassword: newPassword,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      if (data.success) {
        localStorage.setItem("name", name);
        window.location.href = "mainUser.html";
      }
      if (data.errors) {
        alert(data.errors);
      }
    })

    .catch((error) => console.log("Ocorreu um erro, tente novamente"));
});
