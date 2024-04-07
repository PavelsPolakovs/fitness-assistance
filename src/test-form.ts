// import * as yup from 'yup'
//
// type SelectOption = {
//   label: string
// }
//
// type FormSchemaRootGroup = {
//   country: SelectOption | null
// }
//
// const country: yup.SchemaOf<SelectOption | null> = yup.object({
//   label: yup.string().default('')
// })
//
// export const formSchema: yup.SchemaOf<FormSchemaRootGroup> = yup
//   .object()
//   .shape({
//     country: yup.object({
//       label: yup.string().default('')
//     }),
//     te: yup.string()
//   })
//
// export type FormSchema = yup.InferType<typeof formSchema>

export {}
