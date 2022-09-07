import StyledButton from './StyledButton';

export default function DeleteModal({onCancel, onReset}) {
	return (
		<section>
			<h3>Are you sure you want to reset this packlist?</h3>
			<div>
				<StyledButton onClick={onCancel}>cancel</StyledButton>
				<StyledButton type="button" onClick={onReset}>
					reset
				</StyledButton>
			</div>
		</section>
	);
}
