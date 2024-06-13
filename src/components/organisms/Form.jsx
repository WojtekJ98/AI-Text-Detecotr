import { IoText } from "react-icons/io5";
import PropTypes from "prop-types";

const Form = ({ handleSubmit, text, setText }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center relative "
        action="">
        <IoText className="absolute left-0 my-2  ml-3 w-5" />
        <input
          id="mainInput"
          placeholder="Enter your text"
          type="text"
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
          className="w-full block rounded-md border py-2.5 pl-10 pr-12 text-sm shadow-lg  font-medium focus:border-black focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="absolute  flex justify-center items-center right-0 mr-1.5 my-1.5 w-10  rounded
       border
      hover:border-gray-700
      hover:text-gray-700">
          ↵
        </button>
      </form>
    </div>
  );
};
Form.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
