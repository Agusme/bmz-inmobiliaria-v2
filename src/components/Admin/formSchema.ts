import * as yup from 'yup';

export const propertySchema = yup.object({
    typeProperty: yup.string().required('Seleccione una opción'),
  typeTransaction: yup.string().required('Seleccione una opción'),
  bathroom: yup
    .number()
        .transform((_, originalValue) => parseInt(originalValue))
  .typeError("Seleccione la cantidad de baños")
    .required('Seleccione la cantidad de baños'),
  bedroom: yup
    .number()
        .transform((_, originalValue) => parseInt(originalValue))
          .typeError("Seleccione la cantidad de dormitorios")

    .required('Seleccione cantidad de dormitorios'),
 destacada: yup.string().required("Seleccione una opción"),
  location: yup
    .string()
    .required("Indique la localidad")
    .min(5, "Mínimo 5 caracteres")
    .max(50, "Máximo 50 caracteres"),
  description: yup
    .string()
    .required("Describe la propiedad")
    .min(5, "El mínimo de caracteres es 5")
    .max(500, "El máximo de caracteres es 500"),
  map: yup.string().required("Ingrese la URL del mapa")
    .url('Ingresa una URL válida'),
  images: yup
    .mixed<FileList>()
    .required("Debes subir al menos una imagen")
    .test("fileList", "Debes subir al menos una imagen", (value) => {
      return value instanceof FileList && value.length > 0;
    }),
})