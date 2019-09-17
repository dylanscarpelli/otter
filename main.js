var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_IMAGE_UP = '[data-upArrow="up"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var MAX_NUM_IMAGES = 5;

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
  listenUp();
  listenDown();
}

function replaceString(someString, currNum, wantNum) {

  var q = someString.split(currNum).join(wantNum);
  return q;
}

function listenDown() {
  document.getElementById("prevBtn").addEventListener("click", function(event) {

    var myImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);


    var x = myImage.getAttribute("src");

    var testString = x.toString();
    //String(x);

    for (var i = 0; i < testString.length; i++) {

      if (testString[i] >= '0' && testString[i] <= '9') {
        var y = parseInt(testString[i]);
        var nextDwn = y - 1;
      }

    }
    var changedURL = replaceString(testString, y, nextDwn);

    if (nextDwn < 1) {
      //do nothing
    } else {

      myImage.setAttribute('src', changedURL);

      console.log(nextDwn);
      switch (nextDwn) {
        case 1:
          detailTitle.textConten  t = "Stayin' Alive";
          break;
        case 2:
          detailTitle.textContent = "How Deep Is Your Love";
          break;
        case 3:
          detailTitle.textContent = "You Should Be Dancing";
          break;
        case 4:
          detailTitle.textContent = "Night Fever";
          break;
        case 5:
          detailTitle.textContent = "To Love Somebody";
          break;
      }

    }



  });


}





function listenUp() {

  document.getElementById("nextBtn").addEventListener("click", function(event) {


    var myImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);


    var x = myImage.getAttribute("src");

    var testString = x.toString();
    //String(x);

    for (var i = 0; i < testString.length; i++) {

      if (testString[i] >= '0' && testString[i] <= '9') {
        var y = parseInt(testString[i]);
        var nextUp = y + 1;
      }

    }
    var changedURL = replaceString(testString, y, nextUp);

    if (nextUp > 5) {
      //do nothing
    } else {

      myImage.setAttribute('src', changedURL);

      console.log(nextUp);
      switch (nextUp) {
        case 2:
          detailTitle.textContent = "How Deep Is Your Love";
          break;
        case 3:
          detailTitle.textContent = "You Should Be Dancing";
          break;
        case 4:
          detailTitle.textContent = "Night Fever";
          break;
        case 5:
          detailTitle.textContent = "To Love Somebody";
          break;
      }

    }
  });


}




// function upOne() {
//
//
//   var myImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
//   var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
//
//
//   var x = myImage.getAttribute("src");
//
//   var testString = x.toString();
//   //String(x);
//
//   for(var i = 0; i < testString.length; i++){
//
//       if( testString[i] >= '0' && testString[i] <= '9'){
//         var y = parseInt(testString[i]);
//         var nextUp = y + 1;
//       }
//
//     }
//       var changedURL = replaceString(testString, y, nextUp);
//
//
//
//       myImage.setAttribute('src', changedURL);
//
//       console.log(nextUp);
//       switch(nextUp)
//       {
//         case 2:
//         detailTitle.textContent = "How Deep Is Your Love";
//         break;
//         case 3:
//         detailTitle.textContent = "You Should Be Dancing";
//         break;
//         case 4:
//         detailTitle.textContent = "Night Fever";
//         break;
//         case 5:
//         detailTitle.textContent = "To Love Somebody";
//         break;
//       }
//
//
//       //detailTitle.textContent = "SPAGHETTI";
//
//       // var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
//       // detailTitle.textContent = ;
//       //console.log(testString);
//
//
//         // if(x[i] === '1'){
//         //   console.log("1");
//         //   // then 2
//         //
//         // }
//         //
//         //   if(x[i] === '2'){
//         //     console.log("1");
//         //   }
//
//
//
//
//
//
//
//
//
//
// }


// function arrowUp(imageUrl, titleText) {
//
//
//
//
// //document.getElementByClassName('upArrow').addEventListener("click", );
// var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
// detailImage.setAttribute('src', ]\ );
//
// var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
// detailTitle.textContent = titleText;
//
// counter++;
//
// }


initializeEvents();
