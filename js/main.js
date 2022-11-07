document.addEventListener('DOMContentLoaded', function(){
  console.log('loaded')
  const btn=document.getElementById('add');
  const title=document.getElementById('title');
  const description=document.getElementById('description');
  const table = document.getElementById('table');
  const alert = document.getElementById('alert');
   
  function addTodo(){
    if(title.value==='' || description.value===''){
      alert.classList.remove('d-none')
    }else{
      const tr=document.createElement('tr')
      const td_title=document.createElement('td')
      const td_description=document.createElement('td')
      
      td_title.textContent=title.value
      td_description.textContent=description.value

      tr.appendChild(td_title)
      tr.appendChild(td_description)
      table.appendChild(tr)
    }
  }

  btn.onclick=addTodo()
})
