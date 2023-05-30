import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { StepOne } from "./StepOne";
import { StepThree } from "./StepThree";
import { StepTwo } from "./StepTwo";

interface FormValues {
  name: string;
  email: string;
  workEmail: string;
}

export interface StepProps {
  toNextStep(): void;
  toPrevStep(): void;
}

function App() {
  const [result, setResult] = useState<FormValues | null>(null);
  const [step, setStep] = useState(0);
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      workEmail: "",
    },
  });

  const toNextStep = () => {
    setStep((step) => step + 1);
  };

  const toPrevStep = () => {
    setStep((step) => step - 1);
  };

  const onSubmit = (values: FormValues) => {
    if (step < 2) {
      toNextStep();
      return;
    }
    setResult(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {step === 0 && <StepOne toNextStep={toNextStep} />}
        {step === 1 && (
          <StepTwo toNextStep={toNextStep} toPrevStep={toPrevStep} />
        )}
        {step === 2 && <StepThree toPrevStep={toPrevStep} />}
      </form>
      <br />
      {JSON.stringify(result ?? {}, null, 2)}
    </FormProvider>
  );
}

export default App;
