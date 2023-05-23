import * as yup from "yup"

export const InfoSchema = yup.object().shape({
    name:yup.string().min(2).max(30).required(),
    datee:yup.string().required(),
    desc:yup.string().min(10).max(50).required(),
    ImageURL:yup.string().required(),
})