# Slacker bot

**Slacker** is a friendly Slack bot that lifts you up when you're having a bad day. It prides itself on being a robot with higher EQ than most of your human friends.

Slacker provides three types of emotional support for you: Positive Reinforcement, Mood Response, and Coaching.  
<br>




## Positive Reinforcement
We all doubt ourselves from time to time. Good thing you have Slacker to help you combat your Imposter Syndrome. 

```
@Slacker Tell me I'm ________
```
Replace the blank with whatever adjective or descriptive noun you desperately need validation for. Smart? Interesting? Charming? Not a jerk? Batman? Whatever floats your boat. Slacker will reply with just the ego boost you need.

> Note from Annie: I created this functionality by taking a wildcard from the user (the blank mentioned above) and having the bot reply to the user with a sentence that uses the wildcard.
<br>

## Mood Response

We all get a little sad sometimes. There are better ways to deal with your emotional lows than tubs of ice cream. Good thing Slacker is full of sound advice. Like a good therapist (or stalker) it listens to everything you say in its presence and showers you with helpful suggestions whenever it hears:

```
I am feeling ________
```

where the blank is some emotion. At the moment Slacker understands "sad," "angry," "stressed," "demoralized," and (for the 1% of us) "happy," but it may learn to feel other human emotions in the future too.

> Note from Annie: This functionality also takes a wildcard from the user (the blank mentioned above), but depending on what is in the blank it gives a completely different response via if/else statements. Each response is a mix of text and image, which are randomly selected from an array of options.
<br>

## Coaching

Don't you just hate it when some robot tells you what to do? Since you presumably know yourself best, you presumably can solve your own problems better than anyone else can. But sometimes a little extra prodding sure is helpful. Turns out Slacker is also an excellent coach. When it's in coach mode, it will never just *tell* you what you should do; instead, it will help you figure out a solution yourself that best fits your situation. What a sweetheart.

To activate Slacker's coaching skills:

```
@Slacker Coach me
```
This will trigger a series of guiding questions from Slacker. Once you answer a question, Slacker will ask you a followup question, until you've figured out the solution for yourself. In case you're curious, Slacker uses a simple but powerful coaching model called [GROW](https://www.mindtools.com/pages/article/newLDR_89.htm) that is very useful for human-to-human coaching as well.

> Note from Annie: This was the most complex and interactive functionality and I did a lot of Googling to make it work (to be honest I don't feel I understand every piece of the code 100% and would like to be able to). Here, the bot provides multiple responses but has to wait for user input in between each response, and the responses themselves contain what users entered earlier. To make it more conversational I also learned to use Regular Expressions and the replace() method so that the replies switch to second-person pronouns when repeating back what the user inputted (for example if the user says "*I like cheese*," the bot should reply with "Sounds like *you like cheese*" instead of "Sounds like *I like cheese*").

<br><br><br>

## What's next

Slacker v.1 can do a lot, but it can't do everything. I'd like the future incarnation of Slacker to be able to:
* Respond to more types of emotions.
* Provide more scientifically proven advice for combating negative emotions.
* Ask entirely different coaching questions depending on what answers users give.
* Talk to an API.


<br><br>
***

*Slacker is the creation of [a12lin](https://github.com/a12lin), who aspires to be the human equivalent of this robot.*

<a href="http://www.youtube.com/watch?feature=player_embedded&v=q-9kPks0IfE" target="_blank"><img src="http://img.youtube.com/vi/q-9kPks0IfE/0.jpg" 
alt="I'll Be There For You" width="240" height="180" border="5" /></a>