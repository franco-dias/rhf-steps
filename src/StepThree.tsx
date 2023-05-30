import { useFormContext } from "react-hook-form";
import { StepProps } from "./App";

export const StepThree = ({ toPrevStep }: Omit<StepProps, "toNextStep">) => {
  const { register } = useFormContext();

  return (
    <div>
      <label>Work email</label>
      <input {...register("workEmail")} placeholder="Work email" />

      <button type="button" onClick={toPrevStep}>
        Back
      </button>
      <button type="submit">Submit</button>
    </div>
  );
};
