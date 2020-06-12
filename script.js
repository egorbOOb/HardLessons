//1.
/*let lang = prompt('Укажите язык: en или ru');

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

*/

    //Урок №4
function getStr() {
    let str;
    do {
        str = prompt('Введите строку, из которой хотите получить строку нужного формата');
    } while (typeof(str) !== 'string');
    
    return str;
};

function showCleanStr() {
    let str = getStr();
    let size = 30,
        croppedString = str.trim();
    if (croppedString.length >= size) {
        return alert(croppedString.slice(0, size) + '...');
    } else if (croppedString.length < size) {
        return alert(croppedString);
    } 
};

showCleanStr();

