//data
/* eslint-disable */
export const patientData = [
    {
        id: 1,
        name: 'John Doe',
        language: 'ENG',
        nationality: 'Belgie',
        urgency: 'T1',
        time: '10:30',
        date: '16-10',
        dateOfBirth: '15-05-1990',
        gender: 'Man',
        allergies: false,
    },
    {
        id: 2,
        name: 'Jane Smith',
        nationality: 'Belgie',
        language: 'FR',
        urgency: 'T2',
        time: '14:15',
        date: '17-10',
        dateOfBirth: '30-12-1985',
        gender: 'Vrouw',
        allergies: true,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        nationality: 'Belgie',
        language: 'DE',
        urgency: 'T3',
        time: '15:45',
        date: '18-10',
        dateOfBirth: '20-09-1978',
        gender: 'Vrouw',
        allergies: true,
    },
    {
        id: 4,
        name: 'Bob Wilson',
        nationality: 'Belgie',
        language: 'ENG',
        urgency: 'T1',
        time: '11:20',
        date: '19-10',
        dateOfBirth: '10-02-1995',
        gender: 'Man',
        allergies: true,
    },
    {
        id: 5,
        name: 'Sarah Brown',
        nationality: 'Belgie',
        language: 'FR',
        urgency: 'T2',
        time: '16:50',
        date: '20-10',
        dateOfBirth: '25-07-1987',
        gender: 'Vrouw',
        allergies: true,
    },
    {
        id: 6,
        name: 'Michael Lee',
        nationality: 'Belgie',
        language: 'DE',
        urgency: 'T3',
        time: '09:00',
        date: '21-10',
        dateOfBirth: '15-11-1992',
        gender: 'Man',
        allergies: false,
    },
    {
        id: 7,
        name: 'Linda Wilson',
        nationality: 'Belgie',
        language: 'ENG',
        urgency: 'T1',
        time: '13:30',
        date: '22-10',
        dateOfBirth: '05-04-1980',
        gender: 'Vrouw',
        allergies: true,
    },
    {
        id: 8,
        name: 'Chris Evans',
        nationality: 'Belgie',
        language: 'FR',
        urgency: 'T2',
        time: '15:00',
        date: '23-10',
        dateOfBirth: '03-09-1998',
        gender: 'Man',
        allergies: true,
    },
    {
        id: 9,
        name: 'Karen Johnson',
        nationality: 'Belgie',
        language: 'DE',
        urgency: 'T3',
        time: '14:45',
        date: '24-10',
        dateOfBirth: '20-06-1993',
        gender: 'Man',
        allergies: true,
    },
    {
        id: 10,
        name: 'David Clark',
        nationality: 'Belgie',
        language: 'ENG',
        urgency: 'T1',
        time: '10:15',
        date: '25-10',
        dateOfBirth: '10-12-1997',
        gender: 'Man',
        allergies: true,
    },
    {
        id: 11,
        name: 'Emily Turner',
        nationality: 'Belgie',
        language: 'ENG',
        urgency: 'T1',
        time: '14:45',
        date: '16-10',
        dateOfBirth: '25-03-1991',
        gender: 'Vrouw',
        allergies: true,
    },
    {
        id: 12,
        name: 'Thomas Miller',
        nationality: 'Belgie',
        language: 'DE',
        urgency: 'T2',
        time: '16:15',
        date: '17-10',
        dateOfBirth: '12-08-1996',
        gender: 'Man',
        allergies: true,
    },
];
/* eslint-disable */

//array van medicijnen

export const lozenges: { id: number; name: string; selected: boolean }[] = [
    { id: 1, name: 'Operatie', selected: false },
    { id: 2, name: 'Oogspoeling', selected: false },
    { id: 3, name: 'Consultaite', selected: false },
    { id: 4, name: 'Operatie', selected: false },
    { id: 5, name: 'Consultaite', selected: false },
    { id: 6, name: 'Oogspoeling', selected: false },
    { id: 7, name: 'Operatie', selected: false },
    { id: 8, name: 'Grote Wondzorg', selected: false },
    { id: 9, name: 'Kleine Brnadwonden', selected: false },
    { id: 10, name: 'Operatie', selected: false },
    { id: 11, name: 'Operatie', selected: false },
    { id: 12, name: 'Consultaite', selected: false },
    { id: 13, name: 'Oogspoeling', selected: false },
    { id: 14, name: 'YOGI', selected: false },
    { id: 15, name: 'Operatie', selected: false },
    { id: 16, name: 'Oogspoeling', selected: false },
    { id: 17, name: 'Operatie', selected: false },
    { id: 18, name: 'Consultaite', selected: false },
    { id: 19, name: 'Oogspoeling', selected: false },
    { id: 20, name: 'YOGI', selected: false },
    { id: 21, name: 'Oogspoeling', selected: false },
];

