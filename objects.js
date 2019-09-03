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

let num = 1
for (let people in users)
{
    console.log(people.toUpperCase()); 
    let counter = 1;
    if(num === 1) {
        for(var i = 0; i < users.employees.length; i++) {
            let firstName = users.employees[i].first_name;
            let lastName = users.employees[i].last_name;
            let nameCount = firstName.length + lastName.length;
            console.log(counter + " - " + lastName + ", " + firstName + " - " + nameCount);
            counter++;
            num++;
        }
    }
    else {
        for(var i = 0; i < users.managers.length; i++) {
            let firstName = users.managers[i].first_name;
            let lastName = users.managers[i].last_name;
            let nameCount = firstName.length + lastName.length;
            console.log(counter + " - " + lastName + ", " + firstName + " - " + nameCount);
            counter++;
        }
    }
}
