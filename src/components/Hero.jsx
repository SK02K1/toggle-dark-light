export const Hero = ({ buttonState }) => {
  return (
    <div className={`hero ${buttonState ? "dark" : "light"}`}>
      <p>HERO</p>
    </div>
  );
};
