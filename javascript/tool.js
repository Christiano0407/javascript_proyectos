const icon = document.querySelector(`#icon`);
const tooltip = document.querySelector(`#tooltip`);

const x = icon.offsetLeft;
const y = icon.offsetTop;

const widthTooltip = tooltip.clientWidth;
const heightTooltip = tooltip.clientHeight;

const left = x - (widthTooltip / 2) + 15;
const tops = y - heightTooltip;

tooltip.style.left = `${left}px`;
tooltip.style.top = `${tops}px `;