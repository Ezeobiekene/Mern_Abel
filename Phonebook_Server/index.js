import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let persons = [
    {
        "id": 1,
        "name": 'Arto Hellas',
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": 'Dan Abramov',
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": 'Mary Poppendieck',
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    }else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    response.send(`Phonebook contains ${persons.length} persons`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number){
        response.status(400).end()
    }

    persons.forEach(person => {
        if( person.name === body.name) {
            response.status(400).json({error: "name already exist"})
        }
    })

    const person = {
        name: body.name,
        number: body.number,
        id: persons.length + 1
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Backend is active");
    });