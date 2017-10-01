// Description:
//   A bot that gives you emotional support when you're having a bad day
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot tell me I'm (.*) - Receive positive reinforcement that you are in fact (.*)
//   I am feeling (.*) - Get advice on how to deal with that feeling
//   hubot coach me - Get a series of guiding questions that help you solve your problem
//
// Notes:
//   None
//
// Author:
//   a12lin
//

module.exports = function(robot) {

  // POSITIVE REINFORCEMENT
  robot.respond(/\Tell me I'm (.*)\b/i, function(msg) {
    return msg.reply("You are most definitely " + msg.match[1] + "\n" + "When I think of the epitome of " + msg.match[1] + ", I think of you." + "\n" + "Don't let anyone tell you otherwise!");
  });




  // MOOD RESPONSE
  robot.hear(/\I am feeling (.*)\b/, function(msg) {
    let fav;
    fav = msg.match[1];
    let happy_text = ["I'm happy you're happy!", "You earned it!", "Keep it up!"];
    let happy_img = ["https://static.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg", "https://az616578.vo.msecnd.net/files/2016/05/05/635980682339872449-624618796_thirtyroses.jpg", "http://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/public/field/field_image_highlight/shutterstock_149301761.jpg", "http://s3.thingpic.com/images/Qr/jTtViYsXiFVfzq8H8rPgLf8A.jpeg", "https://i.pinimg.com/736x/e6/b8/38/e6b838524af9bc100be11a047f1875a9--smile-animals-foxes-animals.jpg", "http://www.indiewire.com/wp-content/uploads/2016/08/20140216-131646.jpg"];
    let sad_text = ["Remember: Don't compare your inside to someone else's outside.", "You're right, life does suck sometimes. But you'll get through it. I believe in you.", "Just remember, what doesn't kill you will only make you stronger.", "I am here for you if you want to talk more. If you want help thinking through a problem, call my name followed by COACH ME.", "I'm sorry you feel that way. Remember that you are an amazing person."];
    let sad_img = ["https://i.pinimg.com/736x/06/13/d0/0613d0cb65917303236caf9a00f5a80c--a-bunny-bunnies.jpg", "http://quotespill.com/wp-content/uploads/2017/07/its-ok-bro-dog-demotivator-min.jpg", "https://wondermomwannabe.com/wp-content/uploads/2015/01/Kardashian.png", "http://quotespill.com/wp-content/uploads/2017/07/cheer-up-meme-9-min.jpg", "https://i.pinimg.com/originals/bc/4d/59/bc4d59cd2878b2e901d5414390c0e3c3.jpg"];
    let angry_text = ["Take a deep breath. It will be okay.", "You're usually so calm; this must have really really annoyed you. May I offer you some virtual ice cream?", "Before you do anything else, go for a walk.", "I'm here for you. If you want to talk through an issue, call my name followed by COACH ME."];
    let angry_img = ["https://i.ytimg.com/vi/OvxwaacXTUA/maxresdefault.jpg", "https://i.pinimg.com/originals/2d/6d/88/2d6d8832e80fa7c3b1a402d2adb9a321.jpg", "https://i.pinimg.com/736x/03/b7/fc/03b7fc8c2c12a8f27bf59a521ac0278f--sunset-pictures-sunset-images.jpg", "https://thehypnotherapyteam.files.wordpress.com/2013/03/shutterstock_83348110-calming.jpg", "https://i.ytimg.com/vi/saHrbNrsLFg/maxresdefault.jpg"];
    let stressed_text = ["You deserve a break. Let's go get cake!", "Take a nice, long shower.", "Go for a walk in nature.", "Write down your top 3 priorities and only focus on those.", "You've been working so hard. Why don't you take it easy the rest of the day and revisit all this tomorrow?"];
    let stressed_img = ["http://www.noanxiety.com/relaxing-links/relaxing-ocean.jpg", "https://i.ytimg.com/vi/g9xClTReb7I/maxresdefault.jpg", "https://i.ytimg.com/vi/wuLKvcn-c7A/maxresdefault.jpg", "https://i.ytimg.com/vi/F3KX6SG3fnA/maxresdefault.jpg", "https://i.ytimg.com/vi/OgLnL_AHm2Y/maxresdefault.jpg"];
    let demoralized_text = ["You are enough.", "Remember what you've already accomplished. You can do anything.", "Yes, you can.", "I believe in you!", "Remember that there are only two outcomes possible here: either you win or you learn."];
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



// COACHING
robot.respond(/Coach me/i, function(res) {
  var name, user;
  res.reply("Sure, I'll help you help yourself.");
  user = {
    stage: 1
  };
  name = res.message.user.name.toLowerCase();
  robot.brain.set(name, user);
});

robot.hear(/.*/i, function(msg) {
  var answer_old, answer, name, user;
  name = msg.message.user.name.toLowerCase();
  user = robot.brain.get(name) || null;
  if (user !== null) {
    answer_old = msg.match[0];
    answer = answer_old.replace(/\I\b/gi, "you").replace(/\me\b/gi, "you").replace(/\am\b/gi, "are").replace(/\our\b/gi, "your").replace(/\my\b/gi, "your").replace(/\'m\b/gi, "'re");
    switch (user.stage) {
      case 1:
        msg.reply("What is it that you need help with?");
        break;
      case 2:
        user.topic = answer;
        msg.reply("Ok, so our topic of discussion is " + user.topic + "\n" + "Let's get more clarity on what your objective is. What does 'good' look like for you here? Get as specific as possible.");
        break;
      case 3:
        user.success = answer;
        msg.reply("Sounds like your goal is " + user.success + "\n" + "What's gotten in the way of that happening?");
        break;
      case 4:
        user.obstacle = answer;
        msg.reply("Makes sense, what's gotten in the way is " + user.obstacle + "\n" + "What are different ways you can think of for overcoming that? Let's think of at least 2 ideas. Be specific and get creative!");
        break;
      case 5:
        user.options2 = answer;
        msg.reply("Wow, you are full of good ideas! Now thinking about those ideas... What do you want to actually try out? What's your next step?");
        break;
      case 6:
        user.next = answer;
    }
    user.stage += 1;
    robot.brain.set(name, user);
    if (user.stage > 6) {
      msg.reply("Excellent. So " + name + ", if I'm hearing you right, your next steps is " + user.next + "\n" + "Kudos for you for figuring this out! Best of luck to you." + "\n" + "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/14/11/enhanced/webdr13/longform-original-13335-1429024178-4.jpg");
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