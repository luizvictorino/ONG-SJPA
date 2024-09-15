import { getDOM } from "./index.js"

function modalMan() {
    const qrCodeElements = {
        '25': {
            imgSrc: "../images/icons/DOACAO25.png",
            text: `00020126480014br.gov.bcb.pix0114204605560001780208D  OACAO25<br>520400005303986540525.005802BR5901N6001C62070503***6304CB8A`
        },
        '50': {
            imgSrc: "../images/icons/DOACAO50.png",
            text: `00020126480014br.gov.bcb.pix0114204605560001780208DOACAO50<br>520400005303986540550.005802BR5901N6001C62070503***630447AF`
        },
        '100': {
            imgSrc: "../images/icons/DOACAO100.png",
            text: `00020126490014br.gov.bcb.pix0114204605560001780209DOACAO1005<br>204000053039865406100.005802BR5901N6001C62070503***630410B6`
        },
        'outros': {
            imgSrc: "./../images/img/DOACAOoutrosValores.png",
            text: `00020126510014br.gov.bcb.pix0114204605560001780211DOACAO-SJPA<br>5204000053039865802BR5901N6001C62070503***6304F2B5`
        }
    }

    function updateQRData(key) {
        const qrData = qrCodeElements[key]
        getDOM('img-pix', '.img-pix_qr').setAttribute('src', qrData.imgSrc)
        getDOM('qrCodeNum', '.qrCodeNum').innerHTML = qrData.text
    }

    getDOM('doacao25', '#doacao25').addEventListener('click', () => updateQRData('25'))
    getDOM('doacao50', '#doacao50').addEventListener('click', () => updateQRData('50'))
    getDOM('doacao100', '#doacao100').addEventListener('click', () => updateQRData('100'))
    getDOM('btnDoacao', '.btnDoacao_outrosValores').addEventListener('click', () => updateQRData('outros'))

    getDOM('qrCodeNum', '.qrCodeNum').addEventListener('click', function (e) {
        e.preventDefault()
        const conteudo = this.innerText
        navigator.clipboard.writeText(conteudo).then(() => {
            getDOM('dropdown', '.dropdown').innerHTML = `<p class='tester'>Pix [Copia e cola] copiado com sucesso!</p>`
            alert('Pix [Copia e cola] copiado com sucesso')
        }).catch(() => {
            getDOM('dropdown', '.dropdown').innerHTML = `<p>Desculpe! Aconteceu um erro! Nos comunique para que possamos consertar.</p>`
        })
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btnDoacao_outrosValores')
    const qrImage = document.getElementById('pix-qr')

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const qrCodeValue = this.getAttribute('data-qr')
            qrImage.src = `../images/icons/DOACAO${qrCodeValue}.png`
        })
    })
})

export { modalMan }
