import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function Formiklogin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required("First name is required")
            .min(2, "too short")
            .max(10, "too long"),
        lastName: yup.string().required(),
    });

    return (
        <Formik
            initialValues={{ firstName: "", lastName: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
            }}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form
                    noValidate
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                                isInvalid={
                                    touched.firstName && !!errors.firstName
                                }
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                                isInvalid={
                                    touched.lastName && !!errors.lastName
                                }
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default Formiklogin;
