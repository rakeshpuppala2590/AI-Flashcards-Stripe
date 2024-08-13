"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Generate() {
  const { isLoaded, isSignedIn, user } = useState();
  const [flashcards, setFlashcards] = useState();
  const [flipped, setFlipped] = useState();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
}
