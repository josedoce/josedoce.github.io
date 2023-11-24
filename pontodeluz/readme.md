## Configuração no wordpress

1- Crie uma página nova sem cabeçalho ou rodapé, se achar necessário.

2- Abrir edição de código nessa página.

3- Copiar o código e colar
```html
<!-- código opcional, se "telacheia for definida como true" -->
<style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        #tela {
            background-image: url(https://www.c-online.med.br/wp-content/uploads/2023/10/CASAWALLPAPER.jpeg); 
            overflow: hidden;
           background-position: center center; 
           background-repeat: no-repeat; 
           background-size: cover; 
           filter: blur(0px); 
           opacity: 1;
           width: 100%;
           height: 100vh;
           display: flex;
           flex-wrap: wrap;
        }
</style>
<div id="tela"></div>
<!-- código opcional, se "telacheia for definida como true" -->

<script src="https://unpkg.com/konva@9.2.3/konva.min.js"></script>
<script>
        //se definido como "true", a barra de menu do Wordpress dessa pagina será removido no modo visualização.
        const telacheia = false;
        const pessoas = [
            {"nome": "Lucas Silva"},
            {"nome": "Ana Oliveira"},
            {"nome": "Pedro Santos"},
            {"nome": "Mariana Souza"},
            {"nome": "Felipe Lima"},
            {"nome": "Juliana Pereira"},
            {"nome": "Gustavo Rocha"},
            {"nome": "Amanda Martins"},
            {"nome": "Rafael Costa"},
            {"nome": "Carla Almeida"},
            {"nome": "Bruno Pereira"},
            {"nome": "Fernanda Santos"},
            {"nome": "Cesar Oliveira"},
            {"nome": "Beatriz Costa"},
            {"nome": "Roberto Silva"},
            {"nome": "Larissa Oliveira"},
            {"nome": "Rodrigo Pereira"},
            {"nome": "Viviane Souza"},
            {"nome": "Eduardo Martins"},
            {"nome": "Isabela Rocha"},
            {"nome": "Marcelo Lima"},
            {"nome": "Vanessa Almeida"},
            {"nome": "Leandro Santos"},
            {"nome": "Tatiane Costa"},
            {"nome": "Vinícius Pereira"},
            {"nome": "Laura Oliveira"},
            {"nome": "Alexandre Silva"},
            {"nome": "Fernanda Rocha"},
            {"nome": "Guilherme Almeida"},
            {"nome": "Raquel Pereira"},
            {"nome": "Renato Costa"},
            {"nome": "Camila Lima"},
            {"nome": "Ricardo Santos"},
            {"nome": "Luana Rocha"},
            {"nome": "Henrique Almeida"},
            {"nome": "Aline Pereira"},
            {"nome": "Leonardo Costa"},
            {"nome": "Natália Silva"},
            {"nome": "Luciano Oliveira"},
            {"nome": "Caroline Martins"},
            {"nome": "Giovanni Rocha"},
            {"nome": "Renata Lima"},
            {"nome": "Marcos Santos"},
            {"nome": "Thais Almeida"},
            {"nome": "Paulo Pereira"},
            {"nome": "Cintia Costa"},
            {"nome": "João Silva"}
         ];
    </script>
<script src="https://josedoce.github.io/pontodeluz/pontodeluz.js"></script>
```
