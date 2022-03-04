let createNotesInHTML = () => {
    let localNotes = localStorage.getItem('notes');
    if (localNotes == null);
    else {
        localNotes = JSON.parse(localNotes);
        let appendingDiv = document.getElementById('append_in_this_div');
        let notes = "";
        localNotes.forEach((element, index) => {
            notes += `<div class="col">
        <div class="card shadow-sm">
            <div class="card-body">
                <h6 id="note_title">Note ${index+1}</h6>
                <p class="card-text note_description">${element}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" id="${index}">
                        <button type="button" class="btn btn-sm btn-outline-secondary delete"
                            >Delete</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary edit"">Edit</button>
                    </div>
                    <!-- <small class="text-muted">9 mins</small> -->
                </div>
            </div>
        </div>
    </div>`;
        });
        appendingDiv.innerHTML = notes;

        /*Call Delete Event Listener*/
    }
};

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
