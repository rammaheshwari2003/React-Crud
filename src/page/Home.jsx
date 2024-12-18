const Home=()=>{
    return(
        <>
            <div id="home">
                <video src="/src/images/mv.mp4" autoPlay muted loop>
                </video>
                <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          Welcome to My Mobile Dashboard
        </h1>
            </div>
        </>
    )
}
export default Home;