// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

module.exports = function(robot) {

  // INSPIRE ME
  robot.respond(/Inspire me/, function(msg) {
    return msg.reply("You are now inspired.");
  });



  // MOOD RESPONSE
  robot.hear(/I am feeling (.*)/, function(msg) {
    let fav;
    fav = msg.match[1];
    let happy_text = ["I'm happy you're happy!", "You earned it!", "Keep it up."];
    let happy_img = ["https://static.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg", "https://az616578.vo.msecnd.net/files/2016/05/05/635980682339872449-624618796_thirtyroses.jpg", "http://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/public/field/field_image_highlight/shutterstock_149301761.jpg", "http://s3.thingpic.com/images/Qr/jTtViYsXiFVfzq8H8rPgLf8A.jpeg", "https://i.pinimg.com/736x/e6/b8/38/e6b838524af9bc100be11a047f1875a9--smile-animals-foxes-animals.jpg", "http://www.indiewire.com/wp-content/uploads/2016/08/20140216-131646.jpg"];
    let sad_text = ["Remember: Don't compare your inside to someone else's outside.", "The word Happy would lose its meaning if it were not balanced by sadness. - Carl Jung", "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved. - Helen Keller", "Ring the bells that still can ring. Forget your perfect offering. There is a crack, a crack in everything. That's how the light gets in. - Leonard Cohen"];
    let sad_img = ["https://i.pinimg.com/736x/06/13/d0/0613d0cb65917303236caf9a00f5a80c--a-bunny-bunnies.jpg", "http://quotespill.com/wp-content/uploads/2017/07/its-ok-bro-dog-demotivator-min.jpg", "https://wondermomwannabe.com/wp-content/uploads/2015/01/Kardashian.png", "http://quotespill.com/wp-content/uploads/2017/07/cheer-up-meme-9-min.jpg", "https://i.pinimg.com/originals/bc/4d/59/bc4d59cd2878b2e901d5414390c0e3c3.jpg"];
    let angry_text = ["Take a deep breath. It will be okay.", "Before you do anything else, go for a walk.", "Ask yourself: Why am I angry? This simple exercise will give your brain back control over your emotions."];
    let angry_img = ["https://i.ytimg.com/vi/OvxwaacXTUA/maxresdefault.jpg", "https://i.pinimg.com/originals/2d/6d/88/2d6d8832e80fa7c3b1a402d2adb9a321.jpg", "https://i.pinimg.com/736x/03/b7/fc/03b7fc8c2c12a8f27bf59a521ac0278f--sunset-pictures-sunset-images.jpg", "https://thehypnotherapyteam.files.wordpress.com/2013/03/shutterstock_83348110-calming.jpg", "https://i.ytimg.com/vi/saHrbNrsLFg/maxresdefault.jpg"];
    let stressed_text = ["Take a break. Creativity comes when your mind is not overly focused on the task at hand.", "Take a nice, long shower.", "Go for a walk in nature.", "Stop what you're doing and do something physically active.", "Take a nap. It'll help reset your brain."];
    let stressed_img = ["http://www.noanxiety.com/relaxing-links/relaxing-ocean.jpg", "https://i.ytimg.com/vi/g9xClTReb7I/maxresdefault.jpg", "https://i.ytimg.com/vi/wuLKvcn-c7A/maxresdefault.jpg", "https://i.ytimg.com/vi/F3KX6SG3fnA/maxresdefault.jpg", "https://i.ytimg.com/vi/OgLnL_AHm2Y/maxresdefault.jpg"];
    let demoralized_text = ["You are enough.", "Remember what you've already accomplished.", "Yes, you can.", "I believe in you!", "Remember that you are often your biggest critic.", "You are an amazing person."];
    let demoralized_img = ["https://www.audicus.com/wp-content/uploads/2015/01/audicus-hearing-aids-hearing-loss-exercise-depression-hans-and-franz.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/14/11/enhanced/webdr13/longform-original-13335-1429024178-4.jpg", "https://i.pinimg.com/originals/f5/5d/c1/f55dc1a87439039efb8c19a2cab66b02.jpg", "http://ww1.hdnux.com/photos/46/61/06/10162576/3/920x920.jpg"];
    if (fav === "happy") {
      return msg.send(msg.random(happy_img) + "\n" + msg.random(happy_text));
    }
    else if (fav === "sad") {
      return msg.send(msg.random(sad_img) + "\n" + msg.random(sad_text));
    }
    else if (fav === "angry") {
      return msg.send(msg.random(angry_img) + "\n" + msg.random(angry_text));
    }
    else if (fav === "stressed") {
      return msg.send(msg.random(stressed_img) + "\n" + msg.random(stressed_text));
    }
    else if (fav === "demoralized") {
      return msg.send(msg.random(demoralized_img) + "\n" + msg.random(demoralized_text));
    }
    else {
      return msg.send("What does it mean to be " + fav + "?");
    }
  });



// ROBO COACH
robot.respond(/Coach me/i, function(res) {
  var name, user;
  res.reply("You are all you need. I'll help you help yourself.");
  user = {
    stage: 1
  };
  name = res.message.user.name.toLowerCase();
  robot.brain.set(name, user);
  return console.log("user created: " + name + " stage: " + user.stage);
});

robot.hear(/.*/i, function(msg) {
  var answer, name, user;
  name = msg.message.user.name.toLowerCase();
  user = robot.brain.get(name) || null;
  if (user !== null) {
    //console.log("user exists: " + name + " stage: " + user.stage);
    answer = msg.match[0];
    switch (user.stage) {
      case 1:
        msg.reply("Let's start with the topic at hand. What do you need help with?");
        break;
      case 2:
        user.topic = answer;
        msg.reply("Ok, so you want to talk about " + user.topic + "\n" + "Let's get more clarity on what your objective is. What does 'good' look like for you here? Get as specific as possible.");
        break;
      case 3:
        user.success = answer;
        msg.reply("Sounds like success is " + user.success + "\n" + "What's gotten in the way of that happening?");
        break;
      case 4:
        user.obstacle = answer;
        msg.reply("Makes sense, what's gotten in the way is " + user.obstacle + "\n" + "What are different ways you can think of for overcoming that? Be specific and get creative!");
        break;
      case 5:
        user.options = answer;
        msg.reply("Wow, you are full of good ideas! Now thinking about those ideas... What do you want to actually try out? What's your next step?");
        break;
      case 6:
        user.next = answer;
    }
    user.stage += 1;
    robot.brain.set(name, user);
    if (user.stage > 6) {
      msg.reply("Excellent. So " + name + ", if I'm hearing you right, your next steps is " + user.next + "\n" + "Kudos for you for figuring this out! Clearly you don't need me anymore. Best of luck to you! - Your Friendly RoboCoach" + "\n" + "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/14/11/enhanced/webdr13/longform-original-13335-1429024178-4.jpg");
      return robot.brain.remove(name);
    }
  }
});


};

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/