export const arrayOfParacetamol = [
    'Paracetamol 500mg',
    'Paracetamol 500mg',
    'Paracetamol 500mg',
    'Paracetamol 500mg',
    'Paracetamol 500mg',
    'Paracetamol 500mg',
];

//parameter arrays

export const OgenArray: { id: number; name: string; selected: boolean }[] = [
    { id: 1, name: 'Spontaan', selected: false },
    { id: 2, name: 'Op Afspraken', selected: false },
    { id: 3, name: 'Op Pijn', selected: false },
    { id: 4, name: 'Op Geen', selected: false },
];

export const verbalResponse: { id: number; name: string; selected: boolean }[] =
    [
        { id: 1, name: 'Gerichy', selected: false },
        { id: 2, name: 'Verwand', selected: false },
        { id: 3, name: 'Onaangepast', selected: false },
        { id: 4, name: 'Onverstaanbaar', selected: false },
        { id: 5, name: 'Geen', selected: false },
    ];
export const motoricResponse: {
    id: number;
    name: string;
    selected: boolean;
}[] = [
    { id: 1, name: 'Gehoorzamen', selected: false },
    { id: 2, name: 'Gericht', selected: false },
    { id: 3, name: 'Afwerend', selected: false },
    { id: 4, name: 'Flexie', selected: false },
    { id: 4, name: 'Extensie', selected: false },
    { id: 4, name: 'Geen', selected: false },
];

export const wapaArr: {
    id: number;
    name: string;
    selected: boolean;
}[] = [
    { id: 1, name: 'Wakker', selected: false },
    { id: 2, name: 'Aanspreekbaar', selected: false },
    { id: 3, name: 'PijnGevoelog', selected: false },
    { id: 4, name: 'A-Reactief', selected: false },
];

export const FAST: {
    id: number;
    name: string;
    selected: boolean;
}[] = [
    { id: 1, name: 'Positief', selected: false },
    { id: 2, name: 'Negetief', selected: false },
];

export const pupils: {
    id: number;
    name: string;
    selected: boolean;
}[] = [
    { id: 1, name: 'Normaal', selected: false },
    { id: 2, name: 'Verkleind (myose)', selected: false },
    { id: 3, name: 'Vergroot (mydriase)', selected: false },
    { id: 4, name: 'Ongelijk', selected: false },
];

export const crt: {
    id: number;
    name: string;
    selected: boolean;
}[] = [
    { id: 1, name: '< 2 sec', selected: false },
    { id: 2, name: '> 2 sec', selected: false },
];

export const proceedsArr = [
    'Perifeer infuus',
    'intro Osseus',
    'Hechting',
    'ETT',
    'Wiekzorg',
    'Perifeer infuus',
    'intro Osseus',
    'Hechting',
    'ETT',
    'Wiekzorg',
];
// Card Data
export const MedCards = [
    {
        date: '2023-11-21',
        time: '08:00 AM',
        dosage: '10mg',
        feeding: 'Before meal',
    },
    {
        date: '2023-11-21',
        time: '12:00 PM',
        dosage: '5mg',
        feeding: 'After meal',
    },
    {
        date: '2023-11-21',
        time: '06:00 PM',
        dosage: '15mg',
        feeding: 'With meal',
    },
    {
        date: '2023-11-21',
        time: '06:00 PM',
        dosage: '15mg',
        feeding: 'With meal',
    },
];

export const nationalities = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'French',
    'German',
    'Indian',
    'Italian',
    'Japanese',
    'Mexican',
    'Russian',
    'South African',
    'Spanish',
    'Swedish',
    'Swiss',
    'Brazilian',
    'Australian',
    'Argentinian',
    'Irish',
    'Dutch',
];

export const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Russian',
    'Arabic',
    'Portuguese',
    'Italian',
    'Dutch',
    'Korean',
    'Turkish',
    'Hindi',
    'Swedish',
    'Polish',
    'Indonesian',
    'Greek',
    'Thai',
    'Hebrew',
];
