import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col py-12 sm:px-6 lg:px-8 bg-gray-100 justify-center min-h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-green-100">
        <Image
          src="/messenger.png"
          height={72}
          width={72}
          alt="Messenger Logo"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
