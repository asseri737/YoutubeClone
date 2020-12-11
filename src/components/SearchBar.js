import React, { useState } from "react";
import { Paper, TextField, AppBar } from "@material-ui/core";
import '../app.css';

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  }

  return (
    <AppBar id="aBar" elevation={6} style={{ padding: "22px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </AppBar>
  );
}
