import AppButton from "./AppButton";
import { useFormikContext } from "formik";

const AppFormButton = ({ content, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton content={content} onPress={handleSubmit} {...otherProps} />;
};

export default AppFormButton;
