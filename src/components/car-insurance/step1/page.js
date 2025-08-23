import QuestionStep from "../components/QuestionStep";

export default function Step1() {
  return (
    <QuestionStep
      title="بیمه شخص ثالث"
      breadcrumb="ازکی / بیمه وسایل نقلیه / بیمه شخص ثالث"
      question="آیا خودرو در مدت بیمه‌نامه قبلی تعویض پلاک (تغییر مالکیت) داشته است؟"
      options={[
        { id: 1, label: "بله، داشته است" },
        { id: 2, label: "خیر، نداشته است" },
      ]}
      prevStep="/"
      nextStep="/step2"
    />
  );
}