import { object, string,minLength } from 'valibot'

export const formSchema = object({
  name: string([minLength(4, "Ingresa un nombre minimo de 4 letras")]),
  brand:string([minLength(4,"Ingresa un nombre minimo de 4 letras")])

})
