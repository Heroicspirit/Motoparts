import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white pt-2">
          Welcome
        </h1>
        <p className="text-sm text-slate-400">
          Enter your credentials to access your account.
        </p>
      </div>

      <LoginForm />
    </>
  );
}