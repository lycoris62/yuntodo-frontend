import { Button, InputBase } from "@mui/material";
import { useState } from "react";

function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      content: todo,
    });
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", marginTop: 20, marginBottom: 20 }}
      >
        <InputBase
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder="TODO"
          inputProps={{
            "aria-label": "Description",
          }}
          style={{ width: "90%" }}
          required
        />
        <Button type="submit" variant="text" style={{ width: "10%" }}>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddTodoForm;
