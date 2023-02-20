

function educationbtn() {
  var x = document.getElementById("educationcontainerid");
    
    if (x.style.height < "10px") {
      x.style.display = "flex";
      
      var thisheight = x.scrollHeight;

      x.style.height = thisheight +'px';
      x.style.transition ='.5s';

      if(thisheight = x.scrollHeight)
      {
        x.style.height = thisheight +"px";
        x.style.transition =".5s"
      }
      else
      {
        x.style.height = x.scrollHeight;
      }
      
      
    } else {
        
      x.style.transition =".5s"    
      x.style.height= "0px"
    }
  }


  function projectbtn() {
    var x = document.getElementById("projectdropdowncontainerid");
    if (x.style.height < "10px") {
      var thisheight = x.scrollHeight;
      x.style.display = "flex"
      if(thisheight = x.scrollHeight)
      {
        x.style.height = thisheight +"px";
        x.style.transition =".5s"
      }
      else
      {
        x.style.height = x.scrollHeight;
      }

    } else {
      
      x.style.transition =".5s"
      x.style.height= "0px"
    }
  }

  function contactmebtn() {
    var x = document.getElementById("contactmedropdowncontainerid");
    if (x.style.height < "10px") {
      
      var thisheight = x.scrollHeight;
      x.style.display = "flex"
      x.style.height = thisheight +'px';
      x.style.transition =".5s"

      if(thisheight = x.scrollHeight)
      {
        x.style.height = thisheight +"px";
        x.style.transition =".5s"
      }
      else
      {
        x.style.height = x.scrollHeight;
      }
    } else {
      
      x.style.transition =".5s"
      x.style.height= "0px"
    }
  }



  document.getElementById("educationbtnid").addEventListener("click", function() {
    educationbtn();
  });