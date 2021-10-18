function educationbtn() {
    var x = document.getElementById("educationcontainerid");
    if (x.style.height == "0px") {
      
      x.style.height = "300px"
      x.style.transition =".5s"
    } else {
        
      x.style.transition =".5s"
      x.style.height= "0px"
    }
  }


  function projectbtn() {
    var x = document.getElementById("projectdropdowncontainerid");
    if (x.style.height < "10px") {
      
      x.style.height = "500px"
      x.style.transition =".5s"
    } else {
        
      x.style.transition =".5s"
      x.style.height= "0px"
    }
  }

  function contactmebtn() {
    var x = document.getElementById("contactmedropdowncontainerid");
    if (x.style.height < "10px") {
      
      x.style.height = "300px"
      x.style.transition =".5s"
    } else {
        
      x.style.transition =".5s"
      x.style.height= "0px"
    }
  }