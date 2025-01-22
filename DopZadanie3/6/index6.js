function isNotOverdue(DateString) {
    const dateNow = Date.now();

    let DataArray = DateString.split('.');
    let dateVisa = new Date(DataArray[2], DataArray[1], DataArray[0]).getTime();

    //console.log(' ', dateVisa, dateNow);

    if (dateVisa > dateNow)
        return true;//не  просрочена
    else
        return false;
}

function allowVisa(allPeopleWithVisa) {
    let peopleWithVisa;

    peopleWithVisa = allPeopleWithVisa.filter((item) => {
        if (!item.criminalRecord && isNotOverdue(item.passportExpiration)) {
            //if (!item.criminalRecord) {
            //if (isNotOverdue(item.passportExpiration)) {

            return item;
        }
    });

    return peopleWithVisa;
}

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
];

const result = allowVisa(peopleWithVisa);
console.log('result', result);