import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
// function numbers(num1: number, num2: number) {
//   return num1 + num2;
// }
// numbers(1, 2);
// let surname: string = 'Bob';
// surname = '1';
//# sourceMappingURL=index.js.map