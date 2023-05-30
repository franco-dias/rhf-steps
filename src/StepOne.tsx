import { useFormContext } from "react-hook-form";
import { StepProps } from "./App";

export const StepOne = ({ toNextStep }: Omit<StepProps, "toPrevStep">) => {
  const { register } = useFormContext();

  return (
    <div>
      <label>E-mail</label>
      <br />
      <input {...register("email")} placeholder="E-mail" />
      <br />
      <button type="button" onClick={toNextStep}>
        Next
      </button>
    </div>
  );
};
