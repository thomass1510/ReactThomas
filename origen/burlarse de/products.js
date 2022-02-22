export const products = [
    {
        id: 1,
        name: 'Pokemon Red',
        stock: 7,
        description: 'Pokemon Red',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052541/pokemonred_vhxxlt.jpg',
<<<<<<< HEAD:src/Components/mock/products.js
        category: 'gba',
=======
        category: 'gameboy',
>>>>>>> 39077bed7be51b75d01c36bb4d01d9b9fda4e7ef:origen/burlarse de/products.js
    },
    {
        id: 2,
        name: 'Pokemon Blue',
        stock: 2,
        description: 'Pokemon Blue',
        price: 1450,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052608/PKMN_-_Blue_Sea_c3opim.png',
<<<<<<< HEAD:src/Components/mock/products.js
        category: 'gba advance',
=======
        category: 'gameboy advance',
>>>>>>> 39077bed7be51b75d01c36bb4d01d9b9fda4e7ef:origen/burlarse de/products.js
    },
    {
        id: 3,
        name: 'Sonic Advance',
        stock: 9,
        description: 'Sonic Advance',
        price: 1300,
        img: 'https://res.cloudinary.com/dwgee40td/image/upload/v1645052668/sonic_q2hmlh.jpg',
<<<<<<< HEAD:src/Components/mock/products.js
        category: 'gba advance',
=======
        category: 'gameboy advance',
>>>>>>> 39077bed7be51b75d01c36bb4d01d9b9fda4e7ef:origen/burlarse de/products.js
    }
];

export const traerProductos = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products);
<<<<<<< HEAD:src/Components/mock/products.js
    },2000);
});

export const GetProduct = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(products[0]);
    },2000);
});



=======
    }, 2000);
});
>>>>>>> 39077bed7be51b75d01c36bb4d01d9b9fda4e7ef:origen/burlarse de/products.js
