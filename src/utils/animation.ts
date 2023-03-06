export function animateSVG() {
  let len = 0;
  let delay = 0.5;
  const speed = 9;

  const paths = document.querySelectorAll('.path_line') as NodeListOf<SVGGeometryElement>;

  paths.forEach((element) => {
    const elementLen = element.getTotalLength();
    len += elementLen;
  });

  paths.forEach((element) => {
    const elementLen = element.getTotalLength();
    const duration = (elementLen / len) * speed;

    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;

    element.setAttribute('stroke-dasharray', `${elementLen}`);
    element.setAttribute('stroke-dashoffset', `${elementLen}`);
    delay += duration - 0.7;
  });
}
