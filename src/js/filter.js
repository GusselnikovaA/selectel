const gpu = document.getElementById('gpu');
const raid = document.getElementById('raid');
const ssd = document.getElementById('ssd');
const form =  document.querySelector('.config-form');
let isSsd = false;
let isGpu = false;
let isRaid = false;

function filter (gpuValue, raidValue, diskValue) {
  diskValue.checked ? isSsd = true : isSsd = false;
  raidValue.checked ? isRaid = true : isRaid = false;
  gpuValue.checked ? isGpu = true : isGpu = false;
};

form.addEventListener("change", () => {
  filter(gpu, raid, ssd);
  render(core, isGpu, isRaid, isSsd);
});
