// document.getElementById("submitbtn").addEventListener('click',function(){
//     const stdname=document.getElementById("stdname").value
//     const age=document.getElementById("age").value
//     const cousre=document.getElementById("cousre").Value
//     const email=document.getElementById("email").value
//     const marks1=document.getElementById("marks1").value
//     const marks2=document.getElementById("marks2").value
//     const marks3=document.getElementById("marks3").value
//     const marks4=document.getElementById("marks4").value
//     const marks5=document.getElementById("marks5").value

//     const outputdiv=document.getElementById("output")
//     outputdiv.innerHTML=
//     `
//     <h1>Submitted Data</h1>
//     <p><strong>Name:</strong>${stdname}</p>
//     <p><strong>Age:</strong>${age}</p>
//     <p><strong>Cousre:</strong>${cousre}</p>
//     <p><strong>Email:</strong>${email}</p>
//     <p><strong>Marks:</strong>
//     <ul>
//     <li>Subject 1:${marks1}</li>
//     <li>Subject 2:${marks2}</li>
//     <li>Subject 3:${marks3}</li>
//     <li>Subject 4:${marks4}</li>
//     <li>Subject 5:${marks5}</li>
//     </ul></p>
//     `;
//     document.getElementById("stdform").reset();

// })
document.getElementById("submitbtn").addEventListener('click',function(){
    const stdname=document.getElementById("stdname").value
    const age=document.getElementById("age").value
    const course=document.getElementById("course").value
    const email=document.getElementById("email").value
    const marks1=document.getElementById("marks1").value
    const marks2=document.getElementById("marks2").value
    const marks3=document.getElementById("marks3").value
    const marks4=document.getElementById("marks4").value
    const marks5=document.getElementById("marks5").value

    const outputdiv=document.getElementById("output");
    outputdiv.innerHTML=
    `
    <h1>Submitted Data</h1>
    <p><strong>Name:</strong>${stdname}</p>
     <p><strong>Age:</strong>${age}</p>
      <p><strong>Course:</strong>${course}</p>
       <p><strong>Email:</strong>${email}</p>
       <p><strong>Marks:</strong>
        <ul>
            <li>Subject 1:${marks1}</li>
             <li>Subject 2:${marks2}</li>
              <li>Subject 3:${marks3}</li>
               <li>Subject 4:${marks4}</li>
                <li>Subject 5:${marks5}</li></p>

    `;
    document.getElementById("stdform").reset();
    

})