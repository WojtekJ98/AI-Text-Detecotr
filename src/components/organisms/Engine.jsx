import { useState } from "react";
import { useDetectTextMutation } from "../../services/detector";
import { useEffect } from "react";

import Form from "../molecules/Form";
import History from "../molecules/History";
import Display from "../molecules/Display";

const Engine = () => {
  const [text, setText] = useState();
  const [allTexts, setAllTexts] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [detectText, { data, error, isLoading }] = useDetectTextMutation();

  useEffect(() => {
    const textsFormLocalStorage = JSON.parse(localStorage.getItem("texts"));
    if (textsFormLocalStorage) {
      setAllTexts(textsFormLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await detectText({ text }).unwrap();
      if (result) {
        const newText = { text, result };
        let updatedAllTexts = [newText, ...allTexts];

        if (updatedAllTexts.length > 5) {
          updatedAllTexts = updatedAllTexts.slice(0, 5);
        }

        setAllTexts(updatedAllTexts);
        console.log(result);
        localStorage.setItem("texts", JSON.stringify(updatedAllTexts));
        setSelectedData(result);
      }
    } catch (err) {
      console.error("Failed to detect text:", err);
    } finally {
      setText("");
    }
  };
  const handleTextClick = (item) => {
    setText(item.text);
    setSelectedData(item.result);
    setTimeout(() => {
      setText("");
    }, 1500);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <Form text={text} handleSubmit={handleSubmit} setText={setText} />
      {/* History of checking Text */}
      <History handleTextClick={handleTextClick} allTexts={allTexts} />

      {/* Display answer */}
      <Display
        isLoading={isLoading}
        selectedData={selectedData}
        error={error}
      />
    </section>
  );
};

export default Engine;
