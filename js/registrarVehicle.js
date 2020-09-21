var form = document.getElementById("novoVeiculoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var licensePlate = document.getElementById("licensePlate").value;
  var type = parseInt(document.getElementById("type").value);

  fetch("https://zaf-dev.herokuapp.com/v1/registerVehicle", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      licensePlate: licensePlate,
      type: type,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);
      if (data.success) {
        window.location.href = "mainUser.html";
      }
      if (data.errors) {
        alert(data.errors);
      }
    })

    .catch((error) => console.log("Ocorreu um erro, tente novamente"));
});
