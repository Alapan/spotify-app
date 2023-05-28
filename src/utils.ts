export function debounce(cb: (arg: any) => void, delay = 1000) {
  let timeout: NodeJS.Timeout | undefined;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb([...args]);
    }, delay)
  }
}
