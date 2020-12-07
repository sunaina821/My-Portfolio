
      // 1. The basic part of the example 
      var L;
      window.onload = function() {
        L.mapquest.key = 'lmACC7Bh4I8If2bkn2GfENjbHw46z0nS';
        // 'map' refers to a <div> element with the ID map
        var map = L.mapquest.map('map', {
          center: [28.012440, -82.425160],
          layers: L.mapquest.tileLayer('hybrid'),
          zoom: 12
        });
      }
function sendemail()
        {
            var email = document.getElementById("emailID").value;
            var subject = ('Grato Hotel Response:');
            var body = ('Thanks for reaching us ,one of our support team member will contact you.');
            document.write('<a href="mailto:' + email + '?subject=' +subject+ '&body=' +body+ '">' + '         '+'Click here to send email' + '<'+'/a>');
        }
