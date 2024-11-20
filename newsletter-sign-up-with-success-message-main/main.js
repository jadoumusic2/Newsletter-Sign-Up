function switchContainer(container2) {
    document.querySelectorAll('.container').forEach(container => {
      container.classList.remove('active');
    });
    document.getElementById(container2).classList.add('active');
  }
  