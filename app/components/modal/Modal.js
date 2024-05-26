import styles from './Modal.css';

export function Modal({
  id,
  childrenHtml,
  btnConfirmText = 'Confirmar',
  successfulText = 'Acción realizada con éxito',
  onConfirm = async () => {},
}) {
  const btnCancelId = `${id}-btn-cancel`;
  const btnConfirmId = `${id}-btn-confirm`;
  const html = `
    <dialog id="${id}" class="${styles.modal_window}">
      <div>${childrenHtml}</div>
      <div class="${styles.btns_modal}">
        <button id="${btnCancelId}" class="${styles.btn_modal}">Cancelar</button>
        <button id="${btnConfirmId}" class="${styles.btn_modal}">${btnConfirmText}</button>
      </div>
    </dialog>
  `;
  const logic = () => {
    const $modal = document.getElementById(id);
    const $btnCancel = document.getElementById(btnCancelId);
    const $btnConfirm = document.getElementById(btnConfirmId);
    $btnCancel.addEventListener('click', (e) => {
      $modal.close();
    });
    $btnConfirm.addEventListener('click', (e) => {
      onConfirm().then(() => {
        $modal.close();
        alert(successfulText);
      });
    });
  };

  return { html, logic };
}
