window.addEventListener('load',()=>{
    
    
 
const addBookButton=document.querySelector('.addButton');
const addFormdiv=document.querySelector('.addingBook div');
const submitFormButton=document.querySelector('.submitButton'); 
const form=document.querySelector('form');
const form_book_title=document.querySelector('#book_title');
const form_author=document.querySelector('#book_author');
const form_pages=document.querySelector('#book_pages') 
const form_error=document.querySelector('form p');
const form_inputs=document.querySelectorAll('form input');

//class toggler for adding book
addBookButton.addEventListener('click',()=>{
    if (addFormdiv.classList.contains('hidebook')) {
  addFormdiv.classList.remove('hidebook');
  addFormdiv.classList.add('addBook','formbackground');
} else {
  addFormdiv.classList.remove('addBook','formbackground');
  addFormdiv.classList.add('hidebook');
}
    
});


//adding custom validation
//for all inputs if input is not valid call showerror
form_inputs.forEach((item)=>{
    item.addEventListener('input',function(event){
        if(item.validity.valid){
            form_error.textContent='';
        }
        else{
            showError(item);
        }
    })
});
//on submit too call showerror
submitFormButton.addEventListener('click',function(event){
    form_inputs.forEach((item)=>{
        if(!item.validity.valid)
            {
                showError(item);
                event.preventDefault();
            }
    });
    displayBook();
});
//showerror function
function showError(item){
    switch(item.id)
        {
            case 'book_title':
                form_error.textContent='Enter words between the length of 1 and 50'
                break;
            case 'book_author':
                form_error.textContent='Enter letters between the length of 1 and 50'
                break;
            case 'book_pages':
                form_error.textContent='Book must have a min of 5 and max 300 pages'
                break;
                form_error.textContent='did you read the book?'
                break;
        }
}


    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});