let getRandomRecommendation = document.querySelector('button#recommendation');

function GetValue()
{
  let getRandom = new Array(
      "Lumen Detroit",
      "SavannahBlue",
      "Vertical Detroit",
      "Parc"
  );
  let random = getRandom[Math.floor(Math.random() * getRandom.length)];
  document.getElementById('recommendation').innerHTML += '<br>' + random;
}

getRandomRecommendation.addEventListener("click", GetValue);








