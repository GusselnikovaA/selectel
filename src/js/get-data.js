const container = document.querySelector('.cards-wrap');

function getData() {
  const url = 'https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1';
  container.innerHTML = '<div class="loader"></div>'

  // вариант на fetch
  // let promise = fetch (url)
  //   .then(response => {
  //     if (response.status >= 400) {
  //       return Promise.reject(new Error(response.status));
  //     }

  //     return response.json();
  //   })

  //   .catch(function(reason) { 
  //     container.innerHTML = 'Ошибка соединения!'; 
  //     console.error(reason || reason.status);
  // });

  // return promise;

  let promise = new Promise (function(resolve, reject) { 
    const request = new XMLHttpRequest();
    request.open('GET', url); 
    
    request.addEventListener('load', function() {  
        if (request.status !== 200) { 
            reject({status: request.status});
            return;
        }
        resolve(request.response); 
    });  
    
    request.addEventListener('Ошибка соединения!', function(){ 
        reject({status: request.status})
    }); 

    request.send(); 
  });

  return promise;
};

getData()
  .then (function(result) { 
    const items = JSON.parse(result);
    console.log(items);
    container.innerHTML = '';
    for (let item of items) {
      if (6 == item.cpu.cores * item.cpu.count) {
        createCard(item, container);
      }
    }
  });