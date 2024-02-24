function handleSubmit(event) {
  event.preventDefault();
  let text = document.getElementById("ip").value;
  let qrSrc = `https://api.qrserver.com/v1/create-qr-code/?data=${text}`;
  let qrImg = document.getElementById("qrimg");
  qrImg.src = qrSrc;
}