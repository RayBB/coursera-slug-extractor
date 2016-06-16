/*////////////////////////////
This script is used to extract slugs (course ids) from
the old coursera platform (class.coursera.org).

To run this script go to coursra.org and click on the "archived" tab
From there, paste the code below into the console and it will automatically
spit out a list of slugs from the old platform.

built for use with the coursera-dl project on github



*//////////////////////////////

var items = $('a');
var urls = [];
var slugs = []; // slugs for courses on the old platform
var newSlugs = []; // Slugs for courses on the new platform

for (var i = 0; i < items.length; i++){
  urls.push(items[i].href);
}

urls = urls.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
});

urls = urls.filter(isCourse);

function ps(arr){ // Prints slugs 
  var list = "";
  for (var i = 0; i < arr.length; i++){
    list+=slugs[i]+" "
  }
  console.log(list);
}

function isCourse(url){
  var re = /class.coursera.org\/\S*\//g;
  var newRe = /coursera.org\/course\/\S*/g;
  if(newRe.test(url)){
    newSlugs.push(url.match(newRe)[0].substring(20));
  } else if (re.test(url)){
    var temp = url.match(re)[0].substring(19);
    var temp = temp.substring(0,temp.length-1);
    slugs.push(temp);
    return true;
  }
}

ps(slugs);

console.log("Type ps(slugs) to see courses on the old platform or ps(newSlugs) to see courses on the new platform");
