import { Modal, ModalBtn } from '../../../components/modal';

export function ComponetsUsageScene() {
  // Modal to remove class
  const modalToRemoveClassId = 'modal-test';
  const { html: modalBtnToRemoveClassHtml, logic: modalBtnToRemoveClassLogic } =
    ModalBtn({
      modalId: modalToRemoveClassId,
      modalBtnId: 'btn-modal-to-remove-class',
      childrenHtml: 'Eliminar clase',
    });
  const { html: modalToRemoveClassHtml, logic: modalToRemoveClassLogic } =
    Modal({
      id: modalToRemoveClassId,
      childrenHtml: `
    <p>¿Estás seguro que deseas eliminar la clase?</p>
    `,
      btnConfirmText: 'Eliminar clase',
      onConfirm: async () => {
        console.log('Eliminando la clase');
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
      },
      successfulText: 'Clase eliminada',
    });

  // Modal to save changes
  const modalToSaveChangesId = 'modal2-test';
  const { html: modalBtnToSaveChangesHtml, logic: modalBtnToSaveChangesLogic } =
    ModalBtn({
      modalId: modalToSaveChangesId,
      modalBtnId: 'btn-modal2-test',
      childrenHtml: 'Guardar cambios',
    });
  const { html: modalToSaveChangesHtml, logic: modalToSaveChangesLogic } =
    Modal({
      id: modalToSaveChangesId,
      childrenHtml: `<p>¿Estás seguro que deseas guardar los cambios?</p>`,
      btnConfirmText: 'Guardar cambios',
      onConfirm: async () => {
        console.log('Guardando los cambios de la clase');
      },
      successfulText: 'Cambios guardados',
    });

  const html = `
    <div>
      <h1>Ejemplos de uso de componentes</h1>
      ${modalBtnToRemoveClassHtml}
      ${modalToRemoveClassHtml}
      <article>
        ${modalBtnToSaveChangesHtml}
        ${modalToSaveChangesHtml}
      </article>
    </div>
  `;

  const logic = () => {
    modalBtnToRemoveClassLogic();
    modalToRemoveClassLogic();
    modalBtnToSaveChangesLogic();
    modalToSaveChangesLogic();
  };

  return {
    html,
    logic,
  };
}
