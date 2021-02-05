import { makeStyles } from "@material-ui/core";

const TestDemoStyle = makeStyles({
    testDemo: {
        textAlign: "center",
        "& h1": {
            fontSize: "3rem",
        },
        "& p": {
            color: "gray",
            fontSize: "2rem",
        }
    }
});

export default TestDemoStyle;