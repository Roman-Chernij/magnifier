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
  this.variables();
  this.blockImg.addEventListener("mouseover", this.AddEventMouse.bind(this));
  this.blockMagnifier.addEventListener("mouseout", this.AddEventMouseOut.bind(this));
}



Magnifier.prototype = Object.create(App.prototype);

Magnifier.prototype.variables = function () {
  this.blockImgWidth            = parseInt(getComputedStyle(this.blockImg).width);
  this.blockImgHeight            = parseInt(getComputedStyle(this.blockImg).height);
  this.magnifierImgWidth        = parseInt(getComputedStyle(this.magnifierImg).width);
  this.magnifierImgHeight        = parseInt(getComputedStyle(this.magnifierImg).height);
  this.ratioHeight              =  this.magnifierImgHeight/this.blockImgHeight;
  this.ratioWidth               = this.magnifierImgWidth/this.blockImgWidth;
  this.widthMagnifer = parseInt(getComputedStyle(this.blockMagnifier).width) / 2;
  this.heightMagnifer = parseInt(getComputedStyle(this.blockMagnifier).height) / 2;
  this.top            = parseInt(getComputedStyle(this.blockMagnifier).top);
  this.left            = parseInt(getComputedStyle(this.blockMagnifier).left);
}

Magnifier.prototype.AddEventMouse = function (event) {
  this.xStart = event.offsetX;
  this.yStart = event.offsetY;
  this.blockMagnifier.style.cssText +="display:block;top: "+this.yStart+"px;left: "+this.xStart+"px;display:block;";
  this.blockMagnifier.addEventListener("mousemove", this.AddEventMouseMove.bind(this));
}

Magnifier.prototype.AddEventMouseOut = function () {
  this.blockMagnifier.style.cssText +="display:none";
}




Magnifier.prototype.AddEventMouseMove = function (event) {
  this.moveMouseX               = event.offsetX;
  this.moveMouseY               = event.offsetY;

  this.blockMagnifierTop            = parseInt(getComputedStyle(this.blockMagnifier).top);
  this.blockMagnifierLeft            = parseInt(getComputedStyle(this.blockMagnifier).left);


    var   resultPositionTop = this.blockMagnifierTop + (this.moveMouseY-this.heightMagnifer),
          resultPositionLeft = this.blockMagnifierLeft + (this.moveMouseX-this.widthMagnifer);



  //this.magnifierImg.style.cssText +="transform: translate(-"+(this.moveMouseX * this.ratioWidth)+"px,-"+(this.moveMouseY * this.ratioHeight)+"px);";
    this.blockMagnifier.style.cssText ="top: "+resultPositionTop+"px;left: "+resultPositionLeft+"px;display:block;";
    this.hideMagnifier();
}

Magnifier.prototype.hideMagnifier = function () {
  console.log(this.top);
  console.log(this.blockMagnifierTop);


  if (this.blockMagnifierTop >= this.top && this.blockMagnifierTop > this.blockImgHeight) {
    alert('123');
    this.blockMagnifier.style.cssText +="display:none;top:0;left:0;";
  }

  if (this.blockMagnifierLeft >= this.left && this.blockMagnifierLeft > this.blockImgWidth) {
    this.blockMagnifier.style.cssText +="display:none;top:0;left:0;";
  }


}
