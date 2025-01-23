import "./ImageLinkForm.css";

const ImageLinkForm = ({ value, onInputChange, onButtonSubmit }) => {
  const onSubmit = () => {
    onButtonSubmit();
  };
  const onChange = (e) => {
    onInputChange(e);
  };
  return (
    <div>
      <p className="f3">{`This magic brain will detect faces in your pictures.`}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            onChange={onChange}
            className="f4 pa2 w-70 center"
            type="text"
            value={value}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onSubmit}
            type="submit"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
