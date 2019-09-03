//Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(var i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
}

//Challenge 2
let users = {
    employees: [
        {'first_name' :  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

for (let people in users)
{
    console.log(people.toUpperCase());
    let counter = 1; 
    for(let person in people)
    {
        let firstName = people[person].first_name.toUpperCase();
        let lastName = people[person].last_name.toUpperCase();
        let nameCount = firstName.length + lastName.length;
        console.log(counter + " - " + firstName + ", " + lastName + " - " + nameCount);
        counter++;
    }
}

