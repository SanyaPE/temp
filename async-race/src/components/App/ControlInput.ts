export default class ControlInput {
    controls: { [index: string]: HTMLInputElement } = {};
    color = '#000000';
    name = '';

    watchInput() {
        this.controls = {
            createColor: <HTMLInputElement>document.querySelector('.create__color'),
            createName: <HTMLInputElement>document.querySelector('.create__name'),
            createBtn: <HTMLInputElement>document.querySelector('.btn-create'),
            updateColor: <HTMLInputElement>document.querySelector('.update-color'),
            updateName: <HTMLInputElement>document.querySelector('.update-text'),
            updateBtn: <HTMLInputElement>document.querySelector('.btn-update'),
        };
        const { createColor, createName, createBtn, updateColor, updateName, updateBtn } = this.controls;

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
