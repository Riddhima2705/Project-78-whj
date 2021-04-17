var nextview=[ 
       "https://pbs.twimg.com/profile_images/1103624412543111168/f0LbV9lY_400x400.jpg","https://cdn.theorg.com/a9c17419-b76f-470b-8c15-4255fd4bd0d0_small.jpg","https://pbs.twimg.com/media/EjOa4LMVcAAc2BZ.jpg"
    ];
    var i=0;
    function view(){
      if(i==9)
        {
          i=0;
        }
      document.getElementById("familybook").src=nextview[i];
      i++;
    }