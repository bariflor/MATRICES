function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
    console.log (M[i])  
  }  
} 

function crearMatriz (n, m){
  var M = [];
  for (var i = 0; i < n; i++) {
    M[i] = [];
    for (var j = 0; j < m; j++) {
      M[i][j] = 0;
    }    
  }
  return M;
}
function ejercicio4(n) {
  var M = crearMatriz (n, n) ;
  var num = 1;
  for (var i = 0; i < n; i++) {
    M[i][i] = num;
    num++;
  }
  num = n;
  for (var i = 0; i < n; i++) {
    M[i][n - i - 1] = num;
    num--;
  }
  imprimirMatriz(M);
}
ejercicio4(4);