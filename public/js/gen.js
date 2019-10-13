function showModal (){
  var adminName = document.getElementById('adminN');
  var adminPas = document.getElementById('adminPass');
  var correctPas = "1234";
  var correctUser = "Admin";

  if(adminName.value == correctUser && adminPas.value == correctPas){
      window.location.assign("admin.html")
  }else{
      ("not ok")
  }
}