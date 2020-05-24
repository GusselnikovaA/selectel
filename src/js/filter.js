const gpu = document.getElementById('gpu');
const raid = document.getElementById('raid');
const ssd = document.getElementById('ssd');
const form =  document.querySelector('.config-form');
let isSsd = false;
let isGpu = false;
let isRaid = false;

function filter (gpuValue, raidValue, diskValue) {
  if (diskValue.checked) {
    isSsd = true;
  } else {
    isSsd = false;
  };

  if (raidValue.checked) {
    isRaid = true;
  } else {
    isRaid = false;
  };

  if (gpuValue.checked) {
    isGpu = true;
  } else {
    isGpu = false;
  };
};

form.addEventListener("change", () => {
  filter(gpu, raid, ssd);
  render(core, isGpu, isRaid, isSsd);
});
