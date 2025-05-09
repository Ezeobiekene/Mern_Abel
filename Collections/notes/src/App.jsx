import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteServices from "./services/note.js";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState('')

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  useEffect(() => {
    noteServices.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const saveNote = (event) => {
    event.preventDefault();
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    noteServices.create(noteObj).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
      setMessage('New note added!')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);

    const changedNote = {
      ...note,
      important: !note.important,
    };

    noteServices.update(id, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  return (
    <>
      <h1>Notes</h1>
      <Notification message={message}/>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "Important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={saveNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">add</button>
      </form>
    </>
  );
};

const Notification = ({ message }) => {
  if (message === "") {
    return null;
  }
  return <div className="message">{message}</div>;
};

export default App;
