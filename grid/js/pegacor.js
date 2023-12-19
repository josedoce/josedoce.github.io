const getColors = (filename)=> new Promise((resolve, reject)=>{
  const canvas = document.getElementById('meucanva');
  try{
    const imagem = new Image();
    imagem.src = filename
    imagem.onload = (event) => {
      canvas.width = imagem.naturalWidth
      canvas.height = imagem.naturalHeight
      const context = canvas.getContext('2d', {
        willReadFrequently: true
      });
      context.drawImage(imagem, 0, 0);
      const cor1 = context.getImageData(0, 0, 1, 1).data;
      const cor2 = context.getImageData((imagem.naturalWidth - 1), 0, 1, 1).data;
      const cor3 = context.getImageData(0, (imagem.naturalHeight - 1), 1, 1).data;
      const cor4 = context.getImageData((imagem.naturalWidth - 1), (imagem.naturalHeight - 1), 1, 1).data;

      canvas.remove();
      resolve({
        cor1: `rgba(${cor1.slice(0, 4).toString()})`, 
        cor2: `rgba(${cor2.slice(0, 4).toString()})`, 
        cor3: `rgba(${cor3.slice(0, 4).toString()})`, 
        cor4: `rgba(${cor4.slice(0, 4).toString()})`
      });
    }
  }catch(e){
    reject("erro, não foi possivel carregar image.")
  }
});

const numeroAleatorio = (qtd, ate) => {
  const numeros = [];
  for(let i = 0; i < qtd; i++){
    numeros.push(Math.floor(Math.random() * (ate + 1)))
  }

  return numeros;
}

const geradorDeCores = (quantidade = 1) => {
  
  const cores = [];

  for(let i = 0; i < quantidade; i++) {
    const cor = numeroAleatorio(3, 255).toString();
    cores.push(`rgb(${cor})`)
  }

  return cores;
}
