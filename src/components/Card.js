function nic({ title, description }) {
  return (
    <div
      style={{
        height: '300px',
        width: '200px',
        display: 'inline-block',
        margin: '10px',
        border: '1px solid black',
        backgroundColor: 'aliceblue',
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default nic;
