import Reset from '../components/Reset/Reset';

const ResetPage = (props) => (
  <div>
    <p>Reset Your Password {props.query.resetToken}</p>
    <Reset />
  </div>
);

export default ResetPage;
