var form = document.getElementById("deleteForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var licensePlate = document.getElementById("licensePlate").value;

  fetch("https://zaf-dev.herokuapp.com/v1/deleteVehicle", {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      licensePlate: licensePlate,
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
