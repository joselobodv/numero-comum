let numero1;
let numero2;

process.stdin.on("data", function (data) {
  let input = +data.toString().trim();

  if (!numero1) {
    numero1 = input;
  } else {
    numero2 = input;
    if(numero1 > numero2){
      i = numero1
    }else{
      i = numero2
    }
    for(input; i <= numero1 * numero2; i++){
      if(i% numero1 == 0  && i % numero2 == 0){
        console.log("MMC: " + i)
        break;
      }
    }
  }
});
