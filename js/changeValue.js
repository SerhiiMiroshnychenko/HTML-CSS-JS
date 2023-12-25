function myFunc() {
      let currentText = document.getElementById("demo").innerHTML;
      console.log(currentText);
      if (currentText == "Hello Everyone!") {
      document.getElementById("demo").innerHTML = "Hello World!";}
      else {
      document.getElementById("demo").innerHTML = "Hello Everyone!";}
      }