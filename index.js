const wrapper = document.querySelector(".wrapper");

const savenote = ()=>{
    const notes = document.querySelectorAll("textarea");
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value);
    })


    localStorage.setItem('notes',JSON.stringify(data));

}







function createnote()
{
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
            <div class="tollbar">
                <i class="save fa-solid fa-floppy-disk"  ></i>
                <i class="tras fa-solid fa-trash" ></i>
            </div>

            <textarea name="" id="" cols="30" rows="10"></textarea>

    `;


    wrapper.appendChild(note);
    savenote();

    
    note.querySelector(".tras").addEventListener("click",()=>{
        note.remove();
        savenote();

    })
        
    note.querySelector(".save").addEventListener('click',()=>{
        savenote();
    })

   


}



function downloadNotes() {
    const notesData = localStorage.getItem('notes');

    JSON.parse(notesData);

    if (notesData) {
      const blob = new Blob([notesData], { type: 'text/plain' });
      const downloadLink = document.createElement('a');
      downloadLink.download = 'my_notes.txt';
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.click();
    } else {
      alert('No notes found to download!');
    }
  }