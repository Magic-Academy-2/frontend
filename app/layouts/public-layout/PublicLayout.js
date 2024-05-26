export function PublicLayout({ mainHtml, mainContentLogic }) {
  const root = document.getElementById('root');
  root.innerHTML = `
    <main>
      ${mainHtml}
    </main>
  `;
  mainContentLogic();
}
