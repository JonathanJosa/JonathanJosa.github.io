window.onload = () => {
    let xhttp;
    document.querySelectorAll("include").forEach(item => {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if(this.readyState == 4){
          if(this.readyState == 200){
            item.parentElement.replaceChildren(item, document.createElement("div").innerHTML = this.responseText);
          }else{
            alert("Fallo al cargar");
          }
        }
      }
      xhttp.open("GET", item.getAttribute("src"), true);
      xhttp.send();
    });
}
