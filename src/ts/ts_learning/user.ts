export class User {
    userName: string;
    email: string;

    addElement(rootEl) {
        let userRoot = document.querySelector("#" + rootEl);
        userRoot.append(this.email);
        console.log(userRoot);
    }
}