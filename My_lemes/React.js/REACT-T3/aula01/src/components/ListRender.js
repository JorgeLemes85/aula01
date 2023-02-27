import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Jorge', 'Maria', 123])

    const [users] = useState([
        { id: 1, name: 'Maria', age: 23},
        { id: 45245, name: 'João', age: 53},
        { id: 5231, name: 'Elton', age: 13},
    ])

  return (
    <div>
        <ul>
            {list.map((item, i ) => (
                <li key={i} > {item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
            

        </ul>
    </div>
  )
}

export default ListRender