/*
cell
: 
"(608) 426 2754"
dob
: 
{date: '1975-01-20T22:10:14.239Z', age: 47}
email
: 
"carolina.tafoya@example.com"
gender
: 
"female"
id
: 
{name: 'NSS', value: '50 00 39 8119 3'}
location
: 
{street: {…}, city: 'Xalisco', state: 'Tamaulipas', country: 'Mexico', postcode: 98463, …}
login
: 
{uuid: '3de140fd-f97c-4d37-9bd3-4e874db25708', username: 'brownelephant898', password: 'smiley', salt: 'KEXYnDZU', md5: '43c90998bf09b58e73f5910714327e22', …}
name
: 
{title: 'Ms', first: 'Carolina', last: 'Tafoya'}
nat
: 
"MX"
phone
: 
"(687) 134 0589"
picture
: 
{large: 'https://randomuser.me/api/portraits/women/24.jpg', medium: 'https://randomuser.me/api/portraits/med/women/24.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg'}
registered
: 
{date: '2011-07-31T03:26:27.511Z', age: 11}
* */

const User = ({cell,dob,email,name}) =>
{
    return(
        <>
        <p>{cell}</p> 
        <p>{dob}</p>
        <p>{email}</p>
        <p>{name.first} {name.last}</p>
        
        </>
    )
}
export default User