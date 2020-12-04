# GENESYStems Administrator
----

## About
GENESYStems Administrator is a basic Discord bot for use with Fantasy Flight's GENESYS and Star Wars series of  
tabletop RPGs. I made it as a basic project to learn how to make Discord bots and as a tool to assist with my  
own running of these systems. The bot is designed to provide easy check resolution without the hassle of a  
third party web application.

## Commands
  
* **!ghelp** - Display all possible commands.  

* **!groll** *or* **!gr** - Roll the specified dice types and amounts and receive a result in the channel.  
Accepts multiple inputs provided they are seperated by a space. e.g. **!groll 1y 3g 4p** would roll one   
yellow proficiency die, three green ability dice and four purple difficulty dice. The result will let you  
know whether you succeed/fail, have advantage/threat and if triumph or despair have occured. A  
list of dice classifications can be found below.  
  
* **!gm** - Takes the same inputs as **!groll** except DMs the results to you for secret results.  
This can also be accomplished through the use of a private channel for the GM if you prefer.

## Dice Types
You will likely notice that the main dice types used in most check resolutions are referred to by their colour  
as opposed to their official names. This is a matter of personal preference due to me naturally thinking about  
these dice in terms of their colour before anything else. Whilst I'm sure that reasoning doesn't really help  
you if you don't do that, I hope you can at least understand why I did it.  
  
  
Input | Dice Type
----- | ------
y | Yellow Proficiency Die
g | Green Ability Die
r | Red Challenge Die
p | Purple Difficulty Die
b | Boost Die
t | Threat Die
f | Force Die (Star Wars Only)
  
## Notes
* Order does not matter when inputting a roll. **!gr 4g 1r 2p** will have the same effect as **!gr 2p 4g 1r**.  
  
* Force die rolls will always output independently of regular check rolls. This means that you can include   
it as a part of normal roll commands and both results should output properly.
  
* **!groll** is used instead of something like !roll in order to prevent conflicts with popular dice rolling  
bots for games like DnD. My reasoning behind this is that if you're inviting a Fantasy Flight bot to  
your server, there's a decent chance you play DnD and already have a bot for that present.


*Bot made by Russell Nairn*

