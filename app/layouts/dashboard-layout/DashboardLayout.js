export function DashboardLayout({ mainHtml, mainContentLogic }) {
  const root = document.getElementById('root');

  root.innerHTML = /*html*/ `
    <div>
      ${mainHtml}
    </div>
  `;

  mainContentLogic();
}
