// Импорт текстов
import { texts } from './texts.js';



// Структура блоков квеста
const story = {
  one: {
    text: texts.one,
choices: [
      { text: "Остаться здесь до наступления темноты", next: "two"},
      { text: "Выпрыгнуть из саней прямо сейчас", next: "three"}
    ]
  },
  
  two: {
    text: texts.two,
    choices: [
      { text: "Дальше", next: "four"},
    ]
  },

  three: {
    text: texts.three
  },

  four: {
    text: texts.four,
  choices: [
    { text: "Согласиться", next: "five" },
    { text: "Отказаться", next: "six"}
  ]
},
five: {
  text: texts.five,
  choices: [
    {   text: "Бросить кубик на инициативу", 
          action: () => {
          rollDice((result) => {
          if (result >=1 && result <=4) {
            currentBlock='seven';
            alert(`Выпало: ${result}. У противника больше!`);
          } else {
            currentBlock='eight';
            alert(`Выпало: ${result}. У противника меньше!`);
          }        
          render();
          });
        }
      }
    ]
  },
  six: {
    text: texts.six,
    choices: [ {text: "Дальше", next: "nine"}]
  },
  seven: {
    text: texts.seven,
    choices: [ {text: "Дальше", next: "fourteen"}]
  },

  eight: {
    text: texts.eight,
    choices: [
      { text: "Сразиться с существом", next: "ten"},
      { text: "Убежать", next: "seven"}
    ]
  },

  nine: {
    text: texts.nine,
    choices: [
      { text: "Ухватиться за сани", next: "eleven"},
      { text: "Сражаться! Бросайте инициативу!",
        action: () => {
          rollDice((result) => {
          alert(`Выпало число: ${result}`);
          if (result >=1 && result <=5) {
            currentBlock='seven';
          } else {
            currentBlock='eight';
          }        
          render();
          });
        }
      }
    ]
  },

ten: {
  text: texts.ten,
  choices: [
    { 
      text: "Бросок на попадание!",
      action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twelve';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='thirteen';
          }
          render();
        });
      }
    }
  ]
},

  eleven: {
    text: texts.eleven,
    choices: [ {text: "Дальше", next: "fourteen"}]
  },

    twelve: {
    text: texts.twelve,
    choices: [ {text: "Дальше", next: "fourteen"}]
  },

    thirteen: {
    text: texts.thirteen,
    choices: [ {text: "Дальше", next: "fourteen"}]
  },

  fourteen: {
    text: texts.fourteen,
    choices: [ {text: "Дальше", next: "healtext"}]
  },

  healtext: {
    text: '<em>Теперь находясь вне боя вы можете принять исцеление Родерика, нажав на кнопку.</em>',
    choices: [ {text: "Дальше", next: "fourteencont"}]
  },

  fourteencont: {
    text: texts.fourteencont,
    choices: [
      {text: "Проверить замок", next: "fiveteen"},
      {text: "Обыскать камеру", next: "sixteen"}
    ]
  },
  fiveteen: {
    text: texts.fiveteen,
    choices: [
      {text: "Попробовать сломать цепь", next: "seventeen"},
      {text: "Обыскать камеру", next: "sixteen"}
    ]
  },
  sixteen: {
    text: texts.sixteen,
    choices: [
      {text: "Взломать замок",
        action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=openlocks ) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='nineteen';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='twenty';
          }
          render();
        })
      }
      },
      {text: "Подождать того, что будет дальше", next: "twentyone"}
    ]
  },
  seventeen: {
    text: texts.seventeen,
    choices: [
      { text: "Проверка Силы",
        action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultCheck = roll; // результат проверки
          if (resultCheck <=strength ) {
            alert(`Значение вашего броска: ${resultCheck}. Это успех!`);
            currentBlock='nineteen';
          } else {
            alert(`Значение вашего броска: ${resultCheck}. Это провал!`);
            currentBlock='twenty';
          }
          render();
        });
      }
    }]
  },
 
  nineteen: {
    text: texts.nineteen,
    choices: [
      {text: "Приказать прекратить спор и вернуться в камеру", next: "twentytwo"},
      {text: "Схватить табуретку и ударить входящего", next: "twentythree"}
    ]
  },
  twenty: {
    text: texts.twenty,
    choices: [{text: "Дальше", next: "twentyone"}]
  },
  twentyone: {
    text: texts.twentyone,
    choices: [{
      text: "Схватить существо",
        action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='twentyseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='thirtyone';
          }
          render();
        });
      }
    }
    ]  
},
twentytwo: {
  text: texts.twentytwo,
  choices: [
    {text: "Схватить существо через прутья", next: "twentyseven"},
    {text: "Выскочить за дверь и поймать существо", next: "twentysix"}
  ]
},

twentythree:{
  text: texts.twentythree,
  choices: [
    {text: "Ударить монстра!",
     action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='twentyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='twentynine';
          }
          render();
        });
      }
    }
  ]
},

twentyfour: {
  text: texts.twentyfour,
  choices: [ {text: "Дальше", next: "thirtytwo"}]
},

twentyfive: {
  text: texts.twentyfive,
  choices: [ {text: "Дальше", next: "thirtytwo"}]
},

twentysix: {
  text: texts.twentysix,
  choices: [ {text: "Схватить зверя!",
              action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='twentyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='twentyfive';
          }
          render();
        });
      }
  }]
},

twentyseven: {
    text: texts.seven,
    choices: [ {text: "Выйти из камеры", next: "thirtytwo"}]
},

twentyeight: {
    text: texts.twentyeight,
    choices: [{text: "Дальше", next: "thirtytwo"}]
},

