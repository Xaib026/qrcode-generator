document.querySelector(".printBtn").classList.add('display')
function generateCode() {
    var text = document.getElementById("linkHere").value;
    if (text) {
        var qrcode = new QRCode("qrhere", text)
        document.querySelector(".printBtn").classList.remove('display')
    }
    else {
        alert("Please enter your text")
    }
}

function printBtn() {
    window.print();
}