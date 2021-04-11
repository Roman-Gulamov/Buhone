import { createBrowserHistory } from "history";

export const goHome = () => {
    const history = createBrowserHistory();

    history.push('/Buhone/#/main');
    history.go(0);

    window.location.reload(); // for mobile phone
}