import GlowButtons from "./GlowButton";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-10">
        <h3 className="text-white text-4xl font-semibold">Glowing Buttons</h3>
      </div>
      <div className="flex items-center gap-10">
        <GlowButtons>Sign In</GlowButtons>
        <GlowButtons>Sign Up</GlowButtons>
        <GlowButtons>Create Account</GlowButtons>
        <GlowButtons>Register User</GlowButtons>
        <GlowButtons>Sign In</GlowButtons>
        <GlowButtons>Sign Up</GlowButtons>
        <GlowButtons>Sign In</GlowButtons>
        <GlowButtons>Sign Up</GlowButtons>
      </div>
    </>
  );
};

export default App;
