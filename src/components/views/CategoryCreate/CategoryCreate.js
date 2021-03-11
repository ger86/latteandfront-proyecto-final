import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FormGroup from 'components/ui/form/FormGroup';
import Error from 'components/ui/form/Error';
import FormLabel from 'components/ui/form/FormLabel';
import Input from 'components/ui/form/Input';
import {PrimaryButton} from 'components/ui/Button';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

function CategoryCreate() {
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  console.log(formik);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormLabel>Nombre de la categoría</FormLabel>
          <Input
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
          />
          {formik.errors.name && <Error>{formik.errors.name}</Error>}
        </FormGroup>
        <PrimaryButton type="submit">Enviar</PrimaryButton>
      </form>
    </div>
  );
}

export default CategoryCreate;
