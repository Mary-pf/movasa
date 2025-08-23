import QuestionStep from "../components/QuestionStep";

export default function Step2() {
  return (
    <QuestionStep
      title="بیمه شخص ثالث"
      breadcrumb="ازکی / بیمه وسایل نقلیه / بیمه شخص ثالث"
      question="آیا در بیمه‌نامه قبلی خسارت گرفته‌اید؟"
      options={[
        { id: 1, label: "بله" },
        { id: 2, label: "خیر" },
      ]}
      prevStep="/step1"
      nextStep="/step3"
    />
  );
}