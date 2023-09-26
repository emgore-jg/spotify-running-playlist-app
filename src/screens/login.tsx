function Login() {
  return (
    <div className="flex bg-purple-950 w-[100vw] h-[100vh] justify-center items-center">
      <div className="flex flex-col bg-white w-fit h-min p-6 rounded-2xl text-center">
        <h1 className="h1 text-black">Spotify StrideSync</h1>
        <p className="italic p-4">
          The perfect playlist <br /> for your next run
        </p>
        <button className="btn bg-spotify">login with spotify</button>
      </div>
    </div>
  );
}

export default Login;