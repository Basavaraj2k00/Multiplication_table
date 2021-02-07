function mult(n1, n2, n3) {
  rows = Number(n1);
  cols = Number(n2);
  n = Number(n3);
  var j = n;
  if (n == "" || n == null) {
    j = 1;
  } else {
    j = n;
  }
  if (rows == "" || rows == null) rows = 10;

  if (cols == "" || rows == cols) cols = 10;

  // document.write(
  //     `<center>
  //         <table border="3px " cellspacing="0" cellpadding="5px">
  //            `
  // ) "" ''   `` "

  document.write(`<body style="background-color: black;
            color: white;"><center ><h2><u>Multiplication Table</u></h2> <br>`);
  var output = " <table border='3px' cellspacing='0' cellpadding='3px' >";
  for (let i = 1; i <= rows; i++) {
    output = output + "<tr>";

    while (j <= cols) {
      output = output + `<th> ${j} x ${i} = ${i * j} </th> `;
      j = j + 1;
    }
    output = output + "</tr>";
    if (n == "" || n == null) {
      j = 1;
    } else {
      j = n;
    }
  }
  //padding :'20px';width :"50px";
  output +=
    "</table><br> <br><br><b><a href='index.html' style='color: white; text-decoration: none;border: 3px solid white;padding:10px;'>Go Back</a></b></center>";
  document.write(output);
  // output += "</table>";
  // document.write(output);

  // const result = i * num;

  // // form.res.value = (`${num} * ${i} = ${result} \n`);

  // document.write(` <tr>
  //          ${num}  *  ${i}  =  ${result}  </th> </tr>`);
  document.write("");
}