twentynine: {
    text: texts.twentynine,
    choices: [{text: "Бросок кубика!",
        action: () => {
          rollDice((result) => {
          alert(`Выпало число: ${result}`);
          if (result >=1 && result <=3) {
            currentBlock='thirty';
          } else {
            currentBlock='strikeagainone';
    }
          render();
          });
        }
    }]
},

strikeagainone: {
    text: "Вы можетеударит снова!",
    choices: [ {text: "Совершить бросок атаки!",
              action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это попадание!`);
            currentBlock='thirty';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это промах!`);
            currentBlock='twentyeight';
          }
          render();
        });
      }
  }]
},

thirty: {
    text: texts.thirty,
    choices: [ {text: "Клинок задевает вас", damage: 1, next: "twentyfive" }]
},

  thirtyone: {
    text: texts.thirtyone,
    choices: [
      {
        text: "Забрать меч монстра",
        action: () => {
          addItemToEquipment("Меч");
          currentBlock="thirtytwo";
          render()
        }
      }
    ]
  },

  thirtytwo: {
    text: texts.thirtytwo,
        choices: [
      {
        text: "Взять лампу",
        action: () => {
          addItemToEquipment("Лампа");
          currentBlock="thirtytwonext";
          render()
        }
      }
    ]
  },

  thirtytwonext: {
    text: "Вы можете выйти через проход рядом с камерой или пойти к дальней стене.",
    choices: [
      {text: "Проход рядом", next: "thirtythree"},
      {text: "Проход у дальней стены", next: "seventynine"}]
  }, 

  thirtythree: {
    text: texts.thirtythree,
    choices: [
      {text: "Повести группу по проходу", next: "thirtyfour"},
      {text: "Послать кого-то разведать дорогу впереди", next: "thirtyfive"},
      {text: "Вернуться и попробовать пройти в другой проход", next: "seventynine"}]
  },

  thirtyfour: {
    text: texts.thirtyfour,
    choices:  [
      {text: "Попытатьс пройти бесшумно", next: "thirtysix"},
      {text: "Вернуться в комнату с клеткой", next: "fiftynine"}
    ]
  },

  thirtyfive: {
    text: texts.thirtyfive,
    choices: [
      {text: "Отдать меч Теромилу и отпустить его",
        action: () => {
      removeItemFromEquipment("Меч");
      currentBlock="thirtyseven";
      render();
        }
      },
      {text: "Провести всё группу по проходу", next: "thirtyfour"}
    ]
  },

  thirtysix: {
    text: texts.thirtysix,
    choices: [
      {text: "Проскользнуть в комнату незамеченным",
       action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=movesilently ) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='thirtyeight';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='fourtyfive';
          }
          render();
        })
      }
      },
      {text: "Возглавить атаку", next: "fourtyone"},
      {text: "Вернуться в комнату с клеткой", next: "fiftynine"}
    ]
  },

  thirtyseven: {
    text: texts.thirtyseven,
    choices: [
      {text: "Возглавить атаку", next: "fourtyone"},
      {text: "Продвигаться осторожно", next: "thirtysix"},
      {text: "Вернуться в комнату с клеткой", next: "fiftynine"}
    ]
  },

  thirtyeight: {
    text: texts.thirtyeight,
    choices: [{text: "Дальше", next: "thirtynine"}]
  },

    thirtynine: {
    text: texts.thirtynine,
    choices: [
      {text: "Схватить оружие со стола", next: "fourtytwo"},
      {text: "Развернуться и уйти", next: "fourtythree"},
      {text: "Прорваться сквозь драку к дальнему выходу", next: "fourtyfour"}
    ]
  },

  fourtyone: {
    text: texts.fourtyone,
    choices: [
      {text: "Ударить одно из существ",
      action: () => {
      roll20((roll) => { // 'roll' — это значение d20
        const resultAttack = 20 - roll; // результат атаки
        if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='fourtysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='fourtyseven';
          }
          render();
        });
      }
  }]
  },

  fourtytwo: {
    text: texts.fourtytwo,
    choices: [
      {text: "Взять нож",
        action: () => {
          addItemToEquipment("Нож");
          currentBlock="fourtytwoknife";
          render()
        }
      }
    ]
  },

  fourtytwoknife: {
    text: "Саламдрос и Теромил получают ножи, а Родерик — молоток.",
    choices: [
      {text: "Повести всех обратно", next: "fiftynine"},
      {text: "Повести в комнату с битвой", next: "fourtynine"},
      {text: "Спроисть уостальных, куда они хотят?", next: "fifty"}
    ]
  },

  fourtythree: {
    text: texts.fourtythree,
    choices: [
      {text: "Повести к комнате с клеткой", next: "fiftynine"},
      {text: "Вернуться в комнату с битвой", next: "fourtynine"},
      {text: "Спроисть уостальных, куда они хотят?", next: "fifty"}
    ]
  },

  fourtyfour: {
    text: texts.fourtyfour,
    choices: [
      {text: "Крыса вонзает зубы вам в лодыжку", damage: 1, next: "fourtyfournext"}
    ]
  },

  fourtyfournext: {
    text: "Бой слишком близко, чтобы проскользнуть мимо.",
    choices: [
      {text: "Схватить вы оружие со стола", next: "fourtytwo"},
      {text: "Вернуться к своим сопартийцам", next: "fourtythree"}
    ]
  },

  fourtyfive: {
    text: texts.fourtefive,
    choices:[
      {text: "Развернуться и уйти", next: "fiftyone"},
      {text: "На общем  языке приказать монстрам вернуться к работе", next: "fiftytwo"},
      {text: "Позвать на помощь", next: "fiftythree"}
    ]
  },

  fourtysix: {
    text: texts.fourtysix,
    choices: [
      {text: "Обычкать комнату", next: "fourtyeight"},
      {text: "Пойти к дальнему выходу", next: "sixty"},
      {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
    ]
  },

  fourtyseven: {
    text: texts.fourtyseven,
    choices: [{text:"Существо режет вашу грудь ножом", damage: 2, next: "fourtysevennext"}]
  },

  fourtysevennext: {
    text: texts.fourtysevennext,
    choices: [
      {text: "Обычкать комнату", next: "fourtyeight"},
      {text: "Пойти к дальнему выходу", next: "sixty"},
      {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
    ]
  },

  fourtyeight: {
    text: texts.fourtyeight,
    choices: [
      {text: "Взять нож",
        action: () => {
          addItemToEquipment("Нож");
          currentBlock="foutyeightnext";
          render()
        }
      }
    ]
  },
  fourtyeightnext: {
    text: texts.foutyeightnext,
    choices: [
      {text: "Пойти к дальнему выходу", next: "sixty"},
      {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
    ]
  },

  fourtynine: {
    text: texts.fourtynine,
      choices: [
    {text: "Осмотреться",
    condition: () => !equipment.includes("Нож"),
    action: () => {
          currentBlock="fourtyeight";
          render()
        }
    },
    {text: "Осмотреться",
    condition: () => equipment.includes("Нож"),
    action: () => {
          currentBlock="fiftyfour";
          render()
        }
    }
    ]
  },

fifty: {
  text: texts.fifty,
  choices: [
    {text: "Последовать воле  большинства", next: "fiftynine"},
    {text: "Попытатьсявсех переубедить", next: "fiftyseven"}
  ]
},

fiftyone: {
  text: texts.fiftyone,
  choices: [
    {text: "Атаковать", next: "fiftyfive"},
    {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
  ]
},

fiftytwo: {
  text: texts.fiftythree,
  choices: [
    {text: "Позвать товарищей и напасть на тварей", next: "fourtyone"},
    {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
  ]
},

fiftythree: {
  text: texts.fiftythree,
  choices: [
    {text: "Атаковать одного из монстров!",
      action: () => {
      roll20((roll) => { // 'roll' — это значение d20
        const resultAttack = 20 - roll; // результат атаки
        if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='fiftyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='fourtyseven';
          }
          render();
        });
      }
    }
  ]
},

fiftyfour: {
  text: texts.fiftyfour,
  choices: [
    {text: "Пойти к дальнему выходу", next: "sixty"},
    {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
  ]
},

fiftyfive: {
  text: texts.fiftyfive,
  choices: [{text: "Дальше", next: "fourtyseven"}]
},

fiftyseven: {
  text: texts.fiftyseven,
  choices: [{text: "Дальше", next: "fiftynine"}]
},

fiftyeight: {
  text: texts.fiftyeight,
  choices: [{text: "Дальше", next: "fourtysix"}]
},

fiftynine: {
  text: texts.fiftynine,
  choices: [{text: "Идти к другому выходу", next: "seventynine"}]
},

sixty: {
  text: texts.sixty,
  choices: [{text: "Дальше", next: "sixtyone"}]
},

sixtyone: {
  text: texts.sixtynine,
  choices:  [
    {text: "Теромил", next: "sixtytwo"},
    {text: "Саламдрос", next: "sixtythree"},
    {text: "Родерик", next: "sixtyfour"},
    {text: "Вы сами ", next: "sixtyfive"}
  ]
},

sixtytwo: {
  text: texts.sixtytwo,
  choices:  [
    {text: "Саламдрос", next: "sixtythree"},
    {text: "Родерик", next: "sixtyfour"},
    {text: "Вы сами ", next: "sixtyfive"}
  ]
},

sixtythree: {
text: texts.sixtythree,
choices:  [
  {text: "Вернуться в комнату с клеткой",  next: "fiftynine"},
  {text: "Повести группу внутрь", next: "sixtysix"}
]
},

sixtyfour: {
  text: texts.sixtyfour,
  choices: [
  {text: "Вернуться в комнату с клеткой",  next: "fiftynine"},
  {text: "Повести группу внутрь", next: "sixtysix"}   
  ]
},

sixtyfive: {
  text: texts.sixtyfive,
  choices: [
  {text: "Вернуться в комнату с клеткой",  next: "fiftynine"},
  {text: "Повести группу внутрь", next: "sixtysix"}
  ]
},

sixtysix: {
  text: texts.sixtysix,
  choices: [
    {text: "Убедить его пойти с группой", next: "sixtyseven"},
    {text: "Пойти без него", next: "sixtyeight"}
  ]
},

sixtyseven: {
  text: texts.sixtyseven,
  choices: [
    {text: "Атаковать существо", next: "seventyfour"},
    {text: "Спастись бегством", next: "seventyone"}
  ]
},

sixtyeight: {
  text: texts.sixtyeight,
  choices: [
    {text: "Искать потайные двери",
      action: () => {
          rollDice((result) => {
          alert(`Выпало число: ${result}`);
          if (result >=1 && result <=2) {
            currentBlock='seventythree';
          } else {
            currentBlock='sixtynine';
    }
          render();
          });
        }
    },
    {text: "Покинуть комнату", next: "seventy"}
  ]
},

sixtynine: {
  text: texts.sixtynine,
  choices: [{text: "Крысы кусают вас", damage: 3, next: "sixtyninenext"}]
},

sixtyninenext: {
  text: texts.sixtyninenext,
  choices: [{text: "Вернуться в комнату с клеткой",  next: "fiftynine"},]
},

seventy: {
  text: texts.seventy,
  choices: [{text: "Вернуться в комнату с клеткой",  next: "fiftynine"}]
},

seventyone: {
  text: texts.seventyone,
  choices: [{text: "Дальше", next: "seventyeight"}]
},

seventythree: {
  text: texts.seventuthree,
  choices: [{text: "Вернуться в комнату с клеткой",  next: "fiftynine"}]
},

seventyfour: {
  text: texts.seventyfour,
  choices: [
    {text: "Атаковать одного из монстров!",
      action: () => {
      roll20((roll) => { // 'roll' — это значение d20
        const resultAttack = 20 - roll; // результат атаки
        roll20((roll2) => {
        const resultAttack2 = 20 - roll2; 
        if (resultAttack <= 6 || resultAttack2 <= 6) {
            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это успех!`);
            currentBlock='seventyfive';
          } else {
            alert(`начение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это провал!`);
            currentBlock='seventysix';
          }
          render();
        });
        });
      }
    }
  ]
},

seventyfive: {
  text: texts.seventyfive,
  choices: [{text: "Дальше", next: "seventysix"}]
},

seventysix: {
  text: texts.seventysix,
  choices: [{text: "Дальше", next: "seventysixsword"}]
},

seventysixsword: {
  text: "Если вам нужен меч, можете его забрать. Если нет, Саламдрос его заберёт.",
  choices: [{text: "Взять меч",
        action: () => {
          addItemToEquipment("Меч");
          currentBlock="seventyseven";
          render()
        }},
        {text: "Отдать меч Саламдросу",
          next: "seventyseven"
        }]
},

seventyseven: {
  text:  texts.seventyseven,
  choices: [
  {text: "Идти в следующую комнату", next: "sixtyeight"},
  {text: "Вернуться в комнату с клеткой",  next: "fiftynine"}
  ]
},

seventyeight: {
  text: texts.seventyeight,
  choices: [{text: "Дальше", next: "seventynone"}]
},

seventynine: {
  text: texts.seventynine,
  choices: [
    {
      text: "Двигаться бесшумно",
      action: () => {
        roll100((roll) => {
          const resultSkillCheck = roll;
          if (resultSkillCheck <= movesilently) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='eightyone';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='eightytwo';
          }
          render();
        });
      }
    },
    {
      text:"Двигаться обычным шагом",
      next:"eightytwo"
    }
  ]
},

eightyone: {
  text: texts.eightyone,
  choices: [
    {
      text: "Вернутся и предупредить остальных",
      next: "eightythree"
    },
    {
      text: "Спрятаться в тени",
      action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат броска
          if (resultSkillCheck <= hideinshadows) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='eightyeight';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='eightyfive';
          }
          render();
        });
      }
    }
  ]
},

      eightyfive: {
        text:texts.eightyfive,
        choices: [{text: "Двинуться вперёд", next: "eightynine"},
          {text: "Вернуться в комнату с клеткой", next: "hundred"}
        ]
      },

      eightysix: {
        text: texts.eightysix,
        choices: [{text: "Вернуться и предупредить остальных"}]
      },
     
      eightyseven: {
        text: texts.eightyseven,
        choices: [{text: "Принять удар", damage: 3, next: "eightysevennext"}]
      },

      eightysevennext: {
        text: "В этот момент вы находите отличную возможность для контратаки!",
        choices: [
          {text: "Нанести ответный удар!",
      action: () => {
      roll20((roll) => { // 'roll' — это значение d20
        const resultAttack = 20 - roll; // результат атаки
        if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='ninetythree';
          }
          render();
        });
      }
    }
        ]
      },

      eightyeight: {
        text: texts.eightyeight,
        choices: [
          { text: "Неожиданно ударить",
            action: () => {
            roll20((roll) => { // 'roll' — это значение d20
            const resultAttack = 20 - (roll + 4); // результат атаки
             if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetytwo';
             } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='eightyseven';
          }
          render();
        });
      }
          }
        ]
      },

      eightynine: {
        text: texts.eightynine,
        choices: [{
          text: "Провести группу внутрь", next: "ninetyfive"},
        {text: "Вернуться в комнату с клеткой", next:  "hundred"}
          ]
    },
    ninety: {
      text: texts.ninety,
      choices: [
        {text: "Ударить снова!",
            action: () => {
            roll20((roll) => { // 'roll' — это значение d20
            const resultAttack = 20 - roll; // результат атаки
             if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetysix';
             } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='ninetyone';
          }
          render();
        });
      }
        }
      ]
    },
      ninetyone: {
        text: texts.ninetyone,
        choices: [
          {text: "Нанести ответный удар!",
            action: () => {
            roll20((roll) => { // 'roll' — это значение d20
            const resultAttack = 20 - roll; // результат атаки
             if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetysix';
             } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='ninetyone';
          }
          render();
        });
      }
          }
        ]
      },

      ninetytwo: {
        text:texts.ninetytwo,
        choices: [
              {text: "Взять меч",
    condition: () => !equipment.includes("Меч"),
    action: () => {
          addItemToEquipment("Меч");
          currentBlock="ninetyseven";
          render()
        }
    },
    {text: "Продвигаться дальше",
    condition: () => equipment.includes("Меч"),
    action: () => {
          currentBlock="ninetyseven";
          render()
        }
    }
        ]
      },

      nintythree: {
        text: texts.nintythree,
        choices: [{text: "Посмотреть на рану", damage: 3, next: "nintythreenext"}]
      },

      nintythreenext: {
        text: "Рана серьёзная, но жить можно.",
        choices: [
          {
            text: "Ударить в ответ!",
            action: () => {
            roll20((roll) => { // 'roll' — это значение d20
            const resultAttack = 20 - roll; // результат атаки
             if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetytwo';
             } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='ninetyeight';
          }
          render();
        });
      }            
          }
        ]
      },

      ninetyfour: {
        text: texts.ninetyfour,
        choices: [{
          text: "Совершить атаку!",
          action: () => {
            roll20((roll) => { // 'roll' — это значение d20
            const resultAttack = 20 - roll; // результат атаки
             if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Это успех!`);
            currentBlock='ninetytwo';
             } else {
            alert(`Значение вашего броска: ${resultAttack}. Это провал!`);
            currentBlock='ninetythree';
          }
          render();
        });
      }        
        }]
      },

      nintyfive: {
        text: texts.ninetyfive,
        choices: [{text: "Это засада!", damage: 2, next: "nintyfivenext"}]
      },

      nintyfivenext:  {
        text: "Что выделаете дальше?",
        choices:[
          {text: "Бежать к дальнему выходу", next: "hundredone"},
          {text: "Сражаться", next: "hundredtwo"}
        ]
      },

      ninetysix: {
        text: texts.ninetysix,
        choices: [
          {text: "Провести отряд по проходу", next: "ninetyseven"},
          {text: "Остаться здесь ненадолго", next: "hundred"}
        ]
      },

      ninetyseven: {
        text: texts.ninetyseven,
        choices: [
          {text: "Тихо двинуться к дальнему выходу",
            action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=movesilently) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundrednine';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredfive';
          }
          render();
        })
      }},
          {text: "Предложить группе напасть", next: "hundredfour"},
          {text: "Устроить отвлекающий манёвр, чтобы остальные смогли проскользнуть", next: "hundredfive"}
        ]
      },

      ninetyeight: {
        text: texts.ninetyeight,
        choices: [
          {text: "Осторожно продивнуться вперёд", next: "eightynine"},
          {text: "Вернуться в комнату склеткой", next: "hundred"}
        ]
      },
      ninetynine: {
        text: texts.ninetynine,
        choices: [{text: "Мечпопал в  ваше плечо", damage: 3, next: "ninetyninenext"}]
      },

      ninetyninenext: {
        text: "После удара он падает на пол и не двигается. Теромил забирает доспехи мужчины.",
        choices: [
          {text: "Продолжить идти по проходу", next: "ninetyseven"},
          {text: "Остаться здесь ненадолго", next: "hundred"}
        ]
      },

      hundred:  {
        text: texts.hundred,
        choices: [{text: "Дальше", next: "nintyfive"}]
      },

      hundredone: {
        text: texts.hundredone,
        choices:  [
          {text: "Дальше", next: "hundredsix"}
        ]
      },

      hundredtwo: {
        text: texts.hundredtwo,
        choices: [
          {text: "Обыскать комнату", next: "hundredeight"},
          {text: "Осмотреть решётку", action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=findorremovetraps) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredthreeteen';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredfourteen';
          }
          render();
        })
      }},
          {text: "Допросить пленника", action: () => {
          statushundredten = true;
          currentBlock = "hundredten"; 
          render();
        }}
        ]
      },

      hundredfour: {
        text: texts.hundredfour,
        choices: [ {text: "Обыскать комнату", next: "hundredeight"},
          {text: "Пойти к дальнему выходу", next: "hundredsix"},
          {text: "Допросить пленника", action: () => {
          statushundredten = true;
          currentBlock = "hundredten"; 
          render();
        }}]
      },

      hundredfive: {
        text: texts.hundredfive,
        choices: [ {text: "Дальше", next: "hundredseven"}]
      },

      hundredsix: {
        text: texts.hundredsix,
        choices: [
          {text: "Попытаться поднять ворота", next: "hundredeeleven"},
          {text: "Осмотреть решётку",
            action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=findorremovetraps) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredthreeteen';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredfourteen';
          }
          render();
        })
      }
          }
        ]
      },

      hundredseven: {
        text: texts.hundredseven,
        choices: [{text: "Забрать снаряжение",
        action: () => {
          addItemToEquipment("Меч");
          addItemToEquipment("Кожанные доспехи");
          addItemToEquipment("Воровские инструменты");
          addItemToEquipment("Рюкзак со снаряжением");
          currentBlock="hundredsevennext";
          render()
        }}]
      },

      hundredsevennext: {
        text: "Со снаряжением, вы чувствуете себя лучше. Вы подходите к занавесу.",
        choices: [{text: "Дальше", next: "hundredsix"}]
      },

