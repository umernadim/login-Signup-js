
let usrEmail = prompt('Enter your email');
let usrPassword = prompt('Enter your password');

const usrArray = [
    {
        Name: 'Umer',
        Email: 'umer@gmail.com',
        Password: 'umer123'
    },
    {
        Name: 'Ali',
        Email: 'ali@gmail.com',
        Password: 'ali123'
    },
    {
        Name: 'Waqas',
        Email: 'waqas@gmail.com',
        Password: 'waqas123'
    },
    {
        Name: 'Usman',
        Email: 'usman@gmail.com',
        Password: 'usman123'
    }
];

let isUserFound = true ;

for (let i = 0; i < usrArray.length; i++) 
    {  
    if(usrEmail == usrArray[i].Email && usrPassword == usrArray[i].Password)
    {
        console.log(`Welcome! ${usrArray[i].Name}`)
        console.log('Email and password is found')
        isUserFound = true;
        break ;
    }
    else{
        isUserFound = false;
    }
}

if (!isUserFound) {
    console.log('Email and Password is not found')
}
