//1.
let lang = prompt('Укажите язык: en или ru');

let weekDaysEn = ['sunday', ' monday', ' tuesday', ' wednesday', ' thursday', ' friday' , ' saturday'];
let weekDaysRu = ['понедельник', ' вторник', ' среда', ' среда', ' четверг', ' пятница', ' суббота', ' воскресенье'];



//a.
if (lang === 'en') {
    console.log(weekDaysEn);
} else if (lang === 'ru') {
    console.log(weekDaysRu);
};



//b.
switch (lang) {
    case 'en':
        alert(weekDaysEn);
        console.log(weekDaysEn);
        break;
    case 'ru':
        alert(weekDaysRu)
        console.log(weekDaysRu);
        break;
};



//c.
let  diffLanguageOption = [
    ['sunday', ' monday', ' tuesday', ' wednesday', ' thursday', ' friday' , ' saturday'],
    ['понедельник', ' вторник', ' среда', ' среда', ' четверг', ' пятница', ' суббота', ' воскресенье'],
];

lang === 'en' ? console.log(diffLanguageOption[0]) : console.log(diffLanguageOption[1]);



//2.
let namePerson = prompt('Введите имя');

(namePerson === 'Артем') ? console.log('Директор') :
    ( namePerson === 'Максим') ? console.log('Преподаватель') :
    console.log('Студент');



    //Урок №4

function getCleanStr(str) {
    let size = 30;
    if (typeof(str) !== 'string') {
        return 'Введенное значение должно быть строкой';
    } else if (str.trim().length >= size) {
        return str.trim().slice(0, size) + '...';
    } else if (str.trim().length < size) {
        return str.trim();
    } 
};

console.log(getCleanStr('\t 55    344535533553355353535353535353353   '));