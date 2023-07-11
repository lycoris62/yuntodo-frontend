import Layout from "../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Box } from "@mui/material";

const TodolistPage = () => {
  const { date } = useParams();
  const navigate = useNavigate();

  dayjs.extend(customParseFormat);
  let dayjsObj = dayjs(date, "YYYYMMDD");

  return (
    <>
      <Layout>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 5,
          }}
        >
          <Box component="h1">YunTodo</Box>
          <MobileDatePicker
            defaultValue={dayjsObj}
            onChange={(newValue) => {
              navigate(`/todolist/${newValue.format("YYYYMMDD")}`);
            }}
          />
        </Box>
        <AddTodoForm />
        <TodoList />
      </Layout>
    </>
  );
};

export default TodolistPage;
