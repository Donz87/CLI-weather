import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + '' +  error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCES') + '' +  message);
};

const printHelp = () => {
    console.log(
    `${chalk.bgBlack('HELP')} 
     Без параметров - вывод погоды
     -s [CITY] для установки города
     -h  для вывода помощи
     -t [API_KEY]  для сохранения токена
     `
    )
};

const printWeather = (res, icon) => {
    console.log (
        `${chalk.bgMagenta('WEATHER')} Погода в городе ${res.name}
        ${icon} ${res.weather[0].description}
        Температура: ${res.main.temp} градуса (ощущается как ${res.main.feels_like}) градуса
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}м/с
        `
    )
}

export {printError, printSuccess, printHelp, printWeather};