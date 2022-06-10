import React, { useState, useContext } from 'react'
import Nav from './Nav'
import data from '../data'
import '../App.css'

const CreateContext = React.createContext();

const UseContext = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        <CreateContext.Provider value={{ removePerson, people }}>
            <Nav />
            <main>
                <List />
            </main>
        </CreateContext.Provider>
    )
}

const List = () => {
    const { people } = useContext(CreateContext);
    return (
        <>
            {people.map((person) => {
                return (
                    <SinglePerson
                        key={person.id}
                        {...person}
                    />
                );
            })}
        </>
    );
};

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(CreateContext)
    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default UseContext