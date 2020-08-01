fetch('https://v7ds2ah8ge.execute-api.us-east-1.amazonaws.com/Prod/count')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("number").innerHTML = data;
  })
  