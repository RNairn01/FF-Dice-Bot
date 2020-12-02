const blank = 'blank';
const triumph = 'triumph';
const succ = 'success';
const fail = 'failure';
const threat = 'threat';
const adv = 'advantage';
const dis = 'disadvantage';

module.exports.randomInt = function(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function determineSuccess(yellow, green, purple, red, adv, dis) {

  }

function yellowDice(num) {
 let diceArr = [];
    for (let i = 0; i < num; i++) {
        let rand = randomInt(0,11);
        switch(rand) {
            case 0:
                diceArr.push(blank);
                break;
            case 1:
                diceArr.push(succ);
                break;
            case 2:
                diceArr.push(succ);
                break;
            case 3:
                diceArr.push(succ, succ);
                break;
            case 4:
                diceArr.push(succ, succ);
                break;
            case 5:
                diceArr.push(adv);
                break;
            case 6:
                diceArr.push(adv, succ);
                break;
            case 7:
                diceArr.push(adv, succ);
                break;
            case 8:
                diceArr.push(adv, succ);
                break;
            case 9:
                diceArr.push(adv, adv);
                break;
            case 10:
                diceArr.push(adv, adv);
                break;
            case 10:
                diceArr.push(triumph);
                break;                                                                                  
        };
    };
    return diceArr;
};

function redDice(num) {
    let diceArr = [];
       for (let i = 0; i < num; i++) {
           let rand = randomInt(0,11);
           switch(rand) {
               case 0:
                   diceArr.push(blank);
                   break;
               case 1:
                   diceArr.push(fail);
                   break;
               case 2:
                   diceArr.push(fail);
                   break;
               case 3:
                   diceArr.push(fail, fail);
                   break;
               case 4:
                   diceArr.push(fail, fail);
                   break;
               case 5:
                   diceArr.push(dis);
                   break;
               case 6:
                   diceArr.push(dis, fail);
                   break;
               case 7:
                   diceArr.push(dis, fail);
                   break;
               case 8:
                   diceArr.push(dis, fail);
                   break;
               case 9:
                   diceArr.push(dis, adv);
                   break;
               case 10:
                   diceArr.push(dis, adv);
                   break;
               case 10:
                   diceArr.push(threat);
                   break;                                                                                  
           };
       };
       return diceArr;
   };