var readlineSync = require('readline-sync');
const chalk = require('chalk');
 
var count = 0;

var highestScore = [
  {
    name : "siddharth",
    score : 3
  }
  ,{
    name : "anurag",
    score : 3
  }
  ];


function askQuestion(options,question,answer)
{
  var answerInput = readlineSync.keyInSelect(options,question);
  if(answer==answerInput)
  {
    console.log(chalk.green("You are right!!!"));
    count++;
    console.log(chalk.blue("Your current score is " + count));
  }
  else{
    console.log(chalk.red("You are wrong :("));

    console.log(chalk.red("Your current score is " + count));
  }
};

var questions = [
  questionOne = {
    question: "Where does Barry Allen keep his 'Flash' costume?",
    options:["Inside a ring","In a small backpack","Inside a shoe","Under his usual clothes"],
    answer: 0
  }
  ,
  questionTwo = {
    question: "Which of the following Supervillain was not a member of 'Suicide Squad'?",
    options:["Nightshade","Deadshot","The Joker","Slipknot"],
    answer: 2
  },
  questionThree = {
    question: "What weapon besides his mind, does Lex Luthor traditionally wield?",
    options:["Sword of Kryptonite","Gamma Ray laser","Warsuit","Singing voice"],
    answer: "2"
  },
  questionTfour = {
    question: "The 'DC' in DC Comics stands for:",
    options:["Dangerous Comics","Detective Comics","Demonic Comics","Devilish Comics"],
    answer: 1
  }
]

function start()
{
  console.log("Welcome to the Game")
  var name = readlineSync.question("Enter your name : ");
  console.log(`Let see ${name} how much you know DC comics???`)

}

function play(start,end){
  for(let i=start;i<end;i++)
  {
    askQuestion(questions[i].options,questions[i].question,questions[i].answer)
  }
}

function printHighestScore()
{
  console.log("Your final score is : " + count);
  console.log("Lets see who are all the top scorers");
  let highest = false;
  for(let i=0;i<highestScore.length;i++)
  {
    if(highestScore[i].score<count)
    {
        highest=true;
        highscore = highestScore[i].score;
    }
    console.log("Name : " + highestScore[i].name + " || score : " +highestScore[i].score )
  }

  if(highest)
  {
    console.log(chalk.bold.bgGreen("COngratulations!!! 🥳 You have created a new high score. Send me the screenshot so that i will update it"))
  }


}



start();
console.log("Welcome to level 1 of the game");
console.log("Level 1 consist of 2 questions and to go to next level you need to pass all 2 questions");
play(0,2);

if(count==2)
{
  console.log("Congratulations you cleared level 1.")
  console.log("Level 2 will start ......")
  console.log("This level consist of two more questions .....")
  play(2,4);
  if(count ==4)
  {
    console.log(chalk.bold.bgGreen("Congratulations you passed all questions!!!!🤩"));
  }
}
else{
  console.log(chalk.bold.bgRed("sorry you werent able to clear the round 1"))
}

printHighestScore();





