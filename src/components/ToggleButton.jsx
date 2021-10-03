export const ToggleButton = ({ state, handler }) => {
  return (
    <div>
      <button className="btn" onClick={() => handler(!state)}>
        {state ? "light" : "dark"}
      </button>
    </div>
  );
};
