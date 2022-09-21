import "./Form.css"

const announcementForm = () => {
    return(
      <div id="loginform">
        <h2 id="headerTitle">Post Announcement</h2>
        <Form />
      </div>
    );
}

const Form = props => (
   <div>
     <FormInput description="Title" placeholder="Enter title" type="text" />
     <FormInput description="Description" placeholder="Enter description" type="text"/>
     <FormButton title="Submit"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

export default announcementForm 