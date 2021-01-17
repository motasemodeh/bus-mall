'use strict';

var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var maxAttempts = 25;
var userAttemptsCounter = 0;
var imageAppearence = 0;

var imageOneIndex;
var imageTwoIndex;
var imageThreeIndex;

function ImageMall(imageName, imageSource)
{

    this.imageName = imageName;
    this.imageSource = imageSource;
    this.timesImagesHasBeenShown = 0;
    ImageMall.prototype.allImages.push(this);
    
}

ImageMall.prototype.allImages = [];
new ImageMall('bag','img/bag.jpg');
new ImageMall('sweep','img/sweep.png');
new ImageMall('banana','img/banana.jpg');
new ImageMall('boots','img/boots.jpg');
new ImageMall('bathroom','img/bathroom.jpg');
new ImageMall('breakfast','img/breakfast.jpg');

new ImageMall('bubblegum','img/bubblegum.jpg');
new ImageMall('chair','img/chair.jpg');
new ImageMall('cthulhu','img/cthulhu.jpg');
new ImageMall('dog duck','img/dog-duck.jpg');
new ImageMall('dragon','img/dragon.jpg');
new ImageMall('pen','img/pen.jpg');

new ImageMall('pet sweep','img/pet-sweep.jpg');
new ImageMall('scissors','img/scissors.jpg');
new ImageMall('Shark','img/shark.jpg');
new ImageMall('tauntaun','img/tauntaun.jpg');
new ImageMall('Unicorn','img/unicorn.jpg');
new ImageMall('usb','img/usb.gif');

new ImageMall('bubblegum','img/water-can.jpg');
new ImageMall('chair','img/wine-glass.jpg');

renderThreeRandomImages();


imageOneElement.addEventListener('click',handleUserClick);
imageTwoElement.addEventListener('click',handleUserClick);
imageThreeElement.addEventListener('click',handleUserClick);

function handleUserClick(event){
  userAttemptsCounter++;

  if(userAttemptsCounter <= maxAttempts){
    if(event.target.id === 'image-one'){
        ImageMall.prototype.allImages[imageOneIndex].timesImagesHasBeenShown++;
    } else if (event.target.id === 'image-two') {
        ImageMall.prototype.allImages[imageTwoIndex].timesImagesHasBeenShown++;
    }  else {
        ImageMall.prototype.allImages[imageThreeIndex].timesImagesHasBeenShown++;
    }
    renderThreeRandomImages();

  } else {
    // handle end of voting
    var resultsList = document.getElementById('results-list');
    var finalResult;
    for(var i = 0; i < ImageMall.prototype.allImages.length; i++){
      finalResult = document.createElement('li');
      finalResult.textContent = ImageMall.prototype.allImages[i].imageName + ' was Clicked  '+ ImageMall.prototype.allImages[i].timesImagesHasBeenShown + ' Times';
      
      resultsList.appendChild(finalResult);
      
    }
    imageOneElement.removeEventListener('click',handleUserClick);
    imageTwoElement.removeEventListener('click',handleUserClick);
    imageThreeElement.removeEventListener('click',handleUserClick);

  }

}



function renderThreeRandomImages(){
    // imageOneIndex = generateRandomIndex();
    // imageTwoIndex = generateRandomIndex();
  
    do{
        imageOneIndex = generateRandomIndex();
        imageTwoIndex = generateRandomIndex();
        imageThreeIndex = generateRandomIndex();
    } while(imageOneIndex === imageTwoIndex && imageTwoIndex === imageThreeIndex && imageOneIndex === imageThreeIndex );
    imageOneElement.src = ImageMall.prototype.allImages[imageOneIndex].imageSource;
    imageTwoElement.src = ImageMall.prototype.allImages[imageTwoIndex].imageSource;
    imageThreeElement.src = ImageMall.prototype.allImages[imageThreeIndex].imageSource;
    imageAppearence++;
    console.log(imageOneIndex, imageTwoIndex, imageThreeIndex)


  }

//   function renderNewImages(){
   
//   }
  
  function generateRandomIndex(){
    return Math.floor(Math.random() * (ImageMall.prototype.allImages.length));
  }
  