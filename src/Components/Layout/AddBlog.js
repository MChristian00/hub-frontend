import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addBlogAct } from "../../Redux/Blog/BlogActions";

function AddBlog(props) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.dispatchBlog(Title, Content, Author);
  //   setTitle("");
  //   setContent("");
  // };

  const { _id } = props.Logs.User;

  const initialValues = {
    Content: "",
    Title: "",
  };

  const validationSchema = Yup.object({
    Content: Yup.string().required("Required Field"),
    Title: Yup.string().required("Required Field"),
  });

  const onSubmit = ({ Title, Content }, onFormSubmit) => {
    props.addBlogAct({AuthorID: _id, Title, Content}, props);
    onFormSubmit.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <Field
            className="form-control"
            id="Title"
            placeholder="Title"
            name="Title"
          />
          <ErrorMessage name="Title" />
        </div>
        <div>
          <Field
            name="Content"
            id="Content"
            // value={Content}
            // onChange={(e) => setContent(e.target.value)}
            // required
          >
            {(fieldProps) => {
              // console.log(fieldProps); !!!! FOR DEV PURPOSE
              return (
                <div>
                  <Field
                    name="Content"
                    className="form-control"
                    placeholder="Content"
                  />
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="Content" />
        </div>
        <input className="form-control" type="submit" value="ADD BLOG" />
      </Form>
    </Formik>
  );
}
const mapStateToProps = (state) => {
  return {
    Logs: state.Logs,
  };
};

export default connect(mapStateToProps, { addBlogAct })(AddBlog);
