export const dateFormater = (date) => {
  let [yy, mm, dd] = date.split("-");
  let [dy, tm] = dd.split(" ");

  switch (parseInt(mm)) {
    case 1:
      mm = "Janvier";
      break;
    case 2:
      mm = "Février";
      break;
    case 3:
      mm = "Mars";
      break;
    case 4:
      mm = "Avril";
      break;
    case 5:
      mm = "Mai";
      break;
    case 6:
      mm = "Juin";
      break;
    case 7:
      mm = "Juillet";
      break;
    case 8:
      mm = "Août";
      break;
    case 9:
      mm = "Septembre";
      break;
    case 10:
      mm = "Octobre";
      break;
    case 11:
      mm = "Novembre";
      break;
    case 12:
      mm = "Décembre";
      break;
    default:
      break;
  }

  return [dy, mm, yy].join(" ");
};

export const shuffle = (data) => {
  for (var i = data.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = data[i];
    data[i] = data[j];
    data[j] = temp;
    console.log(data);
  }
};

export const toHex = (input) => {
  var hash = "",
    alphabet = "0123456789abcdef",
    alphabetLength = alphabet.length;

  do {
    hash = alphabet[input % alphabetLength] + hash;
    input = parseInt(input / alphabetLength, 10);
  } while (input);

  return hash;
};
