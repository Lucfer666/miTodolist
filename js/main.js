document.addEventListener('DOMContentLoaded', function(){
  console.log('loaded')
  const btn=document.getElementById('add');
  const title=document.getElementById('title');
  const description=document.getElementById('description');
  const table = document.getElementById('table');
  const alerta = document.getElementById('alert');
  let id=1; 
  function removeTodo(id){
    document.getElementById(id).remove();
  }
   btn.addEventListener('click',function(e){
      e.preventDefault();
      if(title.value==='' || description.value===''){
	alerta.classList.remove('d-none');
	alerta.innerHTML='Title and description are required';
	return;
      }
      alerta.classList.add('d-none');
      const row = table.insertRow();
      row.setAttribute('id', id++)
      row.innerHTML=`
	<td>${title.value}</td> 
	<td>${description.value}</td>
	<td><input type='checkbox' id='check'/></td>
	<td></td>
    `;
     const removeBtn=document.createElement('button');
     removeBtn.classList.add('btn', 'btn-danger');
     removeBtn.textContent='Borrar';
     row.children[3].appendChild(removeBtn)
      
     removeBtn.addEventListener('click', function(e){
	e.preventDefault();
	removeTodo(row.getAttribute('id'))
     });
  });

})
