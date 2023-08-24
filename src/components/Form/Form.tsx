import { useForm } from 'react-hook-form';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: unknown) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<input {...register('name', { required: true })} />
				{errors.name?.message && <span>This field is required</span>}
			</div>

			<div>
				<input {...register('description', { required: true })} />
				{errors.name?.message && <span>This field is required</span>}
			</div>
			<input type='submit' />
		</form>
	);
};

export default Form;
