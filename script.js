window.addEventListener( "DOMContentLoaded", function() {
    new App();
});


function MyScript() {}





function App() {
  new Magnifier();
}
App.prototype = Object.create(MyScript.prototype);



function Magnifier() {
  this.block = document.querySelector('.b-img-block');
  this.blockMagnifier = this.block.querySelector('.img-block__magnifier');
  this.magnifierImg = this.block.querySelector('.magnifier__img');
  this.blockImg = this.block.querySelector('.img-block__img');
  this.blockImg.addEventListener("mouseover", this.AddEventMouse.bind(this));
  this.blockImg.addEventListener("mouseout", this.AddEventMouseOut.bind(this));
}

Magnifier.prototype = Object.create(App.prototype);


Magnifier.prototype.AddEventMouse = function () {
  this.blockMagnifier.style.cssText +="display:block;";
  this.blockImg.addEventListener("mousemove", this.AddEventMouseMove.bind(this));
}




Magnifier.prototype.AddEventMouse = function () {
  this.blockMagnifier.style.cssText +="display:block;";
  this.block.addEventListener("mousemove", this.AddEventMouseMove.bind(this));
}

Magnifier.prototype.AddEventMouseOut = function () {
  this.blockMagnifier.style.cssText +="display:none";
}

Magnifier.prototype.AddEventMouseMove = function (event) {

  this.moveMouseX               = event.offsetX;
  this.moveMouseY               = event.offsetY;
  this.blockImgWidth            = parseInt(getComputedStyle(this.blockImg).width);
  this.magnifierImgWidth        = parseInt(getComputedStyle(this.magnifierImg).width);
  this.ratioWidth               = -this.magnifierImgWidth / this.blockImgWidth;
  this.widthDiv                 = parseInt(getComputedStyle(this.blockMagnifier).width);
  this.heightDiv                = parseInt(getComputedStyle(this.blockMagnifier).height);
  this.positionBlockY           = this.widthDiv / 2;
  this.positionBlockX           = this.heightDiv / 2;
  this.resultMousePositionX     = this.moveMouseX * this.ratioWidth + this.positionBlockX;
  this.resultMousePositionY     = this.moveMouseY * this.ratioWidth + this.positionBlockY;
  this.resultpositionBlockX     = this.moveMouseX + this.resultPositionBlockX;
  this.resultpositionBlockY     = this.moveMouseY + this.resultPositionBlockY;
  this.magnifierImg.style.cssText += "transform: translate("+this.resultMousePositionX+"px, "+this.resultMousePositionY+"px);";
  //this.blockMagnifier.style.cssText +="top:-"+this.resultpositionBlockY+"px;left:-"+this.resultpositionBlockX+"px;";
}
