"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { CircleX } from "lucide-react";

const Subscribe = () => {
  const t = useTranslations("components.footer");
  const [width, setWidth] = useState(250);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("Invalid email address"))
      .required(t("Email is required")),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values , {resetForm}) => {
      console.log("Form submitted", values);
      toast.success(t("Congrats, You are now subscribed!"))
      resetForm()
    },
  });

  useEffect(() => {
    const emailLength = formik.values.email.length;
  
    if (emailLength === 0) {
      setWidth(250);
    } else {
      setWidth(250 + emailLength * 9);
      if (width > 350) setWidth(350);
    }
  }, [formik.values.email]);

  return (
    <div className="flex flex-col">
      {/* Form */}
      <form className="relative" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder={t("emailPlaceholder")}
          className="bg-white text-primary caret-primary placeholder:text-black p-3 rounded-md focus:placeholder:opacity-0 transition-all placeholder:transition-opacity placeholder:opacity-100 !max-w-[350px]"
          style={{ width }}
          {...formik.getFieldProps("email")}
        />
        {/* Button */}
        <button type="submit" className="py-2 px-6 bg-primary text-xd font-medium absolute end-1 top-1/2 -translate-y-1/2 rounded-lg transition-all hover:px-8">
          {t("button")}
        </button>
      </form>
      {/* 3️⃣ Error Message */}
      {formik.touched.email && formik.errors.email ? (
        <p className="text-red-500 text-sm mt-3 flex items-center gap-1"> <CircleX size={16} /> {formik.errors.email}</p>
      ) : null}
    </div>
  );
};

export default Subscribe;
