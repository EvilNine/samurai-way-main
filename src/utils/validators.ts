export const requierdField = (value: string) => {
	console.log('asda')
	if(value) return undefined
	
	return 'error'
}
export const maxLengthCreator = (maxLength: number) => (value:string) =>{
	if(value.length > maxLength) return `Max length is ${maxLength} symbols`
	return undefined
}
export const minLengthCreator = (minLength: number) => (value:string) =>{
	if(value.length < minLength) return `Min length is ${minLength} symbols`
	return undefined
}
