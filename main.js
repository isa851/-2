let btn = document.getElementById('btn');
let inp = document.getElementById('inp');

btn.onclick = ()=>{
    let val = inp.value

if (inp.value > 0 && inp.value <= 10) {
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.forEach((item)=>{
        let e = document.createElement('h1');
        e.textContent = item.name
        document.getElementById('root').append(e);
        let e1 = document.createElement('h1');
        e1.textContent = item.username
        document.getElementById('root').append(e1);
        let e3 = document.createElement('h1');
        e3.textContent = item.phone
        document.getElementById('root').append(e3);
    });
}) 
}else if(inp.value < 1 || inp.value > 10 || isNaN(inp.value)){
    alert('введите цифру от 1 до 10!')
}else{
    alert('введите цифру от 1 до 10!')
}
}