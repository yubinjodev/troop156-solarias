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
