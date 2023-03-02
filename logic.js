const users = [
  {
    grad: "Al 4º Ano",
    name: "Ana Livia ",
    fullName: "Ana Livia Matos Muniz",
    type: "CFG Ativa",
    img: "./assets/ana.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Andrade ",
    fullName: "Matheus Andrade Barreto",
    type: "CFG Reserva",
    img: "./assets/andrade.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Barbosa ",
    fullName: "Samuel Barbosa e Silva",
    type: "CFG Ativa",
    img: "./assets/barbosa.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Bretherick",
    fullName: "Daniel Ambrózio Bretherick Marques",
    type: "CFG Ativa",
    img: "./assets/bretherick.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Bronson",
    fullName: "Giulio Bronson Siqueira de Oliveira",
    type: "CFG Ativa",
    img: "./assets/bronson.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Burin",
    fullName: "Bruno Camacho Burin",
    type: "CFG Reserva",
    img: "./assets/burin.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Cangussú ",
    fullName: "Rafael Cangussú Ferreira",
    type: "CFG Reserva",
    img: "./assets/cangussú.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Caruso ",
    fullName: "João Pedro Francisco Caruso",
    type: "CFG Reserva",
    img: "./assets/caruso.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Cuadros ",
    fullName: "Daniel Batista Cuadros",
    type: "CFG Ativa",
    img: "./assets/cuadros.jpg",
    falta: false,
  },
  {
    grad: "1º Ten",
    name: "Damitz ",
    fullName: "Alexander Damitz Pinheiro",
    type: "CG",
    img: "./assets/damitz.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Danon ",
    fullName: "Gustavo Ewbank Rodrigues Danon",
    type: "CFG Reserva",
    img: "./assets/danon.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Felipe Santos",
    fullName: "Felipe Lins dos Santos",
    type: "CFG Ativa",
    img: "./assets/felipe.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Gomes",
    fullName: "Fernando Victor Correa Lima Gomes",
    type: "CFG Reserva",
    img: "./assets/gomes.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Joseph Vieira ",
    fullName: "Joseph Inácio Vieira Oliveira Gomes",
    type: "CFG Ativa",
    img: "./assets/joseph.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Knöller ",
    fullName: "Felipe Knöller Nunes",
    type: "CFG Reserva",
    img: "./assets/knöller.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Mateus Lima ",
    fullName: "Mateus Lima Silveira",
    type: "CFG Reserva",
    img: "./assets/mateus.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Nascimento ",
    fullName: "Vítor Eduardo Pinheiro do Nascimento",
    type: "CFG Ativa",
    img: "./assets/nascimento.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Nóbrega ",
    fullName: "Gabriel Nóbrega de Brito Ramos",
    type: "CFG Ativa",
    img: "./assets/nóbrega.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Paixão ",
    fullName: "Renato da Paixão Alves",
    type: "CFG Ativa",
    img: "./assets/paixão.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Pamella ",
    fullName: "Pamella Atanes Silva",
    type: "CFG Reserva",
    img: "./assets/pamella.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Pinafi ",
    fullName: "Lucas Pinafi Carvalho",
    type: "CFG Ativa",
    img: "./assets/pinafi.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Pontes ",
    fullName: "Rafael Pontes Tenório Lima",
    type: "CFG Ativa",
    img: "./assets/pontes.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Queiroz ",
    fullName: "Carlos Henricco Rabelo de Queiroz",
    type: "CFG Ativa",
    img: "./assets/queiroz.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Richard",
    fullName: "Richard de Carvalho Gonçalves Mello",
    type: "CFG Ativa",
    img: "./assets/richard.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Timbó ",
    fullName: "Rafael Cavalcante Timbó",
    type: "CFG Ativa",
    img: "./assets/timbó.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Vasconcelos ",
    fullName: "Thiago Oliveira Jucá Vasconcelos",
    type: "CFG Ativa",
    img: "./assets/vasconcelos.jpg",
    falta: false,
  },
  {
    grad: "Al 4º Ano",
    name: "Viegas",
    fullName: "Gabriel de Oliveira Viegas",
    type: "CFG Ativa",
    img: "./assets/viegas.jpg",
    falta: false,
  },
];

function renderCard(user) {
  const card = $("<div>", { class: "card", id: user.grad + "_" + user.name });
  const img = $("<img>", {
    src: user.img,
    alt: "img de perfil",
    id: user.name,
  });
  const name = $("<h2>", { class: "name", text: user.grad + " " + user.name });
  const fullName = $("<h3>", { class: "title", text: user.fullName });
  const type = $("<p>", {
    class: "type",
    text: user.type,
  });
  card.append(img, name, fullName, type);
  $(img).click(function (data) {
    if (!user.falta) {
      $(card).css("background-color", "red");
      isRed = true;
    } else {
      isRed = false;
      $(card).css("background-color", "");
    }
    user["falta"] = isRed;
  });
  $(".card-list").append(card);
}

function createCSV() {
  // separar os user com falta false e true em arrays separados
  var userSemFalta = users.filter(function (objeto) {
    return objeto.falta === false;
  });

  var userComFalta = users.filter(function (objeto) {
    return objeto.falta === true;
  });

  // ordenar cada array por type
  userSemFalta.sort(function (a, b) {
    return a.type.localeCompare(b.type);
  });

  userComFalta.sort(function (a, b) {
    return a.type.localeCompare(b.type);
  });

  // ordenar cada array por nome
  userSemFalta.sort(function (a, b) {
    return a.fullName.localeCompare(b.fullName);
  });

  userComFalta.sort(function (a, b) {
    return a.fullName.localeCompare(b.fullName);
  });

  // gerar o CSV a partir desse array
  var csv = "grad,name,fullName,type\n";

  userSemFalta.forEach(function (objeto) {
    csv +=
      objeto.grad +
      "," +
      objeto.name +
      "," +
      objeto.fullName +
      "," +
      objeto.type +
      "\n";
  });
  csv += "----Faltas-----\n";
  userComFalta.forEach(function (objeto) {
    csv +=
      objeto.grad +
      "," +
      objeto.name +
      "," +
      objeto.fullName +
      "," +
      objeto.type +
      "\n";
  });
  return csv;
}

$(document).ready(function () {
  //seu código jQuery aqui
  $.each(users, function (index, user) {
    renderCard(user);
  });
  $("#opcoes").click(function (data) {
    var valorSelecionado = $("#opcoes").val();
    $(".card").remove();
    $.each(users, function (index, user) {
      if (user.type == valorSelecionado || valorSelecionado == "Todos") {
        renderCard(user);
      }
    });
  });
  $("#download").click(function () {
    csv = createCSV();
    var link = $("<a />");
    var name = $("#data-evento").val();
    if (!name) {
      name = "planilhaDeFaltas";
    }
    link.attr("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv));
    link.attr("download", name + ".csv");
    link[0].click();
    link.remove();
    $("#download").append(link);
  });
});
