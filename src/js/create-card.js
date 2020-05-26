function createCard(data, container) {
  let coreValue = "";
  if (data.cpu.cores * data.cpu.count <= 4) {
    coreValue = "ядра";
  } else coreValue = "ядер";

  let cpuValue = data.cpu.name;
  if (data.cpu.count >= 2) {
    cpuValue = `${data.cpu.count} x ${data.cpu.name}&nbsp;${data.cpu.cores * data.cpu.count} ${coreValue}`;
  } else {
    cpuValue = `${data.cpu.name} ${data.cpu.cores} ${coreValue}`;
  }

  let diskValue = data.disk.type;
  if (data.disk.count >= 2) {
    diskValue = `${data.disk.count} x ${data.disk.value} ГБ ${data.disk.type}`;
  } else {
    diskValue = `${data.disk.value} ГБ ${data.disk.type}`;
  }

  let priceValue = String(data.price/100);
  console.log('priceValue', priceValue);

  let priceFractional = priceValue.slice(priceValue.length-3);
  console.log('priceFractional', priceFractional);

  let priceInteger = Math.floor(data.price/100000);
  console.log('priceInteger', priceInteger);

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = 
    `<div class="card-wrap card__wrap">
      <h3 class="card__title">${data.name}</h3>
      <div class="card__about">
        <div class="card-description">
          <p class="card-description__item card__cpu">${cpuValue}</p>
          <span class="card-description__item card__ram">${data.ram}</span>
          <span class="card-description__item card__disc">${diskValue}</span>
          <span class="card-description__item card__gpu">${data.gpu ? `${data.gpu}` : ''}</span>
        </div>
        <div class="card__order">
          <span class="card__price">${priceInteger} ${priceFractional} ₽/месяц</span>
          <a class="button card__button" href="https://selectel.ru/" target="_blank">Заказать</a>
        </div>
      </div>
    </div>`;

  container.appendChild(card);
}