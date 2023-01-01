const AnimalDog = description => {
    const { name, breed, status } = description;
    return {
        printDetails: () => {
            document.querySelector('p').innerHTML = `The dog name is ${name}, breed is ${breed}, status is ${status}`
        },
    };
};

const dog1 = AnimalDog({
    name: 'Jeck',
    breed: 'Rabrador',
    status: 'Runs'
});

const dog2 = AnimalDog({
    name: 'Rex',
    breed: 'Pit bull',
    status: 'Standing'
});

const dog3 = AnimalDog({
    name: 'Cezar',
    breed: 'Bull Dog',
    status: 'Standing'
});


let getId = id => document.getElementById(id);

getId('dog1').onclick = () => {
    console.log(dog1.printDetails());
}

getId('dog2').onclick = () => {
    console.log(dog2.printDetails());
}

getId('dog3').onclick = () => {
    console.log(dog3.printDetails());
}

