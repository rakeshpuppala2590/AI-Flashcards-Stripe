"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

import { CollectionReference, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useRouter } from "next/navigation";
