import React from "react";
import {
  Button,
  CssBaseline,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useCustomState } from "../CustomHooks/Hooks";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 6),
    },
    create: {
      display: "flex",
      justifyContent: "space-around",
    },
    button: {
      height: "50px",
      width: "20%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      padding: "30px 0",
    },
    text: {
      marginBottom: "20px",
    },
  };
});

const CreateMachine = ({ onCreate }) => {
  const {
    showForm,
    setShowForm,
    name,
    setName,
    date,
    setDate,
    stock,
    setStock,
    weight,
    setWeight,
  } = useCustomState();
  const { classes } = useStyles();
  //   const [updatedValues, setUpdatedValues] = useState({});

  class ChangeHandlers {
    handlerName(e) {
      const value = e.target.value;
      return setName(value);
    }
    handlerDate(e) {
      const value = e.target.value;
      return setDate(value);
    }
    handlerStock(e) {
      const value = e.target.value;
      return setStock(value);
    }
    handlerWeight(e) {
      const value = e.target.value;
      return setWeight(value);
    }
  }
  const changeHandlers = new ChangeHandlers();

  const submitHandler = (e) => {
    e.preventDefault();

    onCreate({ name, date, stock, weight });

    setName("");
    setDate("");
    setStock("");
    setWeight("");
  };

  return (
    <>
      <CssBaseline />
      <div>
        <Container maxWidth="sm" className={classes.container}>
          <div className={classes.create}>
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Machines
            </Typography>
            <Button
              variant="contained"
              color={showForm ? "error" : "success"}
              className={classes.button}
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close" : "Create"}
            </Button>
          </div>
          {showForm ? (
            <div className={classes.form}>
              <TextField
                id="outlined-basic"
                label="Name of machine"
                variant="outlined"
                className={classes.text}
                value={name}
                onChange={changeHandlers.handlerName}
              />
              <TextField
                id="outlined-basic"
                label="Date manufactured"
                variant="outlined"
                className={classes.text}
                value={date}
                onChange={changeHandlers.handlerDate}
              />
              <TextField
                id="outlined-basic"
                label="Stock"
                variant="outlined"
                className={classes.text}
                value={stock}
                onChange={changeHandlers.handlerStock}
              />
              <TextField
                id="outlined-basic"
                label="Weight"
                variant="outlined"
                className={classes.text}
                value={weight}
                onChange={changeHandlers.handlerWeight}
              />
              <Button
                variant="contained"
                color="success"
                onClick={submitHandler}
              >
                Submit
              </Button>
            </div>
          ) : (
            ""
          )}
        </Container>
      </div>
    </>
  );
};

export default CreateMachine;
