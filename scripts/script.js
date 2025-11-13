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
    text: '<em>Теперь, находясь вне боя, вы можете принять исцеление Родерика, нажав на кнопку «Попросить Родерика вылечить».</em>',
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
  choices: [ {text: "Дальше", next: "thirtytwosword"}]
},

twentyfive: {
  text: texts.twentyfive,
  choices: [ {text: "Дальше", next: "thirtytwosword"}]
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
    text: texts.twentyseven,
    choices: [ {text: "Выйти из камеры", next: "thirtytwosword"}]
},

twentyeight: {
    text: texts.twentyeight,
    choices: [{text: "Дальше", next: "thirtytwosword"}]
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
    text: "Вы можете ударить снова!",
    choices: [ {text: "Совершить бросок атаки!",
              action: () => {
        roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Это попадание!`);
            currentBlock='twentyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Это промах!`);
            currentBlock='thirty';
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
        text: "Дальше", damage: 1, next: "thirtytwosword"}
    ]
  },

  thirtytwosword: {
    text: "Вы можете забрать меч монстра.",
    choices: [
      {
        text: "Подобрать меч",
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
      {text: "Попытаться пройти бесшумно", next: "thirtysix"},
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
    text: texts.fourtyfive,
    choices:[
      {text: "Развернуться и уйти", next: "fiftyone"},
      {text: "На общем  языке приказать монстрам вернуться к работе", next: "fiftytwo"},
      {text: "Позвать на помощь", next: "fiftythree"}
    ]
  },

  fourtysix: {
    text: texts.fourtysix,
    choices: [
      {text: "Обыскать комнату", next: "fourtyeight"},
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
      {text: "Обыскать комнату", next: "fourtyeight"},
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
          currentBlock="fourtyeightnext";
          render()
        }
      }
    ]
  },
  fourtyeightnext: {
    text: texts.fourtyeightnext,
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
  text: texts.fiftytwo,
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
  text: texts.sixtyone,
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
          if (result <=2) {
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
  text: texts.seventythree,
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
            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это провал!`);
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

eightytwo: {
  text: texts.eightytwo,
  choices: [{text: "Стоять неподвижно",  next: "eightysix"},
    {text: "Попытаться сменить место", next: "eightyfive"}
  ]
},

eightythree: {
  text: texts.eightythree,
  choices: [{text: "Напасть из засады",
    action: () => {
      roll20((roll) => { // 'roll' — это значение d20
        const resultAttack = 20 - roll; // результат атаки
        if (resultAttack <= 6) {
            alert(`Значение  атаки: ${resultAttack}. Вы попали!`);
            currentBlock='ninety';
          } else {
            alert(`Значение  атаки: ${resultAttack}. Вы промахнулись`);
            currentBlock='ninetyone';
          }
          render();
        });
      }
  }]
},
      eightyfive: {
        text:texts.eightyfive,
        choices: [{text: "Двинуться вперёд", next: "eightynine"},
          {text: "Вернуться в комнату с клеткой", next: "hundred"}
        ]
      },

      eightysix: {
        text: texts.eightysix,
        choices: [{text: "Вернуться и предупредить остальных", next: "eightythree"}]
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
        choices: [{text: "Провести группу внутрь", next: "ninetyfive"},
        {text: "Вернуться в комнату с клеткой", next:  "hundred"},
        {text: "Попросить Родерика исцелить",
          condition: () => !statusheal,
          action: () => {
            statusheal = true;
            rollRestore();
            render();
          }
        }
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
            currentBlock='ninetynine';
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

      ninetyfive: {
        text: texts.ninetyfive,
        choices: [{text: "Это засада!", damage: 2, next: "nintyfivenext"}]
      },

      nintyfivenext:  {
        text: "Что выделаете дальше?",
        choices:[
          {text: "Бежать к дальнему выходу", next: "hundredtwo"},
          {text: "Сражаться", next: "hundredone"}
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
        choices: [{text: "Меч попал в  ваше плечо", damage: 3, next: "ninetyninenext"}]
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
        choices: [{text: "Дальше", next: "ninetyfive"}]
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
          {text: "Попытаться поднять ворота", next: "hundredeleven"},
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
  console.log("Добавление предметов...");
  addItemToEquipment("Меч");
  addItemToEquipment("Кожанные доспехи");
  addItemToEquipment("Воровские инструменты");
  addItemToEquipment("Рюкзак со снаряжением");
  console.log("Предметы добавлены");

  currentBlock = "hundredsevennext";

  console.log("Текущий блок:", currentBlock);
  render();
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
          {text: "Идти вперёд самому",
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
          if (resultSave <= poisonordeathray) {
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
          if (resultSave <= poisonordeathray) {
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
        if (resultAttack <= 6 || resultAttack2 <= 5) {
            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это успех!`);
            currentBlock='hundredsixtyone';
          } else {

            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это провал!`);

            currentBlock='hundredsixtytwo';
          }
          render();
        });
        });
      }
          }
        ]
      },

      hundredfiftyfour: {
        text: texts.hundredfiftyfour,
        choices: [
          {text: "Попытаться ударить противника!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll-2); // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredsixty';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtytwo';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredfiftyfive: {
        text: texts.hundredfiftyfive,
        choices: [{
          text: "Вас разорвали на куски", damage: 20
        }]
      },

      hundredfiftysix: {
        text: texts.hundredfiftysix,
        choices: [
          {text: "Ударить монстра!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfiftyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtythree';
          }
          render();
        });
      } }
        ]
      },

      hundredfiftyseven: {
        text: texts.hundredfiftyseven,
        choices: [
          {text: "Атаковать дважды!",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          // const resultAttack = 20 - roll; // результат атаки
          roll20((roll2) => {
        const resultAttack2 = 20 - roll2; 
        if (resultAttack <= 6 || resultAttack2 <= 5) {
            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это успех!`);
            currentBlock='hundredsixtyone';
          } else {

            alert(`Значение первой атаки: ${resultAttack}. Значение второй атаки: ${resultAttack2}. Это провал!`);

            currentBlock='hundredsixtytwo';
          }
          render();
        });
        });
      }
          }
        ]
      },

      hundredfiftyeight: {
        text: texts.hundredfiftyeight,
        choices: [
          {text: "Ударить снова",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredsixtyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtyfive';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredfiftynine: {
        text: texts.hundredfiftynine,
        choices: [{text: "Получить урон", damage: 7, next: "hundredfiftyninenext"}]
      },

      hundredfiftyninenext: {
        text: "Вы ели стоите на ногах, но способны атаковать в ответ!",
        choices: [
          {text: "Нанести атаку",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredfiftyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtyfive';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredsixty: {
        text: texts.hundredsixty,
        choices: [
          {text: "Ударить существо",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredsixtyone';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtytwo';
          }
          render();
        });
      }
          }
        ]
      },

      hundredsixtyone: {
        text: texts.hundredsixtyone,
        choices: [
          {text: "Атаковать монстра",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredsixtyseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredsixtyeight';
          }
          render();
        });
      }
          }
        ]
      },

      hundredsixtytwo: {
        text: texts.hundredsixtytwo,
        choices: [
          {text: "Нанести удар",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredsixtynine';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventy';
          }
          render();
        });
      }
          }
        ]
      },

      hundredsixtythree: {
        text: texts.hundredsixtythree,
        choices: [{text: "Ударить снова",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventyone';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventytwo';
          }
          render();
        });
      }
        }]
      },

      hundredsixtyfour: {
        text: texts.hundredsixtyfour,
        choices: [
          {text: "Замахнуться на монстра",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventyone';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventytwo';
          }
          render();
        });
      }
          }
        ]
      },

      hundredsixtyfive: {
        text: texts.hundredsixtyfive,
        choices: [{text: "Когти рвут кожу на вашей спине", damage: 5, next: "hundredsixtyfivenext"}]
      },

      hundredsixtyfivenext:{
        text: texts.hundredsixtyfivenext,
        choices: [{text: "Ударить,пока есть возможность",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventyone';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventytwo';
          }
          render();
        });
      }
        }]
      },

      hundredsixtysix: {
        text: texts.hundredsixtysix,
        choices: [{text: "Остаться сражаться", next: "hundredseventyfive"},
        {text: "прыгнуть в яму", next: "hundredfivetyseven"}
        ]
      },

      hundredsixtyseven: {
        text: texts.hundredsixtyseven,
        choices: [
          {text: "Дальше", next: "hundredeighty"}
        ]
      },

      hundredsixtyeight: {
        text: texts.hundredsixtyeight,
        choices: [
          {text: "Атаковать монстра",
             action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventyseven';
          }
          render();
        });
      }
          }
        ]
      },

      hundredsixtynine: {
        text: texts.hundredsixtynine,
        choices: [{
          text: "Получить урон", damage: 5, next: "hundredsixtyninenexet"
        }]
      },

      hundredsixtyninenexet: {
        text: "Вы ранены, но можете ударить чудовище в ответ!",
        choices: [
          {text: "Совершить атаку",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventyseven';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredseventy: {
        text: texts.hundredseventy,
        choices: [
          {text: "Получить урон", damage: 2, next: "hundredseventynext"}
        ]
      },

      hundredseventynext: {
        text: "Вы замечаете возможность для контратаки",
        choices: [
          {text: "Совершить атаку",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventyseven';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredseventyone: {
        text: texts.hundredseventyone,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

      hundredseventytwo: {
        text: texts.hundredseventytwo,
        choices: [
          {text: "Атаковать в спину",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll+4); // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventythree';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventyfour';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredseventythree: {
        text: texts.hundredseventythree,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

            hundredseventyfour: {
        text: texts.hundredseventyfour,
        choices: [
          {text: "Атаковать чудовище",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredseventyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredseventynine';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredseventyfive: {
        text: texts.hundredseventyfive
      },

      hundredseventysix: {
        text: texts.hundredseventysix,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

        hundredseventyseven: {
        text: texts.hundredseventyseven,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

      hundredseventyeight: {
        text: texts.hundredseventyeight,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

      hundredseventynine: {
        text: texts.hundredseventynine,
        choices: [{text: "Получить урон", next: "hundredseventyninenext"}]
      },

      hundredseventyninenext: {
        text: texts.hundredseventyninenext,
        choices: [{text: "Дальше", next: "hundredeighty"}]
      },

      hundredeighty: {
        text: texts.hundredeighty
      },

      hundredeightyone: {
        text: texts.hundredeightyone,
        choices: [
          {text: "Прокрасться в комнату и устроить отвлекающий манёвр",
             action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=movesilently ) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='hundredninetyeight';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='hundredninetynine';
          }
          render();
        })
      }
          },
          {text: "Возглавить атаку", next: "hundredninetyseven"},
          {text: "Спросить Саламдроса, что делать", next: "hundredninetysix"}
        ]
      },

      hundredeightytwo: {
        text: texts.hundredeightytwo,
        choices: [
          {text: "Согласиться служить Хозяину", next: "hundredeightyfour"},
          {text: "Отказаться служить Хозяину", next: "hundredeightythree"}
        ]
      },

      hundredeightythree: {
        text: texts.hundredeightythree
      },

      hundredeightyfour: {
        text: texts.hundredeightyfour,
        choices: [
          {text: "Атаковать Родерика и Саламдроса", next: "hundredeightysix"},
          {text: "Атаковать Хозяина", next: "hundredeightyfive"}
        ]
      },

      hundredeightyfive: {
        text: texts.hundredeightyfive,
        choices: [
          {text: "Дальше", next: "hundredninety"}
        ]
      },

      hundredeightysix:  {
        text: texts.hundredeightysix,
        choices: [
          {text: "Совершить атаку",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 8) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='hundredeightyseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='hundredeightyeight';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredeightyseven: {
        text: texts.hundredeightyseven,
        choices: [{text: "Дальше", next: "hundredeightynine"}]
      },

      hundredeightyeight: {
        text: texts.hundredeightyeight,
        choices: [{text: "Дальше", next: "hundredeightynine"}]
      },

      hundredeightynine: {
        text: texts.hundredeightynine
      },

      hundredninety: {
        text: texts.hundredninety,
        choices: [{text: "Бросить d20, чтобы определить свою судьбу",
          action: () => {
  roll20((roll) => { // 'roll' — это значение d20
    let page;
    if (roll >= 1 && roll <= 3) {
      page = 'hundredninetyone';
    } else if (roll >= 4 && roll <= 10) {
      page = 'hundredninetytwo';
    } else if (roll >= 11 && roll <= 20) {
      page = 'hundredninetythree';
    }
    alert(`Вы бросили ${roll}.`);
    // Можно установить currentBlock или выполнить другие действия
    // например:
    currentBlock = `${page}`;
    render();
  });
}
        }]
      },

      hundredninetyone: {
        text: texts.hundredninetyone,
        choices: [{text: "Дальше",
          action: () => {
            addItemToEquipment("Эльфийский плащ");
            addItemToEquipment("Эльфийские сапоги");
            currentBlock ='hundredninetyfour';
            render();
          }
        }]
      },

            hundredninetytwo: {
        text: texts.hundredninetytwo,
        choices: [{text: "Дальше",
          action: () => {
            addItemToEquipment("Моток верёвки");
            currentBlock ='hundredninetyfour';
            render();
          }
        }]
      },
            hundredninetythree: {
        text: texts.hundredninetythree,
        choices: [{text: "Дальше",
          action: () => {
            addItemToEquipment("Волшебный меч +1");
            currentBlock ='hundredninetyfour';
            render();
          }
        }]
      },

      hundredninetyfour: {
        text: texts.hundredninetyfour
      },

      hundredninetysix: {
        text: texts.hundredninetysix,
        choices: [
          {text: "Следовать за ним",next: "hundredninetyseven"}
        ]
      },

      hundredninetyseven: {
        text: texts.hundredninetyseven,
        choices: [
          {text: "Атаковать одно из существ",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundred';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredone';
          }
          render();
        });
      } 
          }
        ]
      },

      hundredninetyeight: {
        text: texts.hundredninetyeight,
        choices: [{text: "Забрать себе всё", 
          action: () =>{
            addItemToEquipment("Драгоценные камени");
            currentBlock='hundredninetyeightnext';
            render();
          }
        }]
      },

      hundredninetyeightnext: {
        text: "Что делать с кольцом?",
        choices: [
          {text: "Надеть сейчас", next: "twohundredtwo"},
          {text: "Взять, но не надевать",
            action: () => {
              addItemToEquipment("Кольцо");
              currentBlock="twohundredthree";
              render();
            }
          }
        ]
      },

      hundredninetynine: {
        text: texts.hundredninetynine,
        choices: [{text: "Атаковать его", next: "twohundredfive"},
          {text: "Остаться неподвижным", next: "twohundredsix"}
        ]
      },

      twohundred: {
        text: texts.hundredninetynine,
        choices: [
          {text: "Атаковать снова",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredeight';
          }
          render();
        });
      }  
          }
        ]
      },

      twohundredone: {
        text: texts.twohundredone,
        choices: [{text:"Получить урон", damage: 3, next: "twohundredonenext"}]
      },

      twohundredonenext: {
        text: "Как только вы отходите от удара, то сразу замечаете возможность для контратаки",
        choices: [{text: "Нанести удар",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundred';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundrednine';
          }
          render();
        });
      }  
        }]
      },

      twohundredtwo: {
        text: texts.twohundredtwo,
        choices: [{text: "Дальше", next: "twohundredtwentyseven"}]
      },

      twohundredthree: {
        text: texts.twohundredthree,
        choices: [{

          text: "Бросить d6, доверившись судьбе",

          action: () => {
          rollDice((result) => {
          if (result >=1 && result <=2) {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredten';
          } else {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredeleven';
          }        
          render();
          });
        }
      }
    ]
  },
    
  twohundredfive: {
    text: texts.twohundredfive,
    choices: [
      {text: "Ударить в спину",
        action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll+4); // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredtwelve';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredthreeteen';
          }
          render();
        });
      }  
      }
    ]
  },

    twohundredsix:{
      text: texts.twohundredsix,
              choice: [{text: "Забрать себе всё", 
          action: () =>{
            addItemToEquipment("Драгоценный камень");
            addItemToEquipment("Драгоценный камень");
            addItemToEquipment("Драгоценный камень");
            currentBlock='twohundredsixnext';
            render();
          }
        }]
      },

      twohundredsixnext: {
        text: "Что делать с кольцом?",
        choices: [
          {text: "Надеть сейчас", next: "twohundredtwo"},
          {text: "Взять, но не надевать",
            action: () => {
              addItemToEquipment("Кольцо");
              currentBlock="twohundredthree";
              render();
            }
          }
        ]
      },

      twohundredseven: {
        text: texts.twohundredseven,
        choices: [
          {text: "Совершить атаку",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredfourteen';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredfifteen';
          }
          render();
        });
      } 
          }
        ]
      },

      twohundredeight:{
        text: texts.twohundredeight,
        choices: [{text: "Получить урон", damage: 2, next: "twohundredeightnext"}]
      },

      twohundredeightnext: {
        text: "Попытаться контратаковать",
        choices: [{text:"Совершить удар",
         action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredsixteen';
          }
          render();
        });
      }  
        }]
      },

      twohundrednine: {
        text: texts.twohundrednine,
        choices: [{text: "Атаковать противника",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventeen';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredeighteen';
          }
          render();
        });
      }  
        }]
      },

      twohundredten: {
        text: texts.twohundredten,
        choices: [{text: "Оставить товарищей", next: "twohundrednineteen"},
          {text: "Подняться наверх и помочь группе", next: "twohundredtwenty"}
        ]
      },

      twohundredeleven: {
        text: texts.twohundredeleven,
        choices: [{text: "Дальше", next: "twohundredtwentyseven"}]
      },

      twohundredtwelve: {
        text: texts.twohundredtwelve,
        choices: [{text: ""}]
      },

      twohundredthreeteen: {
        text: texts.twohundredthreeteen,
        choices: [{text: "Получить урон", damage: 2, next: "twohundredthreeteennext"}]
      },

      twohundredthreeteennext: {
        text: texts.twohundredthreeteennext,
        choices: [{text:"Совершить атаку, воспользовавшись суматохой",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredeight';
          }
          render();
        });
      }}]
      },

      twohundredfourteen: {
        text: texts.twohundredfourteen,
        choices: [{text: "Отскочить",  next: "twohundredtwentyone"},
          {text: "Сражаться в рукопашную", next: "twohundredtwentytwo"}
        ]
      },

      twohundredfifteen: {
        text: texts.twohundredfifteen,
        choices: [{text: "Ударить снова",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 3) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredfourteen';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredtwentythree';
          }
          render();
        });
      }
        }]
      },

      twohundredsixteen: {
        text: texts.twohundredsixteen,
        choices: [{text: "Ударить в ответ",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 3) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredeight';
          }
          render();
        });
      }
        }]
      },

      twohundredseventeen:{
        text: texts.twohundredseventeen,
        choices: [
          {text: "Дальше",
            action: () => {
            addGold(50);
        currentBlock = "twohundredtwentyseven"; 
        render();
            }
          }
        ]
      },

      twohundredtwentyeight: {
        text: texts.twohundredtwentyeight,
        choices: [{
          text: "Получить урон", damage: 1, next: "twohundredseventeen"
        }]
      },

      twohundrednineteen: {
        text: texts.twohundrednineteen
      },

      twohundredtwenty: {
        text: texts.twohundredtwenty,
        choices: [{text: "Замахнуться на одно из существ",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 3) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundred';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredone';
          }
          render();
        });
      }
        }]

      },

      twohundredtwentyone: {
        text: texts.twohundredtwentyone,
        choices: [{text: "Получить урон", damage: 4, next: "twohundredtwentyonenext"}]
      },

      twohundredtwentyonenext: {
        text: texts.twohundredtwentyonenext,
        choices: [
          {text: "Дальше",
            action: () => {
            addGold(50);
        currentBlock = "twohundredtwentyseven"; 
        render();
            }
          }
        ]
      },

            twohundredtwentytwo: {
        text: texts.twohundredtwentytwo,
        choices: [{text: "Получить урон", damage: 4, next: "twohundredtwentytwonext"}]
      },

      twohundredtwentytwonext: {
        text: texts.twohundredtwentytwonext,
        choices: [
          {text: "Дальше",
            action: () => {
            addGold(50);
        currentBlock = "twohundredtwentyseven"; 
        render();
            }
          }
        ]
      },

      twohundredtwentythree: {
        text: texts.twohundredtwentythree,
        choices: [
          {text: "Дальше",
            action: () => {
            addGold(50);
        currentBlock = "twohundredtwentyseven"; 
        render();
            }
          }
        ]
      },

      twohundredtwentyfour: {
        text: texts.twohundredtwentyfour,
        choices: [{text: "Эльф протыкает вашу спину", damage: 27}]
      },

      twohundredtwentyfive: {
        text: texts.twohundredtwentyfive,
        choices: [{text: "Дальше", next: "twohundredtwentysix"}]
      },

      twohundredtwentysix: {
        text: texts.twohundredtwentysix,
        choices: [{text: "Принять удар", damage: 25}]
      },

      twohundredtwentyseven: {
        text: texts.twohundredtwentyseven,
        choices: [
          {text: "Попытаться пробежать через комнату", next: "twohundredtwentyeight"},
          {text: "Вернуться и послушать еще немного", next: "twohundredtwentynine"},
          {text: "Пробраться в комнату тайком", next: "twohundredthirty"}
        ]
      },

      twohundredtwentyeight: {
        text: texts.twohundredtwentyeight,
        choices: [
          {text: "Пройти в дверь справа",
            action: () => {
              statustwohundredthirtyone = true;
              currentBlock = "twohundredthirtyone"
            }
          },
          {text: "Пройти в дверь слева", next: "twohundredthirtytwo"}
        ]
      },

      twohundredtwentynine: {
        text: texts.twohundredtwentynine,
        choices: [
          {text: "Родерика", next: "twohundredthirtythree"},
          {text: "Саламдроса ", next: "twohundredthirtyfour"}
        ]
      },

      twohundredthirty: {
        text: texts.twohundredthirty,
        choices:[
          {text: "Возглавить атаку", next: "twohundredthirtythree"},
          {text: "Сделать рывок через комнату, не останавливаясь", next: "twohundredtwentyeight"}
        ]
      },

      twohundredthirtyone: {
        text: texts.twohundredthirtyone,
        choices: [{text: "Что-то не так... Совершите проверку Мудрости",
          action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultCheck = roll; // результат атаки
          if (resultCheck <= wisdom) {
            alert(`Значение вашего броска: ${resultCheck}. Это успех!`);
            currentBlock='twohundredthirtyfive';
          } else {
            alert(`Значение вашего броска: ${resultCheck}. Это провал!`);
            currentBlock='twohundredthirtysix';
          }
          render();
        });
      }
        }]
      },

      twohundredthirtytwo: {
        text: texts.twohundredthirtytwo,
        choices: [
          {text: "Перепрыгнуть через стол и схватить человека за руку", next: "twohundredthirtyseven"},
          {text: "Осторожно обойти стол, высматривая ловушки", next: "twohundredthirtyeight"},
          {text: "Покинуть комнату", next: "twohundredthirtnine"},
          {text: "Перепрыгнуть через стол и схватить человека за руку", next: "twohundredforty"},
        ]
      },

      twohundredthirtythree: {
        text: texts.twohundredthirtythree,
        choices: [
          {text: "Обойти противника Родерика со спины", next: "twohundredfortyone"},
          {text: "Напасть на бегущего человека", next: "twohundredfortytwo"}
        ]
      },

        twohundredthirtyfour: {
          text: texts.twohundredthirtyfour,
          choices: [
          {text: "Побежать в дверь справа",
            action: () => {
              statustwohundredthirtyone = true;
              currentBlock = "twohundredthirtyone"
            }
            }
          ,
          {text: "Побежать в дверь слева", next: "twohundredthirtytwo"}
        ]
        },

        twohundredthirtyfive: {
          text: texts.twohundredthirtyfive,
          choices: [
            {text: "Драться", next: "twohundredfortythree"},
            {text: "Пробежать между ног", next: "twohundredfortyfour"},
            {text: "Забраться на стену", next: "twohundredfortyfive"},
            {text: "Попытаться обмануть монстра", next: "twohundredfortysix"}
          ]
        },

        twohundredthirtysix: {
          text: texts.twohundredthirtysix,
          choices: [
            {text: "Продолжить бежать", next: "twohundredthirtyfive"},
            {text: "Спрятаться", next: "twohundredfortyeight"}
          ]
        },

        twohundredthirtyseven: {
          text: texts.twohundredthirtyseven,
          choices: [{text: "Схватить его",
            action: () => {
              roll20((roll) => { // 'roll' — это значение d20
          const resultCheck = 20- roll; // результат атаки
          if (resultCheck <= 10) {
            alert(`Значение вашего броска: ${resultCheck}. Это успех!`);
            currentBlock='twohundredfortyeight';
          } else {
            alert(`Значение вашего броска: ${resultCheck}. Это провал!`);
            currentBlock='twohundredfortynine';
          }
          render();
        });
            }
          }]
        },

        twohundredthirtyeight: {
          text: texts.twohundredthirtyeight,
          choices: [{text: "Дальше", next: "twohundredfifty"}]
        },

        twohundredthirtynine: {
          text: texts.twohundredthirtynine,
          choices: [
            {text: "Обойти противника Родерика со спины", next: "twohundredfortyone"},
          {text: "Напасть на человека, открывающего клетку", next: "twohundredfortytwo"},
          {text: "Выбежать через другой выход",
            condition: () => !statustwohundredthirtyone,
            action: () => {
              currentBlock = "twohundredthirtyone"
            }
          }
          ]
        },

        twohundredforty: {
          text: texts.twohundredforty,
          choices: [
            {text: "Сражаться", next: "twohundredfiftyone"},
            {text: "Бежать в другую комнату", next: "twohundredthirtynine"},
            {text: "Попытаться добраться до очага", next: "twohundredsixtysix"}
          ]
        },

        twohundredfortyone: {
          text: texts.twohundredfortyone,
          choices: [{
            text: "Ударить цель в спину",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - (roll+4); // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredfiftytwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredfiftythree';
          }
          render();
        });
      }
          }]
        },

        twohundredfortytwo: {
          text: texts.twohundredfortytwo,
          choices: [
            {text: "Cовершить атаку",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredfiftyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredfiftysive';
          }
          render();
        });
      }}
          ]
        },

        twohundredfortythree: {
          text: texts.twohundredfortythree,
          choices: [
            {text: "Принять удар", damage: 8, next: "twohundredfortythreenext"}
          ]
        },

        twohundredfortythreenext: {
          text: "Вы чудом не погибли",
          choices: [
            {text: "Пробежать мимо существа наружу", next: "twohundredfortyfour"},
            {text: "Продолжить сражаться", next: "twohundredfiftysix"}
          ]
        },

        twohundredfortyfour: {
          text: texts.twohundredfortyfour,
          choices: [{text: "Принять урон", damage: 6, next: "twohundredfortyfournext"}]
        },

        twohundredfortyfournext: {
          text: "Вы снаружи!",
          choices: [{text: "Дальше", next: "twohundredfiftyeight"}]
        },

        twohundredfortyfive: {
          text: texts.twohundredfiftyfive,
          choices: [
            {text: "Нырнуть у существа между ног", next: "twohundredfortyfour"},
            {text: "Сражаться", next: "twohundredfiftysix"}
          ]
        },

        twohundredfortysix: {
          text: texts.twohundredfortysix,
          choices: [
            {text: "«Хозяин приказал мне подготовить войска к бою. Отойди, болван!»", next: "twohundredfiftyseven"},
            {text: "«Быстрее! Хозяина атакуют! Ты должен его спасти!»", next: "twohundredfiftynine"},
            {text: "«Эй! У тебя шнурки развязались!»", next: "twohundredsixty"},
            {text: "«Дам 50 золотых, чтобы ты пропустил»", next: "twohundredsixtyone"}
          ]
        },

        twohundredfortyseven: {
          text: texts.twohundredfortyseven,
          choices: [{
            text: "Совершить проверку",
action: () => {
        roll100((roll) => { // 'roll' — это значение d100
          const resultSkillCheck = roll; // результат атаки
          if (resultSkillCheck <=hideinshadows ) {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это успех!`);
            currentBlock='twohundredsixtytwo';
          } else {
            alert(`Значение вашего броска: ${resultSkillCheck}. Это провал!`);
            currentBlock='twohundredsixtythree';
          }
          render();
        })
      }
        }]
        },

        twohundredfortyeight: {
          text: texts.twohundredfortyeight,
          choices: [{text: "Атаковать на опережение",
           action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 10) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredsixtyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredsixtyfive';
          }
          render();
        });
      } 
          }]
        },

        twohundredfortynine: {
          text: texts.twohundredfortynine,
          choices: [{text: "Дальше", next: "twohundredfifty"}]
        },

        twohundredfifty: {
          text: texts.twohundredfifty,
          choices: [
            {text: "Сражаться", next: "twohundredfiftyone"},
            {text: "открыть люк и сбежать", next: "twohundredsixtysix"},
            {text: "Вернуться в другую комнату", next: "twohundredthirtynine"}
          ]
        },

        twohundredfiftyone: {
          text: texts.twohundredfiftyone,
          choices: [{text: "Ударить монстра",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredsixtyseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredsixtyeight';
          }
          render();
        });
      } 
          }]
        },

        twohundredfiftytwo: {
          text: texts.twohundredfiftytwo,
          choices: [
            {text: "Сразиться с волком", next: "twohundredsixtynine"},
            {text: "Помочь Саламдросу ", next: "twohundredseventy"},
            {text: "Напасть на человека, освободившего волка", next: "twohundredseventyone"}
          ]
        },

        twohundredfiftythree: {
          text: texts.twohundredfiftythree,
          choices: [{text: "Ударить ещё раз",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventytwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredseventythree';
          }
          render();
        });
      } 
          }]
        },

        twohundredfiftyfour: {
          text: texts.twohundredfiftyfour,
          choices: [{text: "Ударить снова",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredseventyfive';
          }
          render();
        });
      } }
          ]
        },

        twohundredfiftyfive: {
          text: texts.twohundredfiftyfive,
          choices: [{text: "Совершить атаку",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredseventyseven';
          }
          render();
        });
      }} ]
        },

                twohundredfiftysix: {
          text: texts.twohundredfiftysix,
          choices: [{text: "Совершить атаку",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventyeight';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredseventynine';
          }
          render();
        });
      }} ]
        },


        twohundredfiftyseven:{
          text: texts.twohundredfiftyseven,
          choices: [{text: "Дальше", next: "twohundredfiftyeight"}]
        },

        twohundredfiftyeight: {
          text: texts.twohundredfiftyeight
        },

        twohundredfiftynine: {
          text: texts.twohundredfiftynine,
                  choices: [{
          text: "Бросить d6, доверившись судьбе",
          action: () => {
          rollDice((result) => {
          if (result >=1 && result <=2) {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredseventynine';
          } else {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredeighty';
          }        
          render();
          });
        }
      }
    ]
        },

        twohundredsixty: {
          text: texts.twohundredsixty,
          choices: [{text: "Дальше", next: "twohundredeightyone"}]
        },

        twohundredsixtyone: {
          text: texts.twohundredsixtyone,
choices: [{
          text: "Бросить d6, доверившись судьбе",
          action: () => {
          rollDice((result) => {
          if (result >=1 && result <=2) {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredeightytwo';
          } else {
            alert(`Выпало: ${result}.`);
            currentBlock='twohundredeightyfour';
          }        
          render();
          });
        }
      }
    ]
        },

        twohundredsixtytwo: {
          text: texts.twohundredsixtytwo,
          choices: [{text: "Ударить его сзади", next: "twohunderedeightyfive"},
            {text: "Подождать пока оно пройдёт и убежать", next: "twohundredfiftyeight"}
          ]
        },

        twohundredsixtythree: {
          text: texts.twohundredsixtythree,
          choices: [
            {text: "Драться", next: "twohundredfiftysix"},
            {text: "Пробежать мимо", next: "twohundredfortyfour"},
            {text: "Попытаться обмануть монстра", next: "twohundredfortysix"}
          ]
        },

        twohundredsixtyfour: {
          text: texts.twohundredsixtyfour,
          choices: [
            {text: "Замахнуться для удара",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 10) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohunderedeightysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohunderedeightyseven';
          }
          render();
        });
      }
            }
          ]
        },

        twohundredsixtyfive: {
          text: texts.twohundredsixtyfive,
          choices: [{text: "Сопротивляться",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultSave = roll; // результат атаки
          if (resultSave <= turntostonesave) {
            alert(`Значение вашего броска: ${resultSave}. Это успех!`);
            currentBlock='twohunderedeightyeight';
          } else {
            alert(`Значение вашего броска: ${resultSave}. Это провал!`);
            currentBlock='twohunderedeightynine';
          }
          render();
        });
      }
      }
          ]
    },

    twohundredsixtysix: {
      text: texts.twohundredsixtysix,
      choices: [{text: "Получить урон", damage: 1, next: "twohundredsixtysixnext"}]
    },

    twohundredsixtysixnext: {
      text: texts.twohundredsixtysixnext,
      choices: [{
        text: "Сидеть и ждать", next: "threehundredseven"
      },
    {text: "Обследовать местность", next: "twohundredninety"}]
    },

    twohundredsixtyseven: {
      text: texts.twohundredsixtyseven,
      choices: [
        {text: "Выйти из комнаты", next: "twohundredthirtynine"},
        {text: "Попытаться загнать зверя в клетку", next: "twohundredninetyone"}
      ]
    },

    twohundredsixtyeight: {
      text: texts.twohundredsixtyeight,
      choices: [{text:"Получить урон", damage: 2, next: "twohundredsixtyeightnext"}]
    },

    twohundredsixtyeightnext: {
      text: "зверь отходит Это хорошая возможность для удара.",
      choices: [
            {text: "Совершить атаку",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 7) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredsixtyseven';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredfiftyone';
          }
          render();
        });
      }
            }
          ]
    },

    twohundredsixtynine: {
      text: texts.twohundredsixtynine,
      choices: [{text: "Совершить атаку",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredninetytwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredninetythree';
          }
          render();
        });
      }
            }]
    },

    twohundredseventy: {
      text: texts.twohundredseventy,
      choices: [{text: "Дальше", next: "twohundredsixtynine"}]
    },

    twohundredseventyone: {
      text: texts.twohundredseventyone,
      choices: [{text: "Совершить атаку",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredfiftyfour';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredfiftyfive';
          }
          render();
        });
      }
            }]
    },

    twohundredseventytwo: {
          text: texts.twohundredseventytwo,
          choices: [
            {text: "Сразиться с волком", next: "twohundredsixtynine"},
            {text: "Помочь Саламдросу ", next: "twohundredseventy"},
            {text: "Напасть на человека, освободившего волка", next: "twohundredseventyone"}
          ]
        },

        twohundredseventythree: {
          text: texts.twohundredseventythree,
          choice: [{text: "Дальше", damage: 2, next: "twohundredsixtynine"}]
        },

        twohundredseventyfour: {
          text: texts.twohundredseventyfour,
          choices: [{text: "Ударить снова",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredseventysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredseventyfive';
          }
          render();
        });
      }
            }]
        },

        twohundredseventyfive: {
          text: texts.twohundredseventyfive,
          choices: [{text: "Дальше", next: "threehundredeight"}]
        },

        twohundredseventysix: {
          text: texts.twohundredseventysix,
          choices: [{text: "Дальше", next: "threehundredeight"}]
        },

        twohundredseventyseven: {
          text: texts.twohundredseventyseven,
          choices: [{text: "Получить урон", damage: 3, next: "twohundredseventysevennext"}]
        },

        twohundredseventysevennext: {
          text: texts.twohundredseventysevennext,
          choices: [{text: "Дальше", next: "twohundredninetyfive"}]
        },

        twohundredseventyeight: {
          text: texts.twohundredseventyeight,
          choices: [{text: "Получить урон", damage: 5, next: "twohundredseventyeightnext"}]
        },

        twohundredseventyeightnext: {
          text: "Он убьёт вас!",
          choices: [
            {text: "Продолжить сражаться", next: "twohundredseventynine"},
            {text: "Пробежать мимо", next: "twohundredfortyfour"}
          ]
                },

        twohundredseventynine: {
          text: texts.twohundredseventynine,
          choices: [{text: "Получить урон", damage: 6, next: "twohundredseventyninenext"}]
        },

        twohundredseventyninenext: {
          text: texts.twohundredseventyninenext,
          choices: [{text: "Бежать в панике", next: "twohundredfortyfour"}]
        },

        twohundredeighty: {
          text: texts.twohundredeighty,
          choices: [
            {text: "Ударить его сзади", next: "twohunderedeightyfive"},
            {text: "Убежать, пока есть возможность", next: "twohundredfiftyeight"}
          ]
        },

        twohundredeightyone: {
          text: texts.twohundredeightyone,
          choices: [{text: "Дальше", next: "twohundredseventynine"}]
        },

        twohundredeightytwo: {
          text: texts.twohundredeightytwo,
          choices: [
            {text: "Держи!",
              condition: () => gold >= 50,
              action: () => {
                spendGold(50);
                currentBlock = "twohunderedeightythree"
              }
            },
            {text: "У меня их нет...",
              condition: () => gold < 50,
              next: "twohundredseventynine"}
          ]
        },

        twohunderedeightythree: {
          text: texts.twohunderedeightythree,
          choices: [{text: "Дальше", next: "twohundredfiftyeight"}]
        },

        twohunderedeightyfour: {
          text: texts.twohunderedeightyfour,
          choices: [{text: "Дальше", next: "twohundredseventynine"}]
        },

        twohunderedeightyfive: {
          text: texts.twohunderedeightyfive,
          choices: [{text: "Ударить снова",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredninetysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredninetyseven';
          }
          render();
        });
      }
            }]
        },

        twohunderedeightysix: {
          text: texts.twohunderedeightysix,
          choices: [
            {text: "Тот же рычаг", next: "twohundredninetyeight"},
            {text: "Другой рычаг", next: "twohundredninetynine"},
            {text: "Вернуться и помочь товарищам", next: "twohundredthirtynine"}
          ]
        },

        twohunderedeightyseven: {
          text: texts.twohunderedeightysix,
          choices: [{
            choices: [{
        text: "Сидеть и ждать", damage: 1, next: "threehundredseven"
      },
    {text: "Обследовать местность", damage: 1, next: "twohundredninety"}]
          }]
        },

        twohunderedeightyeight: {
          text: texts.twohunderedeightyeight,
          choices: [{text: "Ударить снова",
              action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 10) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohunderedeightysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohunderedeightyseven';
          }
          render();
        });
      }
            }]
        },

        twohunderedeightynine: {
          text: texts.twohunderedeightynine,
          choices: [{text: "Дальше", damage: 1, next: "threehundredseven"}]
        },

        twohundredninety: {
          text: texts.twohundredninety
        },

        twohundredninetyone: {
          text: texts.twohundredninetyone,
          choices: [
            {texts: "Дальше",
            action: () => {
              addItemToEquipment("Дрогоценные камни");
              addGold(500);
              currentBlock = "threehundrednine";
              render();
            }
            } 
          ]
        },

        twohundredninetytwo: {
          text: texts.twohundredninetytwo,
          choices: [{
            text: "Ударить снова",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='threehundred';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='threehundredone';
          }
          render();
        });
      }
          }]
        },

        twohundredninetythree: {
          text: texts.twohundredninetythree,
          choices: [
            {text: "Получить урон", damage: 3, next: "twohundredninetythreenext"}
          ]
        },

        twohundredninetythreenext: {
          text: "Вы ранены, но не собираетесь отступать из боя.",
          choices: [{
            text: "Ударить в ответ",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 6) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredninetytwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='threehundredone';
          }
          render();
        });
      }
          }]
        },

        twohundredninetyfour: {
          text: texts.twohundredninetyfour,
          choices: [
            {text: "Принять исцеление", 
              action: () => {
                restoreLives();
                currentBlock = "threehundredeight";
                render();
              }

              }
            
          ]
        },

        twohundredninetyfive: {
          text: texts.twohundredninetyfive,
          choices: [{text: "Дальше", next: "threehundredeight"}]
        },

                twohundredninetysix: {
          text: texts.twohundredninetysix,
          choices: [{text: "Ударить в ответ", 
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='threehundredtwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='twohundredninetyseven';
          }
          render();
        });
      }
          }]
        },

        twohundredninetyseven: {
          text: texts.twohundredninetyseven,
          choices: [{text: "Получить урон", damage: 4, next: "twohundredninetysevennext"}]
        },

        twohundredninetysevennext: {
          text: "Вы собираете последние силы для ответного удара.",
          choices: [{text: "Совершить атаку",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='twohundredninetysix';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='threehundredthree';
          }
          render();
        });
      }}
          ]
        },

        twohundredninetyeight: {
          text: texts.twohundredninetyeight,
          choices: [
            {text: "Прыгнуть и разведать обстановку", next: "threehundredfour"},
            {text: "Вернуться, чтобы помочь товарищам", next: "twohundredthirtynine"}
          ]
        },

        twohundredninetynine: {
          text: texts.twohundredninetynine,
          choices: [
            {text: "Сражаться", next: "twohundredfiftyone"},
            {text: "Вернуться к остальным", next: "twohundredthirtynine"}
          ]
        },

        threehundred: {
          text: texts.threehundred,
          choices: [{text: "Дальше", next: "threehundredeight"}]
        },

        threehundredone: {
          text: texts.threehundredone,
          choices: [{text: "Дальше", damage: 2, next: "threehundredeight"}]
        },

        threehundredtwo: {
          text: texts.threehundredtwo,
          choices: [{text: "Убежать", next: "twohundredfiftyeight"}]
        },

        threehundredthree: {
          text: texts.threehundredthree,
          choices: [{text: "Получить урон", damage: 6, next: "threehundredthreenext"}]
        },

        threehundredthreenext: {
          text: texts.threehundredthreenext,
          choices: [{
            text: "Пробежать мимо", next: "twohundredfortyfour"
          },
          {text: "Попытаться ударить",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='threehundredtwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='threehundredfive';
          }
          render();
        });
      }
            }
        ]
        },

        threehundredfour: {
          text: texts.threehundredfour,
          choices: [
            {text: "Сидеть и ждать", next: "threehundredseven"},
            {text: "Искать выход на ощупь", next: "twohundredninety"}
          ]
        },
        
        threehundredfive: {
          text: texts.threehundredfive,
          choices: [{text: "Пробежать мимо", next: "twohundredfortyfour"},
            {text: "Попытаться ударить",
            action: () => {
          roll20((roll) => { // 'roll' — это значение d20
          const resultAttack = 20 - roll; // результат атаки
          if (resultAttack <= 5) {
            alert(`Значение вашего броска: ${resultAttack}. Вы попали!`);
            currentBlock='threehundredtwo';
          } else {
            alert(`Значение вашего броска: ${resultAttack}. Вы промахнулись!`);
            currentBlock='threehundredsix';
          }
          render();
        });
      }}
          ]
        },

        threehundredsix: {
          text: texts.threehundredsix
        },

        threehundredseven: {
          text: texts.threehundredseven
        },


        threehundredeight: {
          text: texts.threehundredeight
        },

        threehundrednine: {
          text: texts.threehundrednine
        }

  }


// Переменные состояния
let currentBlock = 'one'; // тут переключать главу
let lives = 7;
// Запреты на повтор действий
let statushundredsixteen = false;
let statushundredeight = false;
let statushundredten = false;
let statustwohundredthirtyone = false;
let statusheal = true;


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
  
  equipment.forEach(item => {
    const itemSpan = document.createElement('span');
    itemSpan.innerText = item + ' ';

    // Создаем безопасное имя класса, заменяя пробелы на дефисы
    const safeClassName = 'item-' + item.toLowerCase().replace(/\s+/g, '-');

    itemSpan.classList.add(safeClassName);
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
  document.getElementById('livesCount').innerText = `${lives}`;
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
  // Формируем текст кнопки
  let btnText = choice.text;

  if (choice.damage !== undefined) {
    btnText += ` (-${choice.damage} HP)`;
  }
  if (choice.heal !== undefined) {
    btnText += ` (+${choice.heal} HP)`;
    updateLivesDisplay();
  }

  btn.innerText = btnText;
  btn.className = 'choice';
  btn.onclick = () => makeChoice(choice);
  choicesContainer.appendChild(btn);
}

  // Обновляем статус HP
   document.getElementById('livesCount').innerText = `${lives}`;

    const restoreBtn = document.getElementById('restoreBtn');
  if (restoreScenes.includes(currentBlock) && statusheal === true) {
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

  console.log('Выбранный выбор:', choice);
  if (choice.damage !== undefined) {
    lives -= choice.damage;
    console.log('Линия damage, lives:', lives);
  }
  if (choice.heal !== undefined) {
    lives += choice.heal;
    console.log('Линия heal, lives:', lives);
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

function restoreLives() {
  lives += 6;
  if (lives > 7) {
    lives = 7;
  }
}

const restoreScenes = ['healtext', 'fourteencont', 'fiveteen', 'sixteen',
  'seventeen', 'nineteen',
  'twenty', 'twentyfour', 'twentyfive', 'twentysix',
'twentyseven', 'twentyeight', 'thirtyone', 'thirtytwosword', 'thirtytwo',
'thirtytwonext', 'thirtythree', 'thirtyfour',
'thirtyfive', 'thirtyseven', 'fourtytwoknife', 'fourtythree',
'fourtyeight', 'fourtyeightnext', 'fifty', 'fiftyfour', 'fiftyseven', 'fiftynine',
'sixty', 'sixtyone', 'sixtytwo', 'sixtythree', 'sixtyfour',
'sixtysix', 'sixtyeight', 'sixtynine', 'seventy', 'seventyone',
'seventysix', 'seventysixsword', 'seventyseven', 'seventyeight',
'eightynine', 'ninetytwo', 'ninetysix', 'ninetyseven',
'hundred', 'hundredone', 'hundredtwo', 'hundredfour',
'hundredseven', 'hundredsevennext', 'hundredeight', 'hundredeightnext',
'hundredten', 'hundredeleven', 'hundredthreeteen', 'hundredfourteen',
'hundredfiveteen', 'hundredsixteen', 'hundredtwentyone', 'hundredtwentyfour', 'hundredtwentyfive',
'hundredtwentyseven', 'hundredtwentyeight', 'hundredthreety', 'hundredthreetyone',
'hundredfourtyfive', 'hundredfourtyseven', 'hundredfourtyeight', 'hundredsixtyseven',
'hundredseventyone', 'hundredseventythree', 'hundredseventysix', 'hundredseventyseven',
'hundredseventyeight', 'hundredseventynine', 'hundredeightyone', 'hundredninetysix', 'twohundredtwo',
'twohundredthree', 'twohundredseventeen', 'twohundredtwentyone', 'twohundredtwentyonenext', 'twohundredtwentytwo', 'twohundredtwentytwonext', 'twohundredtwentythree',
'twohundredtwentyseven', 'twohundredtwentynine']; // главы, в которых работает исцеление

function rollRestore() {
  const rollRest = Math.floor(Math.random() * 8) + 1; // d8
  const total = rollRest + 3; // восстановление +3 к результату
  lives += total;
  lives = Math.min(lives, 7);
  alert(`Вы восстановили ${total} HP!`);
  statusheal = false;
  updateLivesDisplay();
  
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
  restoreBtn.style.display = 'none';
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

  document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.charterbtn.borderleft').focus();
  });

render();