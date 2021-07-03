// get = document.getElementById('btn_get')
// text = document.getElementById('text')
// post = document.getElementById('btn_post')
// Form = document.forms['action-form']

// // GET
// function f_get(){
//     fetch(`https://todonew412.herokuapp.com/api/get/${text.value}`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

// get.addEventListener('click', f_get);

// // Show List
// function f_show(){
//     fetch('https://todonew412.herokuapp.com/api/list')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }

// show.addEventListener('click', f_show);

// // create - post
// function f_post(){

//     fetch('https://todonew412.herokuapp.com/api/create',{
//         method: 'POST',
//         body: JSON.stringify({
//             name: `${text.value}`,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })

//   .then((response) => response.json())
//   .then(console.log('oke'))
//   .then((json) => console.log(json));
// }

// put.addEventListener('click', f_post);

// // update - put
// // function f_put(){

// //     fetch('https://todonew412.herokuapp.com/api/update?id=',{
// //         method: 'POST',
// //         body: JSON.stringify({

// //             name: `${text.value}`,
// //         }),
// //         headers: {
// //             'Content-type': 'application/json; charset=UTF-8',
// //         },
// //     })

// //   .then((response) => response.json())
// //   .then(console.log('oke'))
// //   .then((json) => console.log(json));
// // }

// // put.addEventListener('click', f_put);

show =  document.getElementById('btn_show')
list = document.getElementById('list-data')
list_ul = document
// Show List
function f_show(){
    fetch('https://todonew412.herokuapp.com/api/list')
  .then((response) => response.json())
  .then((json) => show_list(json));
}
function show_list(json){
    var stringified = JSON.stringify(json)
    var parsedObj = JSON.parse(stringified)
    for(let i=0;i<parsedObj.length;i++){
        let p = document.createElement('p');
        p.style.fontSize = '20px'
        p.innerHTML = 'id: ' + parsedObj[i]._id + '- name: ' + parsedObj[i].name;
        list.append(p)

    }


}

show.addEventListener('click', f_show);