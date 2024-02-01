
function Footer() {
    let footerStyle = {
      
            position: "absolute",
            bottom: 0,
            left: 500,
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",

            // width: 100,
            /* Set the fixed height of the footer here */
            // height: "60px",
            // lineHeight: "60px",
          
    }
    return (
        <>
            <footer className="py-3 my-4" style={footerStyle}>
                <p className="text-center text-muted">© 2024 Chris Young</p>
            </footer>

        </>
    )
}

export default Footer