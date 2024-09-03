import "./views/styles/styles.scss";
import { handleSubmit } from "./views/js/handleSubmit";

alert("I EXIST");
console.log("UPDATE!!");


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

export { handleSubmit };



