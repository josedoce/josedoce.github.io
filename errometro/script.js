let id = 0;

const style = `
<style id="errometro-style">
body {
    padding: 0;
    margin: 0;
}
.modal {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(1, 1, 1, 0.804);
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999999;
}

.dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: whitesmoke;
    border: 1px solid rgba(230, 230, 230, 0.629);
    border-radius: 8px;
    width: 90%;
    margin: 0 auto; 
}
.dialog-header {
    border-bottom: 1px solid rgba(230, 230, 230, 0.629);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.dialog-header h2 {
    font-size: 18px;
    margin: 0;
}
.dialog-header button{
    padding: 0;
    display: flex;
    border: 2px solid transparent;
    overflow: hidden;
    border-radius: 6px;
}
.dialog-header svg:hover{
    stroke: rgb(255, 80, 80);
    cursor: pointer;
}
.dialog-header button:hover, .dialog-header button:active {
    border: 2px solid rgb(255, 80, 80);
}
.dialog-body p {
    text-align: justify;
}
.dialog-footer {
    border-top: 1px solid rgba(230, 230, 230, 0.629);
}
.dialog-header, .dialog-body, .dialog-footer {
    padding: 8px 12px;
}

@media screen and (min-width: 425px) {
    .dialog {
        width: 60%;
    }
}
@media screen and (min-width: 600px) {
    .dialog {
        width: 40%;
    }
}

@media screen and (min-width: 800px) {
    .dialog {
        width: 30%;
    }
}
</style>
`;

document.body.insertAdjacentHTML('afterbegin', style);
class Aviso {
    constructor(title = "Mensagem x", text = "Texto da mensagem qualquer"){
        this.title = title;
        this.text = text;
    }
    get content(){
        return {
            title: this.title,
            message: this.text
        }
    }
}

function dialog({title, message}) {
    //const title = "Mensagem de aviso"
    //const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus eligendi odit optio voluptatum, at possimus assumenda, aspernatur aliquid neque rerum! Inventore reiciendis eos impedit nihil consequatur animi. Aperiam, atque?";
    const sizeIcon = 24;
    const icon = `<svg style="margin:0; width: ${sizeIcon}px; height:${sizeIcon};" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`

    const textSize = (text, base, ref = 0.02)=> {
        
        text.split("").forEach((e)=>{
            base-= ref;
        })
        return base;
    }

    const t = `

    <div class="modal" id="modal-${id}">
        <div class="dialog">
            <div class="dialog-header">
                <h2 style="color: rgba(1, 1, 1, 0.904);font-size: ${textSize(message, 24,0.1)}px;">${title}</h2>
                <button id="close-btn-${id}">${icon}</button>
            </div>
            <div class="dialog-body">
                <p style="color: rgba(1, 1, 1, 0.804);font-size: ${textSize(message, 24)}px;margin: 0">${message}</p>
            </div>
            <div style="height: 22px;"></div>
            <div hidden class="dialog-footer">
                <button>entendi</button>
            </div>
        </div>
    </div>
    `
    document.getElementById("errometro-style").insertAdjacentHTML('afterend', t);
    const modal = document.getElementById(`modal-${id}`);
    document.getElementById(`close-btn-${id}`).onclick = ()=> {
        modal.remove();
    }
    id++;
}


const av1 = new Aviso("Aviso 1", "conteudo da mensagem 1");
const content = av1.content

const av2 = new Aviso("Aviso 2", "conteudo da mensagem 2");
const content2 = av2.content

const av3 = new Aviso("Aviso 3", "conteudo da mensagem 3");
const content3 = av3.content