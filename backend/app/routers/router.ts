import { Router, type Request, type Response } from "express";

const testing = async (req: Request, res: Response) => {
  res.status(200).json({ message: "all good bro!" });
}

const router = Router();
router.use("/testing", testing);

export default router;