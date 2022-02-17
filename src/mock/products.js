export const products = [
    {
        id: 1,
        name: 'Pokemon Red',
        stock: 7,
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052541/pokemonred_vhxxlt.jpg',
        category: 'camisas',
    },
    {
        id: 2,
        name: 'Pokemon Blue',
        stock: 2,
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052608/PKMN_-_Blue_Sea_c3opim.png',
        category: 'gorras',
    },
    {
        id: 3,
        name: 'Sonic Advance',
        stock: 9,
        price: 1300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052668/sonic_q2hmlh.jpg',
        category: 'remeras',
    }
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});