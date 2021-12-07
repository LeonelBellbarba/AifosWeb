


function getImgProvincia() {
    var valorProvincia = document.getElementById('selectProvincia').value;
    document.getElementById('imgContenedor').innerHTML = '<img src="imgs/'+valorProvincia+'.png">';
  }