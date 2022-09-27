import "./Form.css";
import Back from "../common/Back";

const announcementForm = () => {
  return (
    <>
      <Back title="Post Announcements" />
      <div className="announcementForm">
        <div id="loginform">
          <h2 id="headerTitle">Post Announcement</h2>
          <Form />
        </div>
      </div>
    </>
  );
};

const Form = (props) => (
  <div>
    <FormInput description="Title" placeholder="Enter title" type="text" />
    <FormInput
      description="Description"
      placeholder="Enter description"
      type="text"
    />
    <FormButton title="Submit" />
  </div>
);

const FormButton = (props) => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

export default announcementForm;
