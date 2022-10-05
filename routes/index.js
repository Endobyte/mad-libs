var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    color: '#e7ca77',
    textColor: '#80009e',
    font: "Open Sans"
  });
});

router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode(),
    font: "Gemunu Libre"
  })
})

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else if (formData.storyChoice === "4") {
    let rand = (Math.round(Math.random() * 3));
    if (rand === 1) {
      return generateStory1(formData)
    } else if (rand === 2) {
      return generateStory2(formData)
    } else if (rand === 3) {
      return generateStory3(formData)
    }
  } else {
    return "invalid";
  }
}

function generateStory1(formData) {
  return `Pizza was invented by a ${formData.adjective1} ${formData.nationality1} chef named ${formData.name1}. To make a pizza, you need to take a lump of ${formData.noun1}, and make a thin, round ${formData.adjective2} ${formData.noun2}. Then you cover it with ${formData.adjective3} sauce, ${formData.adjective4} cheese, and fresh chopped ${formData.pluralNoun1}. Next you have to bake it in a very hot ${formData.noun3}. When it is done, cut it into ${formData.number1} ${formData.shapes1}. Some kids like ${formData.food1} pizza the best, but my favorite is the ${formData.food2} pizza. If I could, I would eat pizza ${formData.number2} times a day!`
}
// https://www.pinterest.com/pin/804033339694764821/

function generateStory2(formData) {
  return `Yesterday, ${formData.name1} and I went to the park. On our way to the ${formData.adjective1} park, we saw a ${formData.adjective2} ${formData.noun1} on a bike. We also saw big ${formData.adjective3} balloons tied to a ${formData.noun2}. Once we got to the park, the sky turned ${formData.adjective4}. It started to ${formData.verb1} and ${formData.verb2}. ${formData.name1} and I ${formData.pastTenseVerb1} all the way home. Tomorrow we will try to go to the ${formData.adjective5} park again and hope it doesn't ${formData.verb3}.`
}
// https://homeschoolgiveaways.com/2015/06/free-trip-to-the-park-mad-libs-printable/

function generateStory3(formData) {
  return `Tonight is the night when all of the ${formData.adjective1} monsters come out to ${formData.verb1}. Many ${formData.adjective2} witches with big ${formData.pluralNoun1} and ${formData.color1} shoes make potions and very spooky brews. Vampires with ${formData.pluralNoun2} and long red capes visit with friends and search for neck napes. Ogres and ghosts sometimes ${formData.verb2} and play, on this ${formData.adjective3} October day. All the trick-or-treaters ${formData.verb3} and hunt for ${formData.pluralNoun3} and a scare, dressed up as princesses and cowboys here and there. Have a ${formData.adjective4} Halloween!`
}
// https://www.pinterest.com/pin/36380709462158780/

function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

module.exports = router;