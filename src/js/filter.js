const gpu = document.getElementById(gpu);
const raid = document.getElementById(raid);
const ssd = document.getElementById(ssd);
const form =  document.querySelector('.config-form');

function filter(gpuValue, raidValue, diskValue) {
  container.innerHTML = '';

  getData()
    .then(items => {
      const result = res.filter(({ cpu, disk, gpu }) => {
        if (diskValue.checked) {
          return (
            cpu.cores * cpu.count == core.value && disk.type == diskValue.value
          );
        }

        return cpu.cores * cpu.count == core.value;
      });

      if (result.length == 0) {
        container.innerHTML='Нет результатов'
      };

      for (let item of items) {
        createCard(item, container);
      }
    });

  form.addEventListener("change", () => {
    filter(gpu, raid, ssd);
  });
};