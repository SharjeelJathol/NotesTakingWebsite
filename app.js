/*Event Listener for Adding a new Note */
document.getElementById('addBtn').addEventListener('click', () => {
    let newNote = document.getElementById('description');
    if (newNote.value == "")
        return;
    let localNotes = localStorage.getItem('notes');
    if (localNotes == null) {
        localNotes = [];
    } else {
        localNotes = JSON.parse(localNotes);
    }
    localNotes.push(newNote.value);
    localStorage.setItem('notes', JSON.stringify(localNotes));
    newNote.value = "";
    createNotesInHTML();
});
