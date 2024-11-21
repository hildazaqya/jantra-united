import toast from 'react-hot-toast';

interface setIsSendingProps {
      setIsSending: (value:boolean) => void;
}

export async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>, { setIsSending }: setIsSendingProps) {
      e.preventDefault();

      setIsSending(true);
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
            console.error("Google Script URL Not Found in Variable Environment");
            return ;
      }

      try {
            await fetch(scriptUrl, {
                  method: "POST",
                  body: formData,
                  mode: "no-cors"
            });

            formElement.reset();
            toast.success("Pesan anda telah terkirim!");

      } catch (error) {
            toast.error("Pesan anda gagal terkirim!");
            console.error("Error message: ", error);

      } finally {
            setIsSending(false);
      }
}