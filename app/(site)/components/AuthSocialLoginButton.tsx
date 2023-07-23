import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  onClick: () => void;
};

const AuthSocialLoginButton: React.FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex border border-[#6b7280] w-full items-center justify-center  bg-white text-3xl p-3 rounded-md"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialLoginButton;
