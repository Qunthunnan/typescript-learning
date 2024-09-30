"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userName = "Kyrylo";
let age = 23;
const isBirthday = true;
const userData = {
    userName: "Kyrylo",
    age: 23,
    isBirthday: true,
    messages: {
        gretengs: "Прив",
        atack: "АААААА",
        parting: "Sayonara, mthfck",
    },
};
const userDataTuple = [true, 40, "John"];
const tuppleSpreadDemo = [
    true,
    true,
    false,
    123,
    "Vasyl",
];
const tuppleSpreadDemo2 = [
    false,
    12441,
    12,
    2344,
    "Kyrylo",
];
function getPartingMessage({ userName, age, messages: { parting }, }) {
    return `${userName}, ${age}, wants to say something in parting: ${parting}`;
}
function congratulationMessage(isBirthday, userName, age) {
    if (isBirthday) {
        console.log(`Вітаю, ${userName.toUpperCase()}, сьогодні тобі ${++age}!`);
    }
}
const getCongratulationMessage = (isBirthday, userName, age) => {
    if (isBirthday)
        return `Вітаю, ${userName.toUpperCase()}, сьогодні тобі ${++age}!`;
    else
        return `Тобі ${age} років`;
};
congratulationMessage(isBirthday, userName, age);
const strArray = ["Перший", "Другий", "Третій"];
const numMatrix = [
    [1, 2, 3],
    [4, 5, 6],
];
// const message: string | number = 5;
//union
function getNumberOrString(value) {
    if (value.length > 3) {
        return "Більше 3";
    }
    else
        return 0;
}
const message = getNumberOrString("sfsfsf");
function multiAction(data) {
    if (typeof data === "string")
        console.log(data.toUpperCase());
    if (typeof data === "number")
        console.log(data.toExponential());
    if (Array.isArray(data)) {
        console.log(data.reduce((i, k) => i + k), 10);
    }
}
function sameMethods(data) {
    console.log(data.length);
}
function equalNarrow(first, second) {
    if (first === second) {
        console.log(first.toFixed() + second * first);
    }
}
function objectNarrow(data) {
    if ("system" in data) {
        console.log(data.system.toFixed());
    }
    if ("user" in data) {
        console.log(data.user.length);
    }
}
function objectIsInstanceOf(obj) {
    if (obj instanceof Date) {
        console.log(obj.getDate());
    }
}
const obj = {
    supers: "sfsfsf",
};
const protocol = "https";
// const getAnimationStyleString = (animName: string, timingFunc: AnimationFunction = 'ease', duration: number, iterCount: number | 'infinite' ): string => {
// 	return `${animName} ${timingFunc} ${duration} ${iterCount}`;
// }
const serverConfig = {
    protocol: "http",
    port: 3004,
};
const addConfig = {
    protocol: "https",
    port: 3343,
};
const userConfig = {
    protocol: "ftp",
    port: 9999,
    role: "user",
};
function startServer({ protocol, port, }) {
    console.log(`${protocol.toUpperCase()} server started on ${port} port`);
}
startServer(serverConfig);
const getAnimationStyleString = (animName, timingFunc = "ease", duration, iterCount) => {
    return `${animName} ${timingFunc} ${duration} ${iterCount}`;
};
const freezeUser = {
    login: "liudmyla",
    password: "sifhihfiwhfiw",
    age: 24,
    addr: "HFkskfi hsifw khwwfsa",
    system: "sjfowww",
};
// freezeUser.password = 'sfsfsfss';
const user = {
    login: "qunthunnan",
    password: "Jojfojoj",
    age: 23,
    system: undefined,
};
const dbAdress = "ksfhkshfssff";
function sendData(data, dbAdress) {
    console.log(data, dbAdress.toLocaleLowerCase());
}
sendData(user, dbAdress);
const basicPorts = [3000, 3001, 3002];
const basicStr = ["ssfjlf", "sfsfs", "ssss"];
const userReading = {
    water: 3.45,
    electricity: 14.2,
};
function checkReadings(readings) {
    const systemReadings = {
        water: 3.45,
        electricity: 14.2,
    };
    if (readings.electricity === systemReadings.electricity &&
        readings.water === systemReadings.water) {
        return true;
    }
    return false;
}
// basicPorts[0] = 225;
// basicPorts.push(223)
const fetchData = (url, method) => {
    console.log(url, method);
};
const reqOptions = {
    url: "https://google.com",
    method: "GET",
};
fetchData(reqOptions.url, reqOptions.method);
const cornerOptions = {
    url: "https://google.com",
    method: "POST",
};
fetchData(cornerOptions.url, cornerOptions.method);
const department = {
    name: "qunth",
    budget: 42422424,
};
function transformDepartment(department, budget) {
    return {
        name: department.name,
        projectBudget: budget,
    };
}
const newProject = transformDepartment(department, 3000);
function calculateArea(a, b) {
    if (b) {
        const rect = {
            a,
            b,
            area: a * b,
        };
        return rect;
    }
    else {
        const square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
calculateArea(32);
