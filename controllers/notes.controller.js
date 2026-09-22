import Notes from "../models/Notes.js";

export const getAllNotes = async function (req, res) {
  let allNotes = await Notes.find();
  res.status(200).json({
    message: "All Notes fetched successfully",
    notes: allNotes,
  });
};

export const getNotesById = async function (req,res){
  let id = req.params.id;
  let note = await Notes.findById(id);
  res.status(200).json({
    message: 'Note fetched successfully',
    note: note
  })
}


export const createNote = async function (req, res) {
  const formData = req.body;
  let createdNotes = await Notes.create({
    title: formData.title,
    content: formData.content,
  });
  res.status(201).json({
    message: "Note created successfully",
    note: createdNotes,
  });
};

export const editNotes = async function (req, res) {
  const id = req.params.id;
  const updateData = req.body;
  let updated = await Notes.findByIdAndUpdate(id, updateData, { new: true });
  res.status(200).json({
    message: "Note updated successfully",
    note: updated,
  });
};

export const deleteNotes = async function (req,res) {
    let id = req.params.id;
    let deleted = await Notes.findByIdAndDelete(id)
    res.status(200).json({
    message: "Note deleted successfully",
    note: deleted,
  });
}
