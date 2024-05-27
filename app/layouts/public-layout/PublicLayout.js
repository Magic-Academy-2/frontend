export function PublicLayout({ mainHtml, mainContentLogic }) {
  const root = document.getElementById('root');
  root.innerHTML = /* html */ `
    <div id="public-layout">
      ${mainHtml}
    </div>
  `;
  mainContentLogic();
}
