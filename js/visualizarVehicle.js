var veiculos = document.getElementById("visualizar");

veiculos.addEventListener("click", function (e) {
  e.preventDefault();

  fetch("https://zaf-dev.herokuapp.com/v1/getVehicles", {
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert(data.message);

      if (data.success) {
        document.getElementById("veiculosImg").style.height = 0;

        const veiculos = document.getElementById("app");

        for (i = 0; i < (data.vehicles).length; i++) {
          let novoVeiculo = document.createElement('h2');
          novoVeiculo.textContent = `Placa: ${data.vehicles[i].licensePlate} - Tipo: ${data.vehicles[i].type}`;

          veiculos.appendChild(novoVeiculo);
        }
      }
      if (data.errors) {
        alert(data.errors);
      }
    })

    .catch((error) => console.log("Ocorreu um erro, tente novamente"));
});
