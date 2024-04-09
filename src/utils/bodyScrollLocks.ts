/**
 * addScrollLocks - на body вешает класс, который блокирует прокрутку страницы.
 * removeScrollLocks - удаляет с body класс, который блокирует прокрутку страницы.
 * Класс body-scroll-locks - прописан в global.scss
 */
export function addScrollLocks(elem: HTMLElement | undefined): void {
  if (elem) elem.classList.add('body-scroll-locks');
}
export function removeScrollLocks(elem: HTMLElement | undefined): void {
  if (elem) elem.classList.remove('body-scroll-locks');
}
