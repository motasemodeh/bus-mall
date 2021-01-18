'use strict';

var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var buttonElement = document.getElementById('show-result-bitton');
var imagesHolderElement = document.getElementById('imageVotes');
var numberOfRoundsForm = document.getElementById('numberofrounds');
var maxAttempts = 25;
var userAttemptsCounter = 0;
var imageOneIndex;
var imageTwoIndex;
var imageThreeIndex;
var timesImagesHasBeenShown = [];
var imagesNames = [];

function ImageMall(imageName, imageSource)
{

    this.imageName = imageName;
    this.imageSource = imageSource;
    this.timesImagesHasBeenShown = 0;
    this.imageAppearence = 0;
    ImageMall.prototype.allImages.push(this);
    imagesNames.push(imageName);

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
new ImageMall('Water can','img/water-can.jpg');
new ImageMall('Wine Glass','img/wine-glass.jpg');

renderThreeRandomImages();

imagesHolderElement.addEventListener('click',handleUserClick)
buttonElement.addEventListener('click',showResult);
numberOfRoundsForm.addEventListener('submit',userDefinedroundNumbers);

function handleUserClick(event){
  userAttemptsCounter++;

  if(userAttemptsCounter < maxAttempts){
    if(event.target.id === 'image-one'){
        ImageMall.prototype.allImages[imageOneIndex].timesImagesHasBeenShown++;
        renderThreeRandomImages();

    } else if (event.target.id === 'image-two') {
        ImageMall.prototype.allImages[imageTwoIndex].timesImagesHasBeenShown++;
        renderThreeRandomImages();
    }  else if (event.target.id === 'image-three'){
        ImageMall.prototype.allImages[imageThreeIndex].timesImagesHasBeenShown++;
        renderThreeRandomImages();
    }

  } else {

    imagesHolderElement.removeEventListener('click',handleUserClick);

    buttonElement.disabled=false;

  }

}

var resultsList;
var finalResult;
function showResult()
{
      // handle end of voting
      resultsList = document.getElementById('results-list');
      finalResult;
      
  for(var i = 0; i < ImageMall.prototype.allImages.length; i++){

    finalResult = document.createElement('li');
    finalResult.textContent = ImageMall.prototype.allImages[i].imageName + ' had  '+ ImageMall.prototype.allImages[i].timesImagesHasBeenShown + ' Votes, and was seen ' + ImageMall.prototype.allImages[i].imageAppearence + ' Times' + 'and its Persentage was ' + (ImageMall.prototype.allImages[i].timesImagesHasBeenShown * 100 / ImageMall.prototype.allImages[i].imageAppearence) + '%';
    
    resultsList.appendChild(finalResult);
   
  }
  buttonElement.removeEventListener('click',showResult);
  for(var i = 0; i < ImageMall.prototype.allImages.length; i++){
    timesImagesHasBeenShown.push(ImageMall.prototype.allImages[i].timesImagesHasBeenShown);
  }
      chart.config.data.datasets[0].data = timesImagesHasBeenShown;
    }

function renderThreeRandomImages(){
  imageOneIndex = generateRandomIndex();
  
    do{

        imageTwoIndex = generateRandomIndex();
        imageThreeIndex = generateRandomIndex();
    } while(imageOneIndex === imageTwoIndex || imageTwoIndex === imageThreeIndex || imageOneIndex === imageThreeIndex );
    imageOneElement.src = ImageMall.prototype.allImages[imageOneIndex].imageSource;
    ImageMall.prototype.allImages[imageOneIndex].imageAppearence++;
    imageTwoElement.src = ImageMall.prototype.allImages[imageTwoIndex].imageSource;
    ImageMall.prototype.allImages[imageTwoIndex].imageAppearence++;
    imageThreeElement.src = ImageMall.prototype.allImages[imageThreeIndex].imageSource;
    ImageMall.prototype.allImages[imageThreeIndex].imageAppearence++;
    
    console.log(imageOneIndex, imageTwoIndex, imageThreeIndex)
    console.log(imageOneIndex)

  }

  function generateRandomIndex(){
    return Math.floor(Math.random() * (ImageMall.prototype.allImages.length));
  }
  
  function userDefinedroundNumbers(event)
{
  event.preventDefault();
  maxAttempts = event.target.rounds.value;
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: imagesNames,
        datasets: [{
          label: '# of Votes',
          // data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080',
              '#867979',
              '#808080'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 0
      }]
  },

});chart.render();

console.log(chart);
