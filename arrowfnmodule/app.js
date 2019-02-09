const letSayHello = (name) => {
    return `hey there ${name} !`
}

console.log(letSayHello('Sammy'));


const todos =  [{
    title: 'Buy bread',
    status: true
},
{
    title: 'Go gym',
    status: true
},
{
    title: 'Check online registry',
    status: false
}]

const thingsDone = todos.filter((todo) => {
    return todo.status == true
})

console.log(thingsDone);