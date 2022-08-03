/** @jsx h */
import { Fragment, h, JSX } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

const ENTER_KEY = "Enter";
const INPUT_CLASS =
  "outline-none focus:outline-none border-gray-200 border-2 p-2 w-3/4";

interface GuestInputProps {
  onSubmit: (guess: string) => void;
  disabled?: boolean;
  placeholder: string;
}

export default function GuessInput(
  { onSubmit, ...props }: GuestInputProps,
) {
  const [guess, setGuess] = useState<string>("");

  const submitGuess = () => {
    onSubmit(guess);
    setGuess("");
  };

  const handleInputChange = ({
    currentTarget,
  }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    // TODO: Validate characters are alphanumeric + all lowercase
    setGuess(currentTarget.value);
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key !== ENTER_KEY) {
      return;
    }
    submitGuess();
  };

  return (
    <div class={tw`flex w-full justify-center`}>
      <input
        value={guess}
        onInput={handleInputChange}
        onKeyDown={handleInputKeyDown}
        class={tw`${INPUT_CLASS}`}
        enterkeyhint="done"
        {...props}
      />
    </div>
  );
}
