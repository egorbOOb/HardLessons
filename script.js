let formatDate = new Date();

let resetFormatDate = function() {
    formatDate = new Date();
}

let firstFormatDate = {
    getDayOfWeek: function(dayOfWeek) {
        switch (dayOfWeek) {
            case 1:
                return 'понедельник';
            case 2:
                return 'вторник';
            case 3:
                return 'среда';
            case 4:
                return 'четверг';
            case 5:
                return 'пятница';
            case 6:
                return 'суббота';
            case 0:
                return 'воскресение';
        }
    },
    getNameOfMonth: function(nameOfMonth) {
        switch (nameOfMonth) {
            case 0:
                return ' января ';
            case 1:
                return ' февраля ';
            case 2:
                return ' марта ';
            case 3:
                return ' апреля ';
            case 4:
                return ' мая ';
            case 5:
                return ' июня ';
            case 6:
                return ' июля ';
            case 7:
                return ' августа ';
            case 8:
                return ' сентября ';
            case 9:
                return ' октября ';
            case 10:
                return ' ноября ';
            case 11:
                return ' декабря ';
        }
    },
    getFormatHours: function(hour) {
        switch (hour) {
            case 21:
            case 1:
                return hour + ' час ';
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
                return hour + ' часа ';
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                return hour + ' часов '
        }
    },
    getFormatMinute: function(minute) {
        let number = minute + '';
        let lastOfNumber = +(number.length - 1);
        if (+number[lastOfNumber] === 1 && minute !== 11) {
            return  minute + ' минута '
        } else if ((minute !== 12 && minute !== 13 && minute !== 14) && (+number[lastOfNumber] === 3 || +number[lastOfNumber] === 2 || +number[lastOfNumber] === 4)) {
            return minute + ' минуты '
        } else {
            return minute + ' минут '
        }
    },
    getFormatSecond: function(second) {
        let number = second + '';
        let lastOfNumber = +(number.length - 1);
        if (+number[lastOfNumber] === 1 && second !== 11) {
            return  second + ' секунда '
        } else if ((second !== 12 && second !== 13 && second !== 14) && (+number[lastOfNumber] === 3 || +number[lastOfNumber] === 2 || +number[lastOfNumber] === 4)) {
            return second + ' секунды '
        } else {
            return second + ' секунд '
        }
    },
    getFormatOfDate: function() {
        resetFormatDate();
        return 'Сегодня ' + firstFormatDate.getDayOfWeek(formatDate.getDay()) + ', ' + formatDate.getDate() + firstFormatDate.getNameOfMonth(formatDate.getMonth()) + formatDate.getFullYear() + ' года, ' + firstFormatDate.getFormatHours(formatDate.getHours()) + firstFormatDate.getFormatMinute(formatDate.getMinutes()) + firstFormatDate.getFormatSecond(formatDate.getSeconds());

    },
}


console.log(firstFormatDate.getFormatOfDate());

//alert(firstFormatDate.getFormatOfDate);

let secondFormatDate = {
    getDayInFormat: function(dayNumber) {
        let dayStr = dayNumber + '';
        if (dayStr.length === 1) {
            return '0' + dayNumber
        } else {
            return dayNumber
        }
    },
    getMonthInFormat: function(monthNumber) {
        let monthStr = monthNumber + '';
        if (monthStr.length === 1) {
            return '0' + (monthNumber + 1)
        } else {
            return monthNumber + 1
        }
    },
    getHourInFormat: function(hourNumber) {
        let hourStr = hourNumber + '';
        if (hourStr.length === 1) {
            return '0' + hourNumber
        } else {
            return hourNumber
        }
    },
    getSecondInFormat: function(secondNumber) {
        let secondStr = secondNumber + '';
        if (secondStr.length === 1) {
            return '0' + secondNumber
        } else {
            return secondNumber
        }
    },
    getMinuteInFormat: function(minuteNumber) {
        let minuteStr = minuteNumber + '';
        if (minuteStr.length === 1) {
            return '0' + minuteNumber
        } else {
            return minuteNumber
        }
    },
    getDateInFormat: function() {
        resetFormatDate();
        return secondFormatDate.getDayInFormat(formatDate.getDate()) + '.' + secondFormatDate.getMonthInFormat(formatDate.getMonth()) + '.' + formatDate.getFullYear() + ' - ' + secondFormatDate.getHourInFormat(formatDate.getHours()) + ':' + secondFormatDate.getMinuteInFormat(formatDate.getMinutes()) + ':' + secondFormatDate.getSecondInFormat(formatDate.getSeconds())
    }
};

let datePerSecond = function() {
    alert(secondFormatDate.getDateInFormat() + '\n' + firstFormatDate.getFormatOfDate());
};

setInterval(datePerSecond, 1000);