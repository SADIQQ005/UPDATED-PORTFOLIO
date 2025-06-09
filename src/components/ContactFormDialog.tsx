import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";

interface FormData {
  email: string;
  message: string;
}

function ContactFormDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Here you would typically send the email
    setOpen(false);
    reset();
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
            Contact
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              Send me a message and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email:</label>
              <input
                {...register("email", { required: true })}
                className="w-full p-2 border rounded-md"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message:</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full p-2 border rounded-md min-h-[100px]"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            <DialogFooter>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
              >
                Send
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ContactFormDialog;
