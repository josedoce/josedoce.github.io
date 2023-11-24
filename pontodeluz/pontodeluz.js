/**
 * @author josedoce
 */
function update() {
  
        let width = window.innerWidth;
        let height = window.innerHeight;
  
        const stage = new Konva.Stage({
          container: 'tela',
          width: width,
          height: height,
        });
  
        const layer = new Konva.Layer();

        const opacidade = new Konva.Rect({
          x: 0,
          y: 0,
          width: width,
          height: height,
          fill: 'black',
          opacity: 0.9
        });
        
        layer.add(opacidade)
        stage.add(layer);
  
        let cX = 0;
        let cY = 0;
        
        //geração aleatoria
        for(let i = 0; i < pessoas.length; i++){
             // lets create default group with two overlapping shapes
            const cx = Math.random() * stage.width()
            const cy = Math.random() * stage.height()
            const group1 = new Konva.Group({
                opacity: 1,
                width: 120,
                height: 120,
                x: cx,
                y: cy,
                draggable: true,
                
           });
         
          const text = new Konva.Text({
              text: pessoas[i].nome,
              fontSize:16,
              fontFamily:'Arial',
              fill:'white'
          });
      
            const circulo = new Konva.Rect({ // preguiça de mudar kkkkkk
              width: Math.random() * 10,
              height: Math.random() * 10,
              fill: 'black',
            })
      
            group1.add(text)
            //group1.add(circulo);
            const imageObj = new Image();

            const image = new Konva.Image({
              
              image: imageObj,
              width: 100,
              height: 100
            });

            image.getTransform().rotate(Math.random() * 360)
            group1.add(image)
            imageObj.src = 'https://raw.githubusercontent.com/josedoce/josedoce.github.io/main/pontodeluz/s.png'
            
            text.opacity(0)

            const tooltip = new Konva.Label({
              x: width/2,
              y: height/2,
              opacity: 1,
            });

            tooltip.add(new Konva.Tag({
                fill: 'black'
              })
            );

            const tt = new Konva.Text({
              text: "Obrigado por iluminar, " + pessoas[i].nome +" 🥰️",
              fontSize:26,
              fontFamily:'Arial',
              fill:'white',
              stroke: 'white',
              padding: 20,
            });

            tooltip.add(tt)

            group1.on('click tap', function() {
              if(opacidade.opacity() > 0.01){
                opacidade.opacity(opacidade.opacity() - 0.01)
              }
              layer.add(tooltip)
              tooltip.x((width/2) - (tt.width() / 2))
              text.opacity(1)
              circulo.opacity(0)
            });
            

            group1.on('mouseover', function() {
              if(opacidade.opacity() > 0.01){
                opacidade.opacity(opacidade.opacity() - 0.01)
              }
              layer.add(tooltip)
              tooltip.x((width/2) - (tt.width() / 2))
              text.opacity(1)
              circulo.opacity(0)
            });
    
            group1.on('mouseout', function() {
               tooltip.remove()
               text.opacity(0)
            });

            layer.add(group1);
          
        }
        }
        
        
        update()
        window.addEventListener('resize', update)
        
      
