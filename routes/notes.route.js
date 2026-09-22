import express from "express";
import { createNote, deleteNotes, editNotes, getAllNotes, getNotesById } from "../controllers/notes.controller.js";
const router = express.Router();


router.get('/', getAllNotes);
router.get('/:id',getNotesById)

router.post('/', createNote);

router.put('/:id', editNotes);

router.delete('/:id', deleteNotes)


export default router;
