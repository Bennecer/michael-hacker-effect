import "./style.scss";

document.querySelector<HTMLDivElement>("#app")!.onmouseover = (
  event: MouseEvent
) => {
  const innerText = (event?.target as unknown as { innerText: string })
    ?.innerText;
  const letters = innerText.split("") ?? [];
  let iteration = 0;
  const fun = 10;

  const interval = setInterval(() => {
    if (fun + letters.length < iteration) {
      clearInterval(interval);
    }

    (
      document.querySelector<HTMLDivElement>("#app") as HTMLDivElement
    ).innerText = letters
      .map((letter: string, index: number) => {
        if (" " === letter || fun + index < iteration) {
          return letter;
        }
        return randomLetter();
      })
      .join("");
    iteration++;
  }, 30);
};

function randomLetter() {
  return String.fromCharCode(
    "A".charCodeAt(0) + Math.floor(Math.random() * 26)
  );
}
