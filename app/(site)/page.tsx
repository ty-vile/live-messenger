import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col py-12 sm:px-6 lg:px-8 bg-gray-100 justify-center min-h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <Image
          src="/messenger.png"
          height={72}
          width={72}
          alt="Messenger Logo"
          className="mx-auto w-auto"
        />

        <AuthForm />
      </div>
    </div>
  );
}
