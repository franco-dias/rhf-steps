import { useFormContext } from "react-hook-form";
import { StepProps } from "./App";

export const StepTwo = ({ toPrevStep, toNextStep }: StepProps) => {
  const { register } = useFormContext();

  return (
    <div>
      <label>Name</label>
      <input {...register("name")} placeholder="Name" />

      <button type="button" onClick={toPrevStep}>
        Back
      </button>
      <button type="button" onClick={toNextStep}>
        Next
      </button>
    </div>
  );
};
