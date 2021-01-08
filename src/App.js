import React, { useState, useEffect } from 'react';
import './App.css';
import { Auth, Hub } from 'aws-amplify';
// import { API, Storage} from 'aws-amplify';
// import { listNotes } from './graphql/queries';
// import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

// const initialFormState = { name: '', description: '' }

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          console.log('Unknown event', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
      {user ? (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
      )}
    </div>
  );
//   const [notes, setNotes] = useState([]);
//   const [formData, setFormData] = useState(initialFormState);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   async function fetchNotes() {
//     const apiData = await API.graphql({ query: listNotes });
//     const notesFromAPI = apiData.data.listNotes.items;
//     await Promise.all(notesFromAPI.map(async note => {
//       if (note.image) {
//         const image = await Storage.get(note.image);
//         note.image = image;
//       }
//       return note;
//     }))
//     setNotes(apiData.data.listNotes.items);
// }

//   async function createNote() {
//     if (!formData.name || !formData.description) return;
//     await API.graphql({ query: createNoteMutation, variables: { input: formData } });
//     if (formData.image) {
//       const image = await Storage.get(formData.image);
//       formData.image = image;
//     }
//     setNotes([ ...notes, formData ]);
//     setFormData(initialFormState);
//   }

//   async function deleteNote({ id }) {
//     const newNotesArray = notes.filter(note => note.id !== id);
//     setNotes(newNotesArray);
//     await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
//   }

//   async function onChange(e) {
//     if (!e.target.files[0]) return
//     const file = e.target.files[0];
//     setFormData({ ...formData, image: file.name });
//     await Storage.put(file.name, file);
//     fetchNotes();
//   }

//   return (
//     <div className="App">
//       <h1>My Notes App</h1>
//       <AmplifySignIn />
//       <AmplifySignOut />
//       <input
//         onChange={e => setFormData({ ...formData, 'name': e.target.value})}
//         placeholder="Note name"
//         value={formData.name}
//       />
//       <input
//         onChange={e => setFormData({ ...formData, 'description': e.target.value})}
//         placeholder="Note description"
//         value={formData.description}
//       />
//       <input
//         type="file"
//         onChange={onChange}
//       />
//       <button onClick={createNote}>Create Note</button>
//       <div style={{marginBottom: 30}}>
//         {
//           notes.map(note => (
//             <div key={note.id || note.name}>
//               <h2>{note.name}</h2>
//               <p>{note.description}</p>
//               <button onClick={() => deleteNote(note)}>Delete note</button>
//               {
//                 note.image && <img src={note.image} style={{width: 400}} alt="not found" />
//               }
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
}

export default App;