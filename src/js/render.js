function render (core, gpu, raid, ssd) {
  getData()
    .then(items => {
      container.innerHTML = '';
      for (let item of items) {
        const itemCore = item.cpu.cores * item.cpu.count;

        if (gpu && ssd && raid) {
          if (core == itemCore && item.gpu && item.disk.type == 'SSD' && item.disk.count > 1) {
            createCard(item, container);
          };
        }

        if (gpu && !ssd && !raid) {
          if (core == itemCore && item.gpu) {
            createCard(item, container);
          };
        }

        if (gpu && ssd && !raid) {
          if (core == itemCore && item.gpu && item.disk.type == 'SSD') {
            createCard(item, container);
          };
        }

        if (gpu && !ssd && raid) {
          if (core == itemCore && item.gpu && item.disk.count > 1) {
            createCard(item, container);
          };
        }

        if (!gpu && ssd && raid) {
          if (core == itemCore && item.disk.type == 'SSD' && item.disk.count > 1) {
            createCard(item, container);
          };
        }

        if (!gpu && ssd && !raid) {
          if (core == itemCore && item.disk.type == 'SSD') {
            createCard(item, container);
          };
        }

        if (!gpu && !ssd && raid) {
          if (core == itemCore && item.disk.count > 1) {
            createCard(item, container);
          };
        }
        
        if (!gpu && !ssd && !raid) {
          if (core == itemCore) {
            createCard(item, container);
          };
        }
      };

      if (container.innerHTML == '') {
        container.innerHTML = 'Нет результатов';
      };
    });
};