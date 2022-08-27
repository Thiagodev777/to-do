const botao = document.querySelector('#add');
const input = document.getElementById('input');
const resultado = document.querySelector('.resultado')
const ul = document.querySelector('ul');

botao.addEventListener('click', ()=>{

  if(input.value === '') {
    input.style.borderColor = 'red'
    input.classList.add('error');
  } else {
    input.style.borderColor = 'black'
    input.classList.remove('error');

    let tarefa = input.value
    const li = document.createElement('li')
    li.innerText = tarefa
    ul.appendChild(li)

    input.value = ''
  
    li.addEventListener('click', ()=> {
      li.classList.toggle('completed')
    })

    li.addEventListener('dblclick', ()=> {
      ul.removeChild(li)
    })
  }
})

const fechar = document.querySelector('.fechar');
fechar.addEventListener('click', ()=> {
  document.querySelector('.modousar').style.display = 'none'
})
