let isOpenPopper = false;

const configurarPopover = (target, text) => {
  const tooltipText = document.getElementById('tooltip-text');
  const arrow = document.querySelector('#arrow');
  const tooltip = document.querySelector('#tooltip');
  
  const estado = () => {
    if(!isOpenPopper){
      tooltipText.textContent = text
      tooltip.style.display = null
      isOpenPopper=true
    }else{
      tooltipText.textContent = ''
      tooltip.style.display = 'none'
      isOpenPopper=false
    }
  }

  target.onmouseenter = (event)=> {
    Popper.createPopper(target, tooltip, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 6],
          },
        },
  
        {
          name: 'arrow',
          options: {
            element: arrow,
          },
        },
      ],
    });
    
    estado()
  }  

  target.onmouseleave = (event) => {
    estado()
  }
} 