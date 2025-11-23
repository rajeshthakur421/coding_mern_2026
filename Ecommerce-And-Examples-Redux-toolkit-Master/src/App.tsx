import React from "react";
import { Provider } from "react-redux";
import { Container, Typography, Box } from "@mui/material";
import HabitList from "./components/habits/habit-list";
import HabitStats from "./components/habits/habit-stats";
import store from "./store/store";
import AddHabitForm from "./components/habits/add-habits-forms";
import ProductList from "./components/products/ProductList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
          <HabitStats />
          {/* New routes for products can be added here */}
          {/* <ProductList /> */}
        </Box>
      </Container>
    </Provider>
  );
};

export default App;