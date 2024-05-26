// import styles from './ModalBtn.css';

export function ModalBtn({
  modalId,
  modalBtnId,
  childrenHtml = 'Abrir Modal',
}) {
  const html = `
    <button id="${modalBtnId}">${childrenHtml}</button>
  `;
  const logic = () => {
    const $modalToActivate = document.getElementById(modalId);
    const $modalBtn = document.getElementById(modalBtnId);
    $modalBtn.addEventListener('click', () => {
      $modalToActivate.showModal();
    });
  };
  return { html, logic };
}
