const shadow_btns =  document.querySelectorAll(".nav-part2 button");
            
function remove_shadow(){
    shadow_btns.forEach(btn=>btn.classList.remove("shadow"));
    shadow_btns_in_notes.forEach(x => {
        x.classList.remove("shadow-on-notes");
        x.style.border = "1px solid #ced4da";
    })
}

shadow_btns.forEach(btn => {
    btn.addEventListener('click',(event) => {
        event.stopPropagation();
        remove_shadow();
       btn.classList.add("shadow");
    });
});


document.getElementsByTagName("body")[0].addEventListener('click', () => {
    remove_shadow();
});


const shadow_btns_in_notes = document.querySelectorAll(".note-taking-box input, .note-taking-box textarea, .note-taking-box button");

shadow_btns_in_notes.forEach(x =>{
    x.addEventListener('click',(event) => {
        event.stopPropagation();
        remove_shadow();
        x.classList.add("shadow-on-notes");
        x.style.border = "1px solid #5d9bf8";
    })
});



document.getElementById("add-note-btn").addEventListener('click', () =>{
    var container = document.createElement("div");

    var title = document.getElementById("input1").value; //getting value from input of title 
    document.getElementById("input1").value = "";
    var tag_for_title = document.createElement("h2");   // creating h1 for value that store in var title
    var tag_text = document.createTextNode(title);
    tag_for_title.appendChild(tag_text);
    tag_for_title.classList.add("saved-notes-title");

    var describe = document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    var describe_tag = document.createElement("p");
    var p_text = document.createTextNode(describe);
    describe_tag.appendChild(p_text);
   describe_tag.classList.add("myp");
   

    var del_btn = document.createElement("button");
    var mark_btn = document.createElement("button");
     del_btn.textContent = "Delete";
     mark_btn.textContent = "Mark Important";
     del_btn.classList.add("del-btn");
     mark_btn.classList.add("mark-btn");
    

    container.appendChild(del_btn);
    container.appendChild(mark_btn);
    container.classList.add("style");
    container.appendChild(tag_for_title);
    container.appendChild(describe_tag);

    container.appendChild(del_btn);
    container.appendChild(mark_btn);
    document.getElementById("notes-site").appendChild(container);



   mark_btn.addEventListener('click', ()=>{

    container.classList.toggle("marked-green");
   });

   del_btn.addEventListener('click', ()=>{
    container.remove();
   })
})


//////////////
var nav_mark_btn = document.querySelectorAll(".nav-part2 button")[1];
var bool = false;

nav_mark_btn.addEventListener('click', ()=>{
    var all_notes = document.querySelectorAll("#notes-site div");

    if (bool) {
        all_notes.forEach(note => {
            note.classList.remove('hidden');
        });
    }
    else{
        all_notes.forEach(note => {
            var backgroundColor = window.getComputedStyle(note).backgroundColor;
        
                if (backgroundColor === "rgb(250, 238, 215)") { 
                    note.classList.add('hidden');
                }else{
                    note.classList.remove('hidden');
                }
           });
    }
    bool = !bool;
  

})
//////////////////////////
var reset = document.querySelectorAll(".nav-part2 button")[0];
reset.addEventListener('click',()=>{
  document.querySelectorAll("#notes-site div").forEach(n =>n.style.backgroundColor="rgb(250, 238, 215)");
    
})


////////////////////////////////
var clear = document.querySelectorAll(".note-taking-box button")[1];
clear.addEventListener('click',()=>{
    alert("Do you really want to clear ?");
    document.querySelectorAll("#notes-site div").forEach(n => n.remove());
});


//////////////////////////////////////////////////////

var search = document.querySelector(".nav-part2 input");



search.addEventListener('input',()=>{
    var all_notes_boxes = document.querySelectorAll("#notes-site div");
    console.log(all_notes_boxes);
    var in_value = search.value.toLowerCase();
    
    all_notes_boxes.forEach(box =>{
        var note = box.querySelector("p");
        var text = note.textContent.toLowerCase();
        if (text.includes(in_value)) {
            box.classList.remove("hidden"); // Show the box if it matches the search
        } else {
            box.classList.add("hidden"); // Hide the box if it doesn't match
        }
    })
     
})





