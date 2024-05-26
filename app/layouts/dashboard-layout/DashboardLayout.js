export function DashboardLayout({ mainHtml, mainContentLogic }) {
  const root = document.getElementById('root');

  root.innerHTML = `
    <main>
      ${mainHtml}
    </main>
  `;

  mainContentLogic();
}
