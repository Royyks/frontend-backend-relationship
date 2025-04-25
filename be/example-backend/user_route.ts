import { Router } from "express";

const router = Router();

// List all users
router.get("/all", (req, res) => {
    const users = [
        {
            id:1,
            name: "John Doe",   
        }, {
            id:2,
            name: "Jane Doe",   
        }, {
            id:3,
            name: "John Smith",   
        }, {
            id:4,
            name: "Jane Smith",   
        }, {
            id:5,
            name: "John Doe",   
        }, {
            id:6,
            name: "Jane Doe",   
        }, {
            id:7,
            name: "John Smith",   
        }, {
            id:8,
            name: "Jane Smith",
        }
    ]
    res.send("List user");
})

// Get one user
router.get("/:user_id", (req, res) => {
    res.send("get user");
});

// Create a user
router.post("/:user_id", (req, res) => {
    res.send("create user!");
});

// Update a user
router.put("/:user_id", (req, res) => {
    res.send("update user!");
});

// Delete a user
router.delete("/:user_id", (req, res) => {
    res.send("delete user!");
})

export default router