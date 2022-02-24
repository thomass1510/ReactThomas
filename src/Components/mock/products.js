export const products = [
    {
        id: 1,
        name: 'Pokemon Red',
        category: 'videojuegos',
        stock: 7,
        description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy. ... The goal of the games is to become the champion of the Indigo League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four.',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052541/pokemonred_vhxxlt.jpg',
        
    },
    {
        id: 2,
        name: 'Pokemon Blue',
        category: 'videojuegos',
        stock: 2,
        description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy. ... The goal of the games is to become the champion of the Indigo League by defeating the eight Gym Leaders and then the top four Pokémon trainers in the land, the Elite Four.',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052608/PKMN_-_Blue_Sea_c3opim.png',
        
    },
    {
        id: 3,
        name: 'Sonic Advance',
        category: 'videojuegos',
        stock: 9,
        description: 'Sonic Advance is a side-scrolling platform game reminiscent of the original Sonic the Hedgehog games released for the Sega Genesis. Players journey through an island to defeat Doctor Eggman, who is attempting to capture its animal population to turn them into evil robots.',
        price: 1300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052668/sonic_q2hmlh.jpg',
        
    },
    {
        id: 4,
        name: 'GameCube',
        category: 'consola',
        stock: 4,
        description: 'The Nintendo GameCube is a home video game console developed and released by Nintendo in Japan on September 14, 2001, in North America on November 18, 2001, and in PAL territories in 2002. ... Unlike its competitors, the system is solely focused on gaming and does not support DVD, CDs, or other optical media.',
        price: 5300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645653155/4_ne4k21.jpg',
        
    },
    {
        id: 5,
        name: 'Gameboy',
        category: 'consola',
        stock: 9,
        description: 'The Game Boy is an 8-bit handheld game console developed and manufactured by Nintendo. The first handheld in the Game Boy family, it was first released in Japan on April 21, 1989. The console was released in North America later the same year, then in Europe in late 1990. It was designed by the same team that developed the Game & Watch series of handheld electronic games and several Nintendo Entertainment System games: Satoru Okada, Gunpei Yokoi, and Nintendo Research & Development 1',
        price: 4300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645653442/5_rrlkp7.jpg',
        
    }
];

export const GetProduct =(id)=> {
    return new Promise ((resolve, reject)=>{
    const prod = products.find(p => p.id === parseInt(id))
    setTimeout(()=>{
        resolve(prod);
    },500);
});
}

export const getProducts = (categoryId) => {
    return new Promise ((resolve) => {
        const productsToResolve = categoryId ? products.filter(item => item.category === categoryId) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },500);
    });
}



