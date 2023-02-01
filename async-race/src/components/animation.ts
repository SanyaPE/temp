/* eslint-disable no-unused-vars */
import Client from './client';
export default function Animation(targetId: number | string, duration: number) {
    const elemParent = document.getElementById(targetId as string) as HTMLElement;
    const elem = elemParent.querySelector('.car__img') as HTMLElement;
    const startBtn = elemParent.querySelector('.car__start-btn');
    const stopBtn = elemParent.querySelector('.car__stop-btn');
    stopBtn?.addEventListener('click', (e: Event) => stop(e));
    const distance = elemParent.offsetWidth - 170;
    let requestId: null | any = null;
    let startAnimation = 0;
    function animate(time: number) {
        if (!startAnimation) {
            startAnimation = time;
        }
        const progress = (time - startAnimation) / duration;
        const translate = progress * distance;
        elem.style.transform = `translateX(${translate}px)`;
        if (progress < 1) {
            requestId = window.requestAnimationFrame(animate);
        }
    }
    function start() {
        requestId = window.requestAnimationFrame(animate);
        (startBtn as HTMLInputElement).disabled = true;
    }
    async function stop(e: Event) {
        const id = (e.target as HTMLElement).closest('.car')?.getAttribute('id');
        await Client.stopEngine(id as string).then(() => {
            if (requestId) {
                window.cancelAnimationFrame(requestId);
                requestId = null;
                window.setTimeout(() => {
                    elem.style.transform = 'translateX(0px)';
                    (startBtn as HTMLInputElement).disabled = false;
                }, 1000);
            }
        });
    }
    start();
}