hundredeight: {
  text: texts.hundredeight,
  choices: [
    {
      text: "Взять снаряжение и 100 золотых монет",
      action: () => {
        statushundredeight = true;
        addItemToEquipment("Меч");
          addItemToEquipment("Кожанные доспехи");
          addItemToEquipment("Воровские инструменты");
          addItemToEquipment("Рюкзак со снаряжением");
        addGold(100);
        currentBlock = "hundredeightnext"; 
        render();
      }
    }
  ]
},

      hundredeightnext: {
        text: "Больше ничего ценного нет.",
        choices: [
          {text: "Пойти к дальнему выходу", next: "hundredsix"},
          {text: "Допросить пленника",
          condition: () => !statushundredten,
          action: () => {
          statushundredten = true;
          currentBlock = "hundredten"; 
          render();
        }
          }
        ]
      },

      hundrednine: {
        text: texts.hundrednine,
        choices: [{text: "Напсть на противников", next: "hundredfour"},
          {text: "Вернуться назад", next:"hundred"}
        ]
      },

      hundredten: {
        text: texts.hundredten,
        choices: [{text: "Осмотреть дальний выход", next: "hundredsix"},
        {text: "Осмотреть комнату",
          condition: () => !statushundredeight,
          action: () => {
          currentBlock = "hundredeight"; 
          render();
        }}
        ]
      },

      hundredeleven: {
        text: texts.hundredeleven,
        choices: [{text: "Дальше", next: "hundredfiveteen"}]
      },

      hundredthreeteen: {
        text: texts.hundredthreeteen,
        choices: [{text: "Обезвредить ловушку и открыть ворота", next: "hundredeleven"}]
      },

      hundredfourteen: {
        text: texts.hundredfourteen,
        choices: [{text: "Обезвредить ловушку и открыть ворота", next: "hundredeleven"}]
      },

      hundredfiveteen: {
        text: texts.hundredfiveteen,
        choices: [
          {text: "Помочь осквернить статую", next: "hundredseventeen"},
          {text: "Обыскать комнату", action: () => { showRestoreButton();
          addItemToEquipment("Фляга");
          currentBlock = "hundredsixteen";
          render();
        }},
          {text: "Осмотреть статую на предмет ловушек",
action: () => {
  statushundredsixteen = true;
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=findorremovetraps) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredtwentyone';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredtwentythree';
          }
          render();
        })
      }
          },
          {text: "Уйти через выход, который вы не исследовали", next: "hundredtwentyfive"}
        ]
      },

      hundredsixteen: {
        text: texts.hundredsixteen,
        choices: [{text: "Покинуть комнату", next: "hundredtwentyfive"},
          {text: "Осмотреть статую на предмет ловушек",
            condition: () => !statushundredsixteen,
            action: () => {
            roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=findorremovetraps) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredtwentyone';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredtwentythree';
          }
          render();
        })}}]
    },

      hundredseventeen: {
        text: texts.hundredseventeen,
        choices: [{text: "Дальше", next: "hundredeightytwo"}]
      },

      hundredtwentyone: {
        text: texts.hundredtwentyone,
        choices: [{text: "Осквернить статую", next: "hundredtwentyfour"},
          {text: "Покинуть комнату", next: "hundredtwentyfive"},
          {text: "Обыскать комнату",
          condition: () => statushundredsixteen,
          action: () => {
          showRestoreButton();
          addItemToEquipment("Фляга");
          currentBlock = "hundredsixteen";
          render();
        }}
        ]
      },
    
      hundredtwentythree: {
        text: texts.hundredtwentythree,
        choices: [{text: "Дальше", next: "hundredeightytwo"}]
      },

      hundredtwentyfour: {
        text: texts.hundredtwentyfour,
        choices: [{text: "Уйти", next: "hundredtwentyfive"},
          {text: "Обыскать комнату",
          condition: () => statushundredsixteen,
          action: () => {
          showRestoreButton();
          addItemToEquipment("Фляга");
          currentBlock = "hundredsixteen";
          render();
        }}
        ]
      },

      hundredtwentyfive: {
        text: texts.hundredtwentyfive,
        choices: [{text: "Пройти по проходу справа", next: "hundredeightyone"},
          {text: "Попробовать открыть ворота", 
          action: () => {
            roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <= openlocks) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredtwentyeight';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredtwentyseven';
          }
          render();})}
      }]
      },
      
      hundredtwentyseven: {
        text: texts.hundredtwentyseven,
        choices: [{text: "Пройти по проходу справа", next: "hundredeightyone"}]
      },

      hundredtwentyeight: {
        text: texts.hundredtwentyeight,
        choices: [
          {text: "Позволить Саламдросу идти вперёд", next: "hundredthreety"},
          {text: "Идтм вперёд самому",
           action: () => {
            roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <= movesilently) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredthreetyone';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredthreetytwo';
          }
          render();})}
          }
        ]
      },

      hundredthreety: {
        text: texts.hundredthreety,
        choices: [{text: "Выяснить причину задержки", next: "hundredthreetythree"},
          {text: "Подождать ещё несколько минут", next: "hundredthreetyfour"}
        ]
      },

      hundredthreetyone: {
        text: texts.hundredthreetyone,
        choices: [
          {text: "Устроить засаду на существ",
            action: () => {
              roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <= hideinshadows+10) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredfour';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredthreetytwo';
          }
          render();})
            }},
          {text: "Ворваться и напасть на тварей", next: "hundredthreetysix"},
          {text: "Пойти назад", next: "hundredeightyone"}
        ]
      },

      hundredthreetytwo: {
        text: texts.hundredthreetytwo,
        choices: [{text: "Дальше", next: "hundredthreetyseven"}]
      },

      hundredthreetythree: {
        text: texts.hundredthreetytwo,
        choices: [
          {text: "Вступить в драку!",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      }}]
      },

      hundredthreetyfour: {
        text: texts.hundredthreetyfour,
        choices: [
          {text: "Попытаться ударить чудовище, не смотря ему в глаза!",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      }}]
      },

      hundredthreetysix: {
        text: texts.hundredthreetysix,
        choices: [
          {text: "Сражаться как обычно",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultSave = roll; // результат спасброска
          if (resultSave <= turntostonesave) {
            alert(`Значение вашего броска: ${resultSave}. Это успех! Атакуйте!`);
            roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          
        });
          } else {
            alert(`Значение вашего броска: ${resultSave}. Это провал!`);
            currentBlock='hundredfourtythree';
          }
          render();
        });
      }
          },

          {text: "Попытаться ударить чудовище, не смотря ему в глаза!",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      }},

      {text: "Задержать дыхание и ринуться в бой", next: "hundredfourtythree"},
      {text: "Убежать назад", next: "hundredfourtyfour"}
        ]
      },

      hundredthreetyseven: {
        text: texts.hundredthreetyseven,
        choices: [{text: "Попытаться защититься", damage: 6, next: "hundredthreetysevennext"}]
      },

      hundredthreetysevennext: {
        text: texts.hundredthreetysevennext,
        choices: [
          {text: "Ударить монстра!",
           ction: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredthreetyeight: {
        text: texts.hundredthreetyeight,
        choices: [
          {text: "Попытаться ударить чудовище, не смотря ему в глаза!",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfourtyfive';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      }}
        ]
      },

      hundredthreetynine: {
        text: texts.hundredthreetynine,
        choices: [{text: "Монстр кусает в бедро!", damage: 3, next: "hundredthreetyninenext"}]
      },

      hundredthreetyninenext: {
        text: texts.hundredthreetyninenext,
        choices: [{text: "Снова ударить, не смотря монстру в глаза!",
            action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfourtyfive';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись! Атакуйте снова!`);
            currentBlock='hundredthreetynineagain';
          }
          render();
        });
      }}]
      },

      hundredthreetynineagain: {
        text: "Вам не сбежать. Монстр атакует!",
        choices: [{text: "Чудовище кусает!", damage: 3, next: "hundredthreetynineagainnext"}]
      },

      hundredthreetynineagainnext: {
        text: "Помощи не будет!",
        choices: [{text: "Боритесь за свою жизнь!", action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfourtyfive';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynineagain';
          }
          render();
        });
      }}]
      },

      hundredfourty: {
        text: texts.hundredfourty,
        choices: [{text: "Попытаться противостоять параличу", 
action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultSave = roll; // результат спасброска
          if (resultSave <= turntostonesave) {
            alert(`Значение вашего броска: ${resultSave}. Это успех! Атакуйте!`);
            roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredthreetyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
          } else {
            alert(`Значение вашего броска: ${resultSave}. Это провал!`);
            currentBlock='hundredthreetyseven';
          }
          render();
        });
      }

        }]
      },

      hundredfourtythree: {
        text: texts.hundredfourtythree
      },
      
      hundredfourtyfour: {
        text: texts.hundredfourtythree,
        choices: [{text: "Вернуться в бой",
          action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 2) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfourtyfive';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredthreetynine';
          }
          render();
        });
      }
        },
      
      {text: "Продолжить бежать", next: "hundredfourtysix"}]
      },

      hundredfourtyfive: {
        text: texts.hundredfourtyfive,
        choices: [{text: "Дальше", next: "hundredfourtyseven"}]
      },

      hundredfourtysix: {
        text: texts.hundredfourtyfive
      },

      hundredfourtyseven: {
        text: texts.hundredfourtyseven,
        choices:[{
          text: "Дальше", next: "hundredfourtyeight"
        }]
      },

      hundredfourtyeight: {
        text: texts.hundredfourtyeight,
        choices: [{
          text: "Подняться наверх и посмотреть", next: "hundredfourtynine"},
          {text: "Подождать", next: "hundredfifty"}
        ]
      },

      hundredfourtynine: {
        text: texts.hundredfourtynine,
        choices: [
          { text: "Вы чувствуете странный запах! Совершайте спасбросок!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultSave = roll; // результат спасброска
          if (resultSave <= turntostonesave) {
            currentBlock='hundredfiftyone';
          } else {
            alert(`Значение вашего броска: ${resultSave}. Это провал!`);
            currentBlock='hundredfiftytwo';
          }
          render();
        });
      }
          }
        ]
      },

      hundredfifty: {
        text: texts.hundredfifty,
        choices: [{ text: "Вы чувствуете странный запах! Совершайте спасбросок!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultSave = roll; // результат спасброска
          if (resultSave <= turntostonesave) {
            currentBlock='hundredfiftythree';
          } else {
            alert(`Значение вашего броска: ${resultSave}. Это провал!`);
            currentBlock='hundredfiftyfour';
          }
          render();
        });
      }
          }]
      },

      hundredfiftyone: {
        text: texts.hundredfiftyone,
        choices: [
          {text: "Спрятаться обратно", next: "hundredfiftyseven"},
          {text: "Выбраться наружу и атаковать", next: "hundredfiftysix"}
        ]
      },

      hundredfiftytwo: {
        text: texts.hundredfiftytwo,
        choices: [{text: "Получить урон!", damage: 6, next: "hundredfiftytwonext"}]
      },

      hundredfiftytwonext: {
        text: "Вы серьёзно ранены, но ещё живы!",
        choices: [
          {text: "Атаковать существ",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfiftyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredfiftynine';
          }
          render();
        });
      }},
      {text: "Сбежать!", next: "hundredfiftyfive"}
        ]
      },

      hundredfiftythree: {
        text: texts.hundredfiftythree,
        choices: [
          {text: "Атаковать дважды!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          // const resultAttack = 20 - roll; // результат атаки
          roll20((roll2) => {
        const resultAttack2 = 20 - roll2; 
        if (resultAttack <= 6 || resultAttack2 <= 6) {
            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это успех!`);
            currentBlock='seventyfive';
          } else {
            alert(`начение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это провал!`);
            currentBlock='seventysix';
          }
          render();
        });
        });
      }
          }
        ]
      }
  }
// Переменные состояния
let currentBlock = 'one'; // тут переключать главу
let lives = 7;
// Запреты на повтор действий
let statushundredsixteen = false;
let statushundredeight = false;
let statushundredten = false;


// Хар-ки персонажа
let strength = 9;
document.getElementById('strength').innerText = strength;
let dexterity = 15;
document.getElementById('dexterity').innerText = dexterity;
let constitution = 18;
document.getElementById('constitution').innerText = constitution;
let intelligence = 11;
document.getElementById('intelligence').innerText = intelligence;
let wisdom = 10;
document.getElementById('wisdom').innerText = wisdom;
let charisma = 8;
document.getElementById('charisma').innerText = charisma;

// Навыки персонажа
let openlocks = 15;
let movesilently = 20;
let hideinshadows = 10;
let findorremovetraps = 10;

let turntostonesave = 13;
let poisonordeathray = 13;

// Снаряжение
let equipment = [];

function addItemToEquipment(itemName) {
  if (!equipment.includes(itemName)) {
    equipment.push(itemName);
    console.log(`Добавлен предмет: ${itemName}`);
    updateEquipmentDisplay();
  }
}

function updateEquipmentDisplay() {
  const equipmentDiv = document.getElementById('equipment');
  equipmentDiv.innerHTML = '';

  if (equipment.length === 0) {
    return;
  }
  
  // создаем список предметов
  equipment.forEach(item => {
    const itemSpan = document.createElement('span');
    itemSpan.innerText = item + ' ';
    equipmentDiv.appendChild(itemSpan);
  });
}

// Забрать предмет
function removeItemFromEquipment(itemName) {
  const index = equipment.indexOf(itemName);
  if (index !== -1) {
    equipment.splice(index, 1);
    console.log(`Предмет "${itemName}" удален из инвентаря`);
    updateEquipmentDisplay();
  } else {
    console.log(`Предмет "${itemName}" не найден в инвентаре`);
  }
}

 // Деньги
  let gold = 0;
  // Функция денег
  function renderGold() {
  const goldContainer = document.getElementById('gold'); // элемент для отображения
  if (gold > 0) {
    goldContainer.innerText = `Золотые монеты: ${gold}`;
    goldContainer.style.display = 'block';
  } else {
    goldContainer.style.display = 'none';
  }
}

//
function addGold(amount) {
  gold += amount;
  renderGold();
}

//
function spendGold(amount) {
  if (gold >= amount) {
    gold -= amount;
    renderGold();
    return true; // успешно потратил
  } else {
    alert("Недостаточно золота!");
    return false; // не хватает денег
  }
}

// Функция для добавления блока текста
function addBlock(text) {
 const storyDiv = document.getElementById('story');
 const blockDiv = document.createElement('p');
 blockDiv.className='block';
 blockDiv.innerHTML=text;
 storyDiv.appendChild(blockDiv);
}

// Обновленная функция render с учетом условий выбора // НОВОЕ
function render() {
  const block = story[currentBlock]; // Используем ваш объект story
  addBlock(block.text);
  
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';

  // Фильтруем выборы по условию, если оно есть // НОВОЕ
  const availableChoices = block.choices.filter(choice => {
    return !choice.condition || choice.condition();
  });

  // Создаем кнопки для доступных вариантов
  for (let choice of availableChoices) {
    const btn = document.createElement('button');
    btn.innerText = choice.text + (choice.damage ? ` (-${choice.damage} HP)` : '');
    btn.className = 'choice';
    btn.onclick = () => makeChoice(choice);
    choicesContainer.appendChild(btn);
  }

  // Обновляем статус HP
  document.getElementById('livesCount').innerText = `${lives}`;

    const restoreBtn = document.getElementById('restoreBtn');
  if (restoreScenes.includes(currentBlock)) {
    restoreBtn.style.display = 'block';
  } else {
    restoreBtn.style.display = 'none';
  }

}
// Обработка выбора
function makeChoice(choice) {
    if (choice.action && typeof choice.action === 'function') {
    choice.action();
    return; // После выполнения действия дальше не идём
  }

 if (choice.damage!==undefined) {
   lives -= choice.damage; // Вычитаем урон
 }

if (lives<=0) {
   alert("У вас закончились HP! Игра окончена.");
   addBlock('Игра окончена.');
   document.getElementById('choices').innerHTML='';
   document.getElementById('livesCount').innerText='0';
 } else {
   currentBlock=choice.next || currentBlock; 
   render();
 }
}

// Лечение
const restoreScenes = ['healtext', 'fourteencont', 'fiveteen', 'sixteen',
  'twentyfive']; // главы, в которых работает исцеление

function rollRestore() {
  const rollRest = Math.floor(Math.random() * 8) + 1; // d8
  const total = rollRest + 3; // восстановление +3 к результату
  lives += total;
  lives = Math.min(lives, 7);
  alert(`Вы восстановили ${total} HP!`);
  updateLivesDisplay();
  document.getElementById('restoreBtn').style.display = 'none'; // Спрячем кнопку после восстановления
  updateStatusAndButton();
}

document.getElementById('restoreSixBtn').addEventListener('click', () => {
  lives += 6;
  if (lives > 7) lives = 7; // максимум
  alert(`Вы выпили зелье и восстановили 6 HP!`);
  updateLivesDisplay();
  document.getElementById('restoreSixBtn').style.display = 'none';
  removeItemFromEquipment("Фляга");
  updateStatusAndButton();
});

function updateLivesDisplay() {
  document.getElementById('livesCount').textContent = lives;
}

function showRestoreButton() {
  document.getElementById('restoreSixBtn').style.display = 'block';
}

document.getElementById('restoreBtn').addEventListener('click', () => {
  rollRestore();
});

// Бросок d6
function rollDice(callback) {
  const roll = Math.floor(Math.random() * 6) + 1;
  callback(roll);
}

// Бросок d20
function roll20(callback) {
  const rolld20 = Math.floor(Math.random() * 20) + 1;
  callback(rolld20);
}

// Бросок d100
function roll100(callback) {
  const rolld100 = Math.floor(Math.random() * 100) + 1;
  callback(rolld100);
}

window.onload = () => {
  renderGold();
};

render();