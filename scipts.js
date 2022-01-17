const send = () => {
  const getElementContainer = document.getElementById("container");
  getElementContainer.classList.toggle("active");

  setTimeout(() => {
    getElementContainer.classList.remove("active");
    getElementContainer.classList.toggle("expand");
  }, 2000);
};
