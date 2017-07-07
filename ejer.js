function crearMatriz(n){
  var M = [];
  var n = 5;
  for(var i = 0; i < n; i++){
    M[i] = [];
    for(var j = 0; j < n; j++){
      M[i][j]=0;
      M[i][n-i-1]=5;
      
    }
   
  }
  console.log (M);
}
crearMatriz(5);
