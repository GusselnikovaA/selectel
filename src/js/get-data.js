const container = document.querySelector('.cards-wrap');

function getData() {
  const url = 'https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1';
  container.innerHTML = '<div class="loader"></div>'

  let promise = fetch (url)
    .then(response => {
      if (response.status >= 400) {
        return Promise.reject(new Error(response.status));
      }

      return response.json();
    })

    .catch(function(reason) { 
      container.innerHTML = 'Ошибка соединения!'; 
      console.error(reason || reason.status);
  });

  return promise;
};

// render(core, isGpu, isRaid, isSsd);

getData()
  .then(items => {
    console.log(items);
    container.innerHTML = '';
    for (let item of items) {
      if (6 == item.cpu.cores * item.cpu.count) {
        createCard(item, container);
      }
    }
  });