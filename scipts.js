const send = () => {
  const getElementContainer = document.getElementById("container");
  const getElementButtom = document.getElementById("btn-send");
  getElementButtom.firstElementChild.innerHTML = "Enviar";
  getElementContainer.classList.toggle("active");

  setTimeout(() => {
    getElementContainer.classList.remove("active");
    getElementContainer.classList.toggle("expand");
    getElementButtom.firstElementChild.innerHTML = "Fechar";
  }, 2000);
};
