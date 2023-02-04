export function checkBtnForAction(e: Event) {
    const target = <HTMLElement>e.target;
    const action = target.dataset.btn;
    if (!action) {
        return;
    }
    if (action === 'race' || action === 'start') {
        target.setAttribute('disabled', '');
    }
    const carElement = target.closest('.car');
    const carId = carElement?.getAttribute('id');

    return {
        action,
        carId,
    };
}
