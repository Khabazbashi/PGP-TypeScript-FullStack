/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as PuppiesService from "./puppies.service";
import { BasePuppy, Puppy } from "./puppy.interface";

/**
 * Router Definition
 */
export const puppiesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
puppiesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const puppies: Puppy[] = await PuppiesService.findAll();

    res.status(200).send(puppies);
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    res.status(500).send(errorMessage);
  }
});

// GET items/:id
puppiesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const puppy: Puppy = await PuppiesService.find(id);

    if (puppy) {
      return res.status(200).send(puppy);
    }

    res.status(404).send("item not found");
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    res.status(500).send(errorMessage);
  }
});
// POST items
puppiesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const puppy: BasePuppy = req.body;

    const newPuppy = await PuppiesService.create(puppy);

    res.status(201).json(newPuppy);
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    res.status(500).send(errorMessage);
  }
});
// PUT items/:id
puppiesRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const puppyUpdate: Puppy = req.body;

    const existingPuppy: Puppy = await PuppiesService.find(id);

    if (existingPuppy) {
      const updatedItem = await PuppiesService.update(id, puppyUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await PuppiesService.create(puppyUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    let errorMessage = "Failed to do something exceptional";

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    res.status(500).send(errorMessage);
  }
});

// DELETE items/:id
puppiesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await PuppiesService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    let errorMessage = "Something went wrong";

    if (e instanceof Error) {
      errorMessage = e.message;
    }

    res.status(500).send(errorMessage);
  }
});
