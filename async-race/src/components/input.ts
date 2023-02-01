/* eslint-disable no-unused-vars */
export default class ControlInput {
    color: string | null = null;
    name: string | null = null;
    watchInput() {
        const createColor = document.querySelector('.create__color') as HTMLInputElement;
        const createName = document.querySelector('.create__name') as HTMLInputElement;
        const createBtn = document.querySelector('.btn-create') as HTMLInputElement;
        const updateColor = document.querySelector('.update-color') as HTMLInputElement;
        const updateName = document.querySelector('.update-text') as HTMLInputElement;
        const updateBtn = document.querySelector('.btn-update') as HTMLInputElement;
        createColor.addEventListener('input', () => {
            createBtn.disabled = false;
        });
        createName.addEventListener('input', () => (createBtn.disabled = false));
        createBtn.addEventListener('click', () => {
            createBtn.disabled = true;
            this.color = createColor.value;
            this.name = createName.value;
            createName.value = '';
            createColor.value = '#000000';
        });
        updateBtn.addEventListener('click', () => {
            updateBtn.disabled = true;
            this.color = updateColor.value;
            this.name = updateName.value;
            updateName.value = '';
            updateColor.value = '#000000';
        });
    }
}
