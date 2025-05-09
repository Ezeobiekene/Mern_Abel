import { useState, useEffect } from "react";
import personServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    personServices.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const savePerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: name,
      number: number,
      // id: persons.length + 1,
    };
    let exists = false;
    let isUnique = false;
    persons.forEach((person) => {
      if (
        person.name === newPerson.name &&
        parseInt(person.number) === parseInt(newPerson.number)
      ) {
        exists = true;
      }
      if (parseInt(person.number) === parseInt(newPerson.number)) {
        isUnique = true;
      }
    });

    if (isUnique) {
      alert("Number is already in phonebook");
    } else if (exists) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      personServices.create(newPerson).then(response => {
        setPersons(persons.concat(response.data))
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage('')
        }, 3000)
      })
    }

    setName("");
    setNumber("");
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow =
    filter.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const contactToDelete = (id) => {
    const person = persons.find(p => p.id === id)
    personServices.delContact(person.id).then(response =>{
      setPersons(persons.filter(person => person.id !== id))
      setMessage('Contact Deleted')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    })
  }

  return (
    <>
      <div>
        filter: <input value={filter} onChange={handleFilterChange} />
      </div>

      <h1>Phonebook</h1>
      <Notification message={message} />
      <form onSubmit={savePerson}>
        <div>
          name: <input value={name} onChange={handleNameChange} />{" "}
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />{" "}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h1>Numbers</h1>
      <div>
        {personsToShow.map((person) => (
          <Person name={person.name} number={person.number} key={person.id} deleteContact={() => contactToDelete(person.id)}/>
        ))}
      </div>
    </>
  );
};

const Person = ({name, number, deleteContact}) => {
  return (
    <p>
      {name} {number}
      <button onClick={deleteContact}>delete</button>
    </p>
  )
}

const Notification = ({message}) => {
  if(message === ''){
    return null
  }
  return (
    <div className="message">{message}</div>
  )
}

export default App;
