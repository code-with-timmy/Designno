import { IoIosAlert } from "react-icons/io";
import Locations from "../ui/Locations";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      yourMessage: "",
    },
  });
  return (
    <section className="md:w-[80%] mx-auto">
      <div className="bg-peach text-white py-20 px-6 flex flex-col lg:flex-row gap-10  lg:py-15 lg:px-15 md:px-20  md:rounded-2xl">
        <div className="flex flex-col items-center gap-4 lg:justify-center lg:w-[90%] mx-auto">
          <h3 className="text-[32px] font-medium lg:self-start">Contact Us</h3>
          <p className="text-[15px] font-light text-center lg:text-left">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col w-full items-center md:items-end gap-4"
          onSubmit={handleSubmit(console.log)}
        >
          <div className="relative w-full">
            <input
              type="text"
              {...register("Name", {
                required: "Can't be empty",
              })}
              placeholder="Name"
              className="border-b border-white w-full p-2 text-[13px] sub text-[16px]"
            />
            {errors?.Name?.message && (
              <p className="absolute italic flex items-center gap-1.5 right-3 top-1/2 -translate-y-1/2 text-white text-[0.75rem] font-light pointer-events-none">
                <span>{errors?.Name?.message}</span>{" "}
                <IoIosAlert className="text-[20px]" />
              </p>
            )}
          </div>
          <div className="relative w-full">
            <input
              type="email"
              {...register("Email", {
                required: "Can't be empty",
              })}
              placeholder="Email Address"
              className="border-b border-white w-full p-2 text-[13px] sub text-[16px]"
            />
            {errors?.Name?.message && (
              <p className="absolute italic flex items-center gap-1.5 right-3 top-1/2 -translate-y-1/2 text-white text-[0.75rem] font-light pointer-events-none">
                <span>{errors?.Name?.message}</span>{" "}
                <IoIosAlert className="text-[20px]" />
              </p>
            )}
          </div>

          <div className="relative w-full">
            <input
              type="tel"
              {...register("Phone", {
                required: "Can't be empty",
              })}
              placeholder="Phone"
              className="border-b border-white w-full p-2 text-[13px] sub text-[16px]"
            />
            {errors?.Name?.message && (
              <p className="absolute italic flex items-center gap-1.5 right-3 top-1/2 -translate-y-1/2 text-white text-[0.75rem] font-light pointer-events-none">
                <span>{errors?.Name?.message}</span>{" "}
                <IoIosAlert className="text-[20px]" />
              </p>
            )}
          </div>

          <div className="relative w-full">
            <textarea
              name="text"
              {...register("yourMessage", {
                minLength: 10,
                required: "Can't be empty",
              })}
              id="text"
              placeholder="Your Message"
              className="h-[100px] border-b border-white w-full p-2 text-[13px] sub text-[16px]"
            ></textarea>
            {errors?.Name?.message && (
              <p className="absolute italic flex items-center gap-1.5 right-3 bottom-0 -translate-y-1/2 text-white text-[0.75rem] font-light pointer-events-none">
                <span>{errors?.Name?.message}</span>{" "}
                <IoIosAlert className="text-[20px]" />
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-3 px-6 mt-6 font-medium text-[15px] hover:bg-[#FFAD9B] hover:text-white cursor-pointer bg-white w-fit rounded-md text-dark-grey"
          >
            Submit
          </button>
        </form>
      </div>
      <Locations />
    </section>
  );
}

export default ContactUs;
