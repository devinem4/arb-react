function BetInputs(props) {
  return (
    <>
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>Favorite:</label>
        <br />-{" "}
        <input
          type="number"
          id="favorite"
          defaultValue={150}
          min="100"
          max="10000"
        />
        <br />
        <label>Dog:</label>
        <br />+{" "}
        <input
          type="number"
          id="dog"
          defaultValue={200}
          min="100"
          max="10000"
        />
        <br />
        <input type="submit" value="Lets See" />
      </form>
    </>
  );
}

export default BetInputs;
