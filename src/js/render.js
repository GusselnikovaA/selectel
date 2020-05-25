function render (core, gpu, raid, ssd) {
  getData()
    .then(function(result) { 
      const items = JSON.parse(result);
      container.innerHTML = '';
      for (let item of items) {
        const itemCore = item.cpu.cores * item.cpu.count;

        switch(true) {
          case (gpu === true && ssd === true && raid === true):
            if (core == itemCore && item.gpu && item.disk.type == 'SSD' && item.disk.count > 1) {
              createCard(item, container);
            };
            break;
          case (gpu === true && ssd === false && raid === false):
            if (core == itemCore && item.gpu) {
              createCard(item, container);
            };
            break;
          case (gpu === true && ssd === true && raid === false):
            if (core == itemCore && item.gpu && item.disk.type == 'SSD') {
              createCard(item, container);
            };
            break;
          case (gpu === true && ssd === false && raid === true):
            if (core == itemCore && item.gpu && item.disk.count > 1) {
              createCard(item, container);
            };
            break;
          case (gpu === false && ssd === true && raid === true):
            if (core == itemCore && item.disk.type == 'SSD' && item.disk.count > 1) {
              createCard(item, container);
            };
            break;
          case (gpu === false && ssd === true && raid === false):
            if (core == itemCore && item.disk.type == 'SSD') {
              createCard(item, container);
            };
            break;
          case (gpu === false && ssd === false && raid === true):
            if (core == itemCore && item.disk.count > 1) {
              createCard(item, container);
            };
            break;
          case (gpu === false && ssd === false && raid === false):
            if (core == itemCore) {
              createCard(item, container);
            };
            break;
        };
      };

      if (container.innerHTML == '') {
        container.innerHTML = 'Нет результатов';
      };
    });
};