"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import getStripe from "../../../utils/get-stripe";
import { CircularProgress, Container, Typography } from "@mui/material";

const ResultPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCheckOutSession = async () => {
      if (!session_id) return;
      try {
        const res = await fetch(
          `/api/checkout_session?session_id=${session_id}`
        );
        const sessionData = await res.json();
        if (res.ok) {
          setSession(sessionData);
        } else {
          setError(sessionData.error);
        }
      } catch (err) {
        setError("An error occured");
      } finally {
        setLoading(false);
      }
    };
    fetchCheckOutSession();
  }, [session_id]);
  if (loading) {
    return (
      <Container
        maxWidth="100vw"
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <CircularProgress />
        <Typography variant="h6">loading...</Typography>
      </Container>
    );
  }
  if (error) {
    return (
      <Container
        maxWidth="100vw"
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography variant="h6">{error}</Typography>
      </Container>
    );
  }
  return (
    <Container
      maxWidth="100vw"
      sx={{
        textAlign: "center",
        mt: 4,
      }}
    >
      {session.payment_status === "paid" ? (
        <>
          <Typography variant="h4">Thank you for purchasing.</Typography>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};
