export const products = [
    {
        id: 1,
        name: 'Pokemon Red',
        stock: 7,
        description: 'Pokemon Red',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052541/pokemonred_vhxxlt.jpg',
        category: 'gba',
    },
    {
        id: 2,
        name: 'Pokemon Blue',
        stock: 2,
        description: 'Pokemon Blue',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052608/PKMN_-_Blue_Sea_c3opim.png',
        category: 'gba advance',
    },
    {
        id: 3,
        name: 'Sonic Advance',
        stock: 9,
        description: 'Sonic Advance',
        price: 1300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052668/sonic_q2hmlh.jpg',
        category: 'gba advance',
    }
];

export const traerProductos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products);
    },2000);
});

export const GetProduct = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products[0]);
    },2000);
});



