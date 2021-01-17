var xPos = 209;
var yPos = 293;

draw = function() {
  
    background(192, 198, 240);
    fill(255, 242, 0);
    ellipse(xPos+60, yPos, 28, 30);
    ellipse(xPos-60, yPos, 28,30);
    
    fill(138, 63, 63);
    rect(xPos-100,yPos-50,190,37,0);
    
    fill(0, 255, 162);
    rect(xPos-65,yPos-110,124,63,0);
    
    fill(152, 184, 147);
    arc(xPos-2,yPos-109,123,109,-180,2);
    fill(255, 255, 8);
    ellipse(xPos+150, yPos-247, 67, 67);
    
    
    strokeWeight(-1);
    line(xPos-65,yPos-109,xPos+59,yPos-108);
    
    strokeWeight(3);
    line(xPos+73,yPos+-267,xPos+117,yPos+-252);
    
    strokeWeight(4);
    line(xPos+81,yPos+-207,xPos+118,yPos+-237);
    
    strokeWeight(-43);
    line(xPos+134,yPos+-166,xPos+142,yPos+-213);
    
    strokeWeight(-1);
    line(xPos+168,yPos+-217,xPos+179,yPos+-162);
    
    image(getImage("avatars/mr-pants-orange"),xPos+-60,yPos-96,55,47);
    image(getImage("avatars/mr-pants-with-hat"),xPos+6,yPos-108,46,61);
    
    
    
};

