type StatusProps = {
  status: 'success' | 'loading' | 'error';
};

function Status(props: StatusProps) {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if (props.status === 'success') {
    message = 'Data Fetched Successfully';
  } else {
    message = 'Error Fetching Data';
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
export default Status;
