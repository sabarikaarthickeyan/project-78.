var images = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Chinappan", "SivaKumar", "DharshanaaSre", "Sudha"];
var i = 0;
function update()
{
    
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    
    //Debug the code to store list of names in updatedName. Use names[i]
    
    
    console.log(i);
      
      document.getElementById("family_member_name").innerHTML = names[i];
      document.getElementById("family_member_image").src = images[i];
i++;
   if(i==4)
   {
     i=0;
   }
    
    
}
