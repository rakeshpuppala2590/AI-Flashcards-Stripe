"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSearchParams } from "next/navigation";

export default function Flashcard() {}
