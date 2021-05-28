function mover(bloques) {
    switch (bloques) {
      case "norte":
        document.getElementById('norte').style.top = '0';
        document.getElementById('centro').style.top = '100%';
        break;
      case "sur":
        document.getElementById('sur').style.top = '0';
        document.getElementById('centro').style.top = '-100%';
        break;
      case "este":
        document.getElementById('este').style.left = '0';
        document.getElementById('centro').style.left = '-100%';
        break;
      case "oeste":
        document.getElementById('oeste').style.left = '0';
        document.getElementById('centro').style.left = '100%';
        break;
    }
}

function regresar(bloques) {
    switch (bloques) {
      case "norte":
        document.getElementById('norte').style.top = '-100%';
        document.getElementById('centro').style.top = '0';
        break;
      case "sur":
        document.getElementById('sur').style.top = '100%';
        document.getElementById('centro').style.top = '0';
        break;
      case "este":
        document.getElementById('este').style.left = '100%';
        document.getElementById('centro').style.left = '0';
        break;
      case "oeste":
        document.getElementById('oeste').style.left = '-100%';
        document.getElementById('centro').style.left = '0';
        break;
    }
}
