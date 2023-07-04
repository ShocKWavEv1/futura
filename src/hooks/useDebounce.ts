export default function debounce(fn: { apply: (arg0: any[]) => void; }, ms = 300) {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    return function (...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(args), ms);
    };
  }
  