

let contacts = [
    { name: 'Peter', phone: '111-111-1111'}
    ,{ name: 'Dom', phone: '222-222-2222'}
    ,{ name: 'Mugyu', phone: '333-333-3333'}
]

contacts.forEach((contact) => {
    console.log('Call', contact.name, 'at', contact.phone);
})