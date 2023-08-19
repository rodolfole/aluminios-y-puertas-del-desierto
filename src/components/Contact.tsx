import emailjs from "emailjs-com";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import data from "../data";
import Map from "./Map";

const schema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("El email es requerido"),
  message: Yup.string().required("El mensaje es requerido"),
  name: Yup.string().required("El nombre es requerido"),
});

type TContact = {
  email: string;
  message: string;
  name: string;
};

const INITIAL_VALUES: TContact = {
  email: "",
  message: "",
  name: "",
};

const { VITE_EMAILJS_SERVICEID, VITE_EMAILJS_TEMPLATEID, VITE_EMAILJS_USERID } =
  import.meta.env;

const Contact = () => {
  const onSubmit = (
    values: TContact,
    { resetForm }: FormikHelpers<TContact>
  ) => {
    emailjs
      .send(
        VITE_EMAILJS_SERVICEID,
        VITE_EMAILJS_TEMPLATEID,
        values,
        VITE_EMAILJS_USERID
      )
      .then(
        function (response) {
          resetForm();
          toast.success("Se envio el email", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          // console.log("FAILED...", err);
        }
      );
  };

  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit,
    validationSchema: schema,
  });

  return (
    <section className="text-gray-600 body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="w-full h-80 md:h-[500px] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border border-gray-400">
          <div className="absolute inset-0">
            <Map
              height="500px"
              ubications={[
                {
                  coords: { ...data.ubication },
                  info: { ...data.info },
                },
              ]}
              width="100%"
              zoom={12}
            />
          </div>
        </div>
        <form
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl mb-5">
            Contáctanos
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full p-4 text-gray-900 border  rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 border-gray-400"
              onChange={handleChange}
              value={values.name}
            />

            {errors.name && (
              <div
                className="p-1 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">{errors.name}</span>
              </div>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full p-4 text-gray-900 border  rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 border-gray-400"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && (
              <div
                className="p-1 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">{errors.email}</span>
              </div>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="block w-full p-4 text-gray-900 border rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 border-gray-400 outline-base text-base h-32"
              onChange={handleChange}
              value={values.message}
            ></textarea>
            {errors.message && (
              <div
                className="p-1 text-sm text-red-800 rounded-lg bg-red-50"
                role="alert"
              >
                <span className="font-medium">{errors.message}</span>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-primary-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
