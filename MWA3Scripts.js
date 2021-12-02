//Variables
var stress = 50;
var fatigue = 50;
var happiness = 50;
var work = 100;
var days = 1;
var scenario = 0
//New Game
document.getElementById("NewGame").onclick = function(){
    document.getElementById("Option1").disabled = false;
    document.getElementById("Option2").disabled = false;
    document.getElementById("Stress").innerHTML = 50;
    document.getElementById("Fatigue").innerHTML = 50;
    document.getElementById("Happiness").innerHTML = 50;
    document.getElementById("Work").innerHTML = 100;
    document.getElementById("Day").innerHTML = 1;
    days = 1;
    scenario = Math.floor(Math.random() * choices.length);
    document.getElementById("topText").innerHTML = choices[scenario][0];
    document.getElementById("Option1Text").innerHTML = choices[scenario][1];
    document.getElementById("Option2Text").innerHTML = choices[scenario][2];
    document.getElementById("bottomText").innerHTML = "What do you do?";
}
//First Option
document.getElementById("Option1").onclick = function(){
    switch(scenario){
        case 0:
            modifyFatigue(5);
            modifyWork(5);
            break;
        case 1:
            modifyStress(5);
            modifyWork(5);
            break;
        case 2:
            modifyHappiness(5);
            break;
        case 3:
            modifyHappiness(5);
            break;
        case 4:
            modifyFatigue(-5);
            modifyWork(-10);
            break;
        case 5:
            modifyWork(5);
            break;
        case 6:
            modifyHappiness(5);
            break;
        case 7:
            modifyHappiness(10);
            modifyFatigue(10);
            break;
        case 8:
            modifyFatigue(-5);
            break;
        case 9:
            modifyStress(-5);
            modifyWork(-10);
            break;
        case 10:
            modifyHappiness(5);
            break;
        case 11:
            modifyStress(-5);
            modifyWork(-15);
            break;
        case 12:
            modifyHappiness(5);
            modifyStress(-5);
            modifyWork(-10);
            break;
        case 13:
            modifyStress(-5);
            modifyWork(-10);
            break;
        case 14:
            modifyFatigue(-5);
            modifyWork(-10);
            break;
        case 15:
            modifyHappiness(-5);
            modifyStress(10);
            modifyWork(5);
            break;
        case 16:
            modifyWork(-10);
            break;
        case 17:
            modifyWork(-10);
            break;
        case 18:
            modifyFatigue(-5);
            break;
        case 19:
            modifyHappiness(5);
            modifyWork(-10);
            break;
        default:
            break;
    }
    if(days < 14){
        nextDay();
    }
    else{
        finish();
    }
}
//Second Option
document.getElementById("Option2").onclick = function(){
    switch(scenario){
        case 0:
            modifyFatigue(-5);
            modifyWork(-10);
            break;
        case 1:
            modifyStress(-5);
            modifyWork(-10);
            break;
        case 2:
            modifyFatigue(-5);
            break;
        case 3:
            modifyFatigue(-5);
            break;
        case 4:
            modifyWork(5);
            modifyHappiness(-5);
            modifyStress(5);
            break;
        case 5:
            modifyStress(-5);
            break;
        case 6:
            modifyStress(-5);
            break;
        case 7:
            modifyHappiness(5);
            break;
        case 8:
            modifyFatigue(5);
            modifyStress(5);
            break;
        case 9:
            modifyStress(10);
            modifyWork(5);
            break;
        case 10:
            modifyFatigue(-5);
            break;
        case 11:
            modifyStress(15);
            modifyWork(5);
            break;
        case 12:
            modifyHappiness(-5);
            modifyWork(5);
            break;
        case 13:
            modifyStress(10);
            modifyWork(5);
            break;
        case 14:
            modifyWork(5);
            modifyFatigue(10);
            break;
        case 15:
            modifyWork(-10);
            break;
        case 16:
            modifyWork(5);
            modifyHappiness(-5);
            modifyStress(5);
            break;
        case 17:
            modifyWork(5);
            modifyHappiness(-5);
            modifyStress(5);
            break;
        case 18:
            modifyStress(-5);
            break;
        case 19:
            modifyWork(5);
            modifyStress(5);
            break;
        default:
            break;
    }
    if(days < 14){
        nextDay();
    }
    else{
        finish();
    }
}
//Modify Stats
function modifyStress(s){
    stress += s;
    document.getElementById("Stress").innerHTML = stress;
}
function modifyFatigue(f){
    fatigue += f;
    document.getElementById("Fatigue").innerHTML = fatigue;
}
function modifyHappiness(h){
    happiness += h;
    document.getElementById("Happiness").innerHTML = happiness;
}
function modifyWork(w){
    work += w;
    document.getElementById("Work").innerHTML = work;
}
//Go to next day
function nextDay(){
    scenario = Math.floor(Math.random() * choices.length);
    document.getElementById("topText").innerHTML = choices[scenario][0];
    document.getElementById("Option1Text").innerHTML = choices[scenario][1];
    document.getElementById("Option2Text").innerHTML = choices[scenario][2];
    days += 1;
    document.getElementById("Day").innerHTML = days;
}
//Get ending
function finish(){
    document.getElementById("Option1Text").innerHTML = "";
    document.getElementById("Option2Text").innerHTML = "";
    document.getElementById("Option1").disabled = true;
    document.getElementById("Option2").disabled = true;
    if(work <= 40){
        document.getElementById("topText").innerHTML = endings[0];
        document.getElementById("bottomText").innerHTML = "The End, Thanks For Playing!";
    }
    else if(stress >= 70){
        document.getElementById("topText").innerHTML = endings[1];
        document.getElementById("bottomText").innerHTML = "The End, Thanks For Playing!"; 
    }
    else if(fatigue >= 70){
        document.getElementById("topText").innerHTML = endings[2];
        document.getElementById("bottomText").innerHTML = "The End, Thanks For Playing!";    
    }
    else if(happiness <= 40){
        document.getElementById("topText").innerHTML = endings[3];
        document.getElementById("bottomText").innerHTML = "The End, Thanks For Playing!";    
    }
    else{
        document.getElementById("topText").innerHTML = endings[4];
        document.getElementById("bottomText").innerHTML = "The End, Thanks For Playing!";
    }
}
//Random events
var choices =[
    
    ["You finish the 8 hour workday at the office and its time to head home. However its all hands on deck to finish the game befire the release date upcoming release date. Everyone is putting in unpiad overtime to meet this deadline. However, you are not legally obligated to stay past hours.","Put in the overtime as everyone else is giving it there all","You need to prioritize your wellbeing and leave the extra work to your colleagues"],//Overtime
    
    ["While working on your part on the development of the game, your stomach begins to rumble. You're currently in the swing of things and taking your lunch break now could break that flow.","Take your lunch break as you need to in top condition to work","Skip your lunch as the finishing your current task is more important"],//Lunch break
    
    ["While working late into the night and coming home late you have the rare chance to spend some time with your family.","Spend time with your family as you haven't had a chance to do so in weeks","Get some sleep as you need to get ready for another busy day at work"],//Family
    
    ["While relaxing in your room one night you somehow find some spare time to look at your game collection.","Play some video games as it feels like months since you last played","Sleep, you need your rest tommorow"],//Play games
    
    ["One day you just are not feeling well and feel particularly lethargic this morning.","Stay home its best that you look after your health","Best go to work as you don't want to burden your coworkers with extra work especially around crunch time"],//Sick morning
    
    ["You have accidently slept in a couple minutes to much and are now facing the dilemma of what to eat for breakfast.","Coffee and breakfast bars to go so you can get some extra work done","Bacon, eggs, and pancakes that would leave just enough time to get to work on time"],//Breakfast
    
    ["You find yoursleve unable to enjoy the game you used to play and want to do something to take your mind of things.","Go for a run around the neighborhood to clear your mind","Relax and just flip through some TV channels to pass the time"],//Pass time
    
    ["You have been feeling more sluggish than usual today. Unfortunately it's on the same day you have some free time to spend with family. They want to go to the recreation center to play games, but you just can't muster up the energy. However a new movie came out that the family wouldn't be against seeing.","Go to the recreation center and have fun with the little time  you get to see your family","Convince your family to go see the new movie to conserve your energy"],//Family night
    
    ["It is well into the night at the office and the development team is still working hard at finishing the game before the deadline. It seems that everyone is in for the long haul and it's going to end up being an all nighter. You contemplate heading home now to get some sleep, since this is unpaid overtime.","You pull an all nighter because you can't leave your coworkers dry this late at night","Go home to rest and recover leaving your coworkers with extra work"],//Late night
    
    ["An emergency has been called involving one of your family members. It does not appear to be lethal, but visiting the hospital would mean leaving your coworkers with even more work.","Visit your family in the hospital as you need to make sure their allright","Visit them after work since the injuries aren't too serious, though this means when visiting hours are almost over since you probably have to work overtime"],//Family emergency
    
    ["It has been a while since you've played a mobile game you have and had the spare time to play, but at the same time you have the opportunity to take a power nap before getting back to work.","Play the game as you need some entertainment now an then","Sleep, as you really need it right now"],//Play or nap
    
    ["The deadline ever approaches down on the team and your supervisors on breathing down everyone's necks to get the game done by then. The pressure is getting to you, but taking a lunch break right now is not an opportune time.","Take a lunch break just to ease up the pressure you're feeling","Take the verbal abuse and get some work done"],//Verbal dressing
    
    ["Some friends invite you out for a party night, but that would mean skipping the overtime and saddling your coworkers with more work.","Go to that party as you don't get to see your friends often","Stay at work as you can't stomach leaving unfinished work to your coworkers"],//Party
    
    ["A certain part of the task you are working on is frustrating you to no end. The pressure of the encroaching deadline is not helping matters.","Take a break and come back to the problem later","Power through and try to get the problem solved"],//Problem
    
    ["You did not get much sleep last night and its been negatively affecting you at work.","Doze off at work, but suffer in efficiency","Power through at the detriment of your fatigue"],//Sleepy
    
    ["Its technically your day off, but everyone needs to be at work right now to finish the game before the deadline. It being unpaid doesn't help matters.","Go to work so you don't let you coworkers high and dry.","Stay home as you really need this time off, at the expense of your fellow colleagues"],//Vacation work
    
    ["You have been noticing some sexist behavior at the office today and are unsure if filing an anonymous complaint would help.","Report anonymously to HR as this is morally wrong","Don't as it might affect productivity"],//Sexism
    
    ["Some coworkers have been making sexists remarks about some of your other coworkers. Do you file anonymous complaints that might compromise team productivity.","Yes as Sexism should not be tolerated in the workplace","No, we really need all attention on finishing the game before the deadline."],//Sexist comments
    
    ["Sometimes its the small thing in life that make things bearable. You decide between coffee or tea during a lunch break.","Drink coffee, you need that pick me up","Drink tea, you want something sweet for a change"],//drinks
    
    ["You just worked out a major issue with the video game that took a lot of time and you decide between rewarding yourself with a break or getting right back to work.","Take a break, you deserve it","Get back to work, the game isn't going to finish itself"]//Breakthrough
];
//Game endings
var endings = [
    "After many days of crunch the release date of the game comes. Celebrations go around the office at its completion. However, you and a handful of other employees are led to an office and given bad news. You all were layed off with no severance and given 3 hours to vacate your offices. So much for your dedication...[Bad End 1: Fired]",
    
    "You find yourself stressed out too much that the release of the game you spent agonizing days over barely fazes you. Your love for making video games seems to have diminished to embers that could blow out at any moment. The creativity you had when entering the industry is long gone. [Bad End 2: Stressed Out]",
    
    "You are barely able to keep your eyes open even during the celebration of having the game that had countless sleepless hours being released. After talking with a doctor you come to release you had developed some sleeping disorders during the crunch of game development. To add salt to injury, your company's health insurance doesn't even cover medical fees. [Bad End 3: Fleeting Sleep]",
    
    "You don't remember when you stopped caring. Not even the game's release that put you in this state phased you. The world seems so bland and you lost the drive to even keep moving forward. The happy memories you have seem to be a distant dream. [Bad End 4: Burn Out]",
    
    "You celebrate along with your coworkers in celebrating the game's release. It was a rough couple of weeks, but you managed to persevere. This may be short break before more crunch periods arrive, but you still relish your break until then. [End: Just Another Cycle]"
]