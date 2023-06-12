export const getItems = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const products = [
        {
            id: 1,
            title: 'Item 1',
            description: 'Description 1',
            price: 10,
            stock: 10,
            category: 'Herramientas',
            pictureUrl: require("../../img/martillo.png").default, // Utiliza 'require' para importar la imagen
        },
        {
            id: 2,
            title: 'Item 2',
            description: 'Description 2',
            price: 10,
            stock: 10,
            category: 'Herramientas',
            pictureUrl: 'image2.jpg'
        },
        {
            id: 3,
            title: 'Item 3',
            description: 'Description 3',
            price: 10,
            stock: 10,
            category: 'Herramientas',
            pictureUrl: 'image3.jpg'
        },
        {
            id: 4,
            title: 'Item 4',
            description: 'Description 4',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: require("../../img/martillo.png").default, // Utiliza 'require' para importar la imagen
        },
        {
            id: 5,
            title: 'Item 5',
            description: 'Description 5',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: require("../../img/martillo.png").default, // Utiliza 'require' para importar la imagen
        },
        {
            id: 6,
            title: 'Item 6',
            description: 'Description 6',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: require("../../img/martillo.png").default, // Utiliza 'require' para importar la imagen
        },
    ];

    return products;
};

export const getItemById = async (id) => {
    const products = await getItems();
    const product = products.find((product) => product.id === parseInt(id));
    return product || null;
  };