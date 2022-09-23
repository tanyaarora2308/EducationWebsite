import "./Form.css";
import Back from "../common/Back"

const studyMaterialForm = () => {
  return (
      <>
        <Back title="Post Study Material" />
        <div className="announcementForm">
          <div id="loginform">
            <h2 id="headerTitle">Post Study Material</h2>
            <Form />
          </div>
        </div>
      </>
  );
};

const Form = (props) => (
  <div>
    <FormInput description="Title" placeholder="Enter title" type="text" required="true"/>
    <FormInput description="Video URL" placeholder="Enter URL" type="url" />
    <FormInput description="File" placeholder="Select File" type="file" />
    <FormButton title="Submit" />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

export default studyMaterialForm