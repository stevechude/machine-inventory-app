import React from "react";
import {
  CssBaseline,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "tss-react/mui";
import { useCustomState } from "../CustomHooks/Hooks";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    cardMedia: {
      paddingTop: "56.25%",
    },
    search: {
      display: "flex",
      justifyContent: "center",
    },
  };
});

const ListMachines = ({ machines, onDelete }) => {
  const { classes } = useStyles();
  const {
    setMachines,
    machineEdit,
    setMachineEdit,
    editName,
    setEditName,
    editDate,
    setEditDate,
    editStock,
    setEditStock,
    editWeight,
    setEditWeight,
    searchMachine,
    setSearchMachine,
  } = useCustomState();

  // Function to save edited attributes
  const onSave = (name) => {
    const updatedMachine = [...machines].map(({ machine }) => {
      if (machine && machine.name === name) {
        machine.name = editName ? editName : machine.name;
        machine.date = editDate ? editDate : machine.date;
        machine.stock = editStock ? editStock : machine.stock;
        machine.weight = editWeight ? editWeight : machine.weight;
      }
      const stringUpdated = JSON.stringify(machines);
      localStorage.setItem("machines", stringUpdated);

      const retrieve = localStorage.getItem("machines");
      const retrievedData = JSON.parse(retrieve);

      setMachines(retrievedData);

      return machine;
    });

    setMachines(updatedMachine);
    setMachineEdit(null);
    setEditName("");
    setEditDate("");
    setEditStock("");
    setEditWeight("");
  };

  //   Search feature
  const filteredMachines = machines.filter((val) => {
    if (searchMachine === "") {
      return val;
    } else if (
      val.machine.name?.toLowerCase().includes(searchMachine.toLowerCase())
    ) {
      return val;
    }
    return "";
  });

  return (
    <>
      <CssBaseline />
      <div className={classes.search}>
        <InputBase
          sx={{ ml: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          value={searchMachine}
          onChange={(e) => setSearchMachine(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <div className={classes.container}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {filteredMachines.map(({ machine }, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  {machineEdit === machine.name ? (
                    <CardContent>
                      <TextField
                        id="outlined-basic"
                        label="Name of machine"
                        variant="outlined"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Date manufactured"
                        variant="outlined"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Stock"
                        variant="outlined"
                        value={editStock}
                        onChange={(e) => setEditStock(e.target.value)}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Weight"
                        variant="outlined"
                        value={editWeight}
                        onChange={(e) => setEditWeight(e.target.value)}
                      />
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Name: {machine.name}
                      </Typography>
                      <Typography gutterBottom>
                        Date Manufactured: {machine.date}
                      </Typography>
                      <Typography gutterBottom>
                        Stock Available: {machine.stock}
                      </Typography>
                      <Typography gutterBottom>
                        Weight Mass: {machine.weight}
                      </Typography>
                    </CardContent>
                  )}

                  <CardActions>
                    {machineEdit === machine.name ? (
                      <Button
                        size="small"
                        color="success"
                        onClick={() => onSave(machine.name)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => setMachineEdit(machine.name)}
                      >
                        Edit
                      </Button>
                    )}

                    <Button
                      size="small"
                      color="error"
                      onClick={() => onDelete(machine.name)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ListMachines;
