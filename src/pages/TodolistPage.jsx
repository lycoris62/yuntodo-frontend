import Layout from "../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Box } from "@mui/material";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const TodolistPage = () => {
  const { date } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  dayjs.extend(customParseFormat);
  let dayjsObj = dayjs(date, "YYYYMMDD");
  console.log("dayjsObj: ", dayjsObj.format("YYYYMMDD"));

  const getList = async (date) => {
    console.log("token: ", token);
    const { data } = await axios.get(`${import.meta.env.VITE_LOCAL_URL}/api/todo/${date.format("YYYYMMDD")}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("data : ", data);
  };
  useEffect(() => {
    getList(dayjsObj);
  });

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
