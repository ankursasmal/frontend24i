let button=document.querySelectorAll('.butn');
button.addEventListener('mouseover',()=>{
    button.style.backgroundColor=" rgb(254, 0, 0) ";
    
});

let sign =document.getElementById("sign");
sign.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email=document.getElementById('email').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: email,
     
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})     
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data.title);
    let d=document.getElementById('doc');
    d.innerText=" Thank you for signing up! Stay tuned for more 24 Carrots magic";

 
    
})
.catch(error => {
    console.error('Error:', error.message);
    // Handle the error and provide feedback to the user
    alert('An error occurred while submitting the form. Please try again later.');
});
});

 