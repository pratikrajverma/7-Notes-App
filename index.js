const wrapper = document.querySelector(".wrapper");

const savenote = ()=>{
    const notes = document.querySelectorAll("textarea");
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value);
    })

    console.log(data);
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


