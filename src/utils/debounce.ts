export interface DebounceArgs {
  callback: () => void;
  delay?: number;
}

export const debounce = (() => {
  let timers: ReturnType<typeof setTimeout>;

  return (callback: DebounceArgs['callback'], delay = 300) => {
    const timer = delay;

    if (timers) {
      clearTimeout(timers);
    }

    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    timers = setTimeout(callback, timer);
  };
})();