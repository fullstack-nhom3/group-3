const create = document.getElementById('btn_create')    // nút tạo
const show =  document.getElementById('btn_show')       // nút GET ALL
const list_data = document.getElementById('list-data')  // div chứa data
const tbody_list = document.getElementById('ok')        // tbody chứa các bản ghi data
const get_one = document.getElementById('btn_get')      // NÚT get one
const text = document.getElementById('text')            // Ô input

// create 
function f_post(){
    let name = prompt('Nhập Name cần tạo: ')
    fetch('https://todonew412.herokuapp.com/api/create',{
        method: 'POST',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

  .then((response) => response.json())
  .then((json) => show_one(json));

}

create.addEventListener('click', f_post);


// get one

function f_getOne(){
    if(text.value.trim() == ''){
        text.value = ''
        alert('vui lòng nhập ID hợp lệ')
    }else{
        fetch(`https://todonew412.herokuapp.com/api/get/${text.value}`)
            .then((response) => response.json())
            .then((json) => show_one(json))
    }
}

function show_one(json){
    if(typeof json == 'object'){
        console.log(json)
        console.log(typeof json)

        tbody_list.innerHTML = ''
        list_data.style.display = 'block'
        let tr = document.createElement('tr');
        let th_id = document.createElement('th');
        let th_name = document.createElement('th');
        let th_handle = document.createElement('th')
        th_id.innerHTML = json._id
        th_name.innerHTML = json.name
        th_handle.innerHTML = `<button onclick='f_delete(${json._id})' class='btn btn-danger'>Delete</button> <button onclick='f_edit(${json._id})' class='btn btn-success'>Edit</button>`
        tr.append(th_id, th_name, th_handle)
        tbody_list.append(tr)
    }else{
        tbody_list.innerHTML = ''
        alert(json)
        console.log(json)
        console.log(typeof json)
    }
}

get_one.addEventListener('click', f_getOne);



// GET ALL
function f_show(){
    fetch('https://todonew412.herokuapp.com/api/list')
  .then((response) => response.json())
  .then((json) => show_list(json));
}
function show_list(json){
    let stringified = JSON.stringify(json)
    let parsedObj = JSON.parse(stringified)
    list_data.style.display = 'block'
    tbody_list.innerHTML = ''

    for(let i=0;i<parsedObj.length;i++){
        let tr = document.createElement('tr');
        let th_stt = document.createElement('th');
        let th_id = document.createElement('th');
        let th_name = document.createElement('th');
        let th_handle = document.createElement('th')
        th_stt.innerHTML = i+1
        th_id.innerHTML = parsedObj[i]._id
        th_name.innerHTML = parsedObj[i].name
        th_handle.innerHTML = `<button onclick='f_delete(${parsedObj[i]._id})' class='btn btn-danger'>Delete</button> <button onclick='f_edit(${parsedObj[i]._id})' class='btn btn-success'>Edit</button>`
        tr.append(th_stt, th_id, th_name, th_handle)
        tbody_list.append(tr)
    }

}

show.addEventListener('click', f_show);

function f_delete(id){
    let choose = confirm('Xác nhận xóa')
    if(choose == true){
            console.log(id)
        fetch(`https://todonew412.herokuapp.com/api/delete/${id}`, {
            method: 'POST',
        })
    }
    alert('Xóa thành công')
    location.reload()
}

function f_edit(id){
    let name = prompt('Name: ')
    fetch(`https://todonew412.herokuapp.com/api/update?id=${id}`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => show_one(json)); 
}
