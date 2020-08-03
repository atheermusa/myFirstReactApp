import React from 'react'

class App extends React.Component {
    render() {
        const helloWorld = 'Welcome to React'
        const yummyFoods = ['Cookies', 'Candy', 'Chocolate', 'Cake']

        const yummyFoods2 = [
            {
                id: 0,
                name: 'cookies',
                reccomendedDrink: 'Milk'
            },
            {
                id: 1,
                name: 'candy',
                reccomendedDrink: 'None'
            },
            {
                id: 2,
                name: 'chocolate',
                reccomendedDrink: 'Coffee'
            },
            {
                id: 3,
                name: 'cake',
                reccomendedDrink: 'Soda'
            }
        ]
        return (
            <div>
            <h1>{helloWorld}</h1>

            <h2>Standard List</h2>
            <ul>
                <li>Cookies</li>
                <li>Candy</li>
                <li>Sweets</li>
                <li>Treats</li>
            </ul>

            <h2>Array</h2>
            <ul>
                <li>{yummyFoods[0]}</li>
                <li>{yummyFoods[1]}</li>
                <li>{yummyFoods[2]}</li>
                <li>{yummyFoods[3]}</li>
            </ul>

            <h2>Objects</h2>
            <ul>
                {yummyFoods2.map(function(item) {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
            </div>
        )
    }
    
}

export default App