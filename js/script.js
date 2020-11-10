let h1 = document.getElementById('text')
let shadow = ''
for (let i =0; i < 50; i++){
     shadow += (shadow ? ',' : '') + `${i*1}px ${i*1}px 0px #01d1d3`
}

document.querySelector('html').onclick = function() {
    alert('いたい');
}
