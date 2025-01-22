function searchAllName(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            return false;
        }
    }
    return true; // Все элементы найдены
}


function getKiller(suspectInfo, deadPeople) {
    let isKiller = false;
    let Killer = '';
    let isThereMurdered;

    for (let suspect in suspectInfo) {

        witnessArray = suspectInfo[suspect]; //люди которых видел         
        isThereMurdered = false;

        for (let deadMen of deadPeople) {

            isKiller = searchAllName(deadPeople, witnessArray); //ищем вхождение ВСЕХ имен убитых, в общем массиве увиденных
            if (isKiller) {
                Killer = suspect;
                break;
            }
        }
    }

    return Killer;
}


console.log('Killer : ',
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James


console.log('Killer : ',
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan