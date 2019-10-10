//alert("hola");

let mainDiv = document.getElementById('main')

fetch("https://api.trello.com/1/members/me/boards?key=6694978587db7e5eb15700368eca9026&token=f10d745179cb0e390028b031c0658ff27a8745010a92cb58d17ed71fb6ea2cbf")
.then(response => response.json())
.then(response => {
  
  response.forEach( board =>  {
  
  let div = document.createElement("div")

  div.innerHTML =`<td>
  					<tr>
  					<ul>
  					<li>
  					<p class="btn btn-outline-success" > Board -  <strong>${board.name}</strong> </p> 
  					</li>
  					</ul>
  					</tr>
  					</td>
  					`
  
 
    
    fetch("https://api.trello.com/1/boards/"+ board.id +"/cards/?limit=2&fields=name&members=true&member_fields=fullName&key=6694978587db7e5eb15700368eca9026&token=f10d745179cb0e390028b031c0658ff27a8745010a92cb58d17ed71fb6ea2cbf")
    .then(response => response.json())
    .then(response => {
      
       response.forEach(card => {
         
         let p = document.createElement("p")

         p.innerHTML=`
         <p class="btn btn-outline-warning" > Card -  <strong>${card.name}</strong> </p>`
          //p.textContent = card.name
        
         
         div.appendChild(p)
         
       }) 
  
     
   })
    
     main.appendChild(div)
  
})

  
} )

