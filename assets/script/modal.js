import { getDOM } from "./index.js";
export { modalMan }

function modalMan() {
    /* alterando valores */
    getDOM('doacao25', '#doacao25').addEventListener('click', function () {
        /*    Pix Copia e Cola IMG-QR */
        getDOM('img-pix', '.img-pix_qr').setAttribute('src', "../images/icons/DOACAO25.png")
        /* Pix Copia e Cola num */
        getDOM('qrCodeNum', '.qrCodeNum').innerHTML = `00020126480014br.gov.bcb.pix0114204605560001780208D  OACAO25<br>520400005303986540525.005802BR5901N6001C62070503***6304CB8A`
    })

    getDOM('doacao50', '#doacao50').addEventListener('click', function () {
        /*    Pix Copia e Cola IMG-QR */
        getDOM('img-pix', '.img-pix_qr').setAttribute('src', "../images/icons/DOACAO50.png")
        /* Pix Copia e Cola num */
        getDOM('qrCodeNum', '.qrCodeNum').innerHTML = `00020126480014br.gov.bcb.pix0114204605560001780208DOACAO50<br>520400005303986540550.005802BR5901N6001C62070503***630447AF`
    })

    getDOM('doacao100', '#doacao100').addEventListener('click', function () {
        /*    Pix Copia e Cola IMG-QR */
        getDOM('img-pix', '.img-pix_qr').setAttribute('src', "../images/icons/DOACAO100.png")
        /* Pix Copia e Cola num */
        getDOM('qrCodeNum', '.qrCodeNum').innerHTML = `00020126490014br.gov.bcb.pix0114204605560001780209DOACAO1005<br>204000053039865406100.005802BR5901N6001C62070503***630410B6`
    })

    getDOM('btnDoacao', '.btnDoacao_outrosValores').addEventListener('click', function () {
        /*    Pix Copia e Cola IMG-QR */
        getDOM('img-pix', '.img-pix_qr').setAttribute('src', "../images/icons/DOACAOoutrosValores.png")
        /* Pix Copia e Cola num */
        getDOM('qrCodeNum', '.qrCodeNum').innerHTML = `00020126510014br.gov.bcb.pix0114204605560001780211DOACAO-SJPA<br>5204000053039865802BR5901N6001C62070503***6304F2B5`
    })

    getDOM('qrCodeNum', '.qrCodeNum').addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        var conteudo = getDOM('qrCodeNum', '.qrCodeNum').innerText;
        navigator.clipboard.writeText(conteudo).then(function () {
            getDOM('dropdown', '.dropdown').innerHTML = `<p class='tester'>Pix [Copia e cola] copiado com sucesso!</p>`
            alert('Pix [Copia e cola] copiado com sucesso')
            location.reload();

        }, function (err) {
            getDOM('dropdown', '.dropdown').innerHTML = `<p>Desculpe! aconteceu um erro! Nos comunique para que podemos concertar.</p>`
        });
    })
}
