import { useState } from "react"


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
        //*valores del formulario, [name]:value propiedad computada, para q se actualice el name
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange,
    }
}
