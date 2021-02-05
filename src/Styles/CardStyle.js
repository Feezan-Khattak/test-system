import { makeStyles } from "@material-ui/core";

const CardStyle = makeStyles({
    cardMainDiv: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    },
    card: {
        margin: "1rem",
        padding: "2rem",
        textTransform: "capitalize",
        width: "400px",

        borderRadius: "2rem",
        boxShadow: "5px 5px 20px rgba(102, 101, 101, 0.50)",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "5px 5px 20px rgba(102, 101, 101, 0.850)",
        },

    },
    cardHead: {
        padding: "1rem",
        fontSize: "3rem",
    },
    cardBody: {
        padding: "0.5rem",
        textAlign: "center",
        fontSize: "2rem",
        color: "gray",
    }
});

export default CardStyle;