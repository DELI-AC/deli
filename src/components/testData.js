import React from "react";

export const dummyData = [
    {
      unitName: "Str8Up Bistro",
      unitID: 25001,
      unitImage: "https://media.istockphoto.com/id/1295387240/photo/delicious-meal.jpg?s=612x612&w=0&k=20&c=isW6dsxtdADt3pOlxGjmKjFyEY-E76Q3TXMmzN9-wuM=",
      unitMenu: [
        { itemName: "French Fries", itemPhoto: "https://images.unsplash.com/photo-1609530127564-bee93ebe1c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZyZW5jaCUyMGZyaWVzfGVufDB8fDB8fHww", itemCost: 250, itemId: 1 },
        { itemName: "Rice", itemPhoto: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJJQ0V8ZW58MHx8MHx8fDA%3D", itemCost: 200, itemId: 2 },
        { itemName: "Burger", itemPhoto: "https://images.unsplash.com/photo-1556741533-25b6e76b2025?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww", itemCost: 300, itemId: 3 },
        { itemName: "Pizza", itemPhoto: "https://images.unsplash.com/photo-1561948954-e64a0791f823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D", itemCost: 450, itemId: 4 },
        { itemName: "Pasta", itemPhoto: "https://images.unsplash.com/photo-1504674900247-017c2d1e5b47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D", itemCost: 350, itemId: 5 },
        { itemName: "Tacos", itemPhoto: "https://images.unsplash.com/photo-1600836898362-25868f7e9399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhY29zfGVufDB8fDB8fHww", itemCost: 150, itemId: 6 },
        { itemName: "Hot Dog", itemPhoto: "https://images.unsplash.com/photo-1623243449420-3cc60b2b0545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdCBkb2d8ZW58MHx8MHx8fDA%3D", itemCost: 120, itemId: 7 },
        { itemName: "Caesar Salad", itemPhoto: "https://images.unsplash.com/photo-1601391094309-bad679f383e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyIHNhbGFkfGVufDB8fDB8fHww", itemCost: 200, itemId: 8 },
        { itemName: "Chicken Wings", itemPhoto: "https://images.unsplash.com/photo-1596518486657-bbdf21e5a410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaWNrZW4gd2luZ3N8ZW58MHx8MHx8fDA%3D", itemCost: 400, itemId: 9 },
        { itemName: "Ice Cream", itemPhoto: "https://images.unsplash.com/photo-1563075244-b9c9ed83e6ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D", itemCost: 180, itemId: 10 }
      ]
    },
    {
      unitName: "Sizzle Steakhouse",
      unitID: 25002,
      unitImage: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?ga=GA1.1.1490884652.1734967617&semt=ais_hybrid",
      unitMenu: [
        { itemName: "Steak", itemPhoto: "https://images.unsplash.com/photo-1585744060935-38c2db91a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8fDA%3D", itemCost: 700, itemId: 1 },
        { itemName: "Grilled Fish", itemPhoto: "https://images.unsplash.com/photo-1605735630902-7d1b9207a04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZpc2h8ZW58MHx8MHx8fDA%3D", itemCost: 500, itemId: 2 },
        { itemName: "Cheese Fries", itemPhoto: "https://images.unsplash.com/photo-1568632685-78f94c6bb570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGZpc2h8ZW58MHx8MHx8fDA%3D", itemCost: 250, itemId: 3 },
        { itemName: "Salmon", itemPhoto: "https://images.unsplash.com/photo-1555934522-325ab7065ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZpc2h8ZW58MHx8MHx8fDA%3D", itemCost: 650, itemId: 4 },
        { itemName: "BBQ Ribs", itemPhoto: "https://images.unsplash.com/photo-1621036975924-08156798d0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJicXxlbnwwfHx8fDB8fHww", itemCost: 550, itemId: 5 },
        { itemName: "Caesar Salad", itemPhoto: "https://images.unsplash.com/photo-1587587805979-1d636c9fdc0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Vhc2FyIHNhbGFkfGVufDB8fDB8fHww", itemCost: 200, itemId: 6 },
        { itemName: "Spaghetti", itemPhoto: "https://images.unsplash.com/photo-1570154937643-72a76f1d418f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpfGVufDB8fDB8fHww", itemCost: 300, itemId: 7 },
        { itemName: "Fried Chicken", itemPhoto: "https://images.unsplash.com/photo-1595222187651-3d34542d34c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyaWVkIGNoaWNrZW58ZW58MHx8MHx8fDA%3D", itemCost: 400, itemId: 8 },
        { itemName: "Burger", itemPhoto: "https://images.unsplash.com/photo-1561948954-e64a0791f823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VydHxlbnwwfHx8fDB8fHww", itemCost: 300, itemId: 9 },
        { itemName: "Garlic Bread", itemPhoto: "https://images.unsplash.com/photo-1561046403-33e3138254fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FsaWN8ZW58MHx8MHx8fDA%3D", itemCost: 150, itemId: 10 }
      ]
    },
    {
      unitName: "Ocean Breeze Cafe",
      unitID: 25003,
      unitImage: "https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-3343.jpg?ga=GA1.1.1490884652.1734967617&semt=ais_hybrid",
      unitMenu: [
        { itemName: "Grilled Shrimp", itemPhoto: "https://images.unsplash.com/photo-1592673326510-8e75cc73e97a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wfGVufDB8fDB8fHww", itemCost: 600, itemId: 1 },
        { itemName: "Fish Tacos", itemPhoto: "https://images.unsplash.com/photo-1600836898362-25868f7e9399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhY29zfGVufDB8fDB8fHww", itemCost: 250, itemId: 2 },
        { itemName: "Sushi Rolls", itemPhoto: "https://images.unsplash.com/photo-1562958234-e4c3658ec2f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8fDA%3D", itemCost: 350, itemId: 3 },
        { itemName: "Lobster Bisque", itemPhoto: "https://images.unsplash.com/photo-1620036191161-13916d54c321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9zdGVyIGJpc3F1ZXxlbnwwfHx8fDB8fHww", itemCost: 450, itemId: 4 },
        { itemName: "Seafood Paella", itemPhoto: "https://images.unsplash.com/photo-1581077554167-67e68a29cfab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhZm9vZCBwYWVsbGF8ZW58MHx8MHx8fDA%3D", itemCost: 600, itemId: 5 },
        { itemName: "Clam Chowder", itemPhoto: "https://images.unsplash.com/photo-1594672455963-c340f50d70a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhbSBjaG93ZGVyfGVufDB8fDB8fHww", itemCost: 200, itemId: 6 },
        { itemName: "Fried Calamari", itemPhoto: "https://images.unsplash.com/photo-1561981685-b62387e1a732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZWQgY2FsYW1hcml8ZW58MHx8MHx8fDA%3D", itemCost: 350, itemId: 7 },
        { itemName: "Fish and Chips", itemPhoto: "https://images.unsplash.com/photo-1576251745158-28f5eac9464b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaCBhbmQgY2hpcHN8ZW58MHx8MHx8fDA%3D", itemCost: 300, itemId: 8 },
        { itemName: "Seafood Salad", itemPhoto: "https://images.unsplash.com/photo-1614897040194-51e85ea774f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlYWZvb2Qgc2FsYWR8ZW58MHx8MHx8fDA%3D", itemCost: 250, itemId: 9 },
        { itemName: "Shrimp Scampi", itemPhoto: "https://images.unsplash.com/photo-1591586689969-e853c7d45f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wIHNjYW1waXxlbnwwfHx8fDB8fHww", itemCost: 400, itemId: 10 }
      ]
    },
    {
      unitName: "Trendy Taco Joint",
      unitID: 25004,
      unitImage: "https://img.freepik.com/free-psd/food-menu-restaurant-web-banner-template_120329-1766.jpg?ga=GA1.1.1490884652.1734967617&semt=ais_hybrid",
      unitMenu: [
        { itemName: "Beef Tacos", itemPhoto: "https://images.unsplash.com/photo-1590924189759-e835116a6d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZWYgdGFjb3N8ZW58MHx8MHx8fDA%3D", itemCost: 200, itemId: 1 },
        { itemName: "Chicken Tacos", itemPhoto: "https://images.unsplash.com/photo-1590984292987-1e2320072b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW4gdGFjb3N8ZW58MHx8MHx8fDA%3D", itemCost: 250, itemId: 2 },
        { itemName: "Fish Tacos", itemPhoto: "https://images.unsplash.com/photo-1600836898362-25868f7e9399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhY29zfGVufDB8fDB8fHww", itemCost: 280, itemId: 3 },
        { itemName: "Pork Tacos", itemPhoto: "https://images.unsplash.com/photo-1592283155861-eaef7fcf7e2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ya3RlY2FvfGVufDB8fDB8fHww", itemCost: 260, itemId: 4 },
        { itemName: "Veggie Tacos", itemPhoto: "https://images.unsplash.com/photo-1586776904143-6fdad64a0c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZlZ2dpZSB0YWNvcyxlbnwwfHx8fDB8fHww", itemCost: 180, itemId: 5 },
        { itemName: "Beef Burritos", itemPhoto: "https://images.unsplash.com/photo-1626086991832-5397793494f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVycnJpdG98ZW58MHx8MHx8fDA%3D", itemCost: 350, itemId: 6 },
        { itemName: "Chicken Burritos", itemPhoto: "https://images.unsplash.com/photo-1582891517195-ff4e1c6150c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNoaWNrZW4gYnVycm9pZHx8ZW58MHx8MHx8fDA%3D", itemCost: 300, itemId: 7 },
        { itemName: "Churros", itemPhoto: "https://images.unsplash.com/photo-1595271340434-4ff35b86a940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYXJzfGVufDB8fDB8fHww", itemCost: 150, itemId: 8 },
        { itemName: "Nachos", itemPhoto: "https://images.unsplash.com/photo-1590741144993-1f788a3d6bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hY2hvZXN8ZW58MHx8MHx8fDA%3D", itemCost: 200, itemId: 9 },
        { itemName: "Mexican Rice", itemPhoto: "https://images.unsplash.com/photo-1581432461297-dbf30763e2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWV4aWNhbnJpY2F8ZW58MHx8MHx8fDA%3D", itemCost: 120, itemId: 10 }
      ]
    },
  ];
  