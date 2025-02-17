"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Button from "@/components/button";

const schema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string().required(),
});
type FormType = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
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
    <form onSubmit={handleSubmit(handleSendMessage)}>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        <div className="col-span-1">
          <Input
            placeholder="Firstname"
            {...register("firstname")}
            color="white"
            inputSize="large"
          />
        </div>
        <div className="col-span-1">
          <Input placeholder="Lastname" {...register("lastname")} color="white" inputSize="large" />
        </div>
        <div className="col-span-1">
          <Input placeholder="Email" {...register("email")} color="white" inputSize="large" />
        </div>
        <div className="col-span-1">
          <Input placeholder="Phone" {...register("phone")} color="white" inputSize="large" />
        </div>
        <div className="col-span-2">
          <Textarea
            placeholder="Message"
            {...register("message")}
            color="white"
            inputSize="large"
          />
        </div>
        <div className="col-span-2">
          <Button type="submit" color="black" size="large" fullWidth rounded>
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
