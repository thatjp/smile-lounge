import Reset from '../components/Reset';

const Reset = (props) => (
  <div>
    <p>Reset Your Password {props.query.resetToken}</p>
    <Reset />
  </div>
);

export default Reset;
