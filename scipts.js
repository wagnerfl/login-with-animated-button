const send = () => {
  const getElementContainer = document.getElementById("container");
  const getElementBtnSend = document.getElementById("btn-send");
  getElementContainer.classList.toggle("active");
  // getElementBtnSend.innerHTML = "";
  console.log(`getElementBtnSend`, getElementBtnSend);
  console.log("+++++", getElementContainer);
};
