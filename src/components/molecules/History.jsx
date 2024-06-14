import PropTypes from "prop-types";

const History = ({ allTexts, handleTextClick }) => {
  const getPreviewText = (text, wordCount) => {
    const words = text.split("");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join("") + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto mt-4">
      {allTexts.map((item, index) => (
        <div
          className="p-3 flex justify-start items-center flex-row bg-white border gap-3 rounded-lg cursor-pointer border-gray-200 "
          key={index}
          onClick={() => handleTextClick(item)}>
          <p>{getPreviewText(item.text, 55)}</p>
        </div>
      ))}
    </div>
  );
};
History.propTypes = {
  allTexts: PropTypes.array,
  handleTextClick: PropTypes.func,
};

export default History;
