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
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/2570386?fmt=jpg&fit=fit,1&wid=200&hei=200",
        },
        {
            id: 2,
            title: 'Item 2',
            description: 'Description 2',
            price: 10,
            stock: 10,
            category: 'Herramientas',
            pictureUrl: 'https://sodimac.scene7.com/is/image/SodimacUruguay/2570386?fmt=jpg&fit=fit,1&wid=200&hei=200'
        },
        {
            id: 3,
            title: 'Item 3',
            description: 'Description 3',
            price: 10,
            stock: 10,
            category: 'Herramientas',
            pictureUrl: 'https://sodimac.scene7.com/is/image/SodimacUruguay/2570386?fmt=jpg&fit=fit,1&wid=200&hei=200'
        },
        {
            id: 4,
            title: 'Item 4',
            description: 'Description 4',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/2679973?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
        {
            id: 5,
            title: 'Item 5',
            description: 'Description 5',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/2679973?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
        {
            id: 6,
            title: 'Item 6',
            description: 'Description 6',
            price: 10,
            stock: 10,
            category: 'Pinturas',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/2679973?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
        {
            id: 7,
            title: 'Item 7',
            description: 'Description 7',
            price: 10,
            stock: 10,
            category: 'Materiales',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/1939130?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
        {
            id: 8,
            title: 'Item 8',
            description: 'Description 8',
            price: 10,
            stock: 10,
            category: 'Materiales',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/1939130?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
        {
            id: 9,
            title: 'Item 9',
            description: 'Description 9',
            price: 10,
            stock: 10,
            category: 'Materiales',
            pictureUrl: "https://sodimac.scene7.com/is/image/SodimacUruguay/1939130?fmt=jpg&fit=fit,1&wid=200&hei=200"
        },
    ];

    return products;
};

export const getItemById = async (id) => {
    const products = await getItems();
    const product = products.find((product) => product.id === parseInt(id));
    return product || null;
  };