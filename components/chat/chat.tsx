import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import Input from "@/components/input";
import Button from "@/components/button";
import Link from "next/link";
import Textarea from "@/components/textarea";
import useSettingsStore from "@/store/settings";
import { useTranslation } from "react-i18next";

const categories = ["AI Solutions", "Customer Software", "Mobile App", "Web App"];

const schema = yup.object({
  category: yup.string(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
});
type FormType = yup.InferType<typeof schema>;

const Chat = () => {
  const { t } = useTranslation();
  const { toggleChat } = useSettingsStore();
  const {
    watch,
    setValue,
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const handleSendMessage = (values: FormType) => {
    console.log("values => ", values);
  };

  return (
    <div className="bg-black text-white min-w-full">
      <h1 className="font-bold text-white text-4xl mb-5">{t("Got a project?")}</h1>
      <p className="text-sm font-medium text-gray-secondary-text">
        {t(
          "Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly."
        )}
      </p>
      <form onSubmit={handleSubmit(handleSendMessage)}>
        <div className="my-8">
          <span className="mb-2 block font-normal text-sm text-gray-secondary-text">
            {t("I'm interested in")}
          </span>
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={clsx(
                  "px-3 py-2 border rounded-2xl font-normal text-sm max-w-max",
                  watch("category") === category
                    ? "border-gray-light bg-white text-black"
                    : "border-white"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setValue("category", category);
                }}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div className="sm:col-span-1 col-span-2">
            <Input placeholder={t("Firstname")} {...register("firstname")} />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <Input placeholder={t("Lastname")} {...register("lastname")} />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <Input placeholder={t("Email")} {...register("email")} />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <Input placeholder={t("Phone")} {...register("phone")} />
          </div>
          <div className="col-span-2">
            <Textarea placeholder={t("Message")} {...register("message")} />
          </div>
          <div className="col-span-2">
            <Button type="submit" color="gray" fullWidth rounded>
              {t("Send Message")}
            </Button>
          </div>
        </div>
      </form>
      <div className="text-sm font-medium text-gray-secondary-text mt-5">
        {t(
          "We'll keep your information in our CRM to respond to your request. For more details, consult our"
        )}{" "}
        <Link href="/privacy-policy" className="text-white" onClick={toggleChat}>
          {t("privacy policy")}.
        </Link>
      </div>
    </div>
  );
};

export default Chat;
