//kick off both things one after the other
const coffeePromise = makeCoffee();
const breakfastPromise = makeBreakfast();


//then once each are done, deal with them
coffeePromise.then(coffee => {
    drinkCoffee();
});

breakfastPromise.then(breakfast => {
    eatBreakfast();
});

//You can also wait until all are done
Promise
    .all([coffeePromise,breakfastPromise])
    .then(([coffee,breakfast]) => {
        sitDownWith(coffee,breakfast);
    });










//Calback to promise
moveTo(50,50, function(){
    moveTo(40,40,function(){
        moveTo(30,30,function(){
            moveTo(20,20,function(){
                //done
            });
        });
    });
});


//changes to 
moveTo(50,50)
        .then(() => moveTo(40,40))
        .then(() => moveTo(30,30))
        .then(() => moveTo(20,20))



//changes to 
async function animate(){
    await moveTo(40,40);
    await moveTo(30,30);
    await moveTo(20,20);
}





//await + promise.all()
const getDetails = await function (){
    const coffeePromise = makeCoffee();
    const breakfastPromise = makeBreakfast();

    //wait for both to come back
    const [coffee,breakfast] = await Promise.all([coffeePromise,breakfastPromise]);
    const html = `
        <h1>${coffee.name}</h1>
        <h1>${breakfast.name}</h1>
    `
}



