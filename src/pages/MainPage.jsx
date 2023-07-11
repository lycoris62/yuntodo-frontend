import { Button } from "@mui/material";
import Layout from "../components/Layout/Layout";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <h1>Main Page</h1>
        <Button
          variant="contained"
          onClick={() =>
            navigate(`/todolist/${dayjs(new Date()).format("YYYYMMDD")}`)
          }
        >
          Go Today Todolist
        </Button>
      </Layout>
    </>
  );
}
