export type AuthFormProps = {
  type: "login" | "signup";
  onClickSubmit: (e) => void;
};

interface CustomEventTarget extends EventTarget {
  email: {
    value: string;
  };
  pw: {
    value: string;
  };
}

export type UserType = "scout" | "parent";

export type UserInfo = {
  email: string;
  password: string;
  type: UserType;
};
