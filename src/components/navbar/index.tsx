import stylex from "@stylexjs/stylex";
const styles = stylex.create({
  wrapper: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
  },

  middlePill: {
    //display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    //width: "400px",
    //gap: "2rem",
    //border: "2px solid #B00580",
    //padding: "1rem",
    //boxShadow: "0px 4px 25px #B00580",
    backgroundColor: "rgba(176, 5, 128, 0.1)",
    boxSizing: "border-box",
    clipPath: "polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%)",

    /* "::before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backdropFilter: "blur(10px)",
      backgroundColor: "#B00580",
      clipPath: "polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%)",
    }, */
  },

  link: {
    padding: 0,
    margin: 0,
    fontFamily: "var(--font-accent)",
    height: "100%",
    width: "100%",
    color: "var(--cyan-main)",
  },

  linkList: {
    display: "flex",
    padding: "1rem",
    //height: "100%",
    margin: 0,
    gap: "1rem",
    border: "1px solid #B00580",
    "::before": {
      borderRight: "1px solid transparent",
      borderTop: "1px solid #B00580",
      content: "",
      position: "absolute",
      left: 0,
      top: 0,
    },
  },
  borderSpan: {
    position: "absolute",
    width: "380px",
    height: "380px",
    backgroundColor: "#B00580",
    clipPath: "polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0% 100%)",
  },
});
export default function Navbar() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.middlePill)}>
        <div {...stylex.props(styles.linkList)}>
          <p {...stylex.props(styles.link)}>Home</p>
          <p {...stylex.props(styles.link)}>Projects</p>
          <p {...stylex.props(styles.link)}>Skills</p>
          <p {...stylex.props(styles.link)}>Contacts</p>
        </div>
      </div>
    </div>
  );
}
