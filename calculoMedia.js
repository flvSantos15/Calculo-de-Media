function calcular(){
   var n1 = Number(document.getElementById('n1').value)
   var n2 = Number(document.getElementById('n2').value)
   var n3 = Number(document.getElementById('n3').value)
   var n4 = Number(document.getElementById('n4').value)
   var res = document.getElementById('valorDigitado')

   if (n1 <= 0 || n2 <= 0 || n3 <= 0 || n4 <= 0) {
       alert('Dados faltando!')
   }else{
       var media = (n1+n2+n3+n4)/4
       if(media >= 7){
           //passou
           res.innerHTML = `. Você <strong>PASSOU</strong> com ${media} pontos.</p>`
       }else if(media >=5){
           //recuperação
           res.innerHTML = `Você ficou de <strong>recuperação</strong> com ${media} pontos.`
       }else{
           //reprovado
           res.innerHTML = `Você ficou <strong>reprovado</strong> com ${media} pontos.`
       }
   }
